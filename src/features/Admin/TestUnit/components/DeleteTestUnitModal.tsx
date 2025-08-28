import type { TestUnit } from "../types/testUnit.types";
import {
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import DeleteTestUnit from "./DeleteTestUnit";

interface Props {
  data: TestUnit;
  onSuccess: () => void;
}
const DeleteTestUnitModal = ({ data, onSuccess }: Props) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete Department</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <DeleteTestUnit data={data} onSuccess={onSuccess} />
    </DialogContent>
  );
};
export default DeleteTestUnitModal;
