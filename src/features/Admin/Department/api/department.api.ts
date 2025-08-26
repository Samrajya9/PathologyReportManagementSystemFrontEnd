import HttpClient from "@/lib/httpClient";

class DepartmentClient extends HttpClient {
  constructor() {
    super("/medical_departments");
  }

  // async fetchAll(): Promise<DepartmentResponse[]> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(async () => {
  //       try {
  //         const data = await this.get<DepartmentResponse[]>();
  //         resolve(data);
  //       } catch (error) {
  //         reject(error);
  //       }
  //     }, 5000); // 5 seconds delay
  //   });
  // }
}

const departmentClient = new DepartmentClient();
export default departmentClient;
