import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:8000/car/",
});
const GetCars = () => {
  return instance.get("getAllCars");
};
const GetCar = (id) => {
  return instance.get(`getCarsById/${id}`);
};
const CreateOneCar = (car) => {
  return instance.post("createCar", car);
};
const UpdateCar = (id, car) => {
  return instance.put(`updateCarById/${id}`, car);
};
const DeleteCar = (id) => {
  return instance.delete(`deleteCarById/${id}`);
};
export { GetCars, GetCar, CreateOneCar, UpdateCar, DeleteCar };