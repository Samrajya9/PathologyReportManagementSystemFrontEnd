import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ErrorBoundary from "@/components/ErrorBoundary";
import DepartmentListSkeleton from "@/features/Admin/Department/components/DepartmentListSkeleton";
import DepartmentListError from "@/features/Admin/Department/components/DepartmentListError";
import TestCategoryList from "@/features/Admin/TestCategory/components/TestCategoryList";
import Modal from "@/components/Modal";
import { Suspense, useState } from "react";
import CreateTestCategoryModal from "@/features/Admin/TestCategory/components/CreateTestCategoryModal";

const TestCategory = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal open={isOpen} setOpen={setIsOpen}>
        <CreateTestCategoryModal onSuccess={() => setIsOpen(false)} />
      </Modal>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between ">
          <h1>{"Test Category".toLocaleUpperCase()}</h1>
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
              <TestCategoryList />
            </Suspense>
          </ErrorBoundary>
        </CardContent>
      </Card>
    </>
  );
};
export default TestCategory;
