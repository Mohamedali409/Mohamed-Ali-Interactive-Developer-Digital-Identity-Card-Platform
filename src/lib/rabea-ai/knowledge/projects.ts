import { projects } from "@/Data/projects";

export type VerifiedProject = {
  name: string;
  nameAr?: string;
  type?: string;
  typeAr?: string;
  description?: string;
  descriptionAr?: string;
  technologies?: string[];
  features?: string[];
  featuresAr?: string[];
  featured?: boolean;
  source: string;
  demo: string;
  role: string;
  status: string;
};

const isSafeProjectUrl = (value: unknown): value is string => {
  if (typeof value !== "string") return false;
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
};

export const verifiedProjects: VerifiedProject[] = projects.map((project) => ({
  name: project.title,
  nameAr: project.titleAr,
  type: project.projectType,
  typeAr: project.projectTypeAr,
  description: project.description,
  descriptionAr: project.descriptionAr,
  technologies: project.technologies || project.tech || [],
  features: project.features || [],
  featuresAr: project.featuresAr || [],
  featured: project.featured === true,
  source: isSafeProjectUrl(project.github) ? project.github : "Unavailable",
  demo: isSafeProjectUrl(project.demo) ? project.demo : "Unavailable",
  role: "Software Engineer / Architect",
  status: "Verified real project in Mohamed Ali's portfolio.",
}));
