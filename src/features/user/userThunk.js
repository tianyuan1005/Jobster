import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios'
import { clearAllJobsState } from '../alljobs/allJobsSlice'
import { clearValues } from '../job/jobSlice'
import { logout } from './userSlice'
export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.patch('/auth/updateUser', user, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    return resp.data
  } catch (error) {
    checkForUnauthorizedResponse(error, thunkAPI)
  }
}

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logout(message))
    thunkAPI.dispatch(clearAllJobsState())
    thunkAPI.dispatch(clearValues)
    return Promise.resolve()
  } catch (error) {
    return Promise.reject()
  }
}
