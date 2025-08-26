import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DepartmentListSkeleton = () => {
  const skeletonRows = Array.from({ length: 5 });

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
        {skeletonRows.map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <div className="h-4 w-10 bg-gray-200 rounded animate-pulse" />
            </TableCell>
            <TableCell>
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
            </TableCell>
            <TableCell>
              <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
            </TableCell>
            <TableCell>
              <div className="flex gap-4">
                <div className="h-4 w-10 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DepartmentListSkeleton;
