import React from 'react'
import { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Sort from '../Static/RawImages/sort.png'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Chip from '@material-ui/core/Chip'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
};

const names = [
    'Noida',
    'Mumbai',
    'New Delhi',
    'Ahmedabad',
    'Jaipur',
    'Bhopal',    
];

function getStyles(name, Location, theme) {
    return {
      fontWeight:
      Location.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
}
function LitigationAdvocatesHeader() {
    
    //Modal
    const [smShow, setSmShow] = useState(false)
    const [lgShow, setLgShow] = useState(false)

    const classes = useStyles();
    const theme = useTheme();
    const [Location, setLocation] = React.useState([]);
    const handleChange = (event) => {
      setLocation(event.target.value);
    };

    return (
        <>
        <div className="row d-flex d-wrap justify-between filter-section">
            <div className="col-md-12 col-lg-6 d-flex align-center">
                <Checkbox
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <button onClick={() => setSmShow(true)} className="btn btn-secondary me-3">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#000" fillRule="nonzero">
                            <path d="M19.2 2.4a2.4 2.4 0 0 0-2-2.364V0h-.8v.036a2.4 2.4 0 0 0 0 4.728V19.2h.8V4.764a2.4 2.4 0 0 0 2-2.364zM16.8 4a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zM10 10.036V0h-.8v10.036a2.4 2.4 0 0 0 0 4.728V19.2h.8v-4.436a2.4 2.4 0 0 0 0-4.728zM9.6 14a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zM2.8.036V0H2v.036a2.4 2.4 0 0 0 0 4.728V19.2h.8V4.764a2.4 2.4 0 0 0 0-4.728zM2.4 4a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2z" />
                        </g>
                    </svg>
                    Filter
                </button>
                <button className="btn btn-secondary">
                    <img src={Sort} alt="Sort" />
                    Sort by
                </button>                
            </div>

            <div className="col-md-12 col-lg-6 pt-3 pt-lg-0 text-end">                
                <button className="btn btn-primary btn-lg ms-2" onClick={() => setLgShow(true)}>
                    Add New Advocate
                </button>                
            </div>

            {/* Filter */}
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header>
                    <Modal.Title>Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-2 row modal-search">
                            <div className="col-md-12">
                                <input type="text" className="form-control" id="inputPassword" placeholder="Search by file name" />
                            </div>
                        </div>
                        <div className="grey-bg mb-2">
                            <div className="mb-2 row">
                                <label for="inputPassword" className="col-md-8 col-form-label">Search by Batch Number</label>
                                <div className="col-md-4">
                                    <input type="password" className="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div className="mb-2 row">
                                <label for="inputState" className="col-md-5 col-form-label">Product/ Portfolio</label>
                                <div className="col-md-7">
                                    <select id="inputState" className="form-select">
                                        <option selected>Select</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-2 row">
                                <label for="Bucket" className="col-md-5 col-form-label">Overdue Bucket</label>
                                <div className="col-md-7">
                                    <select id="Bucket" className="form-select">
                                        <option selected>Select</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-2 row">
                                <label for="inputState" className="col-md-5 col-form-label">Last Disposition</label>
                                <div className="col-md-7">
                                    <select id="inputState" className="form-select">
                                        <option selected>Select</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label for="from" className="col-md-5 col-form-label">Loan Account Range</label>
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="from" placeholder="From" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="to" placeholder="To" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label for="inputState" className="col-md-5 col-form-label">Status</label>
                            <div className="col-md-7">
                                <select id="inputState" className="form-select">
                                    <option selected>Select</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="grey-bg">
                            <div className="mb-2 row">
                                <label for="inputState" className="col-md-5 col-form-label">Search by Date</label>
                            </div>
                            <div className="mb-2 row">
                                <label for="gridRadios2" className="col-md-5 col-form-label"><input className="form-check-input ml-0" type="radio" name="gridRadios" id="gridRadios2" value="option2" /> Date Between</label>
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="date" className="form-control" id="from" placeholder="From" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="date" className="form-control" id="to" placeholder="To" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2 row">
                                <label for="gridRadios3" className="col-md-5 col-form-label"><input className="form-check-input ml-0" type="radio" name="gridRadios" id="gridRadios3" value="option2" /> Specific Date</label>
                                <div className="col-md-7">
                                    <select id="Bucket" className="form-select">
                                        <option selected>Select</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setSmShow(false)}>Close</Button>
                    <Button variant="primary" onClick={() => setSmShow(false)}>Apply</Button>
                </Modal.Footer>
            </Modal>
            
            

            {/*Add New Law Firm*/}
            <Modal
                size="sm"
                show={lgShow}
                onHide={() => setLgShow(false)}                
                aria-labelledby="Bulk-Communicate"
                className="law-firm"
            >
                <Modal.Header>
                    <Modal.Title id="Bulk-Communicate">
                        Add New Law Firm
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>                    
                    <form className="pt-3 pb-3">
                        <div className="mb-2 row">
                            <label for="inputState" className="col-md-12 col-form-label">Name of Law Firm / Individual Lawyer</label>
                            <div className="col-md-12">
                                <input type="text" className="form-control form-control-s2" id="" />
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label for="location" className="col-md-12 col-form-label">Location</label>
                            <div className="col-md-12">
                                <Select
                                    labelId="location"
                                    id="Location"
                                    multiple
                                    className="w-100"
                                    value={Location}
                                    onChange={handleChange}
                                    input={<Input id="select-location" />}
                                    renderValue={(selected) => (
                                        <div className={classes.chips}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} className={classes.chip} />
                                        ))}
                                        </div>
                                    )}
                                    MenuProps={MenuProps}
                                    >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name} style={getStyles(name, Location, theme)}>
                                        {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                                
                            
                        </div>
                        <div className="mb-2 row">
                            <label for="inputState" className="col-md-12 col-form-label">Point of Contact</label>
                            <div className="col-md-12">
                                <input type="text" className="form-control form-control-s2" id="" />
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label for="inputState" className="col-md-12 col-form-label">Mobile Number</label>
                            <div className="col-md-12">
                                <input type="text" className="form-control form-control-s2" id="" />
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label for="inputState" className="col-md-12 col-form-label">Email Id</label>
                            <div className="col-md-12">
                                <input type="text" className="form-control form-control-s2" id="" />
                            </div>
                        </div>
                    </form>                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={() => {
                            setLgShow(false)
                        }}>Close</Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>
            {/**/}
        </div>       
        </>
    )
}

export default LitigationAdvocatesHeader