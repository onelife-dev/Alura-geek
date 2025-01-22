import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-product]");

export default function constroiCardProduto(name, price, image, id) {
    const item = document.createElement("li");
    item.className =  "sessao__itens__itens";
    item.innerHTML = `<div>
    <img class="sessao__itens__imagem" src="${image}" alt="">
    <h3 class="sessao__itens__titulo" >${name}</h3>
    <div class="sessao__itens__valor__delete">
        <h2 class="sessao__itens__valor"> <strong>R$ ${price}</strong></h2>
        <button id="${id}" data-excluir>
            <a><img class = "icone__Excluir" src="./assents/excluir.png" alt=""></a>
        </button>
    </div>
</div>`

    return item;
}

async function exibeListaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => {
            lista.appendChild(
                constroiCardProduto(elemento.name, elemento.price, elemento.image)
            );
        });
    } catch (erro) {
        console.error("Erro ao listar produtos:", erro);
    }
}

exibeListaProdutos();
