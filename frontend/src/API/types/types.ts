export interface ProjectDetail {
    aprendizado: string | null;
    destaque: string | null;
}

export interface ProjectResponse {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  details: ProjectDetail | null;
}