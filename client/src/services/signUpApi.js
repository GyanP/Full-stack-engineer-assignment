import axios from 'axios';

const signUpServies = async (data) => {
  return await axios
    .post(`/api/sign-up`, data)
    .then((resData) => resData.data)
    .catch((err) => {
      throw err;
    });
};

export default signUpServies;
