export type Response = {
  status: "success" | "error";
  message: string;
  errors: null | any;
  timestamp: string;
  path: string;
};
