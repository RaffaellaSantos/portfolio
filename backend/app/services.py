import requests
from typing import List
from sqlalchemy.orm import Session
from .schemas import RepositorySchema, ProjectResponse
from .core import settings
from . import crud

def get_github_repos() -> List[RepositorySchema]:
    try:
        headers = {}
        if settings.GITHUB_ACCESS_TOKEN:
            headers["Authorization"] = f"token {settings.GITHUB_ACCESS_TOKEN}"
        response = requests.get(settings.GITHUB_API_URL, params={"sort": "pushed", "per_page": 10}, headers=headers)
        response.raise_for_status()
        print("Reposta da API:", response.json())
        data = response.json()
        repos = [RepositorySchema.model_validate(repo) for repo in data]
        return repos
    except requests.RequestException as e:
        print(f"Erro ao buscar repositório: {e}")
        return []
    
def get_project_details(db: Session) -> List[ProjectResponse]:
    github_repos = get_github_repos()
    projetos = []

    for repo_data in github_repos:
        project_response = ProjectResponse(**repo_data.model_dump())
        db_details = crud.get_project_details(db, github_id=repo_data.id)

        if db_details:
            project_response.details = db_details

        projetos.append(project_response)
    
    return projetos