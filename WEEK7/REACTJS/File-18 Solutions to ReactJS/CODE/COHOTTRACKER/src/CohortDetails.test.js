// src/CohortDetails.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import CohortDetails from './CohortDetails';

const mockCohort = {
  cohortCode: 'C123',
  technology: 'React',
  startDate: '2024-01-01',
  endDate: '2024-06-01',
};

describe('CohortDetails component', () => {
  test('renders without crashing when no props are passed', () => {
    render(<CohortDetails />);
    expect(screen.getByText(/No cohort data/i)).toBeInTheDocument();
  });

  test('displays cohort code in h3 when props are passed', () => {
    render(<CohortDetails cohort={mockCohort} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(mockCohort.cohortCode);
  });
});
