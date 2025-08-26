import HttpClient from "@/lib/httpClient";

class TestUnitClient extends HttpClient {
  constructor() {
    super("/test-units");
  }
}

const testUnitClient = new TestUnitClient();
export { testUnitClient };
