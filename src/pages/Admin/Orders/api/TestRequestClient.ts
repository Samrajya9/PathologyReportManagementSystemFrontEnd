import HttpClient from "@/lib/httpClient";

class TestRequestClient extends HttpClient {
  constructor() {
    super("test-requests");
  }

  // GET /test-requests
  getAll() {
    return this.get("");
  }

  // GET /test-requests/:id
  getById(id: number | string) {
    return this.get<GetTestRequestByIdResponse>(`${id}`);
  }

  // GET /test-requests/patient/:patientId
  getByPatient(patientId: number | string) {
    return this.get(`patient/${patientId}`);
  }

  // GET /test-requests/status/:status
  getByStatus(status: string) {
    return this.get(`status/${status}`);
  }

  // POST /test-requests/admin/batch
  create(data: any) {
    return this.post("admin/batch", data);
  }

  // PATCH /test-requests/:id/status
  updateStatus(id: number | string, status: string) {
    return this.patch(`${id}/status`, { status });
  }

  // DELETE /test-requests/:id
  deleteById(id: number | string) {
    return this.delete(`${id}`);
  }

  // GET /test-requests/:id/statistics
  getStatistics(id: number | string) {
    return this.get<GetStatisticsResponse>(`${id}/statistics`);
  }
}

export const testRequestClient = new TestRequestClient();

interface ApiResponse<T> {
  status: "success" | "error";
  message: string;
  data: T;
  errors: any;
  timestamp: string;
  path: string;
}
export type GetStatisticsResponse = ApiResponse<TestRequestStatistics>;

export interface TestRequestStatistics {
  total: number;
  pending: number;
  inProgress: number;
  completed: number;
  cancelled: number;
  withResults: number;
}

export interface PatientProfile {
  id: number;
  createdAt: string;
  updatedAt: string;
  fullName: string;
  dob: string;
  phone: string;
  gender: "male" | "female" | "other" | string;
}

export interface Patient {
  id: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  createdById: number;
  ownedById: number | null;
  profile: PatientProfile;
}
export interface TestReferenceRange {
  id: number;
  createdAt: string;
  updatedAt: string;
  age_min_years: string;
  age_max_years: string;
  gender: string;
  normal_min: string;
  normal_max: string;
  critical_min: string;
  critical_max: string;
  notes: string;
}
export interface TestUnit {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
}

export interface MedicalDepartment {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
}
export interface LabTest {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  price: string;
  resultValueType: string;
  testUnit: TestUnit | null;
  medicalDepartment: MedicalDepartment;
  referenceRanges: TestReferenceRange[];
  resultValueOptions: any[]; // Could be typed later if needed
}
export interface TestResult {
  id: number;
  createdAt: string;
  updatedAt: string;
  requestedTestId: number;
  resultValue: string;
}
export interface RequestedTest {
  id: number;
  createdAt: string;
  updatedAt: string;
  status: "pending" | "in_progress" | "completed" | "cancelled" | string;
  testRequestId: number;
  testId: number;
  test: LabTest;
  result: TestResult | null;
}
export interface TestRequest {
  id: number;
  createdAt: string;
  updatedAt: string;
  status: "pending" | "in_progress" | "completed" | "cancelled";
  patientId: number;
  patient: Patient;
  requestedTests: RequestedTest[];
}
export type GetTestRequestByIdResponse = ApiResponse<TestRequest>;
