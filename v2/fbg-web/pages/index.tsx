import type { NextPage } from 'next'
import Head from 'next/head'
import { testTicTacToe } from 'fbg-games/tictactoe/example';

const Home: NextPage = () => {
  return (
    <pre>Hello world: {testTicTacToe}</pre>
  )
}

export default Home
