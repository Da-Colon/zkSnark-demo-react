import { Navigate, Route, Routes } from "react-router-dom"
import { Landing } from "../pages/Landing"

export const MainRoutes = () => {
  return (
    <Routes>
      <Route index element={<Landing />} />
      
    </Routes>
  )
}
