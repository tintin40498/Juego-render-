let playerName = "";
let enemyHP = 30;

function startGame(){
    const name = document.getElementById("name").value;
    if(!name){
        alert("PonÃ© un nombre");
        return;
    }

    playerName = name;
    document.getElementById("player").innerText = "HÃ©roe: " + playerName;
    document.getElementById("battle").style.display = "block";
}

function attack(){
    const damage = Math.floor(Math.random()*10)+1;
    enemyHP -= damage;

    if(enemyHP <= 0){
        document.getElementById("log").innerText = "ðŸ”¥ Ganaste la batalla!";
        enemyHP = 30;
    }else{
        document.getElementById("log").innerText = "Golpeaste al enemigo por " + damage + " de daÃ±o. Vida restante: " + enemyHP;
    }
}
