var TempoReset = null //armazena a chamada da function TimeOut

//Função serve para pegar o nível selecionado pelo usuário é atribuir a ele uma localização especifica na página. Vale ressaltar que seu uso com a (?) ex: "index.html?" é fundamental.

function iniciaJogo (){
    var nivel_jogo = document.getElementById("niveljogo").value;
    
    window.location.href = "jogo.html?" + nivel_jogo;
}

//Função quando entra na tela principal do jogo.

function start(){

    //window.location.search significa: pegará a localização da janela após o ícone (?) colocado no "window.location.href" da function iniciaJogo()

    var urlpgna = window.location.search;
    var nivel_jogo = urlpgna.replace("?",""); //Substitui o ? por "NADA" para não ficar aparecendo ?2 ou ?1...

    var tempo_segundos = 0;

    if (nivel_jogo == 1){
        tempo_segundos = 120;
    }
    if (nivel_jogo == 2){
        tempo_segundos = 60;
    }
    if (nivel_jogo == 3){
        tempo_segundos = 10;
    }

    //Inserindo segundos dentro do SPAN

    document.getElementById("cronometro").innerHTML = tempo_segundos;

    //Criar balões

    var qtd_baloes = 99

    cria_baloes(qtd_baloes);

    //Imprimir qtd de balões inteiros

    document.getElementById("contagem1").innerHTML = qtd_baloes;
    document.getElementById("contagem2").innerHTML = 0;

    contagem_regressiva(tempo_segundos + 1);

}

function cria_baloes(qtd_baloes){

    for(var i = 1; i<=qtd_baloes; i++){
        var balao = document.createElement("img");
        balao.src = "imagens/balao_azul_pequeno.png";
        balao.style.margin = "12px";

        /* Objeto document.getElementById pegará o cenário do html
        Enquanto o AppendChield (DOM) criará parentescos dentro do html */ 
        document.getElementById("cenario").appendChild(balao);    
    }
}

function contagem_regressiva(tempo){

    tempo = tempo - 1

    if(tempo == -1){
        clearTimeout(TempoReset);
        game_over();

        return false;
    }

    document.getElementById("cronometro").innerHTML = tempo

    TempoReset = setTimeout("contagem_regressiva("+tempo+")",1000);

}

function game_over(){
    alert("Fim de Jogo \nVocê não conseguiu estourar todos os balões a tempo")

}