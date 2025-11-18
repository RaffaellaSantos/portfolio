from fastapi import APIRouter, HTTPException, Depends, status
from fastapi.security import OAuth2PasswordRequestForm
from .auth import create_access_token, ADMIN_USER, ADMIN_PASS, get_current_user
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
    db: Session = Depends(get_db),
    current_user: str = Depends(get_current_user)
):
    return crud.post_project_details(db=db, details=details)

@router.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    if form_data.username != ADMIN_USER or form_data.password != ADMIN_PASS:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Credenciais Inválidas',
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(data={"sub": form_data.username})
    return {"access_token": access_token, "token_type": "bearer"}