import ErrorBoundary from "@/components/ErrorBoundary";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DepartmentList from "@/features/Admin/Department/components/DepartmentList";
import DepartmentListError from "@/features/Admin/Department/components/DepartmentListError";
import DepartmentListSkeleton from "@/features/Admin/Department/components/DepartmentListSkeleton";
import { Suspense } from "react";

const Department = () => {
  return (
    <Card>
      <CardHeader>
        <h1>Department</h1>
      </CardHeader>
      <CardContent>
        <ErrorBoundary fallback={<DepartmentListError />}>
          <Suspense fallback={<DepartmentListSkeleton />}>
            <DepartmentList />
          </Suspense>
        </ErrorBoundary>
      </CardContent>
    </Card>
  );
};

export default Department;
