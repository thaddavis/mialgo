import { Table } from "react-bootstrap";

export function LookingTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Account</th>
          <th>Contact</th>
          <th>Skills</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Alina</td>
          <td>123-123-1234</td>
          <td>UI/UX</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Tad</td>
          <td>123-123-1234</td>
          <td>Full Stack</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Yuliani</td>
          <td>123-123-1234</td>
          <td>Mobile Developers (iOS)</td>
        </tr>
      </tbody>
    </Table>
  );
}
