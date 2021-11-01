import React from 'react'
import PrelitigationFirBatchHeader from '../../Components/PrelitigationFirBatchHeader'
import Checkbox from '@material-ui/core/Checkbox'
import Dropdown from 'react-bootstrap/Dropdown'
import Arrow from '../../Static/RawImages/arrow.png'

//charts
import CircularWithBarChart from '../../Components/Charts/CircularWithBarChart'
import HorizontalBarChart from '../../Components/Charts/HorizontalBarChart'


function PreLitigationFir() {
    const circularWithBarChartData = {
        data: { 
          name: 'Filed',
          value: 75,
          color: "#00777c",
          title: "5,266",
         },
        tooltipText: "Filed"
      }
      let horizontalChartData = [
        { value: 100, color: "#1dc4e9", color1: "#1de9b6", label: "WhatsApp", tooltipLabel: "Cases "},
        { value: 90, color: "#1dc4e9", color1: "#1de9b6", label: "Email", tooltipLabel: "Cases " },
        { value: 60, color: "#1dc4e9", color1: "#1de9b6", label: "SMS", tooltipLabel: "Cases " }
      ];
    return (
        <div>
            <PrelitigationFirBatchHeader />
            <hr className="mt-4 mb-4" />
            <div className="row d-flex justify-between" data-aos="fade-up" data-aos-duration="800">
                <div className="col-md-12 col-lg-2 mb-lg-0 mb-3">
                    <div className="d-flex align-start">
                        <Checkbox
                            className="me-3"
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <div className="w-75">
                            <p className="mb-2 text-black"><strong>Batch No. 4</strong></p>
                            <p className="mb-2">21th May, 2021</p>
                            <p className="mb-2">Total Complaints - <span className="text-black">4,324</span></p>
                            <label for="Product" className="col-form-label pt-0 pb-0">Product</label>
                            <Dropdown className="w-75">
                                <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                                    All <img src={Arrow} alt="Sort" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="select-style-dropdown">
                                    <Dropdown.Item href="">Product 1</Dropdown.Item>
                                    <Dropdown.Item href="">Product 2</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 col-lg-7 mb-lg-0 mb-3">
                    <div className="status-progress">
                        <div className="chart-box content-center text-center d-flex pt-4"> 
                            <CircularWithBarChart  data={circularWithBarChartData}></CircularWithBarChart>
                            <HorizontalBarChart data={horizontalChartData}></HorizontalBarChart>                        
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-3 mb-lg-0 mb-3">
                    <div className="action-box">
                        <label htmlFor="dropdown-basic" className="col-form-label pb-2">Action</label>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                                Select <img src={Arrow} alt="Sort" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="select-style-dropdown">
                                <Dropdown.Item href="">Download Uploaded Data</Dropdown.Item>
                                <Dropdown.Item href="">Download Status Report</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="col-md-12">
                    <hr className="mt-4 mb-4" />
                </div>
            </div>

            <div className="row d-flex justify-between" data-aos="fade-up" data-aos-duration="800">
                <div className="col-md-12 col-lg-2 mb-lg-0 mb-3">
                    <div className="d-flex align-start">
                        <Checkbox
                            className="me-3"
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <div className="w-75">
                            <p className="mb-2 text-black"><strong>Batch No. 4</strong></p>
                            <p className="mb-2">21th May, 2021</p>
                            <p className="mb-2">Total Complaints - <span className="text-black">4,324</span></p>
                            <label for="Product" className="col-form-label pt-0 pb-0">Product</label>
                            <Dropdown className="w-75">
                                <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                                    All <img src={Arrow} alt="Sort" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="select-style-dropdown">
                                    <Dropdown.Item href="">Product 1</Dropdown.Item>
                                    <Dropdown.Item href="">Product 2</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 col-lg-7 mb-lg-0 mb-3">
                    <div className="status-progress">
                        <div className="chart-box content-center text-center d-flex pt-4"> 
                            <CircularWithBarChart  data={circularWithBarChartData}></CircularWithBarChart>
                            <HorizontalBarChart data={horizontalChartData}></HorizontalBarChart>                        
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-3 mb-lg-0 mb-3">
                    <div className="action-box">
                        <label htmlFor="dropdown-basic" className="col-form-label pb-2">Action</label>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                                Select <img src={Arrow} alt="Sort" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="select-style-dropdown">
                                <Dropdown.Item href="">Download Uploaded Data</Dropdown.Item>
                                <Dropdown.Item href="">Download Status Report</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="col-md-12">
                    <hr className="mt-4 mb-4" />
                </div>
            </div>

            <div className="row d-flex justify-between" data-aos="fade-up" data-aos-duration="800">
                <div className="col-md-12 col-lg-2 mb-lg-0 mb-3">
                    <div className="d-flex align-start">
                        <Checkbox
                            className="me-3"
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <div className="w-75">
                            <p className="mb-2 text-black"><strong>Batch No. 4</strong></p>
                            <p className="mb-2">21th May, 2021</p>
                            <p className="mb-2">Total Complaints - <span className="text-black">4,324</span></p>
                            <label for="Product" className="col-form-label pt-0 pb-0">Product</label>
                            <Dropdown className="w-75">
                                <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                                    All <img src={Arrow} alt="Sort" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="select-style-dropdown">
                                    <Dropdown.Item href="">Product 1</Dropdown.Item>
                                    <Dropdown.Item href="">Product 2</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 col-lg-7 mb-lg-0 mb-3">
                    <div className="status-progress">
                        <div className="chart-box content-center text-center d-flex pt-4"> 
                            <CircularWithBarChart  data={circularWithBarChartData}></CircularWithBarChart>
                            <HorizontalBarChart data={horizontalChartData}></HorizontalBarChart>                        
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-3 mb-lg-0 mb-3">
                    <div className="action-box">
                        <label htmlFor="dropdown-basic" className="col-form-label pb-2">Action</label>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                                Select <img src={Arrow} alt="Sort" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="select-style-dropdown">
                                <Dropdown.Item href="">Download Uploaded Data</Dropdown.Item>
                                <Dropdown.Item href="">Download Status Report</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="col-md-12">
                    <hr className="mt-4 mb-4" />
                </div>
            </div>
        </div>
    )
}

export default PreLitigationFir
