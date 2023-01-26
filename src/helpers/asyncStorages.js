import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveUser = async () => {
  if (value === undefined || value === null) {
    return Promise.reject()
  } else {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export const dataUser = async key => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      let parsed = JSON.parse(value)
      if (typeof parsed === 'string') {
        parsed = JSON.parse(parsed)
      }
      return Promise.resolve(parsed)
    }
    return Promise.resolve({ success: false })
  } catch (error) {
    return Promise.reject({ success: false, error })
  }
}

export const removeASValue = async key => {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {
      return Promise.reject(error)
    }
  }
