import { useState } from "react"
import Navigation from "./components/Navigation"
import About from "./components/About"
import Menu from "./components/Menu"
import "./App.scss"
import imgSalad from "./assets/food.png"
import tea from "./assets/tea.png"

function App() {
    const [food, setFood] = useState(true)
    const [drink, setDrink] = useState(false)
    const [dessert, setDessert] = useState(false)
    const foods = [
        {
            name: "Salad",
            price: "IDR 10.000",
            img: imgSalad,
        },
        {
            name: "Salad",
            price: "IDR 10.000",
            img: imgSalad,
        },
        {
            name: "Salad",
            price: "IDR 10.000",
            img: imgSalad,
        },
        {
            name: "Salad",
            price: "IDR 10.000",
            img: imgSalad,
        },
        {
            name: "Salad",
            price: "IDR 10.000",
            img: imgSalad,
        },
        {
            name: "Salad",
            price: "IDR 10.000",
            img: imgSalad,
        },
    ]

    const drinks = [
        {
            name: "Salad",
            price: "IDR 10.000",
            img: tea,
        },
        {
            name: "Salad",
            price: "IDR 10.000",
            img: tea,
        },
        {
            name: "Salad",
            price: "IDR 10.000",
            img: tea,
        },
        {
            name: "Salad",
            price: "IDR 10.000",
            img: tea,
        },
        {
            name: "Salad",
            price: "IDR 10.000",
            img: tea,
        },
        {
            name: "Salad",
            price: "IDR 10.000",
            img: tea,
        },
    ]

    return (
        <div className="App">
            <Navigation />
            <About />
            <Menu
                foods={foods}
                drinks={drinks}
                food={food}
                drink={drink}
                dessert={dessert}
                setFood={setFood}
                setDrink={setDrink}
                setDessert={setDessert}
            />
        </div>
    )
}

export default App
