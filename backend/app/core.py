from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    DATABASE_URL: str
    GITHUB_API_URL: str
    model_config = SettingsConfigDict(env_file=".env")
settings = Settings()

print(f"env_mysql={settings.DATABASE_URL}")