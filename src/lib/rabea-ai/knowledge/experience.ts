import { experience } from "@/Data/experience";

export const verifiedExperience = experience.map(({ title, period, description, descriptionAr, skills }) => ({
  title,
  period,
  description,
  descriptionAr,
  skills,
}));

export const availability = "Not confirmed in the portfolio.";
