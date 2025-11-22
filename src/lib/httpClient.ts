import axiosInstance from "./axios";
import type { AxiosRequestConfig } from "axios";

class HttpClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl.replace(/\/$/, "");
  }

  private buildUrl(path: string = ""): string {
    return path ? `${this.baseUrl}/${path}` : this.baseUrl;
  }

  async get<TResponse>(path: string = "", config?: AxiosRequestConfig) {
    // axiosInstance already returns response.data, so response is TResponse
    const response = await axiosInstance.get<TResponse>(
      this.buildUrl(path),
      config
    );
    return response;
  }

  async post<TResponse, TRequest>(
    path: string = "",
    data?: TRequest,
    config?: AxiosRequestConfig
  ) {
    const response = await axiosInstance.post<TResponse>(
      this.buildUrl(path),
      data,
      config
    );
    return response;
  }

  async put<TResponse, TRequest = unknown>(
    path: string = "",
    data?: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await axiosInstance.put<TResponse>(
      this.buildUrl(path),
      data,
      config
    );
    return response;
  }

  async patch<TResponse, TRequest = unknown>(
    path: string = "",
    data?: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await axiosInstance.patch<TResponse>(
      this.buildUrl(path),
      data,
      config
    );
    return response;
  }

  async delete<TResponse>(
    path: string = "",
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await axiosInstance.delete(this.buildUrl(path), config);
    return response.data;
  }
}

export default HttpClient;
