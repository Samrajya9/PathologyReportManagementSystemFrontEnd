const testCategoryQueryKeys = {
  all: ["departments"] as const,
  list: () => [...testCategoryQueryKeys.all, "list"] as const,
  detail: (id: string | number) =>
    [...testCategoryQueryKeys.all, "detail", id] as const,
};

export default testCategoryQueryKeys;
