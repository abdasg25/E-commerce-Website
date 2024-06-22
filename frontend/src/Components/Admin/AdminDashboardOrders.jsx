import React, { useState, useEffect } from "react";
// import AdminHeader from "../components/Layout/AdminHeader";
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import SummaryApi from "../../common";

const useStyles = makeStyles({
  greenColor: {
    color: 'green',
  },
  redColor: {
    color: 'red',
  },
});

const AdminDashboardOrders = () => {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(SummaryApi.allProduct.url); // Replace with your backend API endpoint
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) =>
        params.value === "Delivered" ? classes.greenColor : classes.redColor,
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "createdAt",
      headerName: "Order Date",
      type: "date",
      minWidth: 130,
      flex: 0.8,
    },
  ];

  const rows = orders.map((order) => ({
    id: order._id,
    itemsQty: order.cart.reduce((acc, item) => acc + item.qty, 0),
    total: `${order.totalPrice} $`,
    status: order.status,
    createdAt: order.createdAt.slice(0, 10),
  }));

  return (
    <div>
      {/* <AdminHeader /> */}
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            {/* <AdminSideBar active={2} /> */}
          </div>
          <div className="w-full min-h-[45vh] pt-5 rounded flex justify-center">
            <div className="w-[97%] flex justify-center">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={4}
                  disableSelectionOnClick
                  autoHeight
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardOrders;