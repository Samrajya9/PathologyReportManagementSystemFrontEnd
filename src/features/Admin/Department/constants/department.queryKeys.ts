const departmentQueryKeys = {
  all: ["departments"] as const,
  list: () => [...departmentQueryKeys.all, "list"] as const,
  detail: (id: string | number) =>
    [...departmentQueryKeys.all, "detail", id] as const,
};

export default departmentQueryKeys;
