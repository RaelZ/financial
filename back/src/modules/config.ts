export const config = {
  sso: {
    baseUrl: process.env.SSO_API_BASE_URL,
    clientName: process.env.SSO_CLIENT_NAME,
    clientKey: process.env.SSO_CLIENT_KEY,
  },
  loginCenter: {
    baseUrl: process.env.API_LOGIN_CENTER_BASE_URL,
  },
};
