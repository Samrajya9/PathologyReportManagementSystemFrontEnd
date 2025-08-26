//src/features/Admin/Container/api/container.api.ts
import HttpClient from "@/lib/httpClient";

class ContainerClient extends HttpClient {
  constructor() {
    super("test-containers");
  }
}

export const containerClient = new ContainerClient();
