const setCookie = (tokens) => {
  document.cookie = `accessToken= ${tokens.accessToken}; max-age= ${24 * 3600}`
  document.cookie = `refreshToken= ${tokens.refreshToken}; max-age= ${
    30 * 24 * 3600
  }`
}

const getCookie = (cookieName) => {
  return document.cookie
    .split(';')
    .find((token) => token.trim().split('=')[0] === cookieName)
    ?.split('=')[1]
  
}

export { setCookie, getCookie }
