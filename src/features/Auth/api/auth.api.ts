//src/features/Admin/Container/api/container.api.ts
import HttpClient from "@/lib/httpClient";
import type { AuthLoginInputs } from "../types/AuthLoginInputs.types";

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    role: string;
  };
}
class AuthClient extends HttpClient {
  constructor() {
    super("auth");
  }

  async login(data: AuthLoginInputs) {
    const response = await this.post<LoginResponse, AuthLoginInputs>(
      "login",
      data
    );
    return response;
  }

  async adminLogin(data: AuthLoginInputs) {
    const response = await this.post<LoginResponse, AuthLoginInputs>(
      "login/admin",
      data
    );
    return response;
  }
}

export const authClient = new AuthClient();
