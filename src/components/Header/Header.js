import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { GrMenu, GrClose } from 'react-icons/gr';
import Logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import SignInModal from '../AuthModals/SignInModal';
import JoinUsModal from '../AuthModals/JoinUsModal';

import AuthModalToggle from '../../states/AuthModalToggle';

const Header = (props) => {

    const [isMenu, setIsMenu] = useState(true);

    const { signInModalToggle, setSignInModalToggle, joinUsModalToggle, setJoinUsInModalToggle } = AuthModalToggle();

    const toggleMenuIcons = () => {
        setIsMenu(!isMenu);
    }

    return (
        <>
            <Navbar expand="lg" collapseOnSelect className='bg-white' fixed='top'>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={Logo}
                            className="d-inline-block align-top ieee-logo"
                            alt="IEEE CS LU SBC Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenuIcons} >
                        <div className="menu-icons">
                            <GrMenu className={isMenu ? "ham-menu" : "ham-hide ham-menu"} />
                            <GrClose className={isMenu ? "ham-hide ham-close" : "ham-close"} />
                        </div>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to='/'>
                                <Nav.Link onClick={toggleMenuIcons} href="/" className='itemName'> Home </Nav.Link>
                            </Link>

                            <NavDropdown title={<span className='text-dark' >Activities</span>} id="basic-nav-dropdown" className='itemName'>
                                <Link to='/events'>
                                    <NavDropdown.Item onClick={toggleMenuIcons} href="action/3.1" >Events</NavDropdown.Item></Link>

                                <Link to='/news'>
                                    <NavDropdown.Item onClick={toggleMenuIcons} href="action/3.2">News</NavDropdown.Item></Link>

                                <Link to='/publications'>
                                    <NavDropdown.Item onClick={toggleMenuIcons} href="action/3.2">Publications</NavDropdown.Item></Link>

                                <Link to='/achievements'>
                                    <NavDropdown.Item onClick={toggleMenuIcons} href="action/3.2">Achievements</NavDropdown.Item></Link>

                                <NavDropdown.Divider />
                                <Link to='/gallery'>
                                    <NavDropdown.Item onClick={toggleMenuIcons} href="action/3.3">Gallery</NavDropdown.Item>
                                </Link>
                            </NavDropdown>

                            <NavDropdown title={<span className='text-dark' >About</span>} id="basic-nav-dropdown" className='itemName'>
                                <NavDropdown.Item onClick={toggleMenuIcons} href="action/3.1" >IEEE</NavDropdown.Item>
                                <NavDropdown.Item onClick={toggleMenuIcons} href="action/3.2">IEEE R10 (Region 10)</NavDropdown.Item>
                                <NavDropdown.Item onClick={toggleMenuIcons} href="action/3.2">IEEE Bangladesh Section</NavDropdown.Item>
                                <NavDropdown.Item onClick={toggleMenuIcons} href="action/3.2">IEEE LU Student Branch</NavDropdown.Item>

                                <NavDropdown.Item onClick={toggleMenuIcons} href="action/3.3">IEEE LU Student Branch Chapter</NavDropdown.Item>
                            </NavDropdown>


                            <Link to='/members'>
                                <Nav.Link onClick={toggleMenuIcons} href="/" className='itemName'>Members</Nav.Link>
                            </Link>

                        </Nav>

                        <div className="d-flex justify-content-around">
                            <Nav.Link onClick={toggleMenuIcons} className='px-0'><div className="pill-fill-btn mx-3" onClick={() => {
                                setJoinUsInModalToggle(true);
                            }}>
                                JoinUs
                            </div></Nav.Link>

                            <Nav.Link onClick={toggleMenuIcons} className='px-0'>
                                <div className="pill-border-btn me-3"
                                    onClick={() => {
                                        setSignInModalToggle(true);
                                    }}>
                                    SignIn
                                </div>
                            </Nav.Link>


                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {signInModalToggle ? (
                <SignInModal
                    show={signInModalToggle}
                    onHide={() => setSignInModalToggle(false)}
                />
            ) : null}
            {joinUsModalToggle ? (
                <JoinUsModal
                    show={joinUsModalToggle}
                    onHide={() => setJoinUsInModalToggle(false)}
                />
            ) : null}
        </>
    );
};

export default Header;