const produtosAgricola = [
    {   
        modelo: "AGRÍCOLA",
        nome: "PARAFUSO NAVALHA QUADRADO",
        imagem: "",
        descricao: "São utilizados na fixação das navalhas das colheitadeiras.",

        acabamento: "BICROMATIZADO",
        sistemaRosca: "MA",
        rosca: "INTEIRA",
        tipoCabeça: "QUADRADA",
        material: "AÇO MÉDIO CARBONO",
        resistencia: "CLASSE 10.9"
    },

    {   
        modelo: "AGRÍCOLA",
        nome: "PARAFUSO NAVALHA ABAULADO RECARTILHADO FENDADO",
        imagem: "",
        descricao: "São utilizados na fixação das navalhas das colheitadeiras.",

        acabamento: "BICROMATIZADO",
        sistemaRosca: "MA",
        rosca: "INTEIRA",
        tipoCabeça: "ABAULADA",
        material: "AÇO MÉDIO CARBONO",
        resistencia: "CLASSE 8.8"
    },

    {
        modelo: "AGRÍCOLA",
        nome: "PARAFUSO FRANCES",
        imagem: "",
        descricao: "Possuem diversas aplicações, mas são largamente utilizados em máquinas e implementos agrícolas.",

        acabamento: "BICROMATIZADO",
        sistemaRosca: "MA",
        rosca: "INTEIRA",
        tipoCabeça: "LENTILHA",
        material: "AÇO MÉDIO CARBONO",
        resistencia: "CLASSE 8.8"
    },

    {
        modelo: "AGRÍCOLA",
        nome: "PARAFUSO ESTEIRA DE TRATOR",
        imagem: "",
        descricao: "UTILIZADO PARA A FIXAÇÃO EM ESTEIRAS DE TRATORES DIVERSOS",

        acabamento: "ENEGRECIDO DE TÊMPERA",
        chave: "15/16",
        passoRosca: "18 F.P.P",
        sistemaRosca: "UNF",
        rosca: "PARCIAL",
        tipoCabeça: "SEXTAVADA",
        material: "AÇO MÉDIO CARBONO",
        resistencia: "CLASSE 12.9"
    },

    {
        modelo: "AGRÍCOLA",
        nome: "PARAFUSO FACA FORRAGEIRA",
        imagem: "",
        descricao: "UTILIZADOS PARA A FIXAÇÃO DAS FACAS EM TRITURADORES DE CANA, RAÇÃO, CEREAIS EM GERAL",

        acabamento: "ENEGRECIDO DE TÊMPERA",
        chave: "5/8",
        passoRosca: "20 F.P.P",
        sistemaRosca: "UNF",
        rosca: "PARCIAL",
        tipoCabeça: "SEXTAVADA",
        material: "AÇO MÉDIO CARBONO",
        resistencia: "GRAU 5"
    },

    {
        modelo: "AGRÍCOLA",
        nome: "PARAFUSO SEXTAVADO P/ESTEIRA",
        imagem: "",
        descricao: "UTILIZADO PARA A FIXAÇÃO EM ESTEIRAS DE TRATORES DIVERSOS",

        acabamento: "ENEGRECIDO DE TÊMPERA",
        chave: "15/16",
        passoRosca: "18 F.P.P",
        sistemaRosca: "UNF",
        rosca: "PARCIAL",
        tipoCabeça: "SEXTAVADA",
        material: "AÇO MÉDIO CARBONO",
        resistencia: "CLASSE 12.9"
    },

    {
        modelo: "AGRÍCOLA",
        nome: "CONJUNTO PARA RODA TRATOR",
        imagem: "",
        descricao: "É UTILIZADO NA FIXAÇÃO DA RODA TRASEIRA  DE DIVERSOS TRATORES",

        acabamento: "BICROMATIZADO",
        chave: "1.1/16",
        passoRosca: "18 F.P.P",
        sistemaRosca: "UNF",
        rosca: "PARCIAL",
        tipoCabeça: "CILÍNDRICA",
        material: "AÇO MÉDIO CARBONO",
        resistencia: "GRAU 5"
    },

    {
        modelo: "AGRÍCOLA",
        nome: "PARAFUSO ARADO TIPO A3",
        imagem: "",
        descricao: "UTILIZADOS EM IMPLEMENTOS AGRÍCOLAS PARA A FIXAÇÃO DOS DISCOS DE ARADO",

        acabamento: "POLIDO",
        chave: [{}],
        passoRosca: [{}],
        sistemaRosca: "UNC",
        rosca: "INTEIRA",
        tipoCabeça: "CHATA",
        material: "AÇO BAIXO CARBONO",
        resistencia: "SAE J429"
    },

    {
        modelo: "AGRÍCOLA",
        nome: "PARAFUSO ARADO TIPO B1",
        imagem: "",
        descricao: "UTILIZADOS EM IMPLEMENTOS AGRÍCOLAS PARA A FIXAÇÃO DOS DISCOS DE ARADO",

        acabamento: "POLIDO",
        chave: "",
        passoRosca: "12 F.P.P",
        sistemaRosca: "BSW",
        rosca: "INTEIRA",
        tipoCabeça: "CHATA",
        material: "AÇO BAIXO CARBONO",
        resistencia: "SAE J429"
    }
];

const produtosAutomotivo = [
    {
        modelo: "AUTOMOTIVO",
        nome: "CONJUNTO CARDAN",
        imagem: "",
        descricao: "SÃO UTILIZADOS EXCLUSIVAMENTE PARA A FIXAÇÃO DO EIXO CARDAN",

        acabamento: "ENEGRECIDO DE TÊMPERA",
        chave: "17 MM",
        passoRosca: [{}],
        sistemaRosca: "MB",
        rosca: "PARCIAL",
        tipoCabeça: "SEXTAVADA",
        material: "AÇO MÉDIO CARBONO",
        resistencia: "CLASSE 10.9"
    },

    {
        modelo: "AUTOMOTIVO",
        nome: "PARAFUSO AUTO ATARRAXANTE ARRUELADO",
        imagem: "",
        descricao: "UTILIZADOS EM LATARIA, PARA A LINHA VOLKSWAGEN",

        acabamento: "ZINCADO BRANCO",
        chave: "10 MM",
        passoRosca: "",
        sistemaRosca: "AUTOATARRAXANTE",
        rosca: "INTEIRA",
        tipoCabeça: "SEXTAVADA",
        material: "AÇO BAIXO CARBONO",
        resistencia: "ISO 2702"
    },

    {
        modelo: "AUTOMOTIVO",
        nome: "PARAFUSO SEXTAVADO FLAGEADO",
        imagem: "",
        descricao: "UTILIZADOS NO MERCADO DE REPOSIÇÃO AUTOMOTIVO, EM MAQUINAS E EQUIPAMENTOS INDUSTRIAIS",

        acabamento: "ENEGRECIDO DE TÊMPERA",
        chave: [{}],
        passoRosca: [{}],
        sistemaRosca: "MA",
        rosca: "PARCIAL",
        tipoCabeça: "SEXTAVADA FLANGEADA",
        material: "AÇO MÉDIO CARBONO",
        resistencia: "CLASSE 8.8"
    },

    {
        modelo: "AUTOMOTIVO",
        nome: "PARAFUSO SEXTAVADO FLAGEADO",
        imagem: "",
        descricao: "UTILIZADOS NO MERCADO DE REPOSIÇÃO AUTOMOTIVO, EM MAQUINAS E EQUIPAMENTOS INDUSTRIAIS",

        acabamento: "ZINCADO BRANCO",
        chave: [{}],
        passoRosca: [{}],
        sistemaRosca: "MA",
        rosca: "INTEIRA",
        tipoCabeça: "SEXTAVADA FLANGEADA",
        material: "AÇO MÉDIO CARBONO",
        resistencia: "CLASSE 8.8"
    }
]