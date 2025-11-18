from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import Optional

class Settings(BaseSettings):
    DATABASE_URL_LOCAL: Optional[str] = None
    DATABASE_URL_SERVER: Optional[str] = None
    GITHUB_API_URL: Optional[str] = None
    GITHUB_TOKEN: Optional[str] = None
    SECRET_KEY: str
    ALGORITHM: str
    ACESS_TOKEN_EXPIRE_MINUTES: int
    ADMIN_USERNAME: str
    ADMIN_PASSWORD: str
    model_config = SettingsConfigDict(env_file=".env")
settings = Settings()