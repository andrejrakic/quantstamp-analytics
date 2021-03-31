import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/client';
import { GET_STATS } from '../graphql/queries';
import { Card, Spinner } from 'react-bootstrap';

export default function GeneralStats() {
  const [audits, setAudits] = useState(0);
  const [reports, setReports] = useState(0);
  const [smartContracts, setSmartContracts] = useState(0);

  const { loading, error, data } = useQuery(GET_STATS);

  useEffect(() => {
    if(data) {
      setAudits(data.audits.length);
      setReports(data.reports.length);
      setSmartContracts(data.smartContracts.length);
    }
  },[data]);

  return (
    <div style={{width: 1500, paddingLeft: 50, paddingTop: 20}}>
    {error && <p>{error}</p>}
    {loading ? <Spinner animation="border" variant="primary" /> :
    <div style={{display: 'flex'}}>
      <Card style={{width: '25%', margin: 10 }} className="text-center">
        <Card.Body>    
          <Card.Title style={{fontSize: 30}}>{audits}</Card.Title>
          <Card.Text>Audits</Card.Text>
        </Card.Body>
      </Card>

      <Card style={{width: '25%', margin: 10 }} className="text-center">
        <Card.Body>    
          <Card.Title style={{fontSize: 30}}>{reports}</Card.Title>
          <Card.Text>Unique Reports</Card.Text>
        </Card.Body>
      </Card>

      <Card style={{width: '25%', margin: 10 }} className="text-center">
        <Card.Body>    
          <Card.Title style={{ fontSize: 30 }}>{smartContracts}</Card.Title>
          <Card.Text>Smart Contracts audited</Card.Text>
        </Card.Body>
      </Card>
    </div>
    }
    </div>
  )
}
