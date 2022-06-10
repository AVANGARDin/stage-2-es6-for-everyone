import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over
  });
}

export function getDamage(attacker, defender) {
  // return damage
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
