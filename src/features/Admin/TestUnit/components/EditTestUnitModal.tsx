import {
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import EditTestUnit from "./EditTestUnit";
import type { TTestUnit } from "../types/testUnit.types";

interface Props {
  data: TTestUnit;
  onSuccess: () => void;
}
const EditTestUnitModal = ({ data, onSuccess }: Props) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>"Edit Department"</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <EditTestUnit data={data} onSuccess={onSuccess} />
    </DialogContent>
  );
};

export default EditTestUnitModal;
