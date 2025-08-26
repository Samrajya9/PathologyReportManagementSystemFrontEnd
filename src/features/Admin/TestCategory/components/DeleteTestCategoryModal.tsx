import type { TestCategory } from "../types/testCategory.types";
import {
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import DeleteTestCategoryForm from "./DeleteTestCategoryForm";
interface Props {
  data: TestCategory;
  onSuccess: () => void;
}
const DeleteTestCategoryModal = ({ data, onSuccess }: Props) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete Department</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <DeleteTestCategoryForm data={data} onSuccess={onSuccess} />
    </DialogContent>
  );
};

export default DeleteTestCategoryModal;
