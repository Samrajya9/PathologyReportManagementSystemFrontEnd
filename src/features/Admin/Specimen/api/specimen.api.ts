import HttpClient from "@/lib/httpClient";

class SpecimenClient extends HttpClient {
  constructor() {
    super("test-specimens");
  }
}

export const specimenClient = new SpecimenClient();
