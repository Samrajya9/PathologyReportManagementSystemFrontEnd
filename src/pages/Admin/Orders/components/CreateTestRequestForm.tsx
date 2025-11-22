import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { testRequestClient } from "../api/TestRequestClient";

// Create Test Request Form
const CreateTestRequestForm = ({ onClose }: { onClose: () => void }) => {
  const queryClient = useQueryClient();
  const [useExistingPatient, setUseExistingPatient] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const createMutation = useMutation({
    mutationFn: testRequestClient.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testRequests"] });
      reset();
      onClose();
    },
  });

  const onSubmit = (data: any) => {
    const payload = {
      testIds: data.testIds.split(",").map((id) => parseInt(id.trim())),
      status: "pending",
    };

    if (useExistingPatient) {
      payload.patientId = parseInt(data.patientId);
    } else {
      payload.patient = {
        profile: {
          fullName: data.fullName,
          dob: data.dob,
          phone: data.phone,
          gender: data.gender,
        },
      };
    }

    createMutation.mutate(payload);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label>Test IDs (comma-separated)</Label>
        <Input
          {...register("testIds", { required: "Test IDs are required" })}
          placeholder="1, 2, 3"
        />
        {errors.testIds && (
          <p className="text-sm text-red-500 mt-1">{errors.testIds.message}</p>
        )}
      </div>

      <div className="flex gap-4 mb-4">
        <Button
          type="button"
          variant={useExistingPatient ? "default" : "outline"}
          onClick={() => setUseExistingPatient(true)}
        >
          Existing Patient
        </Button>
        <Button
          type="button"
          variant={!useExistingPatient ? "default" : "outline"}
          onClick={() => setUseExistingPatient(false)}
        >
          New Patient
        </Button>
      </div>

      {useExistingPatient ? (
        <div>
          <Label>Patient ID</Label>
          <Input
            type="number"
            {...register("patientId", { required: "Patient ID is required" })}
            placeholder="123"
          />
          {errors.patientId && (
            <p className="text-sm text-red-500 mt-1">
              {errors.patientId.message}
            </p>
          )}
        </div>
      ) : (
        <>
          <div>
            <Label>Full Name</Label>
            <Input
              {...register("fullName", { required: "Full name is required" })}
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="text-sm text-red-500 mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <Label>Date of Birth</Label>
            <Input
              type="date"
              {...register("dob", { required: "Date of birth is required" })}
            />
            {errors.dob && (
              <p className="text-sm text-red-500 mt-1">{errors.dob.message}</p>
            )}
          </div>

          <div>
            <Label>Phone</Label>
            <Input {...register("phone")} placeholder="+1234567890" />
          </div>

          <div>
            <Label>Gender</Label>
            <Select
              onValueChange={(value) =>
                register("gender").onChange({ target: { value } })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      )}

      <div className="flex justify-end gap-2 pt-4">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={createMutation.isPending}
        >
          {createMutation.isPending ? "Creating..." : "Create Test Request"}
        </Button>
      </div>

      {createMutation.isError && (
        <Alert variant="destructive">
          <AlertDescription>Failed to create test request</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default CreateTestRequestForm;
