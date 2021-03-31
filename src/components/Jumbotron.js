import React from 'react'
import {Jumbotron, Button} from 'react-bootstrap';
import logo from '../assets/quantastamp-logo.jpeg'

export default function JumbotronComponent() {
  const alt = `Quantstamp logo`;
  const subgraphUri = `https://thegraph.com/explorer/subgraph/andrejrakic/quantstamp`;
  const githubUri = ``;
  const etherscanUri = `https://etherscan.io/address/0x5a0e27020FA22AdaB2e81495025bEF3Fab7821fd#code`
  return (
    <div style={{ justifySelf: 'center'}}>
      <Jumbotron style={{ backgroundColor: 'white', width: 800}}>
        <h1><img src={logo} alt={alt} style={{width: 70, height: 70}}></img> Quantstamp Info</h1>
        <p>
          The Protocol for Securing Smart Contracts Analytics Page
        </p>
        <p>
          <Button variant="primary" href={subgraphUri}>Subgraph</Button> <Button variant="primary" href={githubUri}>GitHub</Button> <Button variant="primary" href={etherscanUri}>Smart Contract</Button>
        </p>
      </Jumbotron>
    </div>
  )
}
