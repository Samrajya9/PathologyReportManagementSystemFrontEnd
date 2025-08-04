export const containerQueryKeys = {
  all: ["containers"] as const,
  list: () => [...containerQueryKeys.all, "list"] as const,
  detail: (id: string | number) =>
    [...containerQueryKeys.all, "detail", id] as const,
};
