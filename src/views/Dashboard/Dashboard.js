import React, { Component } from 'react';
import { Col, Row, Card, Collapse, CardHeader, CardFooter, CardBody, Alert, Modal, ModalBody, ModalHeader, Button,
          Form, FormGroup, Input, Label, FormText } from 'reactstrap';
import '../../scss/tab.css';
import '../../scss/tab2.css';
import vm from '../../assets/img/virtual_machine.png';
import Select from 'react-select'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
      large: false,
      accordion: [true, true],
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.toggleLarge = this.toggleLarge.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  toggleLarge() {
    this.setState({
      large: !this.state.large,
    });
  }

  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : x);

    this.setState({
      accordion: state,
    });
  }

  render() {
    const options = [
      { value: 'ALL VMS', label: 'ALL VMS' },
      { value: 'VM 001', label: 'VM 001' },
      { value: 'VM 002', label: 'VM 002' },
    ]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" md="12" className="headcust">
            <b>DC_1122825</b> | Org_cloud1103239 <i className="icon-location4"></i> Jakarta
          </Col>
          <Alert className="alertcust" color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
            {/*eslint-disable-next-line*/}
            <i className="icon-info22"></i> Virtual machine "WINTST001" is beeing created from template "WINTST001" 
          </Alert>
          <Col xs="12" sm="12" md="12" className="filtercust">
            <Button block outline color="primary" className="btn-newvm" onClick={this.toggleLarge}>NEW VM</Button>
            <div style={{lineHeight: '40px'}}>Look in</div>
            <Select options={options} className="custselect"/>
            <div className="icfilt" style={{marginLeft: '15px'}}><i className="icon-filter4 csx"></i></div>
            <div className="icfilt"><i className="icon-sort csx"></i></div>
            <div className="icfilt"><i className="icon-rotate-cw3 csx"></i></div>
            <div style={{lineHeight: '40px'}}>See this page in vCloud Director Web Console</div>
            <div className="icfilt" style={{marginLeft: '15px'}}><i className="icon-grid6 csx"></i></div>
            <div className="icfilt"><i className="icon-paragraph-justify3 csx"></i></div>
          </Col>
          <Col lg="4">
            <Card className="mb10px" style={{minHeight: "218px"}}>
              <CardBody style={{backgroundColor: '#fff', minHeight: '230px'}}>
                <Row>
                  <Col sm="8">
                    <div className="tx1">Virtual Machine</div>
                    <div className="tx2">WINTST001</div>
                    <div className="tx3">Microsoft Windows Server 2013</div>
                    <div className="tx4 bgred"><i className="icon-switch"></i> Powered Off</div>
                  </Col>
                  <Col sm="4">
                    <img src={vm} className="icdisp"/>
                  </Col>
                </Row>
                <Row style={{marginTop: '30px'}}>
                  <Col sm="6">
                    <div className="tx1"><i className="icon-pulse2"></i> CPU</div>
                    <div className="tx5">2</div>
                  </Col>
                  <Col sm="6">
                    <div className="tx1">License</div>
                    <div className="tx6">Never Expires</div>
                  </Col>
                </Row>
                <Row style={{marginTop: '20px'}}>
                  <Col sm="6">
                    <div className="tx1"><i className="icon-drive"></i> Memory</div>
                    <div className="tx5">4096 MB</div>
                  </Col>
                  <Col sm="6">
                    <div className="tx1">VMware Tools</div>
                    <div className="tx6"><i className="icon-warning22" style={{color: 'orange'}}></i></div>
                  </Col>
                </Row>
                <Row style={{marginTop: '20px'}}>
                  <Col sm="6">
                    <div className="tx1"><i className="icon-sphere3"></i> Network</div>
                    <div className="tx5">-</div>
                  </Col>
                  <Col sm="6">
                    <div className="tx1">Snapshot</div>
                    <div className="tx6">-</div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <div className="fter">
                    <div className="txf">Action <i className="icon-arrow-down5"></i></div>
                    <div className="txf">Details</div>
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="mb10px" style={{minHeight: "218px"}}>
              <CardBody style={{backgroundColor: '#fff', minHeight: '230px'}}>
                <Row>
                  <Col sm="8">
                    <div className="tx1">Virtual Machine</div>
                    <div className="tx2">W2016</div>
                    <div className="tx3">Microsoft Windows Server 2013</div>
                    <div className="tx4 bggreen"><i className="icon-switch"></i> Powered On</div>
                  </Col>
                  <Col sm="4">
                    <img src={vm} className="icdisp"/>
                  </Col>
                </Row>
                <Row style={{marginTop: '30px'}}>
                  <Col sm="6">
                    <div className="tx1"><i className="icon-pulse2"></i> CPU</div>
                    <div className="tx5">4</div>
                  </Col>
                  <Col sm="6">
                    <div className="tx1">License</div>
                    <div className="tx6">Never Expires</div>
                  </Col>
                </Row>
                <Row style={{marginTop: '20px'}}>
                  <Col sm="6">
                    <div className="tx1"><i className="icon-drive"></i> Memory</div>
                    <div className="tx5">4096 MB</div>
                  </Col>
                  <Col sm="6">
                    <div className="tx1">VMware Tools</div>
                    <div className="tx6"><i className="icon-warning22" style={{color: 'orange'}}></i></div>
                  </Col>
                </Row>
                <Row style={{marginTop: '20px'}}>
                  <Col sm="6">
                    <div className="tx1"><i className="icon-sphere3"></i> Network</div>
                    <div className="tx5">DC_1122..</div>
                  </Col>
                  <Col sm="6">
                    <div className="tx1">Snapshot</div>
                    <div className="tx6">-</div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <div className="fter">
                    <div className="txf">Action <i className="icon-arrow-down5"></i></div>
                    <div className="txf">Details</div>
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="mb10px" style={{minHeight: "218px"}}>
              <CardBody style={{backgroundColor: '#fff', minHeight: '230px'}}>
                <Row>
                  <Col sm="8">
                    <div className="tx1">Virtual Machine</div>
                    <div className="tx2">W_TEST</div>
                    <div className="tx3">Microsoft Windows Server 2013</div>
                    <div className="tx4 bgred"><i className="icon-switch"></i> Powered Off</div>
                  </Col>
                  <Col sm="4">
                    <img src={vm} className="icdisp"/>
                  </Col>
                </Row>
                <Row style={{marginTop: '30px'}}>
                  <Col sm="6">
                    <div className="tx1"><i className="icon-pulse2"></i> CPU</div>
                    <div className="tx5">2</div>
                  </Col>
                  <Col sm="6">
                    <div className="tx1">License</div>
                    <div className="tx6">Never Expires</div>
                  </Col>
                </Row>
                <Row style={{marginTop: '20px'}}>
                  <Col sm="6">
                    <div className="tx1"><i className="icon-drive"></i> Memory</div>
                    <div className="tx5">4096 MB</div>
                  </Col>
                  <Col sm="6">
                    <div className="tx1">VMware Tools</div>
                    <div className="tx6"><i className="icon-warning22" style={{color: 'orange'}}></i></div>
                  </Col>
                </Row>
                <Row style={{marginTop: '20px'}}>
                  <Col sm="6">
                    <div className="tx1"><i className="icon-sphere3"></i> Network</div>
                    <div className="tx5">-</div>
                  </Col>
                  <Col sm="6">
                    <div className="tx1">Snapshot</div>
                    <div className="tx6">-</div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <div className="fter">
                    <div className="txf">Action <i className="icon-arrow-down5"></i></div>
                    <div className="txf">Details</div>
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="mb10px" style={{minHeight: "218px"}}>
              <CardBody style={{backgroundColor: '#fff', minHeight: '230px'}}>
                <Row>
                  <Col sm="8">
                    <div className="tx1">Virtual Machine</div>
                    <div className="tx2">WINSRV</div>
                    <div className="tx3">Microsoft Windows Server 2013</div>
                    <div className="tx4 bgred"><i className="icon-switch"></i> Powered Off</div>
                  </Col>
                  <Col sm="4">
                    <img src={vm} className="icdisp"/>
                  </Col>
                </Row>
                <Row style={{marginTop: '30px'}}>
                  <Col sm="6">
                    <div className="tx1"><i className="icon-pulse2"></i> CPU</div>
                    <div className="tx5">2</div>
                  </Col>
                  <Col sm="6">
                    <div className="tx1">License</div>
                    <div className="tx6">Never Expires</div>
                  </Col>
                </Row>
                <Row style={{marginTop: '20px'}}>
                  <Col sm="6">
                    <div className="tx1"><i className="icon-drive"></i> Memory</div>
                    <div className="tx5">4096 MB</div>
                  </Col>
                  <Col sm="6">
                    <div className="tx1">VMware Tools</div>
                    <div className="tx6"><i className="icon-warning22" style={{color: 'orange'}}></i></div>
                  </Col>
                </Row>
                <Row style={{marginTop: '20px'}}>
                  <Col sm="6">
                    <div className="tx1"><i className="icon-sphere3"></i> Network</div>
                    <div className="tx5">-</div>
                  </Col>
                  <Col sm="6">
                    <div className="tx1">Snapshot</div>
                    <div className="tx6">-</div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <div className="fter">
                    <div className="txf">Action <i className="icon-arrow-down5"></i></div>
                    <div className="txf">Details</div>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Modal isOpen={this.state.large} toggle={this.toggleLarge}
              className='modal-lg modal-DDD6DE'>
        <ModalHeader toggle={this.toggleLarge}>New Virtual Machine</ModalHeader>
        <ModalBody className="card-body-nopad">
          <div id="accordion">
            <Card className="mb-0 rd0">
              <CardHeader id="headingOne" className="headerCollapse">
                <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                  <h6 className="m-0 p-0">General</h6>
                </Button>
              </CardHeader>
              <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                <CardBody>
                  <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                    <Row>
                      <Col md="6">
                        <FormGroup row>
                          <Col md="5">
                            <Label htmlFor="text-input">Name</Label>
                          </Col>
                          <Col xs="12" md="7">
                            <Input type="text" id="text-input" name="text-input" placeholder="MELSRV001" />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="5">
                            <Label htmlFor="text-input">Computer Name</Label>
                          </Col>
                          <Col xs="12" md="7">
                            <Input type="text" id="text-input" name="text-input" placeholder="MELSRV001" />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="5">
                            <Label htmlFor="textarea-input">Description</Label>
                          </Col>
                          <Col xs="12" md="7">
                            <Input type="textarea" name="textarea-input" id="textarea-input" rows="3"
                                  placeholder="" />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="5">
                            <Label htmlFor="text-input">Operating System Family</Label>
                          </Col>
                          <Col xs="12" md="7">
                            <Select className="custselect2"/>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="5">
                            <Label htmlFor="text-input">Operating System</Label>
                          </Col>
                          <Col xs="12" md="7">
                            <Select className="custselect2"/>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="5">
                            <Label htmlFor="text-input">Boot Delay</Label>
                          </Col>
                          <Col xs="12" md="7">
                            <Input type="text" id="text-input" name="text-input" placeholder="0" />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="5">
                            <Label htmlFor="text-input">Storage Policy</Label>
                          </Col>
                          <Col xs="12" md="7">
                            <Select className="custselect2"/>
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup row>
                          <Col md="5">
                            <Label>Virtual Data Center</Label>
                          </Col>
                          <Col xs="12" md="7">
                            <p className="form-control-static">DC-1144457</p>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="5">
                            <Label>VMware Tools</Label>
                          </Col>
                          <Col xs="12" md="7">
                            <p className="form-control-static">10249</p>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="5">
                            <Label>Virtual Hardware Version</Label>
                          </Col>
                          <Col xs="12" md="7">
                            <p className="form-control-static">HW 13</p>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="5">
                            <Label>Enter Bios Setup</Label>
                          </Col>
                          <Col md="7">
                            <FormGroup check inline>
                              <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" />
                              <Label className="form-check-label" check htmlFor="inline-checkbox1"></Label>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Collapse>
            </Card>
            <Card className="mb-0 rd0">
              <CardHeader id="headingTwo" className="headerCollapse">
                <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                  <h6 className="m-0 p-0">Hardware</h6>
                </Button>
              </CardHeader>
              <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                <CardBody>
                  <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                    <Row>
                      <Col md="6">
                        <FormGroup row>
                          <Col md="5">
                            <Label htmlFor="text-input">Number of Virtual CPU</Label>
                          </Col>
                          <Col xs="12" md="7">
                            <Select className="custselect2"/>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="5">
                            <Label htmlFor="text-input">Core per Socket</Label>
                          </Col>
                          <Col xs="12" md="7">
                            <Select className="custselect2"/>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="5">
                            <Label>Expose Hardware-Assistted CPU Virtualization to Guest OS</Label>
                          </Col>
                          <Col md="7">
                            <FormGroup check inline>
                              <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" />
                              <Label className="form-check-label" check htmlFor="inline-checkbox1"></Label>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="5">
                            <Label htmlFor="text-input">Total Memory</Label>
                          </Col>
                          <Col xs="12" md="7">
                            <Input type="text" id="text-input" name="text-input" placeholder="8192" />
                            <FormText>MB</FormText>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="5">
                            <Label>Memory Hot Add</Label>
                          </Col>
                          <Col md="7">
                            <FormGroup check inline>
                              <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" />
                              <Label className="form-check-label" check htmlFor="inline-checkbox1"></Label>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup row>
                          <Col md="5">
                            <Label>Virtual CPU Hot Add</Label>
                          </Col>
                          <Col md="7">
                            <FormGroup check inline>
                              <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" />
                              <Label className="form-check-label" check htmlFor="inline-checkbox1"></Label>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="5">
                            <Label>Number of Sockets</Label>
                          </Col>
                          <Col xs="12" md="7">
                            <p className="form-control-static">2</p>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="5">
                            <Label>Removable Media CD/DVD Drive</Label>
                          </Col>
                          <Col xs="12" md="7">
                            <p className="form-control-static">Disconnected</p>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="5">
                            <Label>Floopy Drive</Label>
                          </Col>
                          <Col xs="12" md="7">
                            <p className="form-control-static">Disconnected</p>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Collapse>
            </Card>
          </div>
        </ModalBody>
      </Modal>
      </div>
    );
  }
}

export default Dashboard;