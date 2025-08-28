import {
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { TestUnit } from "../types/testUnit.types";
import EdiTestUnit from "./EditTestUnit";

interface Props {
  data: TestUnit;
  onSuccess: () => void;
}
const EdiTestUnitModal = ({ data, onSuccess }: Props) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>"Edit Department"</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <EdiTestUnit data={data} onSuccess={onSuccess} />
    </DialogContent>
  );
};

export default EdiTestUnitModal;
