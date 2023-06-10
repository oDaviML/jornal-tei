let articlesEl = document.querySelectorAll("article");
let mudarEl = document.querySelector('#mudar');
let indicadoresEl = document.querySelectorAll('.indicador');
let bloco = true;

let noticia1 = `<img src="https://colunadofla.com/wp-content/uploads/2018/07/O-Maior-do-Mundo.jpg" alt="">
<h2>Flamengo se torna campeão da Copa do Mundo após se tornar nação independente</h2>
<p>Em uma reviravolta histórica, o Flamengo conquistou o título da Copa do Mundo de Futebol logo após se tornar uma nação
 independente. A equipe carioca fez história ao vencer a final do torneio contra a Alemanha, no lendário Estádio do Maracanã, em uma partida emocionante que terminou com o placar de 3 a 2.</p>`;

let noticia2 = `<img src="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3372149:1684787067/Vape.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=8c30852" alt="">
<h2>Para combater o tabagismo, Reino Unido distribui vapes</h2>
<p>O governo do Reino Unido lançou nesta terça-feira (11) um programa para reduzir as taxas de tabagismo que irá distribuir cigarros eletrônicos para 1 milhão de pessoas.
O esquema chamado de "swap to stop", ou "trocar para parar", em português, consiste na distribuição de kits de vape juntamente com suporte comportamental para ajudar os fumantes a abandonar o hábito.</p>`;

let noticia3 = `<img src="https://conteudo.imguol.com.br/c/noticias/20/2022/07/09/urubu-do-pix-e-novo-golpe-na-praca-1657379024808_v2_450x450.jpg" alt="">
<h2> O "Urubu do Pix" é encontrado morto</h2>
<p>Uma notícia triste abalou os corações dos brasileiros hoje, com a confirmação da morte do famoso "Urubu do Pix". 
O pássaro, que se tornou uma sensação nas redes sociais devido à sua interação inusitada com pessoas que realizavam transações por meio do Pix, foi encontrado sem vida em uma área próxima à Lagoa Rodrigo de Freitas.</p>`;

let noticia4 = `<img src="https://portalpopline.com.br/wp-content/uploads/2022/05/Taylor-Swift-tem-sua-formatura-na-universidade-de-Nova-York-1-570x800.jpg" alt="">
<h2>Taylor Swift surpreende fãs ao se apresentar no CEFET-MG</h2>
<p>Uma noite inesquecível agitou o campus do Centro Federal de Educação Tecnológica de Minas Gerais (CEFET-MG) 
quando a renomada cantora e compositora Taylor Swift fez uma surpresa épica e se apresentou para os estudantes e fãs no evento anual da instituição.</p>`;

function adicionarNoticia(){
    if(bloco){
        articlesEl[0].innerHTML = noticia1;
        articlesEl[1].innerHTML = noticia2;
    } else{
        articlesEl[0].innerHTML = noticia3;
        articlesEl[1].innerHTML = noticia4;
    }

    bloco = !bloco;
    atualizarIndicadores();
}

function atualizarIndicadores() {
    for (let i = 0; i < indicadoresEl.length; i++) {
        if (i === (bloco ? 0 : 1)) {
            indicadoresEl[i].classList.add('ativo');
        } else {
            indicadoresEl[i].classList.remove('ativo');
        }
    }
}

adicionarNoticia();

mudarEl.addEventListener('click', adicionarNoticia);