import React from "react"

const Footer = () => {
const footerStyle = {
    backgroundColor: "#3F3F41", 
    color: "#FCE09B", 
    textAlign: "center",
    padding: "10px",
};

return (
    <footer style={footerStyle}>
        <div>
            <p>&copy; 2023 Fulanos Underwear. Todos los derechos reservados.</p>
        </div>
    </footer>
);
};

export default Footer