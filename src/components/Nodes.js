import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { GET_AUDIT_AND_POLICE_NODES } from '../graphql/queries';
import { Pie } from "react-chartjs-2";
import { Spinner } from 'react-bootstrap';

export default function Nodes() {
  const [auditNodes, setAuditNodes] = useState(0);
  const [policeNodes, setPoliceNodes] = useState(0);

  const { loading, error, data } = useQuery(GET_AUDIT_AND_POLICE_NODES);

  useEffect(() => {
    if(data) {
      setAuditNodes(data.auditNodes.length);
      setPoliceNodes(data.policeNodes.length);
    }
  },[data]);

  const state = {
    dataPie: {
      labels: ["Audit Nodes", "Police Nodes"],
      datasets: [{
        data: [auditNodes, policeNodes],
        backgroundColor: ["grey","#0000ff"],
        hoverBackgroundColor: ["#a6a6a6","#4d4dff"]
      }]
    }
  }

  return (
    <div style={{width: 800, height: 200}}>
      {loading ? <Spinner animation="border" variant="primary" /> : <Pie data={state.dataPie} options={{ responsive: true }} />}
      {error && <p>{error}</p>}
    </div>
  )
}
