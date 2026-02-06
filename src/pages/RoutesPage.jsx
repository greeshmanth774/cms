import { Routes, Route } from "react-router"
import App from "../App"
import Login from "./Login"
import Home from "./Home"

export default function RoutesPage() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}