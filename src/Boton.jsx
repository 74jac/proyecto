export const Boton = ({texto, color}) => {
    const estilos = {
        backgroundColor: color,
        color: "red",
    }
    return <button style={estilos}>{texto}</button>;
}; 