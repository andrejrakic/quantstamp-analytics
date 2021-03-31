import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { HorizontalBar } from 'react-chartjs-2'
import { GET_ASSIGNMENT_ERRORS } from '../graphql/queries';

export default function AssignmentErrors() {
  const [expiredEntities, setExpiredEntities] = useState(0);
  const [understakedEntities, setUnderstakedEntities] = useState(0);

  const { error, data } = useQuery(GET_ASSIGNMENT_ERRORS);

  useEffect(() => {
    if(data) {
      setExpiredEntities(data.logAuditAssignmentUpdateExpiredEntities.length);
      setUnderstakedEntities(data.logAuditAssignmentErrorUnderstakedEntities.length);
    }
  },[data])

  const barData = {
    labels: ['Expired Entities', 'Understaked Entities'],
    datasets: [
      {
        label: '# of Errors',
        data: [expiredEntities, understakedEntities],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
  
  return (
    <div style={{width: 400}}>
    {error && <>{error}</>}
    <h3>Assignment Errors</h3>
    <HorizontalBar data={barData} options={options} />
    </div>
  )
}
