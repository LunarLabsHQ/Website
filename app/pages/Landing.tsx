import { Hero } from "../components/Hero"
import { Navbar } from "../components/Navbar"

export const Landing = () => {
    return <div className="h-screen w-full">
        <Navbar />
        <Hero />
    </div>
}