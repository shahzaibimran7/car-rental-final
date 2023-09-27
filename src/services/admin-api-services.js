import axios from "axios";
const instance = axios.create({
  baseURL: "https://app.fiftyfivecarrental.com/auth/",
});
const LoginUser = (user) => {
  return instance.post("login", user);
};
const SignUpUser = (user) => {
  return instance.post("signup", user);
};
export { LoginUser, SignUpUser };
