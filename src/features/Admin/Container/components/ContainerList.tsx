import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useContainers } from "../hooks/queries/useContainers";
import { SquarePen, Trash } from "lucide-react";
import { useState } from "react";
import type { Container } from "../types/container.types";

import Modal from "@/components/Modal";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import EditContainer from "./EditContainer";
import DeleteContainer from "./DeleteContainer";

const ContainerList = () => {
  const { data } = useContainers();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<
    "Update" | "Delete" | null
  >(null);

  const [selectedData, setSelectedData] = useState<Container | null>(null);

  const handleOnEditClick = (data: Container) => {
    setSelectedAction("Update");
    setSelectedData(data);
    setIsOpen(true);
  };
  const handleOnDeleteClick = (data: Container) => {
    setSelectedAction("Delete");
    setSelectedData(data);
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
          {selectedData &&
            (selectedAction === "Update" ? (
              <EditContainer
                data={selectedData}
                onSuccess={() => setIsOpen(false)}
              />
            ) : (
              <DeleteContainer
                data={selectedData}
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

export default ContainerList;
