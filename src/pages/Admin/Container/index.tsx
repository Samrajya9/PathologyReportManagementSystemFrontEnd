//src/pages/Admin/Container/index.tsx
import ErrorBoundary from "@/components/ErrorBoundary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { paths } from "@/constanst/navigationItems";
import ContainerList from "@/features/Admin/Container/components/ContainerList";
import DepartmentListError from "@/features/Admin/Department/components/DepartmentListError";
import DepartmentListSkeleton from "@/features/Admin/Department/components/DepartmentListSkeleton";
import { Suspense } from "react";
import { useNavigate } from "react-router";

const Container = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between ">
        <h1>{"Container".toLocaleUpperCase()}</h1>
        <Button
          variant={"outline"}
          onClick={() => navigate(paths.admin.container.create)}
        >
          Create
        </Button>
      </CardHeader>
      <CardContent>
        <ErrorBoundary fallback={<DepartmentListError />}>
          <Suspense fallback={<DepartmentListSkeleton />}>
            <ContainerList />
          </Suspense>
        </ErrorBoundary>
      </CardContent>
    </Card>
  );
};

export default Container;
