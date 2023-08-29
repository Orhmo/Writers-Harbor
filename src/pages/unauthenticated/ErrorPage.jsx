import { useEffect, useState } from "react"
import { useNavigate, useRouteError } from "react-router-dom"
// import lostImage from "@/assets/svg/void.svg"
import { PATH_NAMES } from "../../constants"

const ErrorPage = () => {
  const error = useRouteError()
  const navigate = useNavigate()
  console.error(error)

  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    setTimeout(() => navigate(PATH_NAMES.root), 5000)
  }, [])

  const decreaseCountdown = () => setCountdown(countdown => countdown - 1)

  useEffect(() => {
    const interval = setInterval(decreaseCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* <img src={lostImage} alt="" className="w-40 h-40" /> */}
          <h1 className="text-3xl font-semibold text-[#387373]">Uh oh!</h1>
        <p className="text-lg text-[#387373]">you seem lost... taking you home in {countdown}</p>
      </div>
    </div>
  )
}

export default ErrorPage
