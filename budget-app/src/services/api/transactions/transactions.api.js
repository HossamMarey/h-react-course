import axios from "axios"
import clientApi from "../clientApi"



export const getTransactions = async () => {

  // 0.5
  const res = await clientApi.get('/transactions')
  return res?.data
}


export const getCategories = async () => {
  // 1
  const res = await clientApi.get('/categories')
  return res?.data
}


// export const getTransactions2 = async () => {
//   const data = await getTransactions() // 0.5
//   const categories = await getTransactions() // 1


//   return { data, categories } // 1.5
// }

export const getTransactionsFullData = async () => {
  const dataPromise = getTransactions() // 0
  const categoriesPromise = getCategories() // 0

  const [data, categories] = await Promise.all([dataPromise, categoriesPromise])

  return { data, categories }
}