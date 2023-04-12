import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios'
import { clearValues } from './jobSlice'
import { hideLoading } from '../alljobs/allJobsSlice'
export const createJobThunk = async (job, thunkAPI) => {
  try {
    const resp = await customFetch.post('/jobs', job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    thunkAPI.dispatch(clearValues())
    return resp.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}
export const deleteJobThunk = async (job, thunkAPI) => {
  try {
    const resp = await customFetch.post('/jobs', job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    thunkAPI.dispatch(clearValues())
    return resp.data
  } catch (error) {
    thunkAPI.dispatch(hideLoading())
    checkForUnauthorizedResponse(error, thunkAPI)
  }
}
export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const resp = await customFetch.patch(`/jobs/${jobId}`, job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    thunkAPI.dispatch(clearValues())
    return resp.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}
