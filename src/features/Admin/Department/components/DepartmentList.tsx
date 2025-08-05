import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";
import type { Department } from "../types/department.types";
import EditDepartment from "./EditDepartment";
import { SquarePen, Trash } from "lucide-react";
import Modal from "@/components/Modal";
import DeleteDepartment from "./DeleteDepartment";
import useDepartments from "../hooks/queries/useDepartments";

const DepartmentList = () => {
  const { data } = useDepartments();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<
    "Update" | "Delete" | null
  >(null);

  const [selectedDepartment, setSelectedDepartment] =
    useState<Department | null>(null);

  const handleOnEditClick = (department: Department) => {
    setSelectedAction("Update");
    setSelectedDepartment(department);
    setIsOpen(true);
  };
  const handleOnDeleteClick = (department: Department) => {
    setSelectedAction("Delete");
    setSelectedDepartment(department);
    setIsOpen(true);
  };
  return (
    <>
      <Modal open={isOpen} setOpen={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedAction === "Update"
                ? "Edit Department"
                : "Delete Department"}
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          {selectedDepartment &&
            (selectedAction === "Update" ? (
              <EditDepartment
                data={selectedDepartment}
                onSuccess={() => setIsOpen(false)}
              />
            ) : (
              <DeleteDepartment
                data={selectedDepartment}
                onSuccess={() => setIsOpen(false)}
              />
            ))}
        </DialogContent>
      </Modal>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>{row.description}</TableCell>
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

export default DepartmentList;
