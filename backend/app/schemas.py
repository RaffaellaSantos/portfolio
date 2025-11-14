from pydantic import BaseModel, HttpUrl
from typing import Optional

class RepositorySchema(BaseModel):
    id: int
    name: str
    html_url: HttpUrl
    description: Optional[str] = None
    language: Optional[str] = None
    stargazers_count: int

    class Config:
        from_attributes = True

class ProjectDetailsSchema(BaseModel):
    aprendizado: Optional[str] = None
    destaque: Optional[bool] = False

class ProjectDetailsCreate(ProjectDetailsSchema):
    github_id: int

class ProjectDetail(ProjectDetailsSchema):
    github_id: int
    class Config:
        from_attributes = True

class ProjectResponse(RepositorySchema):
    details: Optional[ProjectDetailsSchema] = None