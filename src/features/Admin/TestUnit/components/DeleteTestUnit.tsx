import { Button } from "@/components/ui/button";
import type { TTestUnit } from "../types/testUnit.types";
import toast from "react-hot-toast";
import useDeleteTestUnit from "../hooks/mutations/useDeleteTestUnit";

interface DeleteTestUnitProps {
  data: TTestUnit;
  onSuccess: () => void;
}
const DeleteTestUnit = ({ data, onSuccess }: DeleteTestUnitProps) => {
  const { id, name } = data;
  const { mutateAsync, isPending } = useDeleteTestUnit();

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
      </div>

      <Button variant="destructive" onClick={handleDelete} disabled={isPending}>
        {isPending ? "Deleting..." : "Delete Department"}
      </Button>
    </div>
  );
};

export default DeleteTestUnit;
