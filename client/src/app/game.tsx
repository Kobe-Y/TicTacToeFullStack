"use client"; //this is a client component
import React, {useState} from 'react'
import {X, Robot, Circle} from "@phosphor-icons/react";
import {useChannelStateContext, useChatContext} from 'stream-chat-react';

var GLOBALBOTVAR = false; //TEMPORARY TO CHECK IF WE SHOULD RUN BOT. TRUE = RUN
function Square({value, onSquareClick}) {
  
  return( <button //button style
    style = {{
      width: 250,
      height: 250,
    }}
    className="square"
    onClick={onSquareClick}
    >
      {value === 'X' && <X size={64} weight="bold" />}
      {value === 'O' && GLOBALBOTVAR ? <Robot size={64} weight="bold" />
      : value === 'O' && <Circle size={64} weight="bold" /> }
    </button>);
  
}
function Reset({setHistory}) {
  return( <button
    style = {{
      display: 'flex',
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      position: 'absolute',
      right: 200,
      top: '10%',
      transform: 'translateY(100%)',
      width:100,
      height:100,
      backgroundColor:'#fff',
      borderRadius:100,
    }}
    className='Reset'
    //onClick={()=> window.location.reload()}
    onClick={()=>{
      setHistory([Array(9).fill(null)]);
      BoardDict = copy(BlankBoard);
    }}
    >
    Reset
    </button>)
}
var possible = {
  '0,0': 0,
  '0,1': 0,
  '0,2': 0,
  '1,0': 0,
  '1,1': 0,
  '1,2': 0,
  '2,0': 0,
  '2,1': 0,
  '2,2': 0
}
const MyDict = { //maps bot moves
  0 : [0, 0],
  1 : [1, 0],
  2 : [2, 0],
  3 : [0, 1],
  4 : [1, 1],
  5 : [2, 1],
  6 : [0, 2],
  7 : [1, 2],
  8 : [2, 2],
}
const InvDict = {
  '0, 0' : 0,
  '1, 0' : 1,
  '2, 0' : 2,
  '0, 1' : 3,
  '1, 1' : 4,
  '2, 1' : 5,
  '0, 2' : 6,
  '1, 2' : 7,
  '2, 2' : 8,
}
//var twodArr = Array.from({length: 3}, ()=>Array(3).fill(null));
var BoardDict = {

  0: { 0: null, 1: null, 2: null }, //inversed columns and rows
  1: { 0: null, 1: null, 2: null },
  2: { 0: null, 1: null, 2: null },
};
const BlankBoard = {
    0: { 0: null, 1: null, 2: null }, //inversed columns and rows
    1: { 0: null, 1: null, 2: null },
    2: { 0: null, 1: null, 2: null },
};
const playTurn = {};
function Board({xIsNext, squares, onPlay}) {
  //Handle click =======================
  //var oMove = minimax(BoardDict, 0, false, -Infinity, Infinity); //calling minimax before handleclick
  async function handleClick(i) {
    //console.log(BoardDict[MyDict[i][0]][MyDict[i][1]]); //THIS CHECKS THE VALUE IN BOARDICT
    //console.log(BoardDict[2][2]);

    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X'; 
      BoardDict[MyDict[i][0]][MyDict[i][1]] = 'X';
    }
    if (GLOBALBOTVAR) {
      botMove(nextSquares);
    }
    else if(!xIsNext){
      nextSquares[i] = 'O'; 
      BoardDict[MyDict[i][0]][MyDict[i][1]] = 'O';
    }
    onPlay(nextSquares);
  }
  //THIS IS WHERE MOVES ARE COMMUNICATED ================================
  const { channel } = useChannelStateContext();
  const {client} = useChatContext();
  // if(Object.keys(playTurn).length == 0) {
  //   playTurn[client.userID] = xIsNext;
  //   console.log(xIsNext);
  // }
  // else if(Object.keys(playTurn).length == 1 && !playTurn.hasOwnProperty(client.userID)) {
  //   playTurn[client.userID] = xIsNext;
  //   console.log(xIsNext);
  // }
  
  const chooseReset = async (setHistory) => {
    await channel.sendEvent({
      type: "reset",
      data: {setHistory},
    })
    Reset(setHistory);
  }
  
  const chooseSquare = async (i) => {
    if(!playTurn.hasOwnProperty(client.userID)) {
      playTurn[client.userID] = xIsNext;
      console.log(client.userID);
    }
    if(BoardDict[MyDict[i][0]][MyDict[i][1]] === null && playTurn[client.userID] == xIsNext) { //might want to check symbol
      //set turn
      await channel.sendEvent({
        type: "game-move",
        data: {i}, //as in location and symbol
      });
      
     
     handleClick(i)
      xIsNext = !xIsNext;
    } 
  }
  if(!GLOBALBOTVAR) {
    channel.on((event)=> {
      if(event.type == "game-move" && event.user.id !== client.userID) {
        // const currentPlayer = event.data.player === true ? false : true;
        // xIsNext=event.data.player;
        handleClick(event.data.i);
      }
      if(event.type == "reset") {
        Reset(event.data.setHistory);
      }
    })
  }
//======================================================================
  function botMove(nextSquares) {
    let arr = copy(BoardDict);
      // console.log(isFull(testDict));
      // if(isFull(testDict)) {
      //   console.log("HERE");
      // }
      if(isFull(arr)) {
        return;
      }
      let [oMovei, oMovej] = runBot(arr);
      //console.log(oMovei,oMovej);
      let tuple = [oMovei, oMovej];
      nextSquares[InvDict[tuple.join(', ')]] = 'O';
      BoardDict[oMovei][oMovej] = "O";
  }
  //check winner ===========================
  const winner = calculateWinner(squares);
  let status;
  if(winner) {
    status = "Winner: " + winner;
  }
  else {
    status = "Active Turn: " + (xIsNext ? "X" : "O");
    if(isFull(BoardDict)) {
      status = "Scratch Game ";
    }
  }
  
  //setting up board and status =================
  return(
    <>
    {/* <div className="Botbutton">
          <Botbutton />
        </div> */}
    {/* <div className="Reset">
      <Reset/>
    </div> */}
    <div style={{ //status style
      display: 'flex',
      //position: 'absolute',
      fontSize: 50,
      top: 0,
      left: 760,
    }}>
      <div className="status">{status}</div>
    </div>
    <div className="board-row"> 
      <div style={{ display: "flex" }}>
        <Square value={squares[0]} onSquareClick={GLOBALBOTVAR ? ()=> handleClick(0) : () => chooseSquare(0)}/>
        <Square value={squares[1]} onSquareClick={GLOBALBOTVAR ? () => handleClick(1) : () => chooseSquare(1)}/>
        <Square value={squares[2]} onSquareClick={GLOBALBOTVAR ? () => handleClick(2) : () => chooseSquare(2)}/>
        </div>
    </div>
    <div className="board-row">
      <div style={{ display: "flex" }}>
        <Square value={squares[3]} onSquareClick={GLOBALBOTVAR ? () => handleClick(3) : () => chooseSquare(3)}/>
        <Square value={squares[4]} onSquareClick={GLOBALBOTVAR ? () => handleClick(4) : () => chooseSquare(4)}/>
        <Square value={squares[5]} onSquareClick={GLOBALBOTVAR ? () => handleClick(5) : () => chooseSquare(5)}/>
        </div>
    </div>
    <div className="board-row">
      <div style={{ display: "flex" }}>
        <Square value={squares[6]} onSquareClick={GLOBALBOTVAR ? () => handleClick(6) : () => chooseSquare(6)}/>
        <Square value={squares[7]} onSquareClick={GLOBALBOTVAR ? () => handleClick(7) : () => chooseSquare(7)}/>
        <Square value={squares[8]} onSquareClick={GLOBALBOTVAR ? () => handleClick(8) : () => chooseSquare(8)}/>
        </div>
    </div>
  </>
  );
}

export default function Game({enableBot}) {
  console.log(GLOBALBOTVAR);
  GLOBALBOTVAR = enableBot;
  const [xIsNext, setXIsNext] = useState(true);
  //const [squares, setSquares] = useState(Array(9).fill(null));
  //const [currentMove, setCurrentMove] = useState(0);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]); //THIS IS  NECCESSARY FOR CLICKING
    if(!GLOBALBOTVAR) {
      setXIsNext(!xIsNext);
    }
  }
  return (
    <div className="game" style={{ 
      display: 'flex', 
      justifyContent: 'center',
      }}>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="Reset">
        <Reset setHistory = {setHistory}/>
      </div>
    </div>
  );
}
function minimax(test, depth, ceiling, alpha, beta) {
  let score = 0;
  let top;
  //let arr = copy(BoardDict); //im not sure if i should use test or BoardDict
  let arr = copy(test);
  if(isWin(arr, 'O') == 'O') {
    score += 10;
    //console.log("OWIN");
  }
  if(isWin(arr, 'X') == 'X') {
    score -= 10;
    //console.log("XWIN");
  }
  if (score == 10) {
    return score;
  }
  if (score == -10){
    return score;
  }
  if(isFull(arr)) {
    score = 0;
    return score;
  }
  if (ceiling) {
    top = -Infinity;
      for(let i = 0; i < 3; ++ i) {
        for(let j = 0; j < 3; ++j) {
          if(arr[i][j] == null) {
            arr[i][j] = 'O';
            top = Math.max(top, minimax(arr, depth+1, false, alpha, beta));
            arr[i][j] = null;
            alpha = Math.max(alpha, top);
            if(beta <= alpha) {
              break;
            }
          }
        }
      }
      return top;
  }
  else {
    top = Infinity;
    for(let i = 0; i < 3; ++ i) {
      for(let j = 0; j < 3; ++j) {
        if(arr[i][j] == null) {
          arr[i][j] = 'X';
          top = Math.min(top, minimax(arr, depth+1, true, alpha, beta));
          arr[i][j] = null;
          beta = Math.min(beta, top);
          if(beta <= alpha) {
            break;
          }
        }
      }
    }
    return top;
  }


}
function calculateWinner(squares) {
  //if full
  // for(let i = 0; i < squares.length; i++) {
  //   if(!squares[i]) {
  //     break;
  //   }
  //   else if(i >= squares.length) {
  //     return Board();
  //   }
  // }
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for(let i = 0; i < lines.length; i++)
  {
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
    {
      return squares[a]
    }
  }
  return null;
}
function isWin(arr, player) {
  for(let i = 0; i < 3; ++i) { //check columns
    if (player === arr[i][0] && player === arr[i][1] && player === arr[i][2]) {
      return player;
    }
  }
  for(let i = 0; i < 3; ++ i) { //check rows
    if (player === arr[0][i] && player === arr[1][i] && player === arr[2][i]) {
      return player;
    }
  }
  //forward diagonal
  if(player === arr[0][0] && player === arr[1][1] && player === arr[2][2]) {
    return player;
  }
  //backward diagonal
  if(player === arr[0][2] && player === arr[1][1] && player === arr[2][0]){
    return player;
  }
  return null;
 }
function copy(orig) {
  let deepCopy = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  for(let i = 0; i < 3; ++i) {
    for(let j = 0; j < 3; ++j) {
      deepCopy[i][j] = orig[i][j];
    }
  }

  return deepCopy;
 }

function isFull(arr) {
  for(let i = 0; i < 3; ++i) {
    for(let j = 0; j < 3; ++j) {
      if(arr[i][j] == null) {
        return false;
      }
    }
  }
  return true;
 }

function runBot(arr) {
  let best = -Infinity;
  let besti=-1;
  let bestj=-1;
  // if(arr[0][0] == null) {
  //   return[0,0];
  // }
  // else if(arr[1][1] == null) {
  //   return[1,1];
  // }
  for(let i = 0; i < 3; ++i) {
    for(let j = 0; j < 3; ++j) {
      if(arr[i][j] != null) {
        let tuple = [i,j];
        possible[tuple.join(',')] = -Infinity;
      }
      if(arr[i][j] == null) {
        arr[i][j] = 'O';
        let tuple = [i,j];
        //nextSquares[InvDict[tuple.join(', ')]]
        possible[tuple.join(',')] = minimax(arr, 0, false, -Infinity, Infinity); //might be true idk
        arr[i][j] = null;
        if(possible[tuple.join(',')] > best) {
          best = possible[tuple.join(',')];
          besti = i;
          bestj = j;
          //console.log(besti, bestj);
        }
      }
    }
  }
  console.log(possible);
  return[besti,bestj];
 }

// class TicTacToe extends React.Component {
//   render() {
//     return (
//       <div className="tictactoe">
//         <Game />
//       </div>
//     );
//   }
// }

// export default TicTacToe;
//WIP I WANT THIS BUTTON TO TOGGLE THE BOT. 
// function Botbutton() {
//   const [isBot, setIsBot] = useState(true);
//   GLOBALBOTVAR = isBot;
//   let message;
//   if(isBot) {
//     message = "on";
//   }
//   else {
//     message = "off";
//   }
//   return( <button
//     style = {{
//       borderColor:'rgba(0,0,0,0.2)',
//       alignItems:'right',
//       justifyContent:'center',
//       width:200,
//       height:100,
//       backgroundColor:'#fff',
//       borderRadius:100,
//       position: 'absolute',
//       right: 130,
//       top: '-9%',
//       transform: 'translateY(100%)',
//     }}
//     className='Botbutton'
//     onClick={()=> setIsBot(!isBot)}
//     >
//     Bot is {message}
//     </button>)
// }