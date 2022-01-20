const dino = document.querySelector('.dino');
const background = document.querySelector('.background')
let isJumping = false
let position = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32){
        if(!isJumping) {
        jump();
        }
    }
}

function jump() {
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150){
            clearInterval(upInterval);
        // Descendo
        let dowInterval = setInterval(() => {
            if (position <=0){
                clearInterval(dowInterval)
                isJumping = false;
            } else {
            position -=20;
            dino.style.bottom = position + 'px';
            }
        },20);
        
        } else {
        // Subindo
        position += 20;

        dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
       if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            //Game Over
            clearInterval(leftInterval);
            document.body.innerHTML = `<h1 class="game-over">Fim de jogo</h1>`;
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);

}

createCactus();
document.addEventListener('keyup', handleKeyUp);


/*
Criou uma variável/constante e selecionou no documento o elemento dino através do JS

Vale a pena lembrar que uma constante não pode ser sobreescrita.

Utilizar muito o console.log para verificar se o código está correto.

*/






/*
Para entender melhor os 'Key Codes', existe um site chamado: KeyCode.info.

A function serviu para que o navegador saiba quando o usuário clicou na tecla espaço(32).


A tag let pode ser modificada posteriormente.

setInterval - serve para definir intervalos.

addEventListener - serve para criar um novo evento.
*/