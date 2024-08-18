import axios from "./api.customize";
const createUserAPI = (name, password, email) => {
  const URL_BE = `/v1/api/register`;
  const data = {
    name: name,
    password: password,
    email: email,
  };
  return axios.post(URL_BE, data);
};
const loginAPI = (email, password) => {
  const URL_BE = `/v1/api/login`;
  const data = {
    email: email,
    password: password,
  };
  return axios.post(URL_BE, data);
};

export { createUserAPI, loginAPI };
