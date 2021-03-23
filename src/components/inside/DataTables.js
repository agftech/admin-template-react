import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import BootstrapDataTable from "react-bootstrap-table-next";

const columns = [
  {
    dataField: "id",
    text: "Product ID",
  },
  {
    dataField: "name",
    text: "Product Name",
  },
  {
    dataField: "price",
    text: "Product Price",
  },
];

export default function DataTables() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dataset = [
      {
        id: 1,
        title: "Product 1",
        price: 10,
      },
      {
        id: 2,
        title: "Product 2",
        price: 15,
      },
      {
        id: 3,
        title: "Product 2",
        price: 20,
      },
    ];
    setProducts(dataset);
  }, []);
  return (
    <div>
      <Row>
        <Col xs="12" sm="12" md="12">
          <Card>
            <CardHeader>
              <h4>DataTable</h4>
            </CardHeader>
            <CardBody>
              <BootstrapDataTable
                keyField="id"
                data={products}
                columns={columns}
                striped
                hover
				condensed
				bordered={false}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
