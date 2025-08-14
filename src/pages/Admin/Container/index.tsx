//src/pages/Admin/Container/index.tsx
import ErrorBoundary from "@/components/ErrorBoundary";
import { Button } from "@/components/ui/button";
import Modal from "@/components/Modal";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ContainerList from "@/features/Admin/Container/components/ContainerList";
import DepartmentListError from "@/features/Admin/Department/components/DepartmentListError";
import DepartmentListSkeleton from "@/features/Admin/Department/components/DepartmentListSkeleton";
import { Suspense, useState } from "react";
import CreateContainerModal from "@/features/Admin/Container/components/CreateContainerModal";

const Container = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal open={isOpen} setOpen={setIsOpen}>
        <CreateContainerModal onSuccess={() => setIsOpen(false)} />
      </Modal>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between ">
          <h1>{"Container".toLocaleUpperCase()}</h1>
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
              <ContainerList />
            </Suspense>
          </ErrorBoundary>
        </CardContent>
      </Card>
    </>
  );
};

export default Container;
