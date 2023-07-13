const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17
const MONSTER_ATTACK_VALUE = 12
const HEAL_VALUE = 20

let chosenMaxLife = 100;
let currentMonesterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife
let hasBounesLife = true

adjustHealthBars(chosenMaxLife)
function rest(){
   currentMonesterHealth = chosenMaxLife
   currentPlayerHealth = chosenMaxLife
   resetGame(chosenMaxLife)
}
function endRound(){
  const initialPlayerHealth = currentPlayerHealth
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
  currentPlayerHealth -= playerDamage

  if(currentPlayerHealth<=0 && hasBounesLife){
    hasBounesLife = false
    removeBonusLife()
    currentPlayerHealth = initialPlayerHealth
    alert('you have been saved')
  }

  if(currentMonesterHealth<=0 && currentPlayerHealth>0){
    alert('you won!')
  }else if(currentPlayerHealth <=0 && currentMonesterHealth>0){
    alert('you lost!')
  }else if(currentPlayerHealth <=0 && currentMonesterHealth<=0){
    alert('you Draw')
  }
  if(
    currentMonesterHealth<=0 && currentPlayerHealth>0 || 
    currentPlayerHealth <=0 && currentMonesterHealth>0 ||
    currentPlayerHealth <=0 && currentMonesterHealth<=0
  ){
    rest()
  }
}
function attackMonester(mode){
  if(mode === 'ATTACK'){
    maxDanage = ATTACK_VALUE
  }else if(mode === 'STRONG_ATTACK'){
    maxDanage = STRONG_ATTACK_VALUE
  }

  const damage = dealMonsterDamage(maxDanage)
  currentMonesterHealth-= damage
  endRound()
}

function attackHandler(){
  attackMonester('ATTACK')
}

function strongAttackHandler(){
  attackMonester('STRONG_ATTACK')
}

function healPlayerHandler(){
  let healValue
  if(currentPlayerHealth>= chosenMaxLife - HEAL_VALUE){
    alert("You can't heal more thane your max initial health.")
  }else{
    healValue = HEAL_VALUE
  }
  increasePlayerHealth(HEAL_VALUE)
  currentPlayerHealth+=HEAL_VALUE
  endRound()
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', attackHandler)
healBtn.addEventListener('click', healPlayerHandler)


