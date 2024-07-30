import { OnRuntimeLogo } from "@components/Brands/Showcase";
import { TonightPassWordmark } from "kitchn/logos";
import { Company, SortedProject } from "types/showcase";

const showcases: Company[] = [
  {
    url: "https://tonightpass.com",
    name: "Tonight Pass",
    logo: TonightPassWordmark,
    similarWebGlobalRank: 17872218,
    projects: {
      kitchn: {
        title: "Kitchn",
        repo: "https://github.com/tonightpass/kitchn",
        src: "/static/images/showcases/screenshots/kitchn.tonightpass.com.png",
        width: 1280,
        height: 720,
        url: "https://kitchn.tonightpass.com",
      },
      tonightpass: {
        title: "Tonight Pass",
        src: "/static/images/showcases/screenshots/tonightpass.com.png",
        width: 1280,
        height: 720,
        url: "https://tonightpass.com",
      },
    },
  },
  {
    url: "https://onruntime.com",
    name: "onRuntime Studio",
    logo: OnRuntimeLogo,
    similarWebGlobalRank: 17872218,
    projects: {
      onruntime: {
        title: "onRuntime",
        repo: "https://github.com/onruntime/onruntime-website",
        src: "/static/images/showcases/screenshots/onruntime.com.png",
        width: 1280,
        height: 720,
        url: "https://onruntime.com",
      },
    },
  },
];

export const sortedCompanies = showcases.sort(
  (a, b) => a.similarWebGlobalRank - b.similarWebGlobalRank,
);

export const sortedProjects = sortedCompanies.reduce(
  (projects, company) => ({
    ...projects,
    ...Object.entries(company.projects || {}).reduce(
      (projects, [name, project]) => ({
        ...projects,
        [name]: {
          ...project,
          slug: name,
          owner: {
            ...company,
            projects: undefined,
          },
        },
      }),
      {},
    ),
  }),
  {} as Record<string, SortedProject>,
);

export default showcases;
