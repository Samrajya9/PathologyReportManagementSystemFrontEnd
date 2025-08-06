export type ResultValueType = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
};

export type ResultValueTypeResponse = {
  status: "success";
  data: ResultValueType[];
};
