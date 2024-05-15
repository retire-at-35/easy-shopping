import {
  defineStore
} from 'pinia'
import {
  ref
} from 'vue'
export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})
  const getUserInfo = () => {
    // 从本地中获取userInfo
    const userJson = localStorage.getItem('userInfo')
    if (userJson != null) {
      userInfo.value = JSON.parse(userJson)
    } else {
      userInfo.value = {}
    }
  }
  const setUserInfo = (userInfo) => {
    userInfo.value = userInfo
  }
  const clearUserInfo = () => {
    userInfo.value = {}
    localStorage.removeItem('userInfo')
  }
  return {
    userInfo,
    setUserInfo,
    getUserInfo,
    clearUserInfo
  }
}, {
  persist: true
})