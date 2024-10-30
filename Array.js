// Exemplo de Array
let Computadores = ['PC Gamer', 'PC HighEnd', 'PC UltraHighEnd'];

// Exemplo de Objeto
let produto = {
    nome: 'Notebook Acer Nitro GTX 1660',
    preco: 4000,
    emEstoque: true
};

// Criando o inventário inicial com array de objetos
let inventario = [
    { nome: 'RTX 4060', preco: 100, emEstoque: true },
    { nome: 'RTX 4060 TI', preco: 50, emEstoque: false },
    { nome: 'RTX 4070 Super', preco: 600, emEstoque: true },
    { nome: 'RTX 4070 TI Super', preco: 100, emEstoque: true },
    { nome: 'RTX 4090', preco: 100, emEstoque: true },
    { nome: 'RTX Giant 9886 Turbo TI', preco: 100, emEstoque: true },
    { nome: 'Mouse Logitech', preco: 50, emEstoque: false },
    { nome: 'Monitor Concordia R200S', preco: 600, emEstoque: true },
    { nome: 'Teclado Havit 60', preco: 100, emEstoque: true },
    { nome: 'Teclado Logitech', preco: 100, emEstoque: true },
    { nome: 'Teclado Redragon', preco: 100, emEstoque: true },
    { nome: 'Mouse Cougar 5472', preco: 50, emEstoque: false },
    { nome: 'Ryzen 7 5700X3D', preco: 600, emEstoque: true },
    { nome: 'SSD 115GB 14800MB/S Leitura', preco: 100, emEstoque: true },
    { nome: 'Teclado Positivo EXTREME', preco: 100, emEstoque: true },
    { nome: 'Computador Positivo que promete rodar GTA 6', preco: 100, emEstoque: true },
    { nome: 'Mouse intelbrass GTI', preco: 50, emEstoque: false },
    { nome: 'Cadeira Gamer', preco: 600, emEstoque: true },
    { nome: 'Teclado Asus', preco: 100, emEstoque: true },
    { nome: 'Teclado Robotic', preco: 100, emEstoque: true },
];

// Adicionar um novo produto ao inventário
inventario.push({ nome: 'Cadeira Gamer', preco: 1200, emEstoque: true });

// Remover o último produto do inventário
inventario.pop();

// Modificar o preço de um produto existente
inventario[0].preco = 120;

// Marcar um produto como fora de estoque
inventario[2].emEstoque = false;

// Exibir todos os produtos em estoque
for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].emEstoque) {
        console.log(inventario[i].nome + ' está em estoque.');
    }
}

// Remover produtos fora de estoque
let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
console.log(produtosEmEstoque);
