import { gql } from '@apollo/client';

export const GET_AUDIT_NODES = gql`
{
  auditNodes {
    id
    price
    feeCollected
  }
}
`;

export const GET_POLICE_NODES = gql`
{
	policeNodes {
    id
    feeCollected
  }
}`;

export const GET_AUDIT_AND_POLICE_NODES = gql`
{
  auditNodes {
    id
    price
    feeCollected
  }
  policeNodes {
    id
    feeCollected
  }
}
`;

export const GET_AUDITS = gql`
{
	audits {
    id
    auditState
    requestor
    price
    contract {
      id
    }
    isVerified
    auditor {
      id
    }
    policeAuditor {
      id
    }
    report {
      id
      reportText
    }
    policeReport
    requestTimestamp
    assignTimestamp
    reportTimestamp
  }
}
`;

export const GET_REPORTS = gql`
{
  reports {
    id
    auditor {
      id
    }
    reportText
    contract {
      id
    }
  }
}
`;

export const GET_SMART_CONTRACTS = gql`
{
  smartContracts {
    id
  }
}
`;

export const GET_STATS = gql`
{
	audits {
    id
    auditState
    requestor
    price
    contract {
      id
    }
    isVerified
    auditor {
      id
    }
    policeAuditor {
      id
    }
    report {
      id
      reportText
    }
    policeReport
    requestTimestamp
    assignTimestamp
    reportTimestamp
  }
  reports {
    id
    auditor {
      id
    }
    reportText
    contract {
      id
    }
  }
  smartContracts {
    id
  }
}
`

export const GET_REFUND_ERRORS = gql`
{
  logRefundInvalidStates {
  	id
	}
  logRefundInvalidRequestors {
    id
  }
  logRefundInvalidFundsLockeds {
    id
  }
}`;

export const GET_SUBMISSION_ERRORS = gql`
{
  logReportSubmissionErrorInvalidResultEntities {
    id
  }
  
  logReportSubmissionErrorInvalidAuditorEntities {
    id
  }
  
  logReportSubmissionErrorInvalidStateEntities {
    id
  }
  
  logReportSubmissionErrorExpiredAuditEntities {
    id
  }
}`;

export const GET_ASSIGNMENT_ERRORS = gql`
{
  logAuditAssignmentErrorUnderstakedEntities {
    id
  }
  
  logAuditAssignmentUpdateExpiredEntities {
    id
  }
}`;