import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:8000/booking/",
});
const CreateBooking = (booking) => {
  return instance.post("createBooking", booking);
};
const GetBookings = () => {
  return instance.get("getAllBooking");
};
const UpdateBooking = (id) => {
  return instance.post(`markBookingDone/${id}`);
};
export { CreateBooking, GetBookings, UpdateBooking };
