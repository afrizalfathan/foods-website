import {
    faUtensils,
    faGlassWater,
    faCake,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Cards from "./Card"

const Menu = ({
    foods,
    drinks,
    dessert,
    setFood,
    setDrink,
    setDessert,
    food,
    drink,
}) => {
    function foodsMenuHandler() {
        setFood(true)
        setDrink(false)
        setDessert(false)
    }

    function drinksMenuHandler() {
        setFood(false)
        setDrink(true)
        setDessert(false)
    }

    function dessertMenuHandler() {
        setFood(false)
        setDrink(false)
        setDessert(true)
    }

    return (
        <div className="container-menu">
            <h1>Menu</h1>
            <hr />
            <div className="menu-choose">
                <button onClick={foodsMenuHandler}>
                    <FontAwesomeIcon
                        icon={faUtensils}
                        style={{ marginRight: `10px` }}
                    />
                    <span>Foods</span>
                </button>
                <button onClick={drinksMenuHandler}>
                    <FontAwesomeIcon
                        icon={faGlassWater}
                        style={{ marginRight: `10px` }}
                    />
                    <span>Drink</span>
                </button>
                <button>
                    <FontAwesomeIcon
                        icon={faCake}
                        style={{ marginRight: `10px` }}
                    />
                    <span>Dessert</span>
                </button>
            </div>
            <div className="menu-list">
                <h1>Our foods</h1>
                <hr />
                <div className="list-menu">
                    {food && foods.map((makanan) => <Cards food={makanan} />)}
                    {drink && drinks.map((minuman) => <Cards food={minuman} />)}
                </div>
            </div>
        </div>
    )
}

export default Menu
