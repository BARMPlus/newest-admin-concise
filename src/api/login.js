import request from 'common/js/request'

export function loginByUsername(username, password) {
  return request({
    url: '/permission/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

