import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Home = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            <h1>
                Aqui é a tela Home
            </h1>
            <h3>Valor de theme: {theme}</h3>
            <button onClick={() => setTheme('DARK')}>DARK MODE</button>
            <button onClick={() => setTheme('LIGHT')}>LIGHT MODE</button>
        </div>
    );
}

export default Home;