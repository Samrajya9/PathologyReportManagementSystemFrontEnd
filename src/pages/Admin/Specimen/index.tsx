import ErrorBoundary from "@/components/ErrorBoundary";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CreateSpecimenModal from "@/features/Admin/Specimen/components/CreateSpecimenModal";
import SpecimenList from "@/features/Admin/Specimen/components/SpecimenList";
import SpecimenListError from "@/features/Admin/Specimen/components/SpecimenListError";
import SpecimenListSkeleton from "@/features/Admin/Specimen/components/SpecimenListSkeleton";
import { Suspense, useState } from "react";

const Specimens = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal open={isOpen} setOpen={setIsOpen}>
        <CreateSpecimenModal onSuccess={() => setIsOpen(false)} />
      </Modal>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between ">
          <h1>{"Specimens".toLocaleUpperCase()}</h1>
          <Button variant={"outline"} onClick={() => setIsOpen(true)}>
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
    </>
  );
};

export default Specimens;
