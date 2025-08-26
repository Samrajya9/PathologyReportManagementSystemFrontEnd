import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useResultValueTypes } from "../hooks/queries/useResultValueTypes";
import { SquarePen, Trash } from "lucide-react";
import { useState } from "react";
import type { ResultValueType } from "../types/resultValueType.types";

import Modal from "@/components/Modal";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import DeleteResultValueType from "./DeleteResultValueType";
import EditResultValueType from "./EditResultValueType";

type ModalAction = "UPDATE" | "DELETE";

const ResultValueTypeList = () => {
  const { data } = useResultValueTypes();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<ModalAction | null>(
    null
  );
  const [selectedResultValueType, setSelectedResultValueType] =
    useState<ResultValueType | null>(null);

  const handleEditClick = (resultValueType: ResultValueType) => {
    setSelectedAction("UPDATE");
    setSelectedResultValueType(resultValueType);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (resultValueType: ResultValueType) => {
    setSelectedAction("DELETE");
    setSelectedResultValueType(resultValueType);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedAction(null);
    setSelectedResultValueType(null);
  };

  const getModalTitle = () => {
    switch (selectedAction) {
      case "UPDATE":
        return "Edit Result Value Type";
      case "DELETE":
        return "Delete Result Value Type";
      default:
        return "";
    }
  };

  const getModalDescription = () => {
    switch (selectedAction) {
      case "UPDATE":
        return "Update the result value type information below.";
      case "DELETE":
        return "This action cannot be undone. All associated data will be removed.";
      default:
        return "";
    }
  };

  return (
    <>
      <Modal open={isModalOpen} setOpen={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{getModalTitle()}</DialogTitle>
            <DialogDescription>{getModalDescription()}</DialogDescription>
          </DialogHeader>
          {selectedResultValueType &&
            (selectedAction === "UPDATE" ? (
              <EditResultValueType
                resultValueType={selectedResultValueType}
                onSuccess={handleModalClose}
              />
            ) : (
              <DeleteResultValueType
                resultValueType={selectedResultValueType}
                onSuccess={handleModalClose}
              />
            ))}
        </DialogContent>
      </Modal>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={5}
                className="text-center text-muted-foreground"
              >
                No result value types found. Create one to get started.
              </TableCell>
            </TableRow>
          ) : (
            data.data.map((resultValueType) => (
              <TableRow key={resultValueType.id}>
                <TableCell className="font-mono">
                  {resultValueType.id}
                </TableCell>
                <TableCell className="font-medium">
                  {resultValueType.name}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {new Date(resultValueType.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {new Date(resultValueType.updatedAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2 items-center justify-end">
                    <SquarePen
                      onClick={() => handleEditClick(resultValueType)}
                      size={16}
                      className="text-blue-600 hover:text-blue-800 cursor-pointer transition-colors"
                    />
                    <Trash
                      size={16}
                      className="text-red-600 hover:text-red-800 cursor-pointer transition-colors"
                      onClick={() => handleDeleteClick(resultValueType)}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default ResultValueTypeList;
