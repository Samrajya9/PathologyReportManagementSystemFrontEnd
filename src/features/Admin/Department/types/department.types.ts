export type Department = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string | null;
};

export type DepartmentResponse = {
  status: "success";
  data: Department[];
};
