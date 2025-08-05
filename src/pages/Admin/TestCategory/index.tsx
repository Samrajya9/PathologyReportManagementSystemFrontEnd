import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { paths } from "@/constanst/navigationItems";
import { useNavigate } from "react-router";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import ErrorBoundary from "@/components/ErrorBoundary";
import DepartmentListSkeleton from "@/features/Admin/Department/components/DepartmentListSkeleton";
import DepartmentListError from "@/features/Admin/Department/components/DepartmentListError";
import TestCategoryList from "@/features/Admin/TestCategory/components/TestCategoryList";

const TestCategory = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between ">
        <h1>{"Test Category".toLocaleUpperCase()}</h1>
        <Button
          variant={"outline"}
          onClick={() => {
            navigate(paths.admin.test_category.create);
          }}
        >
          Create
        </Button>
      </CardHeader>
      <CardContent>
        <ErrorBoundary fallback={<DepartmentListError />}>
          <Suspense fallback={<DepartmentListSkeleton />}>
            <TestCategoryList />
          </Suspense>
        </ErrorBoundary>
      </CardContent>
    </Card>
  );
};
export default TestCategory;
