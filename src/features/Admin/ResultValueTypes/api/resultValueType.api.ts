import HttpClient from "@/lib/httpClient";

class ResultValueTypeClient extends HttpClient {
  constructor() {
    super("test-result-value-types");
  }
}

export const resultValueTypeClient = new ResultValueTypeClient();
