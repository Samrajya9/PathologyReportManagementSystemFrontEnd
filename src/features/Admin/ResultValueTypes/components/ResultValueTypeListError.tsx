import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw } from "lucide-react";

interface ResultValueTypeListErrorProps {
  onRetry?: () => void;
}

const ResultValueTypeListError: React.FC<ResultValueTypeListErrorProps> = ({
  onRetry,
}) => {
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
      <h3 className="text-lg font-semibold mb-2">
        Error Loading Result Value Types
      </h3>
      <p className="text-muted-foreground mb-6 max-w-md">
        There was an error loading the result value types list. This might be
        due to a network issue or server problem.
      </p>
      <Button onClick={handleRetry} variant="outline">
        <RefreshCw className="mr-2 h-4 w-4" />
        Try Again
      </Button>
    </div>
  );
};

export default ResultValueTypeListError;
