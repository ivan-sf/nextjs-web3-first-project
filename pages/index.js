import styles from '../styles/Home.module.css'
import { useCallback,useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { connector } from '../config/web3'

export default function Home() {
  const { 
    activate,
    active,
    deactivate,
    error,
    account,
    chainId
  } =  useWeb3React()

  const connect = useCallback(() => {
    activate(connector)
    localStorage.setItem('previouslyConnected',true)
  },[activate])


  useEffect (() => {
    if(localStorage.getItem('previouslyConnected')===true)
    connect()
  }, [connect])

  
  const disconnect = () => {
    deactivate
    localStorage.removeItem('previouslyConnected')
  }

  if(error){
    return <p>error, {error}</p>
  }
  return (
    <div className={styles.container}>
        <h1>Hi humans, web3 demo.</h1>

        {
          active 
            ? <>
              <button onClick={disconnect}>Disconnect wallet</button>
              <p>
                You are connect to network ID: {chainId} <br/>
                You are account is {account}
              </p>
              </>

            : <button onClick={connect}>Connect wallet</button>
        }
        
    </div>
  )
}
