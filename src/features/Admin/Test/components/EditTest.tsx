import { FormProvider, type SubmitHandler } from "react-hook-form";
import useUpdateTest from "../hooks/mutations/useUpdateTest";
import { useTestForm } from "../hooks/useTestForm";
import type { Test } from "../types/test.types";
import type { TtestForm } from "../types/testForm.type";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import TestForm from "./TestForm";

const EditTest = ({
  data,
  onSuccess,
}: {
  data: Test;
  onSuccess: () => void;
}) => {
  const { createdAt, updatedAt, id, ...rest } = data;
  const initialValue: TtestForm = {
    name: rest.name,
    price: Number(rest.price),
    testUnitId: rest.testUnit.id,
    medicalDepartmentId: rest.medicalDepartment.id,
    resultValueType: rest.resultValueType,
    resultValueOptions: rest.resultValueOptions.map((option) => ({
      value: option.value || "",
      isDefault: option.isDefault || false,
    })),
    specimenRequirements: rest.specimenRequirements.map((req) => ({
      specimenId: req.specimen.id,
      containerId: req.container.id,
    })),
    referenceRanges: rest.referenceRanges.map((range) => ({
      age_min_years: Number(range.age_min_years),
      age_max_years: Number(range.age_max_years),
      gender: range.gender,
      normal_min: Number(range.normal_min),
      normal_max: Number(range.normal_max),
      critical_min: Number(range.critical_min),
      critical_max: Number(range.critical_max),
      notes: range.notes,
    })),
  };

  const methods = useTestForm({ initialValue });
  const { handleSubmit } = methods;

  const { mutateAsync, isPending } = useUpdateTest();

  const onSubmit: SubmitHandler<TtestForm> = async (data) => {
    try {
      await mutateAsync({ id: String(id), data });
      toast.success("Updated Sucessfully");
      onSuccess();
    } catch (error) {}
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <TestForm />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Creating..." : "Create"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default EditTest;
