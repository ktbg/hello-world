import api from "./apiConfig";

export const sendMail = async (formData) => {
  try {
    const res = await api.post("/send", formData);
    return res;
  } catch (error) {
    throw error;
  }
};
