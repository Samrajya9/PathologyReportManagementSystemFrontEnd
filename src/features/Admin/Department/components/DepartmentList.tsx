import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useDepartments from "../hooks/queries/useDepartments";
import { useState } from "react";
import type { Department } from "../types/department.types";
import EditDepartment from "./EditDepartment";

const DepartmentList = () => {
  const { data } = useDepartments();
  const [open, setOpen] = useState(false);

  const [selectedDepartment, setSelectedDepartment] =
    useState<Department | null>(null);

  const handleOnEditClick = (department: Department) => {
    setSelectedDepartment(department);
    setOpen(true);
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>
                <div className="flex justify-between items-center">
                  <p
                    onClick={() => handleOnEditClick(row)}
                    className="text-blue-600 hover:underline cursor-pointer"
                  >
                    Edit
                  </p>
                  <p className="text-red-600 hover:underline cursor-pointer">
                    Delete
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Department</DialogTitle>
          </DialogHeader>
          {selectedDepartment && (
            <EditDepartment
              data={selectedDepartment}
              onSuccess={() => setOpen(false)} // 👈 close modal
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DepartmentList;
