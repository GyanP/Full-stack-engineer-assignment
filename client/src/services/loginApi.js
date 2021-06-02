import axios from 'axios';

const loginServies = async (data) => {
  return await axios
    .post(`https://full-stack-requirements.herokuapp.com/login`, data)
    .then((resData) => resData.data)
    .catch((err) => console.log(err));
};

export default loginServies;
