import type { Response } from "@/types/Respose.types";

export type Department = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string | null;
};

export type DepartmentResponse = Response & {
  data: Department[];
};
