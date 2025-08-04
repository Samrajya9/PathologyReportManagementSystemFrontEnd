import HttpClient from "@/lib/httpClient";

class ContainerClient extends HttpClient {
  constructor() {
    super("test-containers");
  }
}

export const containerClient = new ContainerClient();
