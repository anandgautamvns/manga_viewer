import Axios from "axios";

const Root_URL = "http://18.177.140.79:8080/";

export const getBookList = async () => {
  let response;
  try {
    response = await Axios.get(`${Root_URL}books/`);
  } catch (err) {}
  return response?.data;
};

export const getBookDetails = async (id: number) => {
  let response;
  try {
    response = await Axios.get(`${Root_URL}books/${id}/`);
  } catch (err) {}
  return response?.data;
};

export const getChapterDetails = async (id: number) => {
  let response;
  try {
    response = await Axios.get(`${Root_URL}chapters/${id}/`);
  } catch (err) {}
  return response?.data;
};

export const APIService = {
  getBookList,
  getBookDetails,
  getChapterDetails,
};
