import React, {useEffect} from 'react'
import Audits from '../components/Audits'
import GeneralStats from '../components/GeneralStats'
import JumbotronComponent from '../components/Jumbotron'
import Nodes from '../components/Nodes'
import RefundErrors from '../components/RefundErrors'
import Reports from '../components/Reports'
import SubmissionErrors from '../components/SubmissionErrors'
import AssignmentErrors from '../components/AssignmentErrors'
import { log } from '../easteregg'

export default function Dashboard() {
  useEffect(() => {
    console.log(log);
  })
  return (
    <div style={{backgroundColor: '#59acf960'}}>
      <div style={{ paddingTop: 20, paddingLeft: '25%'}}> 
        <JumbotronComponent />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}> 
        <GeneralStats />
        <Nodes />
      </div>
      <div style={{display: 'flex', paddingTop: 200, justifyContent: 'space-around'}}>
        <SubmissionErrors />
        <AssignmentErrors />
        <RefundErrors />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: 20, marginTop: 100}}> 
        <Reports />
        <Audits />
      </div>
      
    </div>
  )
}
