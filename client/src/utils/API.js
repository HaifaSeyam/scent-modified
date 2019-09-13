import axios from "axios";

export default {
  getPerfume: () => {
    return axios.get("/api/perfumes");
  },
  getNewArrivals: () => {
    return axios.get("/api/newArrivals");
  },
  getHighlighted: () => {
    return axios.get("/api/highlighted");
  },
  getFavorites: (id) => {
    return axios.get(`/api/favorites/${id}`);
  },
  savePerfume: (perfumeData, userId) => {
    // console.log(perfumeData._id)
    return axios.post(`/api/favorites/${perfumeData._id}/${userId}`);
  },
  removeFavorites: (id, userId) => {
    return axios.post(`/api/delete/${id}/${userId}`);
  },
  getUserData: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  UpdateUserData: (id, tokenId) => {
    return axios.post(`/api/update/${id}/${tokenId}`);
  },
  UpdateSelectionDates: (id, selectionDate, limitDate) => {
    return axios.post(`/api/update/${id}/${selectionDate}/${limitDate}`);
  },
  UpdateSelectionData: (id) => {
    return axios.post(`/api/update/${id}`);
  },
  UpdateSubscriptionData: (id) => {
    return axios.post(`/api/update/${id}`);
  }
};
