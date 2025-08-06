export const specimenQueryKeys = {
  all: ["specimens"] as const,
  list: () => [...specimenQueryKeys.all, "list"] as const,
  detail: (id: string | number) =>
    [...specimenQueryKeys.all, "detail", id] as const,
};
