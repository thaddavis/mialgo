import { Table } from "react-bootstrap";

export function HiringTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Company</th>
          <th>Opportunity</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Algorand</td>
          <td>Chief Revenue Officer</td>
          <td>123-123-1234</td>
        </tr>
        <tr>
          <td>2</td>
          <td>City Furniture</td>
          <td>Cloud Engineer</td>
          <td>123-123-1234</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Stacks</td>
          <td>Clarity Smart Contract Developer</td>
          <td>123-123-1234</td>
        </tr>
      </tbody>
    </Table>
  );
}
