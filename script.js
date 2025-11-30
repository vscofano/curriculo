// Função para verificar se a seção de skills está visível na tela
function isSkillsSectionVisible() {
    const skillsSection = document.getElementById('skills-section');
    const rect = skillsSection.getBoundingClientRect();
    return rect.top - window.innerHeight < 0 && rect.bottom >= 0;
}

// Função para animar a barra de progresso
function animateProgressBar(progressBarId, targetValue,interval) {
    let progress = 0;
    const progressBar = document.getElementById(progressBarId);

    const intervalId = setInterval(() => {
        if (progress >= targetValue) {
            clearInterval(intervalId);
        } else {
            progress++;
            progressBar.style.width = `${progress}%`;
        }
    }, interval); // Intervalo de atualização da animação (em milissegundos)
}
// Função para verificar o scroll e iniciar a animação quando a seção de skills estiver visível
function checkScrollAndAnimate(){
    if (isSkillsSectionVisible()){
        // Chamando a função de animação para cada barra de progresso
            animateProgressBar('skil_1',100,30);
            animateProgressBar('skil_2',100,35); 
            animateProgressBar('skil_3',100,38); 
            animateProgressBar('skil_4',90,40); 
            animateProgressBar('skil_5',40,55); 
            animateProgressBar('skil_6',50,60); 
            animateProgressBar('skil_7',80,40); 
            animateProgressBar('skil_8',25,90); 
            animateProgressBar('skil_9',60,70); 
            animateProgressBar('skil_10',70,50); 
            window.removeEventListener('scroll', checkScrollAndAnimate); // Remove o evento de scroll após iniciar a animação
    }
}
// Adicionando o evento de scroll para verificar quando a seção de skills está visível
window.addEventListener('scroll', checkScrollAndAnimate);
//End Barra de Proguesso

//Projetos
var back_topo = document.getElementsByClassName('back_menu')
var todosBotoes = document.querySelectorAll('button');
//automacoes
document.addEventListener('DOMContentLoaded', function() {
    var botao = document.getElementById('btn_1');
    botao.addEventListener('click', function() {
        var projeto = document.getElementById('projeto_1');
        var projeto_2 = document.getElementById('projeto_2');
        projeto.style.display = 'block'
        projeto_2.style.display = 'block'
      
    });
    todosBotoes.forEach(function(botao) {
        botao.addEventListener('click', function(event) {
            if (event.target.id !== 'btn_1') {
                var projeto = document.getElementById('projeto_1');
                var projeto_2 = document.getElementById('projeto_2');
                projeto.style.display = 'none'
                projeto_2.style.display = 'none'
            }
        });
    });
});

//scraping
document.addEventListener('DOMContentLoaded', function() {
    var botao = document.getElementById('btn_2');
    botao.addEventListener('click', function() {
        var projeto = document.getElementById('projeto_3');
        var projeto_2 = document.getElementById('projeto_4');
        projeto.style.display = 'block'
        projeto_2.style.display = 'block'
    });
    todosBotoes.forEach(function(botao) {
        botao.addEventListener('click', function(event) {
            if (event.target.id !== 'btn_2') {
                var projeto = document.getElementById('projeto_3');
                var projeto_2 = document.getElementById('projeto_4');
                projeto.style.display = 'none';
                projeto_2.style.display = 'none';
            }
        });
    });
});
//sites
document.addEventListener('DOMContentLoaded', function() {
    var botao = document.getElementById('btn_3');
    botao.addEventListener('click', function() {
        var projeto = document.getElementById('projeto_5');
        var projeto_2 = document.getElementById('projeto_6');
        var projeto_3 = document.getElementById('projeto_7');
        var projeto_4 = document.getElementById('projeto_8');
        projeto.style.display = 'block'
        projeto_2.style.display = 'block'
        projeto_3.style.display = 'block'
        projeto_4.style.display = 'block'
    });
    todosBotoes.forEach(function(botao) {
        botao.addEventListener('click', function(event) {
            if (event.target.id !== 'btn_3') {
                var projeto = document.getElementById('projeto_5');
                var projeto_2 = document.getElementById('projeto_6');
                var projeto_3 = document.getElementById('projeto_7');
                var projeto_4 = document.getElementById('projeto_8');
                projeto.style.display = 'none';
                projeto_2.style.display = 'none';
                projeto_3.style.display = 'none';
                projeto_4.style.display = 'none';
            }
        });
    });
});
// projetosextra curricular
document.addEventListener('DOMContentLoaded', function() {
    var botao = document.getElementById('btn_4');
    botao.addEventListener('click', function() {
        var projeto = document.getElementById('Pextra_curricular');
        projeto.style.display = 'block'
    });
    todosBotoes.forEach(function(botao) {
        botao.addEventListener('click', function(event) {
            if (event.target.id !== 'btn_4') {
                var projeto = document.getElementById('Pextra_curricular');
                projeto.style.display = 'none';
            }
        });
    });
});
//experiencias
document.addEventListener('DOMContentLoaded', function() {
    var botao = document.getElementById('btn_5');
    botao.addEventListener('click', function() {
        var projeto = document.getElementById('outras_experiencias');
        projeto.style.display = 'block'
    });
    todosBotoes.forEach(function(botao) {
        botao.addEventListener('click', function(event) {
            if (event.target.id !== 'btn_5') {
                var projeto = document.getElementById('outras_experiencias');
                projeto.style.display = 'none';
            }
        });
    });
});
//END Projetos


    
    

