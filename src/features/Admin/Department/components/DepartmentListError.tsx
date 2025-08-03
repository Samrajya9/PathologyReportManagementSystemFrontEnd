import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ErrorStateProps {
  message?: string;
}

const DepartmentListError: React.FC<ErrorStateProps> = ({ message }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4}>
            <div className="text-red-500 text-center py-4">
              {message || "Failed to load departments. Please try again."}
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DepartmentListError;
