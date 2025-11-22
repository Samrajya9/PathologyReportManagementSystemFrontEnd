import { Badge } from "lucide-react";

const colors = {
  pending: "bg-yellow-100 text-yellow-800",
  in_progress: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};
type Status = keyof typeof colors;

export const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge className={colors[status] || "bg-gray-100 text-gray-800"}>
      {status.replace("_", " ").toUpperCase()}
    </Badge>
  );
};
