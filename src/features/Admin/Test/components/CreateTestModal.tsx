import {
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
const CreateTestModal = ({ onSuccess }: { onSuccess: () => void }) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create Test</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default CreateTestModal;
