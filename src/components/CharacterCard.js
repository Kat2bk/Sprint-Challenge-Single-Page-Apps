import React from "react";
import { Card, CardTitle, CardText } from 'reactstrap';

export default function CharacterCard(props) {
  return (
    <div className="card">
    <Card body inverse color="warning">
      <Card body inverse color="danger">
        <CardTitle className="name">Name:</CardTitle>
    <CardText>{props.data.name}</CardText>
    <CardTitle className="species">Species:</CardTitle>
    <CardText>{props.data.species}</CardText>
    </Card>
    </Card>
    </div>
  )
}
