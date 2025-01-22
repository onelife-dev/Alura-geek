async function listaProdutos() {
    const produtos = await fetch("http://localhost:3000/products");
    const produtosConvertidos = await produtos.json();
    
    return produtosConvertidos;
}

async function criarProduto(nome, valor, imagem, id) {
    const conexao =  await fetch("https://json-server-rho-lovat.vercel.app/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem,
            id: id
        })
    });

    if (!conexao.ok) { // se conexao nao estiver ok -- para exibir na tela arquivo criarProduto.js foi acrescentado no codigo "try" e "catch" 
        throw new Error ("Não foi possível cadastrar o produto!");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function excluirProduto(params) {
    
}


export const conectaApi = {
    listaProdutos,
    criarProduto
}