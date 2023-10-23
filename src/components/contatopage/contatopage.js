import React from "react";
import './styles.css'

function ContatoPage() {
    return (
        <>
            <div className="qdbackground">
                <div className="qdmenor">
                    <p className="texthelp">Olá, como podemos ajudar ?</p>
                        <div className="formboxnome">
                            <form action="./index.html">    
                                <div className="boxnome">
                                    <label className="nome" for="name">Seu nome</label>
                                    <input id="Nome" type="Name" name="name" placeholder="Digite seu nome" />
                                </div>
                                <div className="boxemail">
                                    <label className="email" for="email">Seu email</label>
                                    <input id="email" type="email" name="email" placeholder="Digite seu email" />
                                </div>
                                <div className="boxmensagem">
                                    <textarea name="mensagem" id="mensagem" rows="10">Escreva uma mensagem</textarea>
                                </div>                       
                                <div className="boxbutton">
                                    <button className="enviar">Enviar</button>
                                </div>
                            </form>    
                        </div>
                </div>
            </div>     
        </>
    )
}

export default ContatoPage;