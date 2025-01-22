import { conectaApi } from "./conectaApi";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem  = document.querySelector("[data-imagem]").value;

    
    try {
        await conectaApi.criarProduto(nome, valor, imagem);
        alert("Produto cadastrado!")
        
    } catch (e) {
        alert(e);
        
    }
    window.location.reload(true);
}
    

formulario.addEventListener("submit", evento => criarProduto(evento));