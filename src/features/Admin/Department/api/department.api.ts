import HttpClient from "@/lib/httpClient";

class DepartmentClient extends HttpClient {
  constructor() {
    super("/medical_departments");
  }
}

const departmentClient = new DepartmentClient();
export default departmentClient;
