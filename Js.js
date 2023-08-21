const botaoGerarGato = document.getElementById("botaoGerarGato");
const imagem = document.getElementById("imagem");

botaoGerarGato.addEventListener("click", async () => {
    try {
        // faz uma solicitação p API "The Cat API" para obter uma imagem de gato
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await response.json(); // Converte a resposta da API em formato JSON
        
        if (data && data.length > 0) { // Ve se tem a imagem retornada da API
            const imageUrl = data[0].url; // pega a URL da imagem
            imagem.src = imageUrl; // Define o atributo "src" da imagem no elemento HTML para a URL da imagem do gato

        } else { // Caso não haja dados de imagem, define o atributo "src" da imagem como "#"
            imagem.src = "#";
        }
    } catch (error) { // Em caso de erro na solicitação à API, exibe uma mensagem de erro
        console.error("Error fetching cat image:", error);
        imagem.src = "#"; // Define o atributo "src" da imagem como "#" para limpar a imagem exibida
    } 
});

