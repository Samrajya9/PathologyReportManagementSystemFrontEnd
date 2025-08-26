import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSpecimens } from "../hooks/queries/useSpecimens";
import { SquarePen, Trash } from "lucide-react";
import { useState } from "react";
import type { Specimen } from "../types/specimen.types";

import Modal from "@/components/Modal";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import EditSpecimen from "./EditSpecimen";
import DeleteSpecimen from "./DeleteSpecimen";

const SpecimenList = () => {
  const { data } = useSpecimens();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<
    "Update" | "Delete" | null
  >(null);
  const [selectedSpecimen, setSelectedSpecimen] = useState<Specimen | null>(
    null
  );

  const handleEditClick = (specimen: Specimen) => {
    setSelectedAction("Update");
    setSelectedSpecimen(specimen);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (specimen: Specimen) => {
    setSelectedAction("Delete");
    setSelectedSpecimen(specimen);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedAction(null);
    setSelectedSpecimen(null);
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
          {selectedSpecimen &&
            (selectedAction === "Update" ? (
              <EditSpecimen
                specimen={selectedSpecimen}
                onSuccess={handleModalClose}
              />
            ) : (
              <DeleteSpecimen
                specimen={selectedSpecimen}
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
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.data.map((specimen) => (
            <TableRow key={specimen.id}>
              <TableCell>{specimen.id}</TableCell>
              <TableCell className="font-medium">{specimen.name}</TableCell>
              <TableCell>
                {new Date(specimen.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <div className="flex gap-2 items-center justify-end">
                  <SquarePen
                    onClick={() => handleEditClick(specimen)}
                    size={16}
                    className="text-blue-600 hover:text-blue-800 cursor-pointer transition-colors"
                  />
                  <Trash
                    size={16}
                    className="text-red-600 hover:text-red-800 cursor-pointer transition-colors"
                    onClick={() => handleDeleteClick(specimen)}
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

export default SpecimenList;
