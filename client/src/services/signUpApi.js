import axios from 'axios';

const signUpServies = async (data) => {
  return await axios
    .post(`https://full-stack-requirements.herokuapp.com/sign-up`, data)
    .then((resData) => resData.data)
    .catch((err) => {
      console.log('......err', err);
      throw err;
    });
};

export default signUpServies;
