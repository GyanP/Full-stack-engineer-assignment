import axios from 'axios';

const loginServies = async (data) => {
  console.log('process.env.REACT_APP_URL', process.env.REACT_APP_URL);
  return await axios
    .post(`${process.env.REACT_APP_URL}/login`, data)
    .then((resData) => resData.data)
    .catch((err) => console.log(err));
};

export default loginServies;
