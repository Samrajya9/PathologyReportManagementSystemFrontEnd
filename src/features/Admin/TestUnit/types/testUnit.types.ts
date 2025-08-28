export type TestUnit = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
};

export type TestUnitResponse = {
  status: "success";
  data: TestUnit[];
};
