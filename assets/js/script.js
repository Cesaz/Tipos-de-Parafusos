// atualiza a página para mostrar somente os dados referentes aos parafusos de uso agrícola.
function agricola() {
    let agricolaResult = "";

    for(let info of produtosAgricola) {
        section.innerHTML = "";
        agricolaResult += `
    
        <div class="principal">                 
            <div class="geral">
                <div><h2 class="titulo">${info.modelo}</h2></div>
                <div class="produtos_informacoes">
                    <div class="produtos" style="background-image: url('${info.imagem}'); background-size: cover;">
                        <p class="nome_produto"><a href="${info.link}" target="_blank">${info.nome}</a></p>
                        
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
    section.innerHTML = agricolaResult;
}

// atualiza a página para mostrar somente os dados referentes aos parafusos de uso automotivo.
function automotivo() {
    let automotivoResult = "";

    for(let info of produtosAutomotivo) {
        section.innerHTML = "";
        automotivoResult += `
    
        <div class="principal">                 
            <div class="geral">
                <div><h2 class="titulo">${info.modelo}</h2></div>
                <div class="produtos_informacoes">
                    <div class="produtos" style="background-image: url('${info.imagem}'); background-size: cover;">
                        <p class="nome_produto"><a href="${info.link}" target="_blank">${info.nome}</a></p>
                        
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
    section.innerHTML = automotivoResult;
}

// atualiza a página para mostrar somente os dados referentes aos parafusos de uso em contrução.
function construcao() {
    let construcaoResult = "";

    for(let info of produtosConstrucao) {
        section.innerHTML = "";
        construcaoResult += `
    
        <div class="principal">                 
            <div class="geral">
                <div><h2 class="titulo">${info.modelo}</h2></div>
                <div class="produtos_informacoes">
                    <div class="produtos" style="background-image: url('${info.imagem}'); background-size: cover;">
                        <p class="nome_produto"><a href="${info.link}" target="_blank">${info.nome}</a></p>
                        
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
    section.innerHTML = construcaoResult;
}

// atualiza a página para mostrar somente os dados referentes aos parafusos de uso em bicicletas.
function bike() {
    let bikeResult = "";

    for(let info of produtosBike) {
        section.innerHTML = "";
        bikeResult += `
    
        <div class="principal">                 
            <div class="geral">
                <div><h2 class="titulo">${info.modelo}</h2></div>
                <div class="produtos_informacoes">
                    <div class="produtos" style="background-image: url('${info.imagem}'); background-size: cover;">
                        <p class="nome_produto"><a href="${info.link}" target="_blank">${info.nome}</a></p>
                        
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
    section.innerHTML = bikeResult;
}

// atualiza a página para mostrar somente os dados referentes aos parafusos de uso em coberturas.
function cobertura() {
    let coberturaResult = "";

    for(let info of produtosCobertura) {
        section.innerHTML = "";
        coberturaResult += `
    
        <div class="principal">                 
            <div class="geral">
                <div><h2 class="titulo">${info.modelo}</h2></div>
                <div class="produtos_informacoes">
                    <div class="produtos" style="background-image: url('${info.imagem}'); background-size: cover;">
                        <p class="nome_produto"><a href="${info.link}" target="_blank">${info.nome}</a></p>
                        
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
    section.innerHTML = coberturaResult;
}

// função que coleta o que foi digitado no campo de busca e realiza toda a atualização da página.
function pesquisar() {
    let campoPesquisa = document.getElementById("campo_pesquisa").value;
    let resultadoPesquisa = "";
    campoPesquisa.toLowerCase();

    // caso o campo esteja em branco ou com informação não existente
    if(!campoPesquisa) {
        alert("Nada foi encontrado. Tente Novamente!!!");
        return
    }
    // realiza a busca nos dados disponiveis, buscando informações referente ao que o usuário digitou no campo de pesquisa.
    for(let info of [...produtosAgricola, ...produtosAutomotivo, ...produtosConstrucao, ...produtosBike, ...produtosCobertura]) {
        if(info.modelo.includes(campoPesquisa)       || info.nome.includes(campoPesquisa)       || 
           info.descricao.includes(campoPesquisa)    || info.acabamento.includes(campoPesquisa) ||
           info.chave.includes(campoPesquisa)        || info.passoRosca.includes(campoPesquisa) ||
           info.sistemaRosca.includes(campoPesquisa) || info.rosca.includes(campoPesquisa)      ||
           info.tipoCabeça.includes(campoPesquisa)   || info.material.includes(campoPesquisa)   ||
           info.resistencia.includes(campoPesquisa)) {

            section.innerHTML = "";
            resultadoPesquisa += `
            
            <div class="principal">                 
                <div class="geral">
                    <div><h2 class="titulo">${info.modelo}</h2></div>
                    <div class="produtos_informacoes">
                        <div class="produtos" style="background-image: url('${info.imagem}'); background-size: cover;">
                            <p class="nome_produto"><a href="${info.link}" target="_blank">${info.nome}</a></p>
                        
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

// responsavel pelo carregamento padrão da página, carregando todas as informações contidas em dados.js
let section = document.getElementById("area_geral");
let resultados = "";

//realiza o carregamento de todas as informações contidas em dados.js
for(let info of [...produtosAgricola, ...produtosAutomotivo, ...produtosConstrucao, ...produtosBike, ...produtosCobertura]) {
    resultados += `

    <div class="principal">                 
        <div class="geral">
            <div><h2 class="titulo">${info.modelo}</h2></div>
            <div class="produtos_informacoes">
                <div class="produtos" style="background-image: url('${info.imagem}'); background-size: cover;">
                    <p class="nome_produto"><a href="${info.link}" target="_blank">${info.nome}</a></p>
                    
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