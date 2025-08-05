import {
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import EditTestCategoryForm from "./EditTestCategoryForm";
import type { TestCategory } from "../types/testCategory.types";

interface Props {
  data: TestCategory;
  onSuccess: () => void;
}
const EditTestCategoryModal = ({ data, onSuccess }: Props) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>"Edit Department"</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <EditTestCategoryForm data={data} onSuccess={onSuccess} />
    </DialogContent>
  );
};

export default EditTestCategoryModal;
