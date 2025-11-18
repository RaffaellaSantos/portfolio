from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    # DATABASE_URL_LOCAL: str
    DATABASE_URL_SERVER: str
    GITHUB_API_URL: str
    SECRET_KEY: str
    ALGORITHM: str
    ACESS_TOKEN_EXPIRE_MINUTES: int
    ADMIN_USERNAME: str
    ADMIN_PASSWORD: str
    model_config = SettingsConfigDict(env_file=".env")
settings = Settings()