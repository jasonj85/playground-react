import axios from "../axios";

const postApplication = (formData) => {
  return axios.post('applications', formData)
};

const getApplications = () => {
  return axios.get('applications')
};

export default {
  postApplication,
  getApplications,
};