import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import Modal from "@/components/Modal";
import { SquarePen, Trash } from "lucide-react";
import type { TTestUnit } from "../types/testUnit.types";
import useTestUnit from "../hooks/queries/useTestUnit";
import EditTestUnitModal from "./EditTestUnitModal";
import DeleteTestUnitModal from "./DeleteTestUnitModal";

const TestUnitList = () => {
  const { data } = useTestUnit();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<
    "Update" | "Delete" | null
  >(null);

  const [selectedDepartment, setSelectedDepartment] =
    useState<TTestUnit | null>(null);

  const handleOnEditClick = (department: TTestUnit) => {
    setSelectedAction("Update");
    setSelectedDepartment(department);
    setIsOpen(true);
  };
  const handleOnDeleteClick = (department: TTestUnit) => {
    setSelectedAction("Delete");
    setSelectedDepartment(department);
    setIsOpen(true);
  };
  return (
    <>
      <Modal open={isOpen} setOpen={setIsOpen}>
        {selectedDepartment &&
          (selectedAction === "Update" ? (
            <EditTestUnitModal
              data={selectedDepartment}
              onSuccess={() => setIsOpen(false)}
            />
          ) : (
            <DeleteTestUnitModal
              data={selectedDepartment}
              onSuccess={() => setIsOpen(false)}
            />
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
              <TableCell className="">
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

export default TestUnitList;
