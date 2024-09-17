import userServices from "../services/userServices";

const userLoader = async () => {
    const user = await userServices.me();

    return user.data.user;
}

export default userLoader;