import toast from "react-hot-toast";
import type { ResultValueType } from "../types/resultValueType.types";
import { Button } from "@/components/ui/button";
import { useDeleteResultValueType } from "../hooks/mutations/useDeleteResultValueType";
import { AlertTriangle } from "lucide-react";

interface DeleteResultValueTypeProps {
  resultValueType: ResultValueType;
  onSuccess: () => void;
}

const DeleteResultValueType: React.FC<DeleteResultValueTypeProps> = ({
  resultValueType,
  onSuccess,
}) => {
  const { id, name } = resultValueType;
  const { mutateAsync, isPending } = useDeleteResultValueType();

  const handleDelete = async () => {
    try {
      await mutateAsync(String(id));
      toast.success("Result value type deleted successfully");
      onSuccess();
    } catch (error) {
      console.error("Error deleting result value type:", error);
      toast.error("Failed to delete result value type");
    }
  };

  const handleCancel = () => {
    onSuccess();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-amber-600">
        <AlertTriangle size={20} />
        <span className="font-medium">Warning</span>
      </div>

      <p className="text-sm text-muted-foreground">
        You are about to permanently delete the following result value type.
        This action cannot be undone and may affect related test results.
      </p>

      <div className="rounded-md bg-red-50 p-4 text-sm text-red-800 border border-red-200">
        <div className="space-y-1">
          <p>
            <strong>Result Value Type:</strong> {name}
          </p>
          <p>
            <strong>ID:</strong> {id}
          </p>
        </div>
      </div>

      <div className="flex gap-2 justify-end pt-4">
        <Button variant="outline" onClick={handleCancel} disabled={isPending}>
          Cancel
        </Button>
        <Button
          variant="destructive"
          onClick={handleDelete}
          disabled={isPending}
        >
          {isPending ? "Deleting..." : "Delete Result Value Type"}
        </Button>
      </div>
    </div>
  );
};

export default DeleteResultValueType;
