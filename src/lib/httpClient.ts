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

  async get<TResponse>(
    path: string = "",
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await axiosInstance.get(this.buildUrl(path), config);
    return response.data;
  }

  async post<TResponse, TRequest>(
    path: string = "",
    data?: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await axiosInstance.post<TResponse>(
      this.buildUrl(path),
      data,
      config
    );
    return response.data;
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
    return response.data;
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
    return response.data;
  }

  async delete<TResponse>(
    path: string = "", // Made optional for consistency
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await axiosInstance.delete(this.baseUrl + path, config);
    return response.data;
  }
}

export default HttpClient;
