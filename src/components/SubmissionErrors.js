import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { HorizontalBar } from 'react-chartjs-2'
import { GET_SUBMISSION_ERRORS } from '../graphql/queries';

export default function SubmissionErrors() {
  const [expiredAudits, setExpiredAudits] = useState(0);
  const [invalidAuditors, setInvalidAuditors] = useState(0);
  const [invalidResults, setInvalidResults] = useState(0);
  const [invalidStates, setInvalidStates] = useState(0);

  const { error, data } = useQuery(GET_SUBMISSION_ERRORS);

  useEffect(() => {
    if(data) {
      setExpiredAudits(data.logReportSubmissionErrorExpiredAuditEntities.length);
      setInvalidAuditors(data.logReportSubmissionErrorInvalidAuditorEntities.length);
      setInvalidResults(data.logReportSubmissionErrorInvalidResultEntities.length);
      setInvalidStates(data.logReportSubmissionErrorInvalidStateEntities.length);
    }
  }, [data])

  const barData = {
    labels: ['Expired Audit', 'Invalid Auditor', 'Invalid Result', 'Invalid State'],
    datasets: [
      {
        label: '# of Errors',
        data: [expiredAudits, invalidAuditors, invalidResults, invalidStates],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
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
    <h3>Submission Errors</h3>
    {error && <>{error}</>}
    <HorizontalBar data={barData} options={options} />
    </div>
  )
}
