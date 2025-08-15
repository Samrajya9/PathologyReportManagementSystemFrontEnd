import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import ErrorBoundary from "@/components/ErrorBoundary";
import DepartmentListSkeleton from "@/features/Admin/Department/components/DepartmentListSkeleton";
import DepartmentListError from "@/features/Admin/Department/components/DepartmentListError";
import TestUnitList from "@/features/Admin/TestUnit/components/TestUnitList";
import Modal from "@/components/Modal";
import CreateTestUnitModal from "@/features/Admin/TestUnit/components/CreateTestUnitModal";

const TestUnit = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal open={isOpen} setOpen={setIsOpen}>
        <CreateTestUnitModal onSuccess={() => setIsOpen(false)} />
      </Modal>
      <Card className="bg-transparent">
        <CardHeader className="flex flex-row items-center justify-between ">
          <h1>{"Test Unit".toLocaleUpperCase()}</h1>
          <Button
            variant={"outline"}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Create
          </Button>
        </CardHeader>
        <CardContent>
          <ErrorBoundary fallback={<DepartmentListError />}>
            <Suspense fallback={<DepartmentListSkeleton />}>
              <TestUnitList />
            </Suspense>
          </ErrorBoundary>
        </CardContent>
      </Card>
    </>
  );
};
export default TestUnit;
