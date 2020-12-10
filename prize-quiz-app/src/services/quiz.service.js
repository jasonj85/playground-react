import axios from "../axios";

const getQuestions = () => {
  return axios.get('https://opentdb.com/api.php?amount=5');
};

export default {
    getQuestions,
};