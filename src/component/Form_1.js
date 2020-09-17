import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './form1.css';
import Col from "react-bootstrap/Form";

export default function Form_1() {
    return (
        <div class="mainDiv">
            <Form>
                <Form.Row>
                    <Form.Group class="indv" sm controlId="formGridEmail">
                        <Form.Label>Owners</Form.Label>
                        <Form.Control class=" input_Style" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group class="indv" sm controlId="formGridPassword">
                        <Form.Label>Middle Initial</Form.Label>
                        <Form.Control type="name"/>
                    </Form.Group>

                    <Form.Group class="indv" sm controlId="formGridPassword">
                        <Form.Label>Owner Last Name</Form.Label>
                        <Form.Control type="name" />
                    </Form.Group>
                </Form.Row>


                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Residential address</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Apt#</Form.Label>
                    <Form.Control />
                </Form.Group>


                <Form.Row>

                    <Form.Group as={Col} controlId="formGridAddress2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAddress2">
                        <Form.Label>Secondary Email</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="ALtered" />
                    <Form.Check type="checkbox" label="Unalteres" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>

        </div>
    )
}
