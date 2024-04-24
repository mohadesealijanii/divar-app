import api from 'src/configs/api'

const getProfile = () => api.get('user/whoami').then((res) => res || false)

const getPost = () => api.get('post/my')

const getPosts = () => api.get('')

export { getProfile, getPost, getPosts }
