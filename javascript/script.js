
let palavraSecretaSorteada;
let palavraSecretaCategoria;
let tentativas = 6;
let palavraSecretaPorLetra
let listaDinamica=[]

const palavras = [ // Primeira coisa a se fazer nesse caso é criar uma lista de objetos
    palavra001= {//aqui vou colocar 2 propriedades para esse objeto
    nome: "IRLANDA",
    categoria:"PAÍS"
    },

    palavra002= {
    nome :"ANGOLA",
    categoria : "PAÍS"
    }, 

    palavra003= {
    nome : "ARGENTINA",
    categoria : "PAÍS"
    },

    palavra004= {
    nome : "BELGICA",
    categoria : "PAÍS"
    }, 
    
    palavra005= {
        nome :"BOSNIA",
        categoria : "PAÍS"
    },

    palavra006= {
    nome :"BIELORRUSSIA",
    categoria : "PAÍS"
    },
    palavra007= {
    nome : "CHILE",
    categoria : "PAÍS"
    }, 

    palavra008= {
    nome : "EGITO",
    categoria : "PAÍS"
    },

    palavra009= {
    nome :"FILIPINAS",
    categoria :"PAÍS"
    },

    palavra010= {
    nome : "GRECIA",
    categoria : "PAÍS"
    },

    palavra011= {
    nome : "HAITI",
    categoria : "PAÍS"
    },

    palavra012= {
    nome :"INDONESIA",
    categoria :"PAÍS"
    },

    palavra013= {
    nome : "JAMAICA",
    categoria : "PAÍS"
    },

    palavra014= {
    nome : "LETONIA",
    categoria :"PAÍS"
    },

    palavra015= {
    nome : "MARROCOS",
    categoria : "PAÍS"
    },

    palavra016= {
    nome : "MONGOLIA",
    categoria : "PAÍS"
    },

    palavra017= {
     nome : "NAMÍBIA",
    categoria : "PAÍS"
    },
    palavra018= {
    nome :"PAQUISTAO",
    categoria : "PAÍS"
    },
    
    palavra019= {
    nome :"PORTUGAL",
    categoria : "PAÍS"
    },
    
    palavra020= {
    nome : "SENEGAL",
    categoria : "PAÍS"
    },

    palavra021= {
    nome : "SURINAME",
    categoria : "PAÍS"
    },
    palavra022= {
    nome : "TURQUIA",
    categoria : "PAÍS"
    },

    palavra023= {
    nome : "UGANDA",
    categoria : "PAÍS"
    },

    palavra024= {
    nome : "VENEZUELA",
    categoria : "PAÍS"
    },

    palavra025= {
    nome :"VIETNAME",
    categoria : "PAÍS"
    },
    palavra026= {
    nome : "ZINBABUE",
    categoria : "PAÍS"
    },

    palavra027= {
    nome: "ABACATE",
    categoria :"FRUTA"
    },

    palavra028= {
    nome: "CAJA",
    categoria : "FRUTA"
    },

    palavra029= [
    nome= "CARAMBOLA",
    categoria = "FRUTA"
    ],

    palavra030= {
    nome:"CUPUAÇU",
    categoria :"FRUTA"
    },

    palavra031= {
    nome: "FIGO",
    categoria : "FRUTA"
    },

    palavra032= {
    nome:"GROSELHA",
    categoria : "FRUTA"
    },

    palavra033= {
    nome: "JAMBO",
    categoria : "FRUTA"
    },

    palavra034= {
    nome:"JENIPAPO",
    categoria: "FRUTA"
    },

    palavra035= {
    nome: "MANGABA",
    categoria: "FRUTA"
    },

    palavra036= {
    nome: "MARACUJÁ",
    categoria: "FRUTA"
    },

    palavra037= {
    nome: "PITANGA",
    categoria: "FRUTA"
    },
    palavra038= {
    nome: "PITAYA",
    categoria: "FRUTA"
    },

    palavra039= {
    nome: "SIRIGUELA",
    categoria: "FRUTA"
    },

    palavra040= {
    nome: "TAMARINDO",
    categoria: "FRUTA"
    },

    palavra041= {
    nome: "BERGAMOTA",
    categoria: "FRUTA"
    },

    palavra042= {
    nome: "TANGERINA",
    categoria: "FRUTA"
    },

    palavra043= {
    nome: "AZUL",
    categoria: "COR"
    },

    palavra044= {
    nome: "AMARELO",
    categoria: "COR"
    },

    palavra045= {
    nome: "LARANJA",
    categoria: "COR"
    },

    palavra046= {
    nome: "VIOLETA",
    categoria: "COR"
    },

    palavra047= {
    nome: "CANELA",
    categoria: "COR"
    },

    palavra048= {
    nome: "COBRE",
    categoria: "COR"
    },

    palavra049= {
    nome: "FUCSIA",
    categoria: "COR"
    },

    palavra050= {
    nome: "LIMAO",
    categoria: "COR"
    },

    palavra051= {
    nome: "MAGENTA",
    categoria: "COR"
    },

    palavra052= {
    nome: "MARFIM",
    categoria: "COR"
    },

    palavra053= {
    nome: "PRETO",
    categoria: "COR"
    },

    palavra054= {
    nome: "ROXO",
    categoria: "COR"
    },

    palavra055= {
    nome: "EMPADA" ,
    categoria: "COMIDA"
    },

    palavra056= {
    nome: "PAMONHA" ,
    categoria: "COMIDA"
    },

    palavra057= {
    nome: "FEIJAO" ,
    categoria: "COMIDA"
    },

    palavra058= {
    nome: "FEIJOADA" ,
    categoria: "COMIDA"
    },

    palavra059= {
    nome: "PARMEDIANA" ,
    categoria: "COMIDA"
    },

    palavra060= {
    nome: "STROGONOFF" ,
    categoria: "COMIDA"
    },

    palavra061= {
    nome: "LINGUIÇA" ,
    categoria: "COMIDA"
    },

    palavra062= {
    nome: "MACARRONADA" ,
    categoria: "COMIDA"
    },

    palavra063= {
    nome: "BISCOITO" ,
    categoria: "COMIDA"
    },

    palavra064= {
    nome: "COUVE" ,
    categoria:"COMIDA"
    },

    palavra065= {
    nome: "QUEIJO" ,
    categoria: "COMIDA"
    }
];


//sorteia a palavra secreta e sua categoria
criarPalavraSecreta();
function criarPalavraSecreta(){
    // gera um indice aleatório entre 0 e 65 para servir de apoio na escolha da palavra que está na lista
    const indexPalavra = parseInt(Math.random() * palavras.length);
    // passa o indice sorteado para a lista referenciar a palavra Secreta


    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
}

// cria uma lista com a palavra secreta separado na lista por cada letra
//palavraSecretaPorLetra = palavraSecretaSorteada.split('');  

// monta a quantidade de espaços da palavra na tela
// montarPalavraNaTela(palavraSecretaPorLetra)
montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta"); 
    palavraTela.innerHTML = " ";


    for(i = 0; i < palavraSecretaSorteada.length; i++){ 
        if(listaDinamica[i] == undefined){
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " "
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>"+ listaDinamica[i] +"</div>"   
            }
            else{
                listaDinamica[i] = "&nbsp"
              palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"
            }    
         } 
         else{  
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " "
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>"+ listaDinamica[i] +"</div>"    
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>" 
            }
              
         }  
    }    
} 

function verifiqueLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled= true;
    if (tentativas > 0 ){
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra);
        montarPalavraNaTela();
        
    }if(tentativas == 0){
        alert("Você perdeu! A palavra secreta sorteada era " + palavraSecretaSorteada)
        location.reload();
    }else{
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                 listaDinamica[i] = palavraSecretaSorteada[i];      
            }    
       }   
    } 
    let vitoria = true;
    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] != palavraSecretaSorteada[i]) { 
             vitoria = false
        }
    }
    if(vitoria == true){ 
       alert("PARABÉNS!Você venceu!") 
        tentativas = 0;
        location.reload();
        
    }
    
    
} 



function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#4f0995"
}


function comparaListas(letra){ // caso erre vai cair nessa condição
    const pos = palavraSecretaSorteada.indexOf(letra);
    if(pos < 0){
        tentativas-- //se a letra nao tiver na palavra sorteada vai aparecer no boneco
        carregaImagemForca()
    }
    else{ //se ele acertou vou criar o for
        for (i = 0; i < palavraSecretaSorteada.length; i++)
        {
            if (palavraSecretaSorteada[i] == letra ){ // se a palavra sorteada na posição i for igual a letra a minha lista dinamica vai receber a letra
                listaDinamica[i] = letra;
            }
        }
    }

    
    
       
    

}

function carregaImagemForca() {
    switch(tentativas){
        
        
        case 5: //se eu tiver 5 tentativas quero que a imagem que apareça seja a que esta abaixo
            document.getElementById("imagem").style.background = "url('../jogoforca/img/forca01.png')"
            break;
        
        case 4: //se eu tiver 5 tentativas quero que a imagem que apareça seja a que esta abaixo
            document.getElementById("imagem").style.background = "url('../jogoforca/img/forca02.png')"
            break;
        
        case 3: //se eu tiver 5 tentativas quero que a imagem que apareça seja a que esta abaixo
            document.getElementById("imagem").style.background = "url('../jogoforca/img/forca03.png')"
            break;

        case 2: //se eu tiver 5 tentativas quero que a imagem que apareça seja a que esta abaixo
            document.getElementById("imagem").style.background = "url('../jogoforca/img/forca04.png')"
            break;

        case 1: //se eu tiver 5 tentativas quero que a imagem que apareça seja a que esta abaixo
            document.getElementById("imagem").style.background = "url('../jogoforca/img/forca05.png')"
            break;

        case 0: //se eu tiver 5 tentativas quero que a imagem que apareça seja a que esta abaixo
            document.getElementById("imagem").style.background = "url('../jogoforca/img/forca06.png')"
            break;

        
        default:
            document.getElementById("imagem").style.background = "url('../jogoforca/img/forca01.png')"
            
        
        break;
    }
}

    

