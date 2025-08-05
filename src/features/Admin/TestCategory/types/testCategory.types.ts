import type { Response } from "@/types/Respose.types";

export type TestCategory = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
};

export type testCategoryResponse = Response & {
  data: TestCategory[];
};
