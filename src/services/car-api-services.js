import axios from "axios";
const instance = axios.create({
  baseURL: "https://app.fiftyfivecarrental.com/car/",
});
const GetCars = () => {
  return instance.get(`getAllCars`);
};

const GetCarsPaginated = (query) => {
  return instance.get(`getAllCars${query}`);
};
const GetCarsByBrand = (brand, query) => {
  return instance.get(`getCarsByBrand/${brand}${query}`);
};
const GetCar = (id) => {
  return instance.get(`getAllDetails/${id}`);
};
const CreateOneCar = (car) => {
  return instance.post("createCar", car);
};
const UpdateCar = (id, car) => {
  return instance.post(`updateCarById/${id}`, car);
};
const DeleteCar = (id) => {
  return instance.post(`deleteCarById/${id}`);
};
const AdditionalImage = (image) => {
  return axios.post(
    `https://app.fiftyfivecarrental.com/carImage/uploadImage`,
    image
  );
};
export {
  GetCars,
  GetCar,
  GetCarsPaginated,
  CreateOneCar,
  UpdateCar,
  DeleteCar,
  AdditionalImage,
  GetCarsByBrand,
};
