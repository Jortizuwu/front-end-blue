import { api } from "../api";
import type { ListUserReactions } from "../interfaces/user.model";

const userServices = {
  listReactions: async (type: "LIKE" | "UNLIKE" = "LIKE") => {
    const response = await api.get<ListUserReactions>(
      `/users/reaction/${type}/characters`
    );
    return response.data;
  },
};

export default userServices;
