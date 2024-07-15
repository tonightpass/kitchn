import { TonightPassLogoSVG } from "@components/Brands";
import { OnRuntimeLogo } from "@components/Brands/Showcase";
import { Company, Project } from "types/showcase";

const showcases: Company[] = [
  {
    url: "https://tonightpass.com",
    name: "Tonight Pass",
    logo: TonightPassLogoSVG,
    similarWebGlobalRank: 17872218,
    projects: {},
  },
  {
    url: "https://onruntime.com",
    name: "onRuntime",
    logo: OnRuntimeLogo,
    similarWebGlobalRank: 17872218,
    projects: {},
  },
];

export const sortedCompanies = showcases.sort(
  (a, b) => a.similarWebGlobalRank - b.similarWebGlobalRank,
);

export type SortedProject = Project & {
  owner: Company["name"];
};

export const sortedProjects = sortedCompanies.reduce(
  (projects, company) => ({
    ...projects,
    ...Object.entries(company.projects || {}).reduce(
      (projects, [name, project]) => ({
        ...projects,
        [name]: {
          ...project,
          owner: company.name,
        },
      }),
      {},
    ),
  }),
  {} as Record<string, SortedProject>,
);

export default showcases;
