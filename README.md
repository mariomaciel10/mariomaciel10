# Hello, my name is Mario, I'm from General Sampaio, Brasil
# faço parte da melhor escola do mundo
# Depotado Roberto Masquita
<img src="https://media.tenor.com/gjJLNnVDRsoAAAAj/mario-mario-png.gif" style="display: block; margin-left: auto; margin-right: auto;"/> 

## tambem adoro pokemon

## sendo que meu inicial favorito e o suwampert

<img src="https://i.makeagif.com/media/4-22-2017/ZXXoLT.gif" style="display: block; margin-left: auto; margin-right: auto;"/> 
eu adoro pokemon sendo que esse seria meu time no competitivo

## meu time na ligue of pokemon
<div align="center" style="display: inline_block"><br>
  <img align="center" alt="Lala-Java" height="60" width="60" src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/494.png">
  <img align="center" alt="Lala-HTML" height="60" width="60" src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/260.png">
  <img align="center" alt="Lala-CSS" height="60" width="60" src="https://swordshield.pokemon.com/assets/img/articles/ex/pokemon_gurshifu_2x.png">
  <img align="center" alt="Lala-Js" height="60" width="60" src="https://img.pokemondb.net/sprites/ultra-sun-ultra-moon/normal/zeraora.png">
  <img align="center" alt="Lala-PHP" height="60" width="60" src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/715.png">
  <img align="center" alt="Lala-CPP" height="60" width="60" src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/681.png">
</div>

## Hobbies e gostos
- adoro pizza
- jogar volei
- coverssar sobre coisas de nerd
- frases inspiradoras
- e filmes que retratam sobre jesus
  

Ainda tem várias outras coisinhas que não lembro, então é só isso por enquanto.

## Entre em contato
<!--O que tá comentado por aqui vai ser ativado no futuro. Por enquanto não incluirei o Discord porque meu perfil por lá é literalmente uma piada.-->
Eu não sou muito de interagir ou fazer postagens em redes sociais, e agora estou tentando fe esforçar nos estudos.
<!--Seja pra conversar, tirar dúvidas, reclamar ou até mesmo chamar pra uma jogatina, é só chamar.-->
<div style="display:inline_block">
  <a href="https://www.instagram.com/piedromario7/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target=" _blank"></a>
  <a href="mailto:piedromario7@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <!--<a href="https://discord.com/users/563871206269255680/" target="_blank"><img src="https://dcbadge.vercel.app/api/shield/563871206269255680?style=for-the-badge&theme=discord-inverted" target=" _blank"></a>-->
</div>
<!-- <img src="https://discordapp.com/api/guilds/932906923236401182/widget.png?style=banner2" alt="Discord Banner 1"/> -->

## Status
<div align="center" style="display:flex; justify-content: space-evenly;">
  <a href="https://github.com/mariomaciel10/">
    <img height="200em" align="center" src="https://github-readme-stats.vercel.app/api?username=mariomaciel10&show_icons=true&theme=algolia&include_all_commits=true&count_private=true&locale=pt-br&border_radius=10&rank_icon=github"/>
    <img height="200em" align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=mariomaciel10&layout=compact&langs_count=7&theme=algolia&locale=pt-br&border_radius=10&"/>
  </a>

<!--![Snake animation](https://github.com/mariomaciel10/mariomaciel10/blob/output/python_so_que_azul_e_maluco.svg)
na vdd é amarelo :c--></div>
<img align="center" alt="" height="60" width="60" src="https://www.youtube.com/shorts/ZkN0LdB4iAQ?feature=share">
github-contribution-grid-snake.svg

[its-aewm-quq](https://meet.google.com/its-aewm-quq)

#define BOTAO_ATIVAR 2
#define BOTAO_DETECCAO 3
#define LED 8
#define BUZZER 9

enum Estado {
  DESATIVADO,
  ATIVADO,
  ALERTA
};

Estado estadoAtual = DESATIVADO;

bool ultimoBotaoAtivar = HIGH;
bool ultimoBotaoDeteccao = HIGH;

unsigned long tempoAnterior = 0;
unsigned long tempoNota = 0;

bool ledLigado = false;

int melodia[] = {
  587, 587, 0, 880,
  831, 784, 698, 587,
  698, 784, 523, 523,
  0, 880, 831, 784,
  698, 587, 698, 784
};

int duracoes[] = {
  200, 200, 150, 200,
  200, 200, 200, 200,
  200, 200, 200, 200,
  150, 200, 200, 200,
  200, 200, 200, 350
};

int notaAtual = 0;

void mudarEstado(int novoEstado) {

  if (estadoAtual == novoEstado) {
    return;
  }

  estadoAtual = (Estado)novoEstado;

  noTone(BUZZER);
  digitalWrite(LED, LOW);

  ledLigado = false;
  notaAtual = 0;

  tempoNota = millis();
  tempoAnterior = millis();

  if (estadoAtual == DESATIVADO) {
    Serial.println("Estado: DESATIVADO");
  }

  else if (estadoAtual == ATIVADO) {
    Serial.println("Estado: ATIVADO - Aguardando deteccao");
  }

  else if (estadoAtual == ALERTA) {
    Serial.println("Estado: ALERTA - Invasao detectada!");

    // Comeca a musica imediatamente
    tone(BUZZER, melodia[notaAtual]);
  }
}

void setup() {

  Serial.begin(9600);

  pinMode(BOTAO_ATIVAR, INPUT_PULLUP);
  pinMode(BOTAO_DETECCAO, INPUT_PULLUP);

  pinMode(LED, OUTPUT);
  pinMode(BUZZER, OUTPUT);

  Serial.println("Sistema de alarme iniciado.");
  Serial.println("Estado: DESATIVADO");
}

void loop() {

  bool botaoAtivar = digitalRead(BOTAO_ATIVAR);
  bool botaoDeteccao = digitalRead(BOTAO_DETECCAO);

  if (ultimoBotaoAtivar == HIGH && botaoAtivar == LOW) {

    if (estadoAtual == DESATIVADO) {
      mudarEstado(ATIVADO);
    } else {
      mudarEstado(DESATIVADO);
    }

    delay(200);
  }

  if (ultimoBotaoDeteccao == HIGH &&
      botaoDeteccao == LOW &&
      estadoAtual == ATIVADO) {

    mudarEstado(ALERTA);

    delay(200);
  }

  ultimoBotaoAtivar = botaoAtivar;
  ultimoBotaoDeteccao = botaoDeteccao;

  
  if (estadoAtual == ALERTA) {

    
    if (millis() - tempoAnterior >= 200) {

      tempoAnterior = millis();

      ledLigado = !ledLigado;

      digitalWrite(LED, ledLigado);
    }

    if (millis() - tempoNota >= duracoes[notaAtual] + 30) {

      noTone(BUZZER);

      notaAtual++;

      if (notaAtual >= 20) {
        notaAtual = 0;
      }

      tempoNota = millis();

      if (melodia[notaAtual] > 0) {
        tone(BUZZER, melodia[notaAtual]);
      }
    }
  }
}

