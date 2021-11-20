let player;
function Player(classType, health, mana, strength, agility, speed) {
        this.classType = classType;
        this.health = health;
        this.mana = mana;
        this.strength = strength;
        this.agility = agility;
        this.speed = speed;
}

let PlayerMoves={
    calcAttack:function()
    {console.log('tec')
        //who attack first
        let PlayerSpeed=player.speed;
        let EnemySpeed =enemy.speed; 

        let playerAttack=function(){
            //player attacks
            let calcBaseDamage;
            if(player.mana>0){
                calcBaseDamage=player.strength * player.mana / 1000;
            }else{
                calcBaseDamage= player.strength * player.agility / 1000;
            }
            
            let offsetDamage=Math.floor(Math.random()*Math.floor(10));
            let OutputDamage=calcBaseDamage+offsetDamage;
            //number of hits 

            let numberofhits=Math.floor(Math.random()*Math.floor(player.speed /10)/2)+ 1;
            let attackValues=[OutputDamage,numberofhits];
            return attackValues;
            
        }
        let enemyAttack=function(){
            //enemy attacks
            let calcBaseDamage;
            if(enemy.mana>0){
                calcBaseDamage=enemy.strength * enemy.mana / 1000;
            }else{
                calcBaseDamage=enemy.strength * enemy.agility / 1000;
            }
            let offsetDamage=Math.floor(Math.random()*Math.floor(10));
            let OutputDamage=calcBaseDamage+offsetDamage;
            //number of hits 
            let numberofhits=Math.floor(Math.random()*Math.floor(enemy.speed /10)/2)+1;
            let attackValues=[OutputDamage,numberofhits];
            return attackValues;
        }
        
        let getPlayerHealth= document.querySelector('.health-player');
        let getEnemyHealth= document.querySelector('.health-enemy');
    
        //initiates Attacks!
        /** 
         * who will attack first reffering to the speed
         * and how much time player and enemy will attack 
        */

        if(PlayerSpeed >= EnemySpeed){
            //when the player hit the enemy \(player faster than the enemy)
            let playerAttacksValues=playerAttack();
            let enemyAttacksValues=enemyAttack();

            let totalDamage=playerAttacksValues[0] * playerAttacksValues[1];
            enemy.health=enemy.health - totalDamage;
            alert(`You hit ${playerAttacksValues[0]} damage ${playerAttacksValues[1]} times.`);

                if(enemy.health<=0)
                {
                    alert("You win! Refresh browser to play Again.")
                    getPlayerHealth.innerHTML='Health: '+player.health;
                    getEnemyHealth.innerHTML='Health: 0';
                    document.querySelector('.action').innerHTML='<p id="winner">Winner Winner</p>'
                }
                else{
                    getEnemyHealth.innerHTML='Health: '+enemy.health;
                    //enemy attack
                    let totalDamage=enemyAttacksValues[0] * enemyAttacksValues[1];
                    player.health=player.health - totalDamage;
                    alert(`Enemy hit ${enemyAttacksValues[0]} damage ${enemyAttacksValues[1]} times.`);
                    if(player.health<=0)
                    {
                        alert("You Lose! Refresh browser to play Again.")
                        getEnemyHealth.innerHTML='Health: '+enemy.health;
                        getPlayerHealth.innerHTML='Health: 0';
                        document.querySelector('.action').outerHTML='<p id="looser">Hard luck :(</p>'
                    }else
                    {
                        getPlayerHealth.innerHTML='Health: '+player.health;
                    } 
                }  
        }else{
            //when the enemy hit the player \(enemy faster than the player)

            let playerAttacksValues=playerAttack();
            let enemyAttacksValues=enemyAttack();

            let totalDamage=enemyAttacksValues[0] * enemyAttacksValues[1];
            player.health=player.health - totalDamage;

            alert(`Enemy hit ${enemyAttacksValues[0]} damage ${enemyAttacksValues[1]} times.`);

                if(player.health<=0){
                    alert("You loose! Refresh browser to play Again.")
                    getPlayerHealth.innerHTML='Health: 0';
                    getEnemyHealth.innerHTML='Health: '+enemy.health;
                }else{
                    getPlayerHealth.innerHTML='Health: '+player.health;
                    //enemy attack
                    let totalDamage=playerAttacksValues[0] * playerAttacksValues[1];
                    enemy.health=enemy.health - totalDamage;
                    alert(`You hit ${playerAttacksValues[0]} damage ${playerAttacksValues[1]} times.`);
                    if(enemy.health<=0){
                        alert("You win! Refresh browser to play Again.")
                        getEnemyHealth.innerHTML='Health: 0';
                        getPlayerHealth.innerHTML='Health: '+player.health;
                    }else{
                        getEnemyHealth.innerHTML='Health: '+enemy.health;
                    } 
                }  
        }
    }
}
