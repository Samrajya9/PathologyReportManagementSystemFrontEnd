/**
 * TODO
 * Need to remake this whole
 */
import ErrorBoundary from "@/components/ErrorBoundary";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import axiosInstance from "@/lib/axios";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Response } from "@/types/Respose.types";
import { Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Modal from "@/components/Modal";
import TestRequestDashboard from "./components/Dashboard";

const OrderPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TestRequestDashboard />
      {/* <Modal open={isOpen} setOpen={setIsOpen}>
        <CreateTestRequestModal onSuccess={() => setIsOpen(false)} />
      </Modal>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between ">
          <h1>{"Orders Management".toLocaleUpperCase()}</h1>
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Create test Request
          </Button>
        </CardHeader>
        <CardContent>
          <ErrorBoundary fallback={<>Error</>}>
            <Suspense fallback={<>loading</>}>{<OrderTable />}</Suspense>
          </ErrorBoundary>
        </CardContent>
      </Card> */}
    </>
  );
};

export default OrderPage;

function OrderTable() {
  const { data } = useSuspenseQuery({
    queryKey: ["test-orders"],
    queryFn: () => {
      return axiosInstance.get<TestOrderResponse>("test-orders");
    },
  });
  console.log(data);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Test Count</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.data.data.orders.map((order) => {
          return (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{formatDate(order.createdAt)}</TableCell>
              <TableCell>
                <Badge variant={"outline"}>
                  {order.orderItems.length}{" "}
                  {order.orderItems.length === 1 ? "test" : "tests"}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={"outline"}>{order.status}</Badge>
              </TableCell>
              <TableCell className="flex gap-2 items-center justify-end">
                <Eye
                  size={16}
                  className="text-blue-600 hover:text-blue-800 cursor-pointer transition-colors"
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

type TestOrderStatus = "pending" | "in_progress" | "completed" | "cancelled";

type Test = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  price: string;
  resultValueType: string;
};

type OrderItem = {
  id: number;
  createdAt: string;
  updatedAt: string;
  status: TestOrderStatus;
  test: Test;
};

type TestOrder = {
  id: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  status: TestOrderStatus;
  orderItems: OrderItem[];
};

type TestOrdersData = {
  orders: TestOrder[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

type TestOrderResponse = Response & {
  data: {
    orders: TestOrder[];
    meta: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  };
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
