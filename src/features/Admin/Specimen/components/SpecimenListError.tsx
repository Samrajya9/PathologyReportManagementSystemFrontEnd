import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const SpecimenListError = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
      <h3 className="text-lg font-semibold mb-2">Error Loading Specimens</h3>
      <p className="text-muted-foreground mb-4">
        There was an error loading the specimens list. Please try again.
      </p>
      <Button onClick={() => window.location.reload()}>Retry</Button>
    </div>
  );
};

export default SpecimenListError;
