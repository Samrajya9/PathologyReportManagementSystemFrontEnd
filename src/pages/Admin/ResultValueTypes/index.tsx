import ErrorBoundary from "@/components/ErrorBoundary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ResultValueTypeList from "@/features/Admin/ResultValueTypes/components/ResultValueTypeList";
import ResultValueTypeListError from "@/features/Admin/ResultValueTypes/components/ResultValueTypeListError";
import ResultValueTypeListSkeleton from "@/features/Admin/ResultValueTypes/components/ResultValueTypeListSkeleton";

import { Suspense, useState } from "react";
import Modal from "@/components/Modal";
import CreateResultValueTypeModal from "@/features/Admin/ResultValueTypes/components/CreateResultValueTypeModal";

const ResultValueTypes = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal open={isOpen} setOpen={setIsOpen}>
        <CreateResultValueTypeModal onSuccess={() => setIsOpen(false)} />
      </Modal>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between ">
          <h1>{"Result Value Types".toLocaleUpperCase()}</h1>
          <Button variant={"outline"} onClick={() => setIsOpen(true)}>
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
    </>
  );
};

export default ResultValueTypes;
