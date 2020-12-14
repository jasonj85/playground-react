import axios from "../axios";

export const PostApplication = (formData) => {
  return axios.post('applications', formData)
};

export const GetApplications = () => {
  return axios.get('applications')
};

export const GetUserApplications = (email) => {
  return axios.post("applicant", {email})
};