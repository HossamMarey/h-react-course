import axios from "axios"
import clientApi from "../clientApi"



export const getMe = async () => {
  const res = await clientApi.get('/auth/me')
  return res?.data
}