import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Bar, Pie } from 'react-chartjs-2';

const dataBar = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset Bar",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    }
  ],
};

const dataPie = {
  labels: ["January", "February", "March"],
  datasets: [
    {
      label: "Dataset Pie",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [20, 30, 45],
    }
  ],
};

export default function Charts() {
  return (
    <div>
      <Row>
        <Col xs="12" sm="6" md="5">
          <Card>
            <CardHeader>
              <h4>Charts Bar</h4>
            </CardHeader>
            <CardBody>
                <Bar data={dataBar} width={100} height={80}/>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="5">
          <Card>
            <CardHeader>
              <h4>Charts Pie</h4>
            </CardHeader>
            <CardBody>
                <Pie data={dataPie} width={100} height={80}/>
            </CardBody>
          </Card>
        </Col>        
      </Row>
    </div>
  );
}
