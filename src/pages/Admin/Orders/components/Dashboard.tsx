import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Eye, Filter, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import CreateTestRequestForm from "./CreateTestRequestForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "./StatusBadge";
import TestRequestDetails from "./TestRequestDetails";
import { testRequestClient } from "../api/TestRequestClient";

// Main Dashboard Component
export default function TestRequestDashboard() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchPatientId, setSearchPatientId] = useState("");
  const queryClient = useQueryClient();

  const { data: testRequests, isLoading } = useQuery({
    queryKey: ["testRequests", filterStatus, searchPatientId],
    queryFn: () => {
      if (searchPatientId) {
        return testRequestClient.getByPatient(parseInt(searchPatientId));
      }
      if (filterStatus !== "all") {
        return testRequestClient.getByStatus(filterStatus);
      }
      return testRequestClient.getAll();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: testRequestClient.deleteById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testRequests"] });
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Test Request Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Manage and monitor laboratory test requests
            </p>
          </div>
          <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Create New Test Request
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Test Request</DialogTitle>
              </DialogHeader>
              <CreateTestRequestForm
                onClose={() => setIsCreateModalOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Filter by Status</Label>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in_progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Search by Patient ID</Label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="Enter patient ID"
                    value={searchPatientId}
                    onChange={(e) => setSearchPatientId(e.target.value)}
                  />
                  {searchPatientId && (
                    <Button
                      variant="outline"
                      onClick={() => setSearchPatientId("")}
                    >
                      Clear
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Test Requests</CardTitle>
            <CardDescription>
              {testRequests?.data.length || 0} test request(s) found
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">Loading...</div>
            ) : testRequests?.data.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No test requests found
              </div>
            ) : (
              <div className="space-y-3">
                {testRequests?.data.map((request) => (
                  <div
                    key={request.id}
                    className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">
                            Request #{request.id}
                          </h3>
                          <StatusBadge status={request.status} />
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Patient:</span>
                            <span className="ml-2 font-medium">
                              {request.patient?.profile?.fullName || "N/A"}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500">Tests:</span>
                            <span className="ml-2 font-medium">
                              {request.requestedTests?.length || 0} test(s)
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500">Created:</span>
                            <span className="ml-2">
                              {new Date(request.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500">Patient ID:</span>
                            <span className="ml-2">{request.patientId}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedRequestId(request.id)}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Test Request Details</DialogTitle>
                            </DialogHeader>
                            <TestRequestDetails
                              testRequestId={selectedRequestId}
                              onClose={() => setSelectedRequestId(null)}
                            />
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteMutation.mutate(request.id)}
                          disabled={deleteMutation.isPending}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
