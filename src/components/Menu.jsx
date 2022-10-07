import { faUtensils } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Menu = () => {
    return (
        <div className="container-menu">
            <h1>Menu</h1>
            <hr />
            <div className="menu-choose">
                <button>
                    <FontAwesomeIcon icon={faUtensils} />
                    Foods
                </button>
                <button>Drink</button>
                <button>Dessert</button>
            </div>
        </div>
    )
}

export default Menu
