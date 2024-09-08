const produtosAgricola = [
    {   
        modelo: "agrícola",
        nome: "parafuso navalha quadrado",
        imagem: "images/agricola_01.jpeg",
        descricao: "são utilizados na fixação das navalhas das colheitadeiras.",
        acabamento: "bicromatizado",
        chave: "sem informação",
        passoRosca: "1",
        sistemaRosca: "ma",
        rosca: "inteira",
        tipoCabeça: "quadrada",
        material: "aço médio carbono",
        resistencia: "classe 10.9"
    },
    
    {   
        modelo: "agrícola",
        nome: "parafuso navalha abaulado recartilhado fendado",
        imagem: "images/agricola_02.jpeg",
        descricao: "são utilizados na fixação das navalhas das colheitadeiras.",
        acabamento: "bicromatizado",
        chave: "sem informação",
        passoRosca: "1",
        sistemaRosca: "ma",
        rosca: "inteira",
        tipoCabeça: "abaulada",
        material: "aço médio carbono",
        resistencia: "classe 8.8"
    },
    
    {
        modelo: "agrícola",
        nome: "parafuso frances",
        imagem: "images/agricola_03.jpeg",
        descricao: "possuem diversas aplicações, mas são largamente utilizados em máquinas e implementos agrícolas.",
        acabamento: "bicromatizado",
        chave: "depende da espessura",
        passoRosca: "1",
        sistemaRosca: "ma",
        rosca: "inteira",
        tipoCabeça: "lentilha",
        material: "aço médio carbono",
        resistencia: "classe 8.8"
    },
    
    {
        modelo: "agrícola",
        nome: "parafuso esteira de trator",
        imagem: "images/agricola_04.jpeg",
        descricao: "utilizado para a fixação em esteiras de tratores diversos",
        acabamento: "enegrecido de têmpera",
        chave: "15/16",
        passoRosca: "18 f.p.p",
        sistemaRosca: "unf",
        rosca: "parcial",
        tipoCabeça: "sextavada",
        material: "aço médio carbono",
        resistencia: "classe 12.9"
    },
    
    {
        modelo: "agrícola",
        nome: "parafuso faca forrageira",
        imagem: "images/agricola_05.jpeg",
        descricao: "utilizados para a fixação das facas em trituradores de cana, ração, cereais em geral",
        acabamento: "enegrecido de têmpera",
        chave: "5/8",
        passoRosca: "20 f.p.p",
        sistemaRosca: "unf",
        rosca: "parcial",
        tipoCabeça: "sextavada",
        material: "aço médio carbono",
        resistencia: "grau 5"
    },
    
    {
        modelo: "agrícola",
        nome: "conjunto para roda trator",
        imagem: "images/agricola_06.jpeg",
        descricao: "é utilizado na fixação da roda traseira de diversos tratores",
        acabamento: "bicromatizado",
        chave: "1.1/16",
        passoRosca: "18 f.p.p",
        sistemaRosca: "unf",
        rosca: "parcial",
        tipoCabeça: "cilíndrica",
        material: "aço médio carbono",
        resistencia: "grau 5"
    },
    
    {
        modelo: "agrícola",
        nome: "parafuso arado tipo a3",
        imagem: "images/agricola_07.jpeg",
        descricao: "utilizados em implementos agrícolas para a fixação dos discos de arado",
        acabamento: "polido",
        chave: "depende da espessura",
        passoRosca: "depende da espessura",
        sistemaRosca: "unc",
        rosca: "inteira",
        tipoCabeça: "chata",
        material: "aço baixo carbono",
        resistencia: "sae j429"
    },
    
    {
        modelo: "agrícola",
        nome: "parafuso arado tipo b1",
        imagem: "images/agricola_08.jpeg",
        descricao: "utilizados em implementos agrícolas para a fixação dos discos de arado",
        acabamento: "polido",
        chave: "1/2",
        passoRosca: "12 f.p.p",
        sistemaRosca: "bsw",
        rosca: "inteira",
        tipoCabeça: "chata",
        material: "aço baixo carbono",
        resistencia: "sae j429"
    }
       
];

const produtosAutomotivo = [
    {
        modelo: "automotivo",
        nome: "conjunto cardan",
        imagem: "images/automotivo_01.jpeg",
        descricao: "são utilizados exclusivamente para a fixação do eixo cardan",
        acabamento: "enegrecido de têmpera",
        chave: "17 mm",
        passoRosca: "depende da espessura",
        sistemaRosca: "mb",
        rosca: "parcial",
        tipoCabeça: "sextavada",
        material: "aço médio carbono",
        resistencia: "classe 10.9"
    },
    
    {
        modelo: "automotivo",
        nome: "parafuso auto atarraxante arruelado",
        imagem: "images/automotivo_02.jpeg",
        descricao: "utilizados em lataria, para a linha volkswagen",
        acabamento: "zincado branco",
        chave: "10 mm",
        passoRosca: "não possui",
        sistemaRosca: "autoatarraxante",
        rosca: "inteira",
        tipoCabeça: "sextavada",
        material: "aço baixo carbono",
        resistencia: "iso 2702"
    },
    
    {
        modelo: "automotivo",
        nome: "parafuso sextavado flageado",
        imagem: "images/automotivo_03.jpeg",
        descricao: "utilizados no mercado de reposição automotivo, em maquinas e equipamentos industriais",
        acabamento: "enegrecido de têmpera",
        chave: "depende da espessura",
        passoRosca: "depende da espessura",
        sistemaRosca: "ma",
        rosca: "parcial",
        tipoCabeça: "sextavada flangeada",
        material: "aço médio carbono",
        resistencia: "classe 8.8"
    },
    
    {
        modelo: "automotivo",
        nome: "parafuso sextavado flageado",
        imagem: "images/automotivo_04.jpeg",
        descricao: "utilizados no mercado de reposição automotivo, em maquinas e equipamentos industriais",
        acabamento: "zincado branco",
        chave: "depende da espessura",
        passoRosca: "depende da espessura",
        sistemaRosca: "ma",
        rosca: "inteira",
        tipoCabeça: "sextavada flangeada",
        material: "aço médio carbono",
        resistencia: "classe 8.8"
    }  
]

const produtosConstrucao = [
    {
        modelo: "construção",
        nome: "chumbador parabolt",
        imagem: "images/construcao_01.jpeg",
        descricao: "utilizados na construção civil em geral",
        acabamento: "zincado branco",
        chave: "depende da espessura",
        passoRosca: "depende da espessura",
        sistemaRosca: "unc",
        rosca: "inteira",
        tipoCabeça: "não possui",
        material: "aço baixo carbono",
        resistencia: "grau 1"
    },

    {
        modelo: "construção",
        nome: "chumbador cbc com prisioneiro",
        imagem: "images/construcao_02.jpeg",
        descricao: "utilizados na construção civil em geral",
        acabamento: "zincado branco",
        chave: "depende da espessura",
        passoRosca: "20 f.p.p",
        sistemaRosca: "unc",
        rosca: "inteira",
        tipoCabeça: "porca sextavada",
        material: "aço baixo carbono",
        resistencia: "grau 1"
    },

    {
        modelo: "construção",
        nome: "chumbador cbc com parafuso",
        imagem: "images/construcao_03.jpeg",
        descricao: "utilizados na construção civil em geral",
        acabamento: "zincado branco",
        chave: "depende da espessura",
        passoRosca: "20 f.p.p",
        sistemaRosca: "unc",
        rosca: "inteira",
        tipoCabeça: "sextavada",
        material: "aço baixo carbono",
        resistencia: "grau 1"
    },

    {
        modelo: "construção",
        nome: "parafuso sextavado rosca soberba",
        imagem: "images/construcao_04.jpeg",
        descricao: "utilizado para fixação de suportes tipo gancho em madeiramento de telhados",
        acabamento: "zincado",
        chave: "depende da espessura",
        passoRosca: "não possui",
        sistemaRosca: "rosca soberba",
        rosca: "parcial",
        tipoCabeça: "sextavada",
        material: "aço inox",
        resistencia: "aisi 304"
    },
    
    {
        modelo: "construção",
        nome: "parafuso telha ponta 17 com arruela de vedação",
        imagem: "images/construcao_05.jpeg",
        descricao: "utilizado para fixação de suportes tipo gancho em madeiramento de telhados",
        acabamento: "ruspert",
        chave: "5/16",
        passoRosca: "não possui",
        sistemaRosca: "autoperfurante",
        rosca: "inteira",
        tipoCabeça: "sextavada flangeada",
        material: "aço baixo carbono",
        resistencia: "iso 10666"
    }
]