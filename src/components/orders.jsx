import React, { useState } from "react";

const OrderTable = ({ orders }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter orders based on search query
  const filteredOrders = orders.filter(order =>
    order.order.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "100%",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      />

      {/* Order Table */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Image</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Order</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Date</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Total</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Status</th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td style={{ padding: "10px", textAlign: "center" }}>
                <img src={order.image} alt={order.order} style={{ width: "40px", height: "40px" }} />
              </td>
              <td style={{ padding: "10px", textAlign: "center" }}>{order.order}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>{order.date}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>${order.total}</td>
              <td style={{ padding: "10px", textAlign: "center", color: getStatusColor(order.status) }}>
                {order.status}
              </td>
              <td style={{ padding: "10px", textAlign: "center" }}>
                <button style={{ padding: "5px 10px", cursor: "pointer" }}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Helper function to style status color
const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "orange";
    case "Delivered":
      return "green";
    case "Cancelled":
      return "red";
    default:
      return "black";
  }
};

// Example usage with sample data
const App = () => {
  const orders = [
    {
      id: 1,
      image: "https://via.placeholder.com/40",
      order: "Order 1",
      date: "2024-10-01",
      total: 100.99,
      status: "Pending",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/40",
      order: "Order 2",
      date: "2024-10-03",
      total: 200.50,
      status: "Delivered",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/40",
      order: "Order 3",
      date: "2024-10-05",
      total: 300.75,
      status: "Cancelled",
    },
    // Add more orders here
  ];

  return <OrderTable orders={orders} />;
};

export default App;
