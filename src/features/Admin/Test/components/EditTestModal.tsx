import type { Test } from "../types/test.types";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EditTest from "./EditTest";

export default function EditTestModal({
  test,
  onSuccess,
}: {
  test: Test;
  onSuccess: () => void;
}) {
  return (
    <DialogContent className="max-h-4/5 overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Edit Test Details</DialogTitle>
        <DialogDescription> </DialogDescription>
      </DialogHeader>
      <EditTest data={test} onSuccess={onSuccess} />
    </DialogContent>
  );
}
