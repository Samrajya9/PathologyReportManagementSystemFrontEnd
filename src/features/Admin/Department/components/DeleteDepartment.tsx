import React from "react";
import type { Department } from "../types/department.types";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useDeleteDepartment } from "../hooks";

interface DeleteDepartmentProps {
  data: Department;
  onSuccess: () => void;
}

const DeleteDepartment: React.FC<DeleteDepartmentProps> = ({
  data,
  onSuccess,
}) => {
  const { id, name, description } = data;
  const { mutateAsync, isPending } = useDeleteDepartment();

  const handleDelete = async () => {
    try {
      await mutateAsync(String(id));
      toast.success("Department deleted successfully");
      onSuccess();
    } catch (error) {
      toast.error("Failed to delete department");
    }
  };
  return (
    <div className="space-y-4 rounded-lg ">
      <p className="text-sm text-muted-foreground">
        You are about to delete the following department. This action cannot be
        undone.
      </p>

      <div className="rounded-md bg-red-50 p-4 text-sm text-red-800 border border-red-200">
        <p>
          <strong>Name:</strong> {name}
        </p>
        {description && (
          <p>
            <strong>Description:</strong> {description}
          </p>
        )}
      </div>

      <Button variant="destructive" onClick={handleDelete} disabled={isPending}>
        {isPending ? "Deleting..." : "Delete Department"}
      </Button>
    </div>
  );
};

export default DeleteDepartment;
