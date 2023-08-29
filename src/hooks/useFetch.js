// import { AuthContext } from "@/context/authContext"

import { useState } from "react"
import { toast } from "react-toastify"
import CONFIG from "../config"

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendRequest = async (
    url,
    method = "GET",
    body = null,
    headers = {}
  ) => {
    setIsLoading(true)

    try {
      const response = await fetch(`${CONFIG.BASE_URL}${url}`, {
        method,
        body: body ? JSON.stringify(body) : null,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      })

      const responseData = await response.json()

      if (!response.ok) {
        toast.error(responseData?.error_description)
        throw new Error(
          responseData.message ||
            responseData?.error_description ||
            "An unknown error occurred."
        )
      }

      setIsLoading(false)

      return responseData
    } catch (error) {
      setIsLoading(false)
      setError(error)
      throw error
    }
  }

  return { sendRequest, isLoading, error }
}
