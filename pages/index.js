import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useWeb3React } from '@web3-react/core'

export default function Home() {
  const { 
    activate,
    acitve,
    deactivate,
    account,
    error,
    chainId
  } =  useWeb3React()

  userEffect = (() => {
    
  })

  const connect = () => {
  
  }

  const disconnect = () => {
  
  }
  return (
    <div className={styles.container}>
        <h1>web3 demo</h1>
        <button onClick={connect}>Connect wallet</button>
    </div>
  )
}
