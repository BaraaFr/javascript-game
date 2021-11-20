var main={
    setGameStart: function(classType)
    {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer:function(classType)
    {
        switch(classType)
        {
            case "Rogue":
                player = new Player(classType ,180,0,200,100,60);
                break;
            case "Hunter":
                player = new Player(classType ,100,0,115,150,120);
                break;
            case "Mage":
                player = new Player(classType ,80,0,50,200,190);
                break;
        }

        var interface=document.querySelector('.interface');
        interface.innerHTML=`<img src="images\\player-image\\${classType.toLowerCase()}.jpg">
        <div>
        <h3>${classType}</h3>
        <p class="health-player">Health:${player.health}</p>
        <p>Mana:${player.mana}</p>
        <p>Strength:${player.strength}</p>
        <p>Agility:${player.agility}</p>
        <p>Speed:${player.speed}</p>
        </div>`
    },
    setPreFight:function()
    {
        let header=document.querySelector('.header');
        let actions=document.querySelector('.action');
        let arena=document.querySelector('.arena');

        header.innerHTML='<p>Task: Find an Enemy!</p>';
        actions.innerHTML='<a href="#" class="btn-prefight" onclick="main.setFight()">Search For Enemy!</a>';
        arena.style.visibility='visible';
    },
    setFight:function()
    {
        let header=document.querySelector('.header');
        let actions=document.querySelector('.action');
        let getenemy=document.querySelector('.enemy');
        //create Enemy
        let enemy1=new Enemy('Goblin',100,0,50,100,130);
        let enemy2=new Enemy('Troll',200,0,150,80,80);
        let enemy3=new Enemy('SkullCrusher',180,0,200,70,85);

        let randomEnemy=Math.floor(Math.random()*Math.floor(3));
        
        switch(randomEnemy)
        {
            case 0:
                enemy=enemy1;
                break;
            case 1:
                enemy=enemy2;
                break;
            case 2:
                enemy=enemy3;
                break;
        }
        
        header.innerHTML='<p>Task:Beat Your Enemy</p>';
        actions.innerHTML='<a href="#"  onclick="PlayerMoves.calcAttack()">Attack!</a>'
        getenemy.innerHTML=
        `<img src="images\\enemy-image\\${enemy.classType.toLowerCase()}.jpg">"
        <div>
        <h3>${enemy.classType}</h3>
        <p class="health-enemy">Health:${enemy.health}</p>
        <p>Mana:${enemy.mana}</p>
        <p>Strength:${enemy.strength}</p>
        <p>Agility:${enemy.agility}</p>
        <p>Speed:${enemy.speed}</p>
        </div>
        `

    }
}