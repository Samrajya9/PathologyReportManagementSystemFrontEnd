import { Badge } from "@/components/ui/badge";
import type { Test } from "../types/test.types";
import { Separator } from "@/components/ui/separator";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const ViewTestModal = ({ test }: { test: Test }) => {
  return (
    <DialogContent className="max-h-5/6 overflow-y-auto">
      <DialogHeader>
        <DialogTitle>View Test Details</DialogTitle>
        <DialogDescription>
          Detailed information about the test
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        {/* Basic Information Section */}
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Test Name
            </h3>
            <p className="text-base font-semibold">{test.name}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Price</h3>
              <p className="text-base font-semibold">${test.price}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                Result Type
              </h3>
              <Badge variant="secondary">{test.resultValueType}</Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Unit</h3>
              <p className="text-base">{test.testUnit?.name || "N/A"}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                Department
              </h3>
              <p className="text-base">
                {test.medicalDepartment?.name || "N/A"}
              </p>
            </div>
          </div>

          {test.medicalDepartment?.description && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                Department Description
              </h3>
              <p className="text-sm text-gray-600">
                {test.medicalDepartment.description}
              </p>
            </div>
          )}
        </div>

        <Separator />

        {/* Specimen Requirements Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700">
            Specimen Requirements
          </h3>
          {test.specimenRequirements && test.specimenRequirements.length > 0 ? (
            <div className="space-y-2">
              {test.specimenRequirements.map((req) => (
                <div
                  key={req.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {req.specimen?.name || "N/A"}
                    </p>
                    <p className="text-xs text-gray-500">
                      Container: {req.container.name || "N/A"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 italic">
              No specimen requirements specified
            </p>
          )}
        </div>

        <Separator />

        {/* Reference Ranges Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700">
            Reference Ranges
          </h3>
          {test.referenceRanges && test.referenceRanges.length > 0 ? (
            <div className="space-y-3">
              {test.referenceRanges.map((range) => (
                <div
                  key={range.id}
                  className="p-4 border border-gray-200 rounded-lg space-y-2"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="capitalize">
                      {range.gender}
                    </Badge>
                    <span className="text-xs text-gray-600">
                      Age: {range.age_min_years} - {range.age_max_years} years
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-xs text-gray-600 mb-1">Normal Range</p>
                      <p className="font-medium text-green-700">
                        {range.normal_min} - {range.normal_max}{" "}
                        {test.testUnit?.name}
                      </p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="text-xs text-gray-600 mb-1">
                        Critical Range
                      </p>
                      <p className="font-medium text-red-700">
                        {range.critical_min} - {range.critical_max}{" "}
                        {test.testUnit?.name}
                      </p>
                    </div>
                  </div>

                  {range.notes && (
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <p className="text-xs text-gray-600">
                        <span className="font-medium">Notes:</span>{" "}
                        {range.notes}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 italic">
              No reference ranges specified
            </p>
          )}
        </div>

        {/* Result Value Options (if applicable) */}
        {test.resultValueOptions && test.resultValueOptions.length > 0 && (
          <>
            <Separator />
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-700">
                Result Value Options
              </h3>
              <div className="flex flex-wrap gap-2">
                {test.resultValueOptions.map((option, index) => (
                  <Badge key={index} variant="secondary">
                    {option.value}
                  </Badge>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Metadata */}
        <Separator />
        <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
          <div>
            <span className="font-medium">Created:</span>{" "}
            {new Date(test.createdAt).toLocaleDateString()}
          </div>
          <div>
            <span className="font-medium">Updated:</span>{" "}
            {new Date(test.updatedAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </DialogContent>
  );
};
