import { useState } from "react"
import Navigation from "./components/Navigation"
import About from "./components/About"
import Menu from "./components/Menu"
import "./App.scss"

function App() {
    return (
        <div className="App">
            <Navigation />
            <About />
            <Menu />
        </div>
    )
}

export default App
