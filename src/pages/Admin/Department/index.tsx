import ErrorBoundary from "@/components/ErrorBoundary";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CreateDepartmentModal from "@/features/Admin/Department/components/CreateDepartmentModal";
import DepartmentList from "@/features/Admin/Department/components/DepartmentList";
import DepartmentListError from "@/features/Admin/Department/components/DepartmentListError";
import DepartmentListSkeleton from "@/features/Admin/Department/components/DepartmentListSkeleton";
import { Suspense, useState } from "react";

const Department = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal open={isOpen} setOpen={setIsOpen}>
        <CreateDepartmentModal onSuccess={() => setIsOpen(false)} />
      </Modal>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between ">
          <h1>{"Department".toLocaleUpperCase()}</h1>
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
              <DepartmentList />
            </Suspense>
          </ErrorBoundary>
        </CardContent>
      </Card>
    </>
  );
};

export default Department;
