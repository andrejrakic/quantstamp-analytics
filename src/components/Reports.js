import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/client';
import { GET_REPORTS } from '../graphql/queries';
import { Card, Accordion, Button } from 'react-bootstrap';

export default function Reports() {
  const [reports, setReports] = useState([]);

  const { error, data } = useQuery(GET_REPORTS);

  useEffect(() => {
    if(data) {
      setReports(data.reports);
    }
  }, [data]);

  return (
    <div>
      <h2>Reports</h2>
      {error && <>{error}</>}
    <div style={{overflow: 'auto', height: 400, width: 800}}>
      <Accordion>
        {reports.map((report, index) => 
        <Card key={report.id}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={index}>
              {report.id}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={index}>
            <Card.Body>
              Auditor: <a href={`https://etherscan.io/address/${report.auditor.id}`}>{report.auditor.id}</a> <br />
              Contract: <a href={report.contract.id}>Download source code</a> <br />
              Report: {report.reportText}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        )}
      </Accordion>
    </div>
    </div>
  )
}
