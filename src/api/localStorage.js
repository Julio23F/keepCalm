// import history from "utils/history";

export const getLocalToken = () => {
  // const strUserInfo = localStorage.getItem("userInfo");
  const strUserInfo = localStorage.token;
  if (strUserInfo != null) {
    try {
      // const userInfo = JSON.parse(strUserInfo);
      return strUserInfo;
    } catch (err) {
      console.log("Error parsing userInfo from localStorage: ", err);
    }
  }
  return null;
};

export const setLocalToken = (userInfo) => {
  localStorage.setItem("locale", userInfo.member.default_language);
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

export const removeLocalToken = () => {
  localStorage.removeItem("userInfo");
  // history.push("/login");
};
