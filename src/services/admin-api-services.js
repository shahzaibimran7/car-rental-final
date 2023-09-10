import axios from 'axios';
const instance=axios.create({
    baseURL: 'http://localhost:6000/auth/'
});
const LoginUser=(user)=>{
    return instance.post('login',user);
}
const SignUpUser=(user)=>{
    return instance.post('signup',user);
}
export {LoginUser,SignUpUser};