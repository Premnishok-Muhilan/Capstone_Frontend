import instance from "./instance";

const userServices = {
  register: async (data) => {
    console.log(data);
    return await instance.post("/users/register", data);
  },
  login: async (data) => {
    console.log(data);
    return await instance.post("/users/login", data);
  },
  me: async () => {
    return await instance.get("/users/me");
  },
  logout: async () => {
    return await instance.post("/users/logout");
  },
  register_for_an_event: async (data) => {
    //console.log("data", data);
    return await instance.post("/users/register-for-an-event", data);
  },
  get_all_registrations: async()=>{
    return await instance.get("/users/get-all-registrations")
  },
  transfer_tickets_to_username: async (data)=>{
    return await instance.put("users/transfer-tickets",data)
  }
  //   forgotPassword: async (data) => {
  //     console.log("forgot password data", data);
  //     //userRouter.post("/forgot-password", userController.forgotPassword);
  //     return await instance.post("/users/forgot-password", data);
  //   },
  //   resetPassword: async (data) => {
  //     console.log("reset password data", data);

  //     return await instance.put(
  //       `/users/reset-password/${data.passwordResetToken}`,
  //       data
  //     );
  //   },
};

export default userServices;
