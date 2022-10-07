import food from "../assets/food.png"

const About = () => {
    return (
        <div className="container-about">
            <h1>About</h1>
            <hr />
            <section className="about">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore in beatae tempora tempore magni culpa,
                    necessitatibus similique asperiores! Consequatur sed quae
                    dolores quis, totam quo obcaecati vitae dolore excepturi ut
                    facere laborum ratione cupiditate voluptate consequuntur
                    eius animi iusto deserunt doloribus est perferendis ipsam
                    iure numquam deleniti.
                </p>
                <img src={food} width="450px" />
            </section>
        </div>
    )
}

export default About
