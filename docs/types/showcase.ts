export type Project = {
  height: number;
  width: number;
  internalUrl?: string;
  url: string;
  repo?: string;
  src: string;
  title: string;
};

export type Company = {
  url: string;
  logo: React.ComponentType;
  name: string;
  projects: Record<string, Project>;
  similarWebGlobalRank: number;
  style?: React.HTMLAttributes<HTMLElement>["style"];
};
