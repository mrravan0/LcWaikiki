import { memo } from "react";
import Hero from "../../Components/Home-Page/Hero/Hero";
import Season from "../../Components/Home-Page/Season/Season";
import './HomePage.scss';
const HomePage = memo(() => {
    return (
        <main>
            <Hero />
            <Season />
        </main>
    );
})
export default HomePage;