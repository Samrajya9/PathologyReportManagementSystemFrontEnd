import React from "react";
import type { TestUnit } from "../types/testUnit.types";
import useTestUnitForm from "../hooks/useTestUnitForm";
import { FormProvider, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import useUpdateTestUnit from "../hooks/mutations/useUpdateTestUnit";
import TestUnitForm from "./TestUnitForm";
import toast from "react-hot-toast";
import type { TestUnitForm as TTestUnitForm } from "../types/testUnitForm.types";

interface EdiTestUnitProps {
  data: TestUnit;
  onSuccess: () => void;
}

const EdiTestUnit: React.FC<EdiTestUnitProps> = ({ data, onSuccess }) => {
  const { createdAt, updatedAt, id, ...rest } = data;

  const initialValue = {
    ...rest,
  };
  const methods = useTestUnitForm({ initialValue });
  const { handleSubmit } = methods;

  const { mutateAsync, isPending } = useUpdateTestUnit();

  const onSubmit: SubmitHandler<TTestUnitForm> = async (data) => {
    try {
      await mutateAsync({ id: String(id), data });
      toast.success("Updated Sucessfully");
      onSuccess();
    } catch (error) {}
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
        <TestUnitForm />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Creating..." : "Create"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default EdiTestUnit;
