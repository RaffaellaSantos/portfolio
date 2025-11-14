from fastapi import APIRouter, HTTPException, Depends
from typing import List
from sqlalchemy.orm import Session
from .services import get_project_details
from .schemas import ProjectDetail, ProjectResponse, ProjectDetailsCreate
from .database import get_db
from . import crud

router = APIRouter()

@router.get("/projetos", response_model=List[ProjectResponse])
def read_projects(db: Session = Depends(get_db)):
    projetos = get_project_details(db)
    if not projetos:
        raise HTTPException(status_code=503, detail="Não foi possível buscar os repositórios.")
    return projetos

@router.post("/projetos/detalhes", response_model=ProjectDetail)
def add_details(
    details: ProjectDetailsCreate,
    db: Session = Depends(get_db)
):
    return crud.post_project_details(db=db, details=details)