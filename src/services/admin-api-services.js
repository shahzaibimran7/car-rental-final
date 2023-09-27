import axios from "axios";
const instance = axios.create({
  baseURL: "https://193.203.165.224/",
});
const LoginUser = (user) => {
  return instance.post("login", user);
};
const SignUpUser = (user) => {
  return instance.post("signup", user);
};
export { LoginUser, SignUpUser };
