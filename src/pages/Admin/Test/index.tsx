import ErrorBoundary from "@/components/ErrorBoundary";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CreateTestModal from "@/features/Admin/Test/components/CreateTestModal";
import TestTable from "@/features/Admin/Test/components/TestTable";
import { Suspense, useState } from "react";

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal open={isOpen} setOpen={setIsOpen}>
        <CreateTestModal onSuccess={() => setIsOpen(false)} />
        <></>
      </Modal>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between ">
          <h1>{"Test".toLocaleUpperCase()}</h1>
          <Button variant={"outline"} onClick={() => setIsOpen(true)}>
            Create Test
          </Button>
        </CardHeader>
        <CardContent>
          <ErrorBoundary fallback={<>Error</>}>
            <Suspense fallback={<>loading</>}>
              <TestTable />
            </Suspense>
          </ErrorBoundary>
        </CardContent>
      </Card>
    </>
  );
};

export default Test;
