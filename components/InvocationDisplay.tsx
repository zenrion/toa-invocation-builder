import React, { useState } from 'react'
import Invocations from './Invocations';
import invocationData from '../public/invocations.json';
import RaidStats from './RaidStats';
import styled from '@emotion/styled';

const Container = styled('div')`
padding: 0.75rem;
display: grid;
grid-template-columns: 2fr 1fr;
gap: 1rem;
background: rgb(64, 55, 45);
box-shadow: 0 0 3rem 1rem rgba(0, 0, 0, 0.5);
border: 2px solid rgba(28, 26, 21, 255);
height: 725px;

@media only screen and (max-width: 768px) {
  padding: 0.25rem;
  border: none;
  grid-template-columns: 1fr;
  gap: 0;
  height: 100%;
}
`;

export interface RaidStats {
  raidLevel: number;
  invocationCount: number;
}

const InvocationDisplay = () => {
  const [raidStats, setRaidStats] = useState({
    raidLevel: 0,
    invocationCount: 0
  } as RaidStats);

  return (
    <Container>
      <Invocations invocations={invocationData}
        raidStats={raidStats}
        setRaidStats={setRaidStats} />
      <RaidStats raidStats={raidStats} />
    </Container>
  )
}

export default InvocationDisplay;