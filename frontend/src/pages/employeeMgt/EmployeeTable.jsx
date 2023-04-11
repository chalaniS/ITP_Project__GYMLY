import { Container, Row, Col, Table } from 'reactstrap'
import '../../App.css'

function EmployeeTable() {
  return (
    <section>
      <Container>
          <div className="title code">Employee Summary</div>
          <Row>
            <Table dark striped bordered hover responsive>
              <thead>
                  <th>#</th>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Job Role</th>
                  <th>Salary</th>
                  <th>Actions</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>2</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>3</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>4</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>5</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>6</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>7</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>8</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>9</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </Row>
      </Container>
    </section>
  );
}

export default EmployeeTable;