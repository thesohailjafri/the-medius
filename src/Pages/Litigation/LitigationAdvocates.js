import React from 'react'
import LitigationAdvocatesHeader from '../../Components/LitigationAdvocatesHeader'
import { Link, useRouteMatch } from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox'
import Dropdown from 'react-bootstrap/Dropdown'
import Arrow from '../../Static/RawImages/arrow.png'

//charts
import CircularWithBarChart from '../../Components/Charts/CircularWithBarChart'
import HorizontalBarChart from '../../Components/Charts/HorizontalBarChart'

function LitigationAdvocates() {
    const circularWithBarChartData = {
        data: { 
          name: 'Case Filed',
          value: 75,
          color: "#00777c",
          title: "5,266",
         },
        tooltipText: "Filed"
      }
      let horizontalChartData = [
        { value: 60, color: "#1dc4e9", color1: "#1de9b6", label: "First Hearing", tooltipLabel: "Cases "},
        { value: 80, color: "#1dc4e9", color1: "#1de9b6", label: "In-progress", tooltipLabel: "Cases " },
        { value: 40, color: "#1dc4e9", color1: "#1de9b6", label: "Closed", tooltipLabel: "Cases " }
      ];
    return (
        <>
            <LitigationAdvocatesHeader />
            <hr className="mt-4 mb-5" />
            <div className="row d-flex justify-between batch-listing" data-aos="fade-up" data-aos-duration="800">
                <div className="col-lg-3 border-right-dotted">
                    <div className="d-flex align-start">
                        <Checkbox
                            className="me-3"
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <div>
                            <p><Link><b className="text-black tx-16"> KS Legal & Associates</b></Link><br />
                                Mumbai<br />
                            </p>
                            <hr /> 
                            Total Cases Assigned -  <span className="text-black"><strong>13,366</strong></span>
                            <hr /> 
                        </div>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="pe-5">
                        <Dropdown className="text-end">
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 mb-4 dropdown-nostyle text-end select-style">
                            Location <img src={Arrow} alt="Sort" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="select-style-dropdown">
                                <Dropdown.Item href="">Location</Dropdown.Item>
                                <Dropdown.Item href="">Accounts 2</Dropdown.Item>
                                <Dropdown.Item href="">Location 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 dropdown-nostyle text-end select-style">
                                Type of Cases <img src={Arrow} alt="Sort" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="select-style-dropdown">
                                <Dropdown.Item href="">Cases</Dropdown.Item>
                                <Dropdown.Item href="">Cases 2</Dropdown.Item>
                                <Dropdown.Item href="">Cases 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="col-lg-7 ps-5 text-end">
                    <div className="status-progress">
                        <div className="chart-box content-center text-center d-flex pt-4"> 
                            <CircularWithBarChart  data={circularWithBarChartData}></CircularWithBarChart>
                            <HorizontalBarChart data={horizontalChartData}></HorizontalBarChart>                        
                        </div>
                    </div>                    
                </div>
                <div className="col-lg-12"><hr className="mt-5 mb-5" /></div>
            </div>
            <div className="row d-flex justify-between batch-listing" data-aos="fade-up" data-aos-duration="800">
                <div className="col-lg-3 border-right-dotted">
                    <div className="d-flex align-start">
                        <Checkbox
                            className="me-3"
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <div>
                            <p><Link><b className="text-black tx-16"> KS Legal & Associates</b></Link><br />
                                Mumbai<br />
                            </p>
                            <hr /> 
                            Total Cases Assigned -  <span className="text-black"><strong>13,366</strong></span>
                            <hr /> 

                        </div>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="pe-5">
                        <Dropdown className="text-end">
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 mb-4 dropdown-nostyle text-end select-style">
                            Location <img src={Arrow} alt="Sort" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="select-style-dropdown">
                                <Dropdown.Item href="">Location</Dropdown.Item>
                                <Dropdown.Item href="">Accounts 2</Dropdown.Item>
                                <Dropdown.Item href="">Location 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 dropdown-nostyle text-end select-style">
                                Type of Cases <img src={Arrow} alt="Sort" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="select-style-dropdown">
                                <Dropdown.Item href="">Cases</Dropdown.Item>
                                <Dropdown.Item href="">Cases 2</Dropdown.Item>
                                <Dropdown.Item href="">Cases 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="col-lg-7 ps-5 text-end">
                    <div className="status-progress">
                        <div className="chart-box content-center text-center d-flex pt-4"> 
                            <CircularWithBarChart  data={circularWithBarChartData}></CircularWithBarChart>
                            <HorizontalBarChart data={horizontalChartData}></HorizontalBarChart>                        
                        </div>
                    </div>                    
                </div>
                <div className="col-lg-12"><hr className="mt-5 mb-5" /></div>
            </div>
            <div className="row d-flex justify-between batch-listing" data-aos="fade-up" data-aos-duration="800">
                <div className="col-lg-3 border-right-dotted">
                    <div className="d-flex align-start">
                        <Checkbox
                            className="me-3"
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <div>
                            <p><Link><b className="text-black tx-16"> KS Legal & Associates</b></Link><br />
                                Mumbai<br />
                            </p>
                            <hr /> 
                            Total Cases Assigned -  <span className="text-black"><strong>13,366</strong></span>
                            <hr /> 
                        </div>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="pe-5">
                        <Dropdown className="text-end">
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 mb-4 dropdown-nostyle text-end select-style">
                            Location <img src={Arrow} alt="Sort" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="select-style-dropdown">
                                <Dropdown.Item href="">Location</Dropdown.Item>
                                <Dropdown.Item href="">Accounts 2</Dropdown.Item>
                                <Dropdown.Item href="">Location 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 dropdown-nostyle text-end select-style">
                                Type of Cases <img src={Arrow} alt="Sort" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="select-style-dropdown">
                                <Dropdown.Item href="">Cases</Dropdown.Item>
                                <Dropdown.Item href="">Cases 2</Dropdown.Item>
                                <Dropdown.Item href="">Cases 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="col-lg-7 ps-5 text-end">
                    <div className="status-progress">
                        <div className="chart-box content-center text-center d-flex pt-4"> 
                            <CircularWithBarChart  data={circularWithBarChartData}></CircularWithBarChart>
                            <HorizontalBarChart data={horizontalChartData}></HorizontalBarChart>                        
                        </div>
                    </div>                    
                </div>
                <div className="col-lg-12"><hr className="mt-5 mb-5" /></div>
            </div>       
        </>
    )
}

export default LitigationAdvocates
