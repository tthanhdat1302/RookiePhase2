import api from "../api/api";
import * as userManage from "../contains/ManageUser";

export const get_user_list = () => async (dispatch) => {
  try {
    const data = await api.User.getAllUsers();
    dispatch({
      type: userManage.USER_LIST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const add_user = (user) => async (dispatch) => {
  try {
    const data = await api.User.addUser(user);
    dispatch({
      type: userManage.ADD_USER,
      payload: data,
    });
    window.location.href = "/user";
  } catch (error) {
    console.log(error);
  }
};


export const update_user = (id,dataInput) => async (dispatch) => {
  try {
    const data = await api.User.updateUser(id,dataInput);
    dispatch({
      type: userManage.UPDATE_USER,
      payload: data,
    });
    window.location.href = "/user";
  } catch (error) {
    console.log(error);
  }
};
