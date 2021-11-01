import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

function PreTabs() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="row">
                <div className="col-lg-3 com-left ps-0 pe-0">
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first" className="d-flex align-center">
                                <div className="comm-icon me-4 ps-2">
                                    <svg width="29" height="29" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.512 18.186a3.726 3.726 0 0 0-2.304.27l-2.586 1.116a25.428 25.428 0 0 1-4.584-3.636 24.84 24.84 0 0 1-3.6-4.65l.846-2.328a3.78 3.78 0 0 0 .222-2.238L8.784 0 0 1.266l.036.534a28.974 28.974 0 0 0 8.322 18.6 28.566 28.566 0 0 0 18.936 8.4h.57l.936-9.144-6.288-1.47zm4.278 9.36a27.33 27.33 0 0 1-17.58-7.95A27.78 27.78 0 0 1 1.266 2.292l6.6-.954 1.428 5.646c.102.52.043 1.057-.168 1.542L8.1 11.4l.15.246a26.4 26.4 0 0 0 3.936 5.154 27.132 27.132 0 0 0 5.058 3.972l.27.174 3.192-1.374a2.49 2.49 0 0 1 1.554-.192l5.25 1.2-.72 6.966z" fill="#505050" fill-rule="nonzero" />
                                    </svg>
                                </div>
                                Legal Notice
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second" className="d-flex align-center">
                                <div className="comm-icon me-4 ps-2">
                                    <svg width="29" height="29" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.4 0A14.4 14.4 0 0 0 1.8 21.342L0 28.8l7.278-1.884A14.4 14.4 0 1 0 14.4 0zm0 27.6a13.2 13.2 0 0 1-6.726-1.842l-.216-.132-5.76 1.476 1.374-5.928-.126-.216A13.2 13.2 0 1 1 14.4 27.6z" fill="#505050" fill-rule="nonzero" />
                                    </svg>
                                </div>
                                SMS
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third" className="d-flex align-center">
                                <div className="comm-icon me-4 ps-2">
                                    <svg width="29" height="22" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="#505050" fill-rule="nonzero">
                                            <path d="M0 0v16.2a5.4 5.4 0 0 0 5.4 5.4h18a5.4 5.4 0 0 0 5.4-5.4V0H0zm27.6 16.2a4.2 4.2 0 0 1-4.2 4.2h-18a4.2 4.2 0 0 1-4.2-4.2v-15h26.4v15z" />
                                            <path d="m25.488 4.602-.804-.888L14.4 12.99 4.176 3.726l-.804.888L14.4 14.61z" />
                                        </g>
                                    </svg>
                                </div>
                                Email
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth" className="d-flex align-center">
                                <div className="comm-icon me-4 ps-2">
                                    <svg width="29" height="29" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="#505050" fill-rule="nonzero">
                                            <path d="M14.4 0A14.4 14.4 0 0 0 1.8 21.342L0 28.8l7.278-1.884A14.4 14.4 0 1 0 14.4 0zm0 27.6a13.2 13.2 0 0 1-6.726-1.842l-.216-.132-5.76 1.476 1.374-5.928-.126-.216A13.2 13.2 0 1 1 14.4 27.6z" />
                                            <path d="M9.54 16.549a18.432 18.432 0 0 0 6.131 4.802c.896.425 2.095.929 3.43 1.015.084.004.163.008.246.008.896 0 1.616-.31 2.203-.947a.079.079 0 0 0 .014-.018c.209-.252.447-.479.695-.72.17-.162.342-.331.508-.504.766-.8.766-1.815-.008-2.589l-2.163-2.163c-.367-.382-.807-.583-1.267-.583-.461 0-.904.201-1.282.58l-1.289 1.288c-.119-.068-.241-.13-.356-.187a4.452 4.452 0 0 1-.396-.216c-1.174-.745-2.24-1.717-3.258-2.967-.515-.651-.86-1.198-1.102-1.756.339-.306.655-.627.961-.94.108-.112.22-.223.332-.335.388-.389.597-.839.597-1.296 0-.457-.205-.907-.597-1.296l-1.073-1.073c-.126-.126-.245-.248-.367-.374a19.746 19.746 0 0 0-.731-.724C10.397 5.191 9.96 5 9.5 5c-.458 0-.897.19-1.282.558L6.873 6.904a2.766 2.766 0 0 0-.825 1.772c-.068.86.09 1.774.5 2.88.63 1.71 1.581 3.297 2.992 4.993zM6.927 8.75c.043-.479.226-.878.572-1.224l1.34-1.339c.208-.202.438-.306.662-.306.22 0 .442.104.648.313.24.223.468.457.712.706l.375.381 1.073 1.073c.223.223.338.45.338.673 0 .224-.115.45-.338.674-.112.111-.224.226-.335.338-.335.338-.648.659-.994.965l-.018.018c-.299.299-.252.583-.18.799l.011.029c.277.666.662 1.3 1.264 2.055 1.08 1.332 2.217 2.366 3.47 3.161.155.101.32.18.475.26.144.071.277.14.396.215.015.008.025.015.04.022.119.061.234.09.349.09.288 0 .475-.184.536-.245l1.347-1.346c.209-.209.435-.32.659-.32.273 0 .496.169.637.32l2.17 2.167c.433.432.429.9-.01 1.357-.151.162-.31.317-.479.479-.252.245-.515.497-.752.781-.414.447-.908.655-1.545.655-.061 0-.126-.003-.187-.007-1.18-.075-2.279-.536-3.103-.929a17.51 17.51 0 0 1-5.836-4.572c-1.343-1.616-2.246-3.12-2.844-4.734-.37-.99-.511-1.785-.453-2.509z" />
                                        </g>
                                    </svg>
                                </div>
                                WhatsApp
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="col-lg-9">
                    <Tab.Content className="text-start py-4 px-4">
                        <Tab.Pane eventKey="first">
                            <form>
                                <div className="mb-2 row">
                                    <div className="col-md-12">
                                        <label for="Agent" className="col-md-5 col-form-label">Legal Notice</label>
                                    </div>
                                </div>
                            </form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <form>
                                <div className="mb-2 row">
                                    <div className="col-md-12">
                                        <label for="Agent" className="col-md-5 col-form-label">Email</label>
                                    </div>
                                </div>
                            </form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <form>
                                <div className="mb-2 row">
                                    <div className="col-md-12">
                                        <label for="Agent" className="col-md-5 col-form-label">Email</label>
                                    </div>
                                </div>
                            </form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                            <form>
                                <div className="mb-2 row">
                                    <div className="col-md-12">
                                        <label for="Agent" className="col-md-5 col-form-label">WhatsApp</label>
                                    </div>
                                </div>
                            </form>
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </div>
        </Tab.Container>
    )
}

export default PreTabs
