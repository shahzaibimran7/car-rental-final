import React from "react";
import { GetBookings, UpdateBooking } from "../services/bookings-api-services";
import { GetCars } from "../services/car-api-services";
import { useState, useEffect } from "react";

const BookingsDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const getAllBookings = async () => {
      const response = await GetBookings();
      setBookings(response.data);
    };
    getAllBookings();
  }, []);
  useEffect(() => {
    const getAllCars = async () => {
      const response = await GetCars();
      setCars(response.data.cars);
    };
    getAllCars();
  }, []);
  const extractDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-UK");
    return formattedDate;
  };

  const activeBookings = bookings?.filter(
    (booking) => booking.status === "pending" || booking.status === "PENDING"
  );
  const carsData = cars?.map((car) => ({ id: car.id, name: car.name }));

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
            <th>Drop-off Location</th>
            <th>License Number</th>
            <th>End Booking</th>
          </tr>
        </thead>
        <tbody>
          {activeBookings?.map((booking) => (
            <tr>
              <td>
                {" "}
                {carsData?.find((car) => car.id === booking.carId)?.name ||
                  "N/A"}
              </td>
              <td>{booking.firstName + " " + booking.lastName}</td>
              <td>{booking.email}</td>
              <td>{extractDate(booking.pickupDate)}</td>
              <td>{extractDate(booking.dropOffDate)}</td>
              <td>{booking.phoneNumber}</td>
              <td>{booking.address}</td>
              <td>{booking.location}</td>
              <td>{booking.licenseNumber}</td>
              <td>
                <button
                  title="End Booking"
                  onClick={async () => {
                    await UpdateBooking(booking.id);
                    const response = await GetBookings();
                    const activeBookings = response.data.filter(
                      (booking) =>
                        booking.status === "pending" ||
                        booking.status === "PENDING"
                    );
                    setBookings(activeBookings);
                  }}
                >
                  <i
                    className="fa fa-archive"
                    aria-hidden="true"
                    style={{
                      color: "red",
                      cursor: "pointer",
                      fontSize: "12px",
                    }}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsDashboard;
