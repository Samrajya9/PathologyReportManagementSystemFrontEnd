import HttpClient from "@/lib/httpClient";

class TestCategoryClient extends HttpClient {
  constructor() {
    super("test-categories");
  }
}

export const testCategoryClient = new TestCategoryClient();
