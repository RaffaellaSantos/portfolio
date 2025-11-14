from sqlalchemy import Column, Integer, String, Text, Boolean
from .database import base

class ProjectDetails(base):
    __tablename__ = "project_details"
    github_id = Column(Integer, primary_key=True, index=True)
    aprendizado = Column(Text, nullable=True)
    destaque = Column(Boolean, default=False, nullable=False)
