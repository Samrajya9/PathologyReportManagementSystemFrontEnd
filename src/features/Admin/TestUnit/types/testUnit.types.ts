export type TTestUnit = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
};

export type TestUnitResponse = {
  status: "success";
  data: TTestUnit[];
};
