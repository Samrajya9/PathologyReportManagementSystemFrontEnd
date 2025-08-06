//src/features/Admin/Container/types/container.types.ts
export type Container = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
};

export type ContainerRespoonse = {
  status: "success";
  data: Container[];
};
