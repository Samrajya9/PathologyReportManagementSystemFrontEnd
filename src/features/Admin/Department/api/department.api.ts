import HttpClient from "@/lib/httpClient";

// class DepartmentClient extends HttpClient {
//   constructor() {
//     super("/departments");
//   }

//   fetchAll() {
//     return this.get<TDepartment[]>("");
//   }
// }

const departmentClient = new HttpClient("/departments");
export default departmentClient;
