import imageOne from '../img/1.png'
import imageTwo from '../img/2.png'
import imageThree from '../img/3.png'
import imageFour from '../img/4.png'
import imageFive from '../img/5.png'
import imageSix from '../img/6.png'
import imageSeven from '../img/7.png'
import imageEight from '../img/8.png'
import imageNine from '../img/9.png'
import imageTen from '../img/25.png'
import imageEleven from '../img/150.png'
import imageTwelve from '../img/151.png'


import Card from './Card'
import { useState, useEffect } from 'react'


export default function Game() {
  let [pokemon, setPokemon] = useState([[imageOne, 'Bulbasaur'],[imageTwo, 'Ivysaur'],[imageThree, 'Venusaur'],[imageFour, 'Charmander'],[imageFive, 'Charmeleon'],[imageSix, 'Charizard'],[imageSeven, 'Squirtle'],[imageEight, 'Wartortle'],[imageNine, 'Blastoise'],[imageTen, 'Pikachu'],[imageEleven, 'Mewtwo'],[imageTwelve, 'Mew']])
  let [clickedPokemons, setClickedPokemons] = useState([])
  let [score, setScore] = useState(0)
  let [bestScore, setBestScore] = useState(0)
  useEffect(()=>{
    // console.log(clickedPokemons.length)
    // if(clickedPokemons.length == 12) return  Can add what happens if you win
    shufflePokemon()
  }, [clickedPokemons])
  function shufflePokemon(){
    let pokemonCopy = pokemon.slice()
    let suffledPokemon = pokemonCopy.sort(() => Math.random() - 0.5)
    setPokemon(pokemon = suffledPokemon)
  }
  function resetGame(){
    setClickedPokemons(clickedPokemons = [])
  }
  function getCard(e){
    let clicked = clickedPokemons.slice()
    if(clicked.includes(e.currentTarget.lastChild.innerText)){
      setBestScore(bestScore >= score ? bestScore = bestScore : bestScore = score)
      resetGame()
      setScore(0)
      return console.log(`${e.currentTarget.lastChild.innerText} has been clicked before...`)
    }
    clicked.push(e.currentTarget.lastChild.innerText)
    setClickedPokemons(clickedPokemons = clicked)
    setScore(score+1)
  }

  return (
    <div className="gameBody">
      <div className="score">
        <span>Current Score: {score}</span>
        <span>Best Score: {bestScore}</span>
      </div>
      {(score == 12) ? (<span>YOU WIN!</span>) : (<span>{score}-12</span>)}
      <div className="game">
        {pokemon.map((x,i)=><Card img={x[0]} name={x[1]} key={i+1} func={getCard}/>)}
      </div>
    </div>
  )
}
