import React from 'react'
import { Container, Table } from 'react-bootstrap'

export default function OrderHistory() {
  return (
    <>
    <Container>
        <h3>Your Order History:</h3>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>SL</th>
          <th>Ordered Items</th>
          <th>Model Number</th>
          <th>Price</th>
          <th>Actrions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Sony Experia 5 Mark 3 Slim Smartphone</td>
          <td>5 Mark 3</td>
          <td>90000 BDT</td>
          <td><i className="fa-solid fa-eye me-3"></i> <i className="fa-solid fa-circle-down"></i></td>
        </tr>
      </tbody>
    </Table>
    </Container>
    </>
  )
}
