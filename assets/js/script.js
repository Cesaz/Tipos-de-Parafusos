function pesquisar() {
    let campoPesquisa = document.getElementById("campo_pesquisa").value;
    let resultadoPesquisa = "";
    campoPesquisa.toLowerCase();

    if(!campoPesquisa) {
        alert("Nada foi encontrado. Tente Novamente!!!");
        return
    }

    for(let info of [...produtosAgricola, ...produtosAutomotivo, ...produtosConstrucao]) {
        if(info.modelo.includes(campoPesquisa) || info.nome.includes(campoPesquisa)) {
            section.innerHTML = "";
            resultadoPesquisa += `
            
            <div class="principal">                 
                <div class="geral">
                    <div><h2 class="titulo">${info.modelo}</h2></div>
                    <div class="produtos_informacoes">
                        <div class="produtos" style="background-image: url('${info.imagem}'); background-size: cover;">
                            <p class="nome_produto">${info.nome}</p>
                        
                            <div class="descricao_produto"><p>${info.descricao}</p></div>
                        </div>
                        <div class="informacoes">
                            <div class="informacao_1">
                                <p>ACABAMENTO</p>
                                <p>CHAVE</p>
                                <p>PASSO DE ROSCA</p>
                                <p>SISTEMA DE ROSCA</p>
                                <p>ROSCA</p>
                                <p>TIPO DE CABEÇA</p>
                                <p>MATERIAL</p>
                                <p>RESISTÊNCIA</p>
                            </div>
                            <div class="informacao_2">
                                <p>${info.acabamento}</p>
                                <p>${info.chave}</p>
                                <p>${info.passoRosca}</p>
                                <p>${info.sistemaRosca}</p>
                                <p>${info.rosca}</p>
                                <p>${info.tipoCabeça}</p>
                                <p>${info.material}</p>
                                <p>${info.resistencia}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }
    section.innerHTML = resultadoPesquisa;
}

let section = document.getElementById("area_geral");
let resultados = "";

for(let info of [...produtosAgricola, ...produtosAutomotivo, ...produtosConstrucao]) {
    resultados += `

    <div class="principal">                 
        <div class="geral">
            <div><h2 class="titulo">${info.modelo}</h2></div>
            <div class="produtos_informacoes">
                <div class="produtos" style="background-image: url('${info.imagem}'); background-size: cover;">
                    <p class="nome_produto">${info.nome}</p>
                    
                    <div class="descricao_produto"><p>${info.descricao}</p></div>
                </div>
                <div class="informacoes">
                    <div class="informacao_1">
                        <p>ACABAMENTO</p>
                        <p>CHAVE</p>
                        <p>PASSO DE ROSCA</p>
                        <p>SISTEMA DE ROSCA</p>
                        <p>ROSCA</p>
                        <p>TIPO DE CABEÇA</p>
                        <p>MATERIAL</p>
                        <p>RESISTÊNCIA</p>
                    </div>
                    <div class="informacao_2">
                        <p>${info.acabamento}</p>
                        <p>${info.chave}</p>
                        <p>${info.passoRosca}</p>
                        <p>${info.sistemaRosca}</p>
                        <p>${info.rosca}</p>
                        <p>${info.tipoCabeça}</p>
                        <p>${info.material}</p>
                        <p>${info.resistencia}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}
section.innerHTML = resultados;