import { Routes, Route } from "react-router"
import App from "../App"
import Login from "./Login"

export default function RoutesPage() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}