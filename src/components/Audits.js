import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/client';
import { GET_AUDITS } from '../graphql/queries';
import { Card, Accordion, Button } from 'react-bootstrap';

export default function Audits() {
  const [audits, setAudits] = useState([]);
  const decimals = 1000000000000000000;

  const { error, data } = useQuery(GET_AUDITS);

  useEffect(() => {
    if(data) {
      setAudits(data.audits);
    }
  },[data]);

  const getState = (input) => {
    let state;
    switch (input) {
      case 0: state = "None"; break;
      case 1: state = "Queued"; break;
      case 2: state = "Assigned"; break;
      case 3: state = "Refunded"; break;
      case 4: state = "Completed"; break;
      case 5: state = "Error"; break;
      case 6: state = "Expired"; break;
      case 7: state = "Resolved"; break;
      default: state = "None";
    }
    return state;
  }

  return (
    <div>
      <h2>Audits</h2>
      {error && <>{error}</>}
      <div style={{overflow: 'auto', height: 400, width: 800}}>
        <Accordion>
          {audits.map((audit, index) => 
            <Card key={audit.id}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                  {audit.id}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={index}>
                <Card.Body>
                  Audit State: {getState(audit.auditState)} <br />
                  Requestor: <a href={`https://etherscan.io/address/${audit.requestor}`}>{audit.requestor}</a> <br />
                  Price: {audit.price / decimals} QBT <br />
                  Contract: <a href={audit.contract.id}>Download source code</a> <br />
                  {audit.auditor && <p>Auditor: <a href={`https://etherscan.io/address/${audit.auditor.id}`}>{audit.auditor.id}</a></p>}
                  {audit.isVerified ? <strong>Verfified</strong> : <strong>Not Verified</strong>} <br />
                  {audit.policeReport && <span>Police Report: {audit.policeReport}</span>}
                  {audit.policeAuditor && <p>Police Auditor: <a href={`https://etherscan.io/address/${audit.policeAuditor.id}`}>{audit.policeAuditor.id}</a></p>}
                  Request Timestamp: {new Date(parseInt(audit.requestTimestamp) * 1000).toLocaleDateString("en-GB")}, {new Date(parseInt(audit.requestTimestamp) * 1000).toLocaleTimeString("en-GB")} <br />
                  Assign Timestamp: {new Date(parseInt(audit.assignTimestamp) * 1000).toLocaleDateString("en-GB")}, {new Date(parseInt(audit.assignTimestamp) * 1000).toLocaleTimeString("en-GB")} <br />
                  Report Timestamp: {new Date(parseInt(audit.reportTimestamp) * 1000).toLocaleDateString("en-GB")}, {new Date(parseInt(audit.reportTimestamp) * 1000).toLocaleTimeString("en-GB")}
                  {/* Auditor: <a href={`https://etherscan.io/address/${report.contract.id}`}>{report.auditor.id}</a> <br />
                  Contract: <a href={report.contract.id}>Download source code</a> <br />
                  Report: {report.reportText} */}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          )}
        </Accordion>
      </div>
  </div>
  )
}
