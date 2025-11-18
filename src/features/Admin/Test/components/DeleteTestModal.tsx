import toast from "react-hot-toast";
import { useDeleteTest } from "../hooks/mutations/useDeleteTest";
import type { Test } from "../types/test.types";
import { Button } from "@/components/ui/button";

export default function DeleteTestModal({
  test,
  onSuccess,
}: {
  test: Test;
  onSuccess: () => void;
}) {
  const { id, name } = test;
  const { mutateAsync, isPending } = useDeleteTest();

  const handleDelete = async () => {
    try {
      await mutateAsync(String(id));
      toast.success("Specimen deleted successfully");
      onSuccess();
    } catch (error) {
      console.error("Error deleting specimen:", error);
      toast.error("Failed to delete specimen");
    }
  };

  return (
    <div className="space-y-4 rounded-lg">
      <p className="text-sm text-muted-foreground">
        You are about to delete the following specimen. This action cannot be
        undone.
      </p>

      <div className="rounded-md bg-red-50 p-4 text-sm text-red-800 border border-red-200">
        <p>
          <strong>Specimen Name:</strong> {name}
        </p>
        <p className="mt-1">
          <strong>ID:</strong> {id}
        </p>
      </div>

      <div className="flex gap-2 justify-end">
        <Button variant="outline" onClick={onSuccess} disabled={isPending}>
          Cancel
        </Button>
        <Button
          variant="destructive"
          onClick={handleDelete}
          disabled={isPending}
        >
          {isPending ? "Deleting..." : "Delete Specimen"}
        </Button>
      </div>
    </div>
  );
}
