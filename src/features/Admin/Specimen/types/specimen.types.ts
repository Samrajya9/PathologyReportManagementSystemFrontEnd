export type Specimen = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
};

export type SpecimenResponse = {
  status: "success";
  data: Specimen[];
};
