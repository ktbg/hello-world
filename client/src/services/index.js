import api from "./apiConfig";

export const sendMail = async (formData) => {
  try {
    const res = await api.post("/send", formData);
    return res.data;
  } catch (error) {
    console.log("this error is from front end services/index.js");
  }
};
