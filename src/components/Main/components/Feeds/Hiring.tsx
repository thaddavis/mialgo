import { Button, Card, Table } from "react-bootstrap";

import { Opportunities } from "./opportunitiesData";

export function HiringTable() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {Opportunities.map((i, idx) => (
        <div
          style={{
            width: "33vw",
          }}
        >
          <Card style={{ width: "33vw" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{i.name}</Card.Title>
              <Card.Text>{i.description}</Card.Text>
              <Button variant="primary">{}</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
