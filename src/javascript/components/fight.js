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
