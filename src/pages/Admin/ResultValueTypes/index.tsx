import ErrorBoundary from "@/components/ErrorBoundary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { paths } from "@/constanst/navigationItems";
import ResultValueTypeList from "@/features/Admin/ResultValueTypes/components/ResultValueTypeList";
import ResultValueTypeListError from "@/features/Admin/ResultValueTypes/components/ResultValueTypeListError";
import ResultValueTypeListSkeleton from "@/features/Admin/ResultValueTypes/components/ResultValueTypeListSkeleton";

import { Suspense } from "react";
import { useNavigate } from "react-router";

const ResultValueTypes = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between ">
        <h1>{"Result Value Types".toLocaleUpperCase()}</h1>
        <Button
          variant={"outline"}
          onClick={() => navigate(paths.admin.resultValueTypes.create)}
        >
          Create Result Value Type
        </Button>
      </CardHeader>
      <CardContent>
        <ErrorBoundary fallback={<ResultValueTypeListError />}>
          <Suspense fallback={<ResultValueTypeListSkeleton />}>
            <ResultValueTypeList />
          </Suspense>
        </ErrorBoundary>
      </CardContent>
    </Card>
  );
};

export default ResultValueTypes;
