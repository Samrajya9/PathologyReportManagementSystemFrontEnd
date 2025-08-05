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
