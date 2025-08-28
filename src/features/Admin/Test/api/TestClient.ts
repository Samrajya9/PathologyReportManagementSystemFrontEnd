import HttpClient from "@/lib/httpClient";

class TestClient extends HttpClient {
  constructor() {
    super("tests");
  }
}

export const testClient = new TestClient();
