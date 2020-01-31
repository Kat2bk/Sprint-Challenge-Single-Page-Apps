import React from "react";
import { Card, CardTitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function CharacterCard(props) {
  return (
      <Card body inverse style={{ backgroundColor: 'primary', borderColor: '#333' }}>
        <CardTitle>Name:</CardTitle>
    <CardText>{props.data.name}</CardText>
    <CardText>Species: {props.data.species}</CardText>
    </Card>
  )
}
