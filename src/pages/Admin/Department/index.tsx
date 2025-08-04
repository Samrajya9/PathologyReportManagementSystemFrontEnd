import ErrorBoundary from "@/components/ErrorBoundary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { NAV_PATHS } from "@/constanst/navigationItems";
import DepartmentList from "@/features/Admin/Department/components/DepartmentList";
import DepartmentListError from "@/features/Admin/Department/components/DepartmentListError";
import DepartmentListSkeleton from "@/features/Admin/Department/components/DepartmentListSkeleton";
import { Suspense } from "react";
import { useNavigate } from "react-router";

const Department = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between ">
        <h1>{"Department".toLocaleUpperCase()}</h1>
        <Button
          variant={"outline"}
          onClick={() => navigate(NAV_PATHS.departmentCreate)}
        >
          Create
        </Button>
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
