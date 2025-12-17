import { api } from "../api";
import type { ListUserReactions } from "../interfaces/user.model";

const userServices = {
  listReactions: async () => {
    const response = await api.get<ListUserReactions>(
      `/users/reaction/characters`
    );
    return response.data;
  },
};

export default userServices;
