import React, { useState, useEffect } from "react";

const AdminDashboard = () => {

  // Sample data (replace with actual data source or API calls)
  const [payments, setPayments] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  // Simulate data loading (or replace with actual API fetching logic)
  useEffect(() => {
    // Example data for illustration
    setPayments([
      { date: "2024-10-20", user: "SaiGanesh", event:"Roboveda",amount: 100 },
      { date: "2024-10-21", user: "Sai Sruthi",event:"Dandiya Night",amount: 150 },
    ]);
    setRegistrations([
      { date: "2024-10-20", name: "Kausal",event:"Sreevision" ,email: "jane@example.com" },
      { date: "2024-10-21", name: "Shivani",event:"Ashwathama", email: "john@example.com" },
    ]);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <p> NOTE: Only accese to Admin if Signed in....</p>
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mb-10">
        <div className="bg-slate-500 shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-white">Total Payments</h2>
          <p className="text-2xl font-bold mt-2 text-black-600">
            ${payments.reduce((acc, payment) => acc + payment.amount, 0)}
          </p>
        </div>
        <div className="bg-slate-500 shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold  text-white">Total Registrations</h2>
          <p className="text-2xl font-bold mt-2 text-black-600">{registrations.length}</p>
        </div>
        <div className="bg-slate-500 shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold  text-white">Visitor Stats</h2>
          <p className="text-2xl font-bold mt-2 text-black-600">15,000</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Payment History</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-slate-600 text-white">
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">User</th>
                <th className="py-2 px-4">Event</th>
                <th className="py-2 px-4">Amount</th>
              </tr>
            </thead>
            <tbody>
              {payments.length > 0 ? (
                payments.map((payment, index) => (
                  <tr className="border-b" key={index}>
                    <td className="py-2 px-4">{payment.date}</td>
                    <td className="py-2 px-4">{payment.user}</td>
                    <td className="py-2 px-4">{payment.event}</td>
                    <td className="py-2 px-4 text-green-600">${payment.amount} credited</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="py-2 px-4" colSpan="3">No payment data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Recent Registrations</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-slate-600 text-white">
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Event</th>
              </tr>
            </thead>
            <tbody>
              {registrations.length > 0 ? (
                registrations.map((registration, index) => (
                  <tr className="border-b" key={index}>
                    <td className="py-2 px-4">{registration.date}</td>
                    <td className="py-2 px-4">{registration.name}</td>
                    <td className="py-2 px-4">{registration.email}</td>
                    <td className="py-2 px-4">{registration.event}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="py-2 px-4" colSpan="3">No registration data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
