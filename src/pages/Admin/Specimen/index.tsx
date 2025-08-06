import ErrorBoundary from "@/components/ErrorBoundary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { paths } from "@/constanst/navigationItems";
import SpecimenList from "@/features/Admin/Specimen/components/SpecimenList";
import SpecimenListError from "@/features/Admin/Specimen/components/SpecimenListError";
import SpecimenListSkeleton from "@/features/Admin/Specimen/components/SpecimenListSkeleton";

import { Suspense } from "react";
import { useNavigate } from "react-router";

const Specimens = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between ">
        <h1>{"Specimens".toLocaleUpperCase()}</h1>
        <Button
          variant={"outline"}
          onClick={() => navigate(paths.admin.specimens.create)}
        >
          Create Specimen
        </Button>
      </CardHeader>
      <CardContent>
        <ErrorBoundary fallback={<SpecimenListError />}>
          <Suspense fallback={<SpecimenListSkeleton />}>
            <SpecimenList />
          </Suspense>
        </ErrorBoundary>
      </CardContent>
    </Card>
  );
};

export default Specimens;
