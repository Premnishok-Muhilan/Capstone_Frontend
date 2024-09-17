// src/services/adminServices.js
import instance from "./instance";

const adminServices = {
  getAllEventsInfo: async () => {
    return await instance.get("/admin/get-all-events-info");
  },
  getEventInfoById: async (id) => {
    return await instance.get(`/admin/get-event-info-by-id/${id}`);
  },
  loginAdmin: async (data) => {
    return await instance.post("/admin/login-admin", data);
  },
  createAnEvent: async(data) =>{
    return await instance.post("admin/create-an-event",data)
  }
};

export default adminServices;
