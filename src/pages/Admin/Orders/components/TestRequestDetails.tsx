import { Badge } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { testRequestClient } from "../api/TestRequestClient";

// Test Request Details Modal
const TestRequestDetails = ({
  testRequestId,
  onClose,
}: {
  testRequestId: string;
  onClose: () => void;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["testRequest", testRequestId],
    queryFn: () => testRequestClient.getById(testRequestId),
    enabled: !!testRequestId,
  });

  const { data: statistics } = useQuery({
    queryKey: ["testRequestStats", testRequestId],
    queryFn: () => testRequestClient.getStatistics(testRequestId),
    enabled: !!testRequestId,
  });

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (!data) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-sm text-gray-500">Patient</h3>
          <p className="text-lg">
            {data.data.patient?.profile?.fullName || "N/A"}
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-sm text-gray-500">Status</h3>
          <StatusBadge status={data.data.status} />
        </div>
        <div>
          <h3 className="font-semibold text-sm text-gray-500">Request ID</h3>
          <p className="text-lg">#{data.data.id}</p>
        </div>
        <div>
          <h3 className="font-semibold text-sm text-gray-500">Created</h3>
          <p className="text-lg">
            {new Date(data.data.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {statistics && (
        <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">
              {statistics.data.total}
            </p>
            <p className="text-sm text-gray-600">Total Tests</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">
              {statistics.data.completed}
            </p>
            <p className="text-sm text-gray-600">Completed</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">
              {statistics.data.pending}
            </p>
            <p className="text-sm text-gray-600">Pending</p>
          </div>
        </div>
      )}

      <div>
        <h3 className="font-semibold text-lg mb-3">Requested Tests</h3>
        <div className="space-y-2">
          {data.data.requestedTests?.map((rt) => (
            <div
              key={rt.id}
              className="p-3 border rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="font-medium">
                  {rt.test?.name || `Test #${rt.testId}`}
                </p>
                <p className="text-sm text-gray-500">Test ID: {rt.testId}</p>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge
                  status={
                    rt.status as
                      | "pending"
                      | "in_progress"
                      | "completed"
                      | "cancelled"
                  }
                />
                {rt.result && (
                  <Badge className="bg-green-50">
                    Result: {rt.result.resultValue || "Available"}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={onClose} className="w-full">
        Close
      </Button>
    </div>
  );
};
export default TestRequestDetails;
