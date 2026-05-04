let frases = [
    "Abrace a \"nova vida\", Pollux. - Castorice",

    "Eu vim, eu vi, eu conquistei. - Cerydra",

    "As ondulações das memórias estão esperando para serem despertadas pelo beijo de uma estrela cadente... - Cyrene",

    "Que esta luz tênue dissipe a escuridão e traga de volta céus limpos mais uma vez! - Hyacine",

    "Não se preocupe... Apenas feche os olhos... - Evernight",

    "Assim, o seu destino e o meu se tornam um só. - Aglea",

    "Com este poder divino, eu extraio a pureza do mundo para forjar tudo novamente! - Anaxa",

    "Uma mentira em que todos acreditam se torna realidade... Peguei você~ - Cipher",

    "Calamidade desfeita. Elevando-se acima das terras. Isto é permanência! - Dan Heng",

    "Neste eterno deleite do abismo, seus gritos ecoam. - Hysilens",

    "Eu permito que você aceite sua punição! - Mydei",

    "A fúria de inúmeras Chamas do Núcleo, consumam-me! - Phainon",

    "Cavalgando o vento oeste, lá vamos nós~ - Tribbie"
];

let cliques = 0; //contador das frases 

function gerarFrases(){
    //sorteia uma 
    let indice = Math.floor(Math.random()* frases.length);

    let fraseEscolida = frases[indice]; // pega a frase

    cliques= cliques+1; //aumenta o contador de 1 em 1 

    document.getElementById("frase").innerText =
    fraseEscolida;

    document.getElementById("contador").innerText = "frasegeradas:"+cliques; 
}