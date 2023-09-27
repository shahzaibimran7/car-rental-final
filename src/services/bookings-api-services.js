import axios from "axios";
const instance = axios.create({
  baseURL: "https://193.203.165.224/",
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
