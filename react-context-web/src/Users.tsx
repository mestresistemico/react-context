import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Users = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div>
            <h1>
                Tela de usuários
            </h1>
            <h3>Valor de theme: {theme}</h3>
            <button onClick={() => setTheme('DARK')}>DARK MODE</button>
            <button onClick={() => setTheme('LIGHT')}>LIGHT MODE</button>
        </div>
    );
}

export default Users;