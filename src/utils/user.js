export const getToken = () => {
  return localStorage.getItem('token');
}

export const setToken = (token) => {
  return localStorage.setItem('token', token);
}

export const removeToken = () => {
  return localStorage.removeItem('token');
}
export const setid = (id) => {
  return localStorage.setItem('id', id);
}

export const setUserName = (username) => {
  return localStorage.setItem('username', username);
}

export const getUserName = () => {
  return localStorage.getItem('username');
}


export const removeUserName = () => {
  return localStorage.removeItem('username');
}