import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Modal from "@/components/Modal";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useTest } from "../hooks/queries/useTests";
import { Eye, SquarePen, Trash } from "lucide-react";
import { useState } from "react";
import type { Test } from "../types/test.types";
import DeleteTestModal from "./DeleteTestModal";
import EditTestModal from "./EditTestModal";

const TestTable = () => {
  const { data } = useTest();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<
    "Update" | "Delete" | "View" | null
  >(null);

  const [selectedTest, setSelectedTest] = useState<Test | null>(null);

  const handleEditClick = (test: Test) => {
    setSelectedAction("Update");
    setSelectedTest(test);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (test: Test) => {
    setSelectedAction("Delete");
    setSelectedTest(test);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedAction(null);
    setSelectedTest(null);
  };

  return (
    <>
      <Modal open={isModalOpen} setOpen={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedAction === "Update"
                ? "Edit Specimen"
                : "Delete Specimen"}
            </DialogTitle>
            <DialogDescription>
              {selectedAction === "Update"
                ? "Update the specimen information below."
                : "This action cannot be undone."}
            </DialogDescription>
          </DialogHeader>
          {selectedTest &&
            (selectedAction === "Update" ? (
              <EditTestModal test={selectedTest} onSuccess={handleModalClose} />
            ) : (
              <DeleteTestModal
                test={selectedTest}
                onSuccess={handleModalClose}
              />
            ))}
        </DialogContent>
      </Modal>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Test Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.data.tests.map((test) => (
            <TableRow key={test.id}>
              <TableCell>{test.name}</TableCell>
              <TableCell>{test?.medicalDepartment?.name}</TableCell>
              <TableCell>{test.price}</TableCell>
              <TableCell className="flex gap-2 items-center justify-end">
                <Eye
                  onClick={() => handleEditClick(test)}
                  size={16}
                  className="text-blue-600 hover:text-blue-800 cursor-pointer transition-colors"
                />
                <SquarePen
                  onClick={() => handleEditClick(test)}
                  size={16}
                  className="text-blue-600 hover:text-blue-800 cursor-pointer transition-colors"
                />
                <Trash
                  size={16}
                  className="text-red-600 hover:text-red-800 cursor-pointer transition-colors"
                  onClick={() => handleDeleteClick(test)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TestTable;
