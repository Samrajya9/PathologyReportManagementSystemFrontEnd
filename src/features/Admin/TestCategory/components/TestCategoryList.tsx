import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useTestCategory from "../hooks/queries/useTestCategory";
import { SquarePen, Trash } from "lucide-react";
import { useState } from "react";
import type { TestCategory } from "../types/testCategory.types";
import Modal from "@/components/Modal";
import EditTestCategoryModal from "./EditTestCategoryModal";
import DeleteTestCategoryModal from "./DeleteTestCategoryModal";

const TestCategoryList = () => {
  const { data } = useTestCategory();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<
    "Update" | "Delete" | null
  >(null);

  const [selectedDepartment, setSelectedDepartment] =
    useState<TestCategory | null>(null);

  const handleOnEditClick = (department: TestCategory) => {
    setSelectedAction("Update");
    setSelectedDepartment(department);
    setIsOpen(true);
  };
  const handleOnDeleteClick = (department: TestCategory) => {
    setSelectedAction("Delete");
    setSelectedDepartment(department);
    setIsOpen(true);
  };
  return (
    <>
      <Modal open={isOpen} setOpen={setIsOpen}>
        {selectedDepartment &&
          (selectedAction === "Update" ? (
            <EditTestCategoryModal
              data={selectedDepartment}
              onSuccess={() => setIsOpen(false)}
            />
          ) : (
            <>
              <DeleteTestCategoryModal
                data={selectedDepartment}
                onSuccess={() => setIsOpen(false)}
              />
            </>
          ))}
      </Modal>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>
                <div className="flex gap-4 items-center justify-end">
                  <SquarePen
                    onClick={() => handleOnEditClick(row)}
                    size={16}
                    className="text-blue-600 hover:underline cursor-pointer"
                  />

                  <Trash
                    size={16}
                    className="text-red-600 hover:underline cursor-pointer"
                    onClick={() => handleOnDeleteClick(row)}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TestCategoryList;
