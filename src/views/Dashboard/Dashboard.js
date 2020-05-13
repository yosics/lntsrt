import React, { Component } from 'react';
import { Col, Row, Card, CardFooter, CardBody, Alert, Button } from 'reactstrap';
import '../../scss/tab.css';
import '../../scss/tab2.css';
import vm from '../../assets/img/virtual_machine.png';
import Select from 'react-select'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
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
            <Button block outline color="primary" className="btn-newvm">NEW VM</Button>
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
                    <div className="tx4">Powered Off</div>
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
                    <div className="tx4">Powered On</div>
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
                    <div className="tx4">Powered Off</div>
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
                    <div className="tx4">Powered Off</div>
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
      </div>
    );
  }
}

export default Dashboard;