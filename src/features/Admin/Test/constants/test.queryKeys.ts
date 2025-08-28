export const testQueryKeys = {
  all: ["tests"] as const,
  list: () => [...testQueryKeys.all, "list"] as const,
  detail: (id: string | number) =>
    [...testQueryKeys.all, "detail", id] as const,
};
