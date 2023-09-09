import React from "react";

const BookingsDashboard = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Client Name</th>
            <th>Client Email</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Client Contact Number</th>
            <th>Client Address</th>
            <th>Pickup Location</th>
            <th>Drop-off Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Model 1</td>
            <td>John Doe</td>
            <td>johndoe@example.com</td>
            <td>2023-09-10</td>
            <td>2023-09-20</td>
            <td>123-456-7890</td>
            <td>123 Main St</td>
            <td>Pickup A</td>
            <td>Drop-off B</td>
          </tr>
          <tr>
            <td>Model 1</td>
            <td>John Doe</td>
            <td>johndoe@example.com</td>
            <td>2023-09-10</td>
            <td>2023-09-20</td>
            <td>123-456-7890</td>
            <td>123 Main St</td>
            <td>Pickup A</td>
            <td>Drop-off B</td>
          </tr>{" "}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsDashboard;
