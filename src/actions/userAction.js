import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/userContants";
import axios from "axios";




export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "https://cozabackend-api.onrender.com/api/users/login",
        { email, password },
        config
      );
  
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
 
    dispatch({ type: USER_LOGOUT });
  
  };