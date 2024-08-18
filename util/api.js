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
export { createUserAPI };
