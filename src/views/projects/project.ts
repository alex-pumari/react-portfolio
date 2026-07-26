export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  isPublic: boolean;
  demoUrl?: string | undefined;
  responsibilities?: string[] | undefined;
  learnings?: string[] | undefined;
}