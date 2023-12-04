import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = () => {
    setIsLoading(true);
    setUserToken("logiiiiin");
    // axios
    //   .post(`${BASE_URL}/jwt-auth/v1/token`, {
    //     username,
    //     password,
    //   })
    //   .then((res) => {
    //     let userInfo = res.data;
    //     setUserInfo(userInfo);
    //     setUserToken(userInfo.data.token);
    //     AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
    //     AsyncStorage.setItem("userToken", userInfo.data.token);
    //     console.log(userInfo);
    //     console.log("User Token: " + userInfo.data.token);
    //   })
    //   .catch((e) => {
    //     console.log(`Login error ${e}`);
    //   });
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem("userToken");
      let userToken = await AsyncStorage.getItem("userToken");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo);
        console.log("aaaaaa");
      }
    } catch (e) {
      console.log(`isLogged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, isLoading, userToken, userInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};
