import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over
    const firstPlayer = {
      isDefense: false,
      isCombo: false,
      cancelAutoRepeat: false,
      healthBar: 100,
      ...firstFighter
    }
    const secondPlayer = {
      isDefense: false,
      isCombo: false,
      cancelAutoRepeat: false,
      healthBar: 100,
      ...secondFighter
    }

    const healthBarFirstPlayer = document.getElementById('left-fighter-indicator');
    const healthBarSecondPlayer = document.getElementById('right-fighter-indicator');

    const firstPlayerCombo = new Set();
    const secondPlayerCombo = new Set();

    function keyDownHendler(event){
      //Attack block
      if(event.code === controls.PlayerOneAttack && 
        firstPlayer.cancelAutoRepeat === false && 
        firstPlayer.isDefense === false &&
        secondPlayer.isDefense === false){

        firstPlayer.cancelAutoRepeat = true;
        secondPlayer.healthBar -= Math.trunc(getDamage(firstPlayer,secondPlayer)/secondPlayer.health * 100)
          if(secondPlayer.healthBar<= 0) {
            resolve(firstFighter)
            healthBarSecondPlayer.style.width = 0;
            document.removeEventListener('keydown', keyDownHendler)
            document.removeEventListener('keyup', keyUpHendler)
          }
        healthBarSecondPlayer.style.width = `${secondPlayer.healthBar}%`
      }

      if(event.code === controls.PlayerTwoAttack && 
        secondPlayer.cancelAutoRepeat === false && 
        secondPlayer.isDefense === false &&
        firstPlayer.isDefense === false){

        secondPlayer.cancelAutoRepeat = true;
        firstPlayer.healthBar -= Math.trunc(getDamage(secondPlayer,firstPlayer)/firstPlayer.health * 100)
          if(firstPlayer.healthBar<= 0) {
            resolve(secondFighter)
            healthBarFirstPlayer.style.width = 0;
            document.removeEventListener('keydown', keyDownHendler)
            document.removeEventListener('keyup', keyUpHendler)
          }
          healthBarFirstPlayer.style.width = `${firstPlayer.healthBar}%`
      }
      //Defense block
      if(event.code === controls.PlayerOneBlock){
        firstPlayer.isDefense = true;
      }

      if(event.code === controls.PlayerTwoBlock){
        secondPlayer.isDefense = true;
      }
    }
  
    function keyUpHendler(event){
      //Attack block
      if(event.code === controls.PlayerOneAttack){
        firstPlayer.cancelAutoRepeat = false;
      }

      if(event.code === controls.PlayerTwoAttack){
        secondPlayer.cancelAutoRepeat = false;
      }
      //Defense block
      if(event.code === controls.PlayerOneBlock){
        firstPlayer.isDefense = false;
      }

      if(event.code === controls.PlayerTwoBlock){
        secondPlayer.isDefense = false;
      }
    }

    document.addEventListener('keydown',keyDownHendler);
    document.addEventListener('keyup',keyUpHendler);
  });
}

export function getDamage(attacker, defender) {
  // return damage
  const damage = getHitPower(attacker) - getBlockPower(defender);
  return damage > 0 ? damage : 0;
}

export function getHitPower(fighter) {
  // return hit power
  const criticalHitChance = Math.random()+1;
  return fighter.attack * criticalHitChance;
}

export function getBlockPower(fighter) {
  // return block power
  const dodgeChance = Math.random()+1;
  return fighter.defense * dodgeChance;
}
