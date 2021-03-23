import React from 'react';
import { 
    Row,
    Col,
    Card,
    CardHeader,
    CardBody
} from 'reactstrap';

export default function Dashboard() {


    return (
        <div>
            <Row>
                <Col xs="12" sm="12" md="12">
                    <Card>
                        <CardHeader>
                            <h4>Dashboard</h4>
                        </CardHeader>
                        <CardBody>
                            Text
                        </CardBody>
                    </Card>
                </Col>                     
            </Row>
        </div>            
    )
}