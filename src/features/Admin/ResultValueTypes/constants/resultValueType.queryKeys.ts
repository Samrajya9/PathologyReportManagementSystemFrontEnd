export const resultValueTypeQueryKeys = {
  all: ["result-value-types"] as const,
  list: () => [...resultValueTypeQueryKeys.all, "list"] as const,
  detail: (id: string | number) =>
    [...resultValueTypeQueryKeys.all, "detail", id] as const,
};
