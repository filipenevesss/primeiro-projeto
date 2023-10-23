import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ComentariosPage from "../../components/comentarios/comentarios";

function Comentarios(){
    return(
        <div>
            <Header />   
            <ComentariosPage />
            <Footer />
        </div>
    )
}

export default Comentarios;