
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const WorkshopCard = ({ title, body }) => (
  <Card>
    <h2>{title}</h2>
    <p>{body}</p>
    <button>Learn More</button>
  </Card>
);

export default WorkshopCard;
