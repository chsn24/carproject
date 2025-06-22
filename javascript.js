let listaCarros = [
    {
        nome: "Bronco Sport",
        img: "img/hero-car-1.avif",
        descrição: "Ford Bronco Sport, um SUV imbatível. Performance e capacidade off-road excepcionais, tecnologia, conectividade e segurança para superar todo tipo de desafio: dentro e fora de estrada."
    },
    {
        nome: "Maverick",
        img: "img/hyundai.avif",
        descrição: "Esportiva, versátil, conectada e com a robustez da família Raça Forte."
    },
    {
        nome: "Mustang",
        img: "img/mustang.avif",
        descrição: "Potência, torque, tecnologia e conectividade como você nunca viu."
    },
    {
        nome: "Mustang Mach-E",
        img: "img/mustangmach-e.avif",
        descrição: "Performance, tecnologia e design que só um ícone como o Mustang pode oferecer."
    },
    {
        nome: "Nova Ranger",
        img: "img/novaranger.avif",
        descrição: "Robustez, Tecnologia e Novas Experiências Ford. A revolução do segmento."
    },
    {
        nome: "Novo Territory",
        img: "img/novoterritory.avif",
        descrição: "Um novo conceito de design, conforto, tecnologia e segurança."
    }
];

// Adiciona os cards dinamicamente
listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
    <div class="col-md-4">
        <div class="card m-2">
            <img src="${carro.img}" class="card-img-top mx-auto d-block" alt="...">
            <div class="card-body d-flex flex-column align-items-center">
                <h5 class="card-title">${carro.nome}</h5>
                <div class="text-center mt-auto">
                    <a href="#" class="btn btn-secondary" onClick="zoomImg('${posicao}')">
                        <i class="bi bi-zoom-in"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `;
});

// Corrige a função zoomImg
function zoomImg(posicao) {
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome; // Corrigido para innerHTML
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descrição; // Corrigido para innerHTML
    document.getElementById("imgModal").src = carroSelecionado.img; // Atualiza a imagem corretamente

    // Corrigido o seletor do modal
    new bootstrap.Modal('#zoomImg').show();
}

function alterarTemaSite() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    let botao = document.getElementById("alterarTemaSite");

    if (tema === "dark") {
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        botao.innerHTML = '<i class="bi bi-moon-fill"></i>';
    } else {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        botao.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    }
}
