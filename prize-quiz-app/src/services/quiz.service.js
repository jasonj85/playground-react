import axios from "../axios";

export const GetQuestions = () => {
  return axios.get('https://opentdb.com/api.php?amount=5');
};