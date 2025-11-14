from sqlalchemy.orm import Session
from . import models, schemas

def get_project_details(db: Session, github_id: int):
    return db.query(models.ProjectDetails).filter(models.ProjectDetails.github_id == github_id).first()

def post_project_details(db: Session, details: schemas.ProjectDetailsCreate):
    db_details = get_project_details(db, github_id=details.github_id)

    if db_details:
        db_details.aprendizado = details.aprendizado
        db_details.destaque = details.destaque
    else:
        db_details = models.ProjectDetails(**details.model_dump())
        db.add(db_details)

    db.commit()
    db.refresh(db_details)
    return db_details