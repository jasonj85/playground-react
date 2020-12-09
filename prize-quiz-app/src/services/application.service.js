import axios from "../axios";

const postApplication = (formData) => {
  return axios.post('applications', formData)
};

const getApplications = () => {
  return axios.get('applications')
};

const getUserApplications = (email) => {
  return axios.post("applicant", {email})
};

export default {
  postApplication,
  getApplications,
  getUserApplications
};