import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import BootstrapDataTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';

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

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Showing { from } to { to } of { size } Results
  </span>
);

const options = {
  paginationSize: 4,
  pageStartIndex: 0,
  // alwaysShowAllBtns: true, // Always show next and previous button
  // withFirstAndLast: false, // Hide the going to First and Last page button
  // hideSizePerPage: true, // Hide the sizePerPage dropdown always
  // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
  firstPageText: 'First',
  prePageText: 'Back',
  nextPageText: 'Next',
  lastPageText: 'Last',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,
  paginationTotalRenderer: customTotal,
  disablePageTitle: true,
  sizePerPageList: [{
    text: '5', value: 5
  }, {
    text: '10', value: 10
  }, {
    text: '15', value: 15
  }, {
    text: '20', value: 20
  }, {
    text: 'All', value: products.length
  }] // A numeric array is also available. the purpose of above example is custom the text
};

  useEffect(() => {
    const dataset = [
      {
        id: 1, name: "Product 1", price: 10,
      },
      {
        id: 2, name: "Product 2", price: 15,
      },
      { 
        id: 3, name: "Product 3", price: 20,
      },
      { 
        id: 4, name: "Product 4", price: 40,
      },
      { 
        id: 5, name: "Product 5", price: 50,
      },
      { 
        id: 6, name: "Product 6", price: 60,
      },
      { 
        id: 7, name: "Product 4", price: 70,
      },
      { 
        id: 8, name: "Product 4", price: 80,
      },
      { 
        id: 9, name: "Product 4", price: 90,
      },
      { 
        id: 10, name: "Product 4", price: 100,
      },
      { 
        id: 11, name: "Product 4", price: 110,
      },
      { 
        id: 12, name: "Product 4", price: 120,
      },
      { 
        id: 13, name: "Product 4", price: 130,
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
                striped={true}
                hover={true}
				        condensed={true}
				        bordered={false}
                pagination={ paginationFactory(options) }
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
