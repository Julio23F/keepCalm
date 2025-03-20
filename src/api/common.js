import {
    restApiSettings
} from "../config/api";
import { getLocalToken } from "./localStorage";
import { fetch } from "./fetch";
import { setLoading } from "../features/network/loadingSlice";
import { store } from "../store/store";

const getUrl = function(path, params = {}) {
    const url = new URL(`${restApiSettings.baseURL}${path}`);
  
    for (const [key, value] of Object.entries(params)) {
      url.searchParams.append(String(key), String(value));
    }
    return url.toString();
};

export const jsonQuery = async function (
  path,
  method,
  data,
  useToken = true,
) {
  return await query(
    path,
    {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data,
    },
    useToken,
  );
};

export const query = async function (
  path,
  options = {},
  useToken = true,
) {

  let res = null;
  const isDevEnv = process.env.NODE_ENV === "development";

  if (!options.headers) {
    options.headers = {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=0",
      Accept: "application/json",
    };
  }
  options.headers = options.headers || {};
  const userInfo = useToken ? getLocalToken() : null;
  console.log("localStorage", userInfo)

//   const userInfo = null;
  // const token = userInfo && userInfo.token;
  const token = userInfo && userInfo;

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }
  const url = getUrl(path, options.searchParams || {});

  store.dispatch(setLoading(true));
  try {
    console.log("url", url)
    console.log("options", options)

    const response = await fetch(url, options);
    console.log("response", response)

    if (response.status >= 200 && response.status < 300) {

      if (options && options.responseType === "blob") {
        res = response;
      } else {
        res = response.data;
      }
      console.log("response", response)


      return res;
    }
    return null;
  } catch (error) {
    const errorResponse = error.response;

    let message = "Erreur - Merci de contacter notre service technique";
    let status = 408;
    let errorMessage = null;

    if (errorResponse === undefined || !errorResponse) {
      message = error.message;
      if (isDevEnv) {
        errorMessage = "Network error";
      }
    } else if (errorResponse.status >= 500) {
      status = errorResponse.status;
      errorMessage = errorResponse.data.error || "Failed by server error.";
      if (isDevEnv) {
        message = "Failed by server error.";
      }
    } else if (errorResponse.status === 400) {
      status = errorResponse.status;
      errorMessage = errorResponse.data.error;
      if (isDevEnv) {
        message = get400ErrorMessages(errorResponse.data.error);
      }
    } else if (errorResponse.status === 401) {
      status = errorResponse.status;
      errorMessage = errorResponse.statusText;
      message =
        "L'authentification a échoué. Veuillez vous reconnecter avec vos informations d'identification.";
      staticStore && staticStore.dispatch(setAuthClear());
      //   removeLocalToken();
    } else {
      status = errorResponse.status;
      errorMessage =
        errorResponse.data.error === undefined
          ? "Unknow Error"
          : errorResponse.data.error;
      if (isDevEnv) {
        // message = getGeneralErrorMessages(errorMessage);
      }
    }
    staticStore &&
      staticStore.dispatch(setNotify({ open: true, type: "error", message }));
    return { status, error: errorMessage };
  } finally {
    store.dispatch(setLoading(false));
  }
};
