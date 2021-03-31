import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { HorizontalBar } from 'react-chartjs-2'
import { GET_REFUND_ERRORS } from '../graphql/queries';

export default function RefundErrors() {
  const [invalidStates, setInvalidStates] = useState(0);
  const [invalidRequestors, setInvalidRequestors] = useState(0);
  const [invalidFunds, setInvalidFunds] = useState(0);

  const { error, data } = useQuery(GET_REFUND_ERRORS);

  useEffect(() => {
    if(data) {
      setInvalidStates(data.logRefundInvalidStates.length);
      setInvalidRequestors(data.logRefundInvalidRequestors.length);
      setInvalidFunds(data.logRefundInvalidFundsLockeds.length);
    }
  }, [data])

  const barData = {
    labels: ['Invalid State', 'Invalid Requestors', 'Invalid Funds Locked'],
    datasets: [
      {
        label: '# of Errors',
        data: [invalidStates, invalidRequestors, invalidFunds],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
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
    <h3>Refund Errors</h3>
    {error && <>{error}</>}
    <HorizontalBar data={barData} options={options} />
    </div>
  )
}
