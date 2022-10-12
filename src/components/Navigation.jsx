import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { Nav, Navbar, Container, Button } from "react-bootstrap"

const Navigation = () => {
    return (
        <div className="jumbotron">
            <div className="nav">
                <Navbar
                    bg="none"
                    expand="lg"
                    variant="dark"
                    className="mt-2"
                    style={{ width: 100 + "%" }}
                >
                    <Container>
                        <Navbar.Brand href="#home">
                            <h1>Dapur's</h1>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link href="#home">
                                    <p>Home</p>
                                </Nav.Link>
                                <Nav.Link href="#link">
                                    <p>About</p>
                                </Nav.Link>
                                <Nav.Link href="#link">
                                    <p>Menu</p>
                                </Nav.Link>
                                <Nav.Link href="#link">
                                    <p>Buy</p>
                                </Nav.Link>
                            </Nav>
                            <div className="nav-button">
                                <Button>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </Button>
                                <Button>Log in</Button>
                                <Button>Sign up</Button>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <section className="description">
                <h1>
                    Welcome to <span>Dapur's</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat iusto accusamus ducimus fugiat beatae! Id possimus,
                    natus perspiciatis eos sequi iste vero ipsa exercitationem
                    eligendi minima fuga hic tenetur obcaecati laborum minus ab,
                    tempora quaerat cumque dolor ratione expedita alias
                    laudantium ex facere
                </p>
                <Button>Menu</Button>
            </section>
        </div>
    )
}

export default Navigation
