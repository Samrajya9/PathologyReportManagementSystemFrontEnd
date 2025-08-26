export const testUnitQueryKeys = {
  all: ["testUnits"] as const,
  list: () => [...testUnitQueryKeys.all, "list"] as const,
  detail: (id: string | number) =>
    [...testUnitQueryKeys.all, "detail", id] as const,
};
