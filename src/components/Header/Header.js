import React, {useState} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {GrMenu, GrClose} from "react-icons/gr";
import {BiSearch} from "react-icons/bi";
import Logo from "../../images/logo.png";
import "./Header.css";
import {Link, useLocation, useNavigate} from "react-router-dom";
import SignInModal from "../AuthModals/SignInModal";
import JoinUsModal from "../AuthModals/JoinUsModal";
import useAuth from "../../StateManager/useAuth";

const Header = (props) => {
    const [value, setValue] = useState("");
    const {pathname} = useLocation();
    let navigate = useNavigate();
    const [dropCls, setDropCls] = useState("searchDropdown");
    const {member, loading} = useAuth();

    const {
        signInModalToggle,
        setSignInModalToggle,
        joinUsModalToggle,
        setJoinUsInModalToggle,
        autoCompleteData,
        logout,
    } = useAuth();

    const onChange = (e) => {
        setValue(e.target.value);
        setDropCls("searchDropdown hideDropdown");
    };
    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        navigate(`../memberSearch/${searchTerm.replace(/\s/g, "")}`);
    };

    return (
        <>
            <Navbar
                expand="lg"
                collapseOnSelect
                className="bg-white"
                fixed="top"
            >
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={Logo}
                            className="d-inline-block align-top ieee-logo"
                            alt="IEEE CS LU SBC Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <div className="menu-icons">
                            <GrMenu className="ham-menu" />
                        </div>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/">
                                <Nav.Link href="/" className="itemName">
                                    {" "}
                                    Home{" "}
                                </Nav.Link>
                            </Link>

                            <NavDropdown
                                title={
                                    <span className="text-dark">
                                        Activities
                                    </span>
                                }
                                id="basic-nav-dropdown"
                                className="itemName"
                            >
                                <Link to="/events">
                                    <NavDropdown.Item
                                        href="action/3.1"
                                        to="/events"
                                    >
                                        Events
                                    </NavDropdown.Item>
                                </Link>

                                <Link to="/news">
                                    <NavDropdown.Item href="action/3.2">
                                        News
                                    </NavDropdown.Item>
                                </Link>

                                <Link to="/publications">
                                    <NavDropdown.Item href="action/3.2">
                                        Publications
                                    </NavDropdown.Item>
                                </Link>

                                <Link to="/achievements">
                                    <NavDropdown.Item href="action/3.2">
                                        Achievements
                                    </NavDropdown.Item>
                                </Link>

                                <NavDropdown.Divider />
                                <Link to="/gallery">
                                    <NavDropdown.Item href="action/3.3">
                                        Gallery
                                    </NavDropdown.Item>
                                </Link>
                            </NavDropdown>

                            <NavDropdown
                                title={<span className="text-dark">About</span>}
                                id="basic-nav-dropdown"
                                className="itemName"
                            >
                                <Link to="/about/ieee">
                                    <NavDropdown.Item href="action/3.1">
                                        IEEE
                                    </NavDropdown.Item>
                                </Link>
                                <Link to="/about/ieee-r10">
                                    <NavDropdown.Item href="action/3.2">
                                        IEEE R10 (Region 10)
                                    </NavDropdown.Item>
                                </Link>
                                <Link to="/about/ieee-bs">
                                    <NavDropdown.Item href="action/3.2">
                                        IEEE Bangladesh Section
                                    </NavDropdown.Item>
                                </Link>
                                <Link to="/about/ieee-lu-sb">
                                    <NavDropdown.Item href="action/3.2">
                                        IEEE LU Student Branch
                                    </NavDropdown.Item>
                                </Link>
                                <Link to="/about/ieee-cs-lu-sbc">
                                    <NavDropdown.Item href="action/3.3">
                                        IEEE LU Student Branch Chapter
                                    </NavDropdown.Item>
                                </Link>
                            </NavDropdown>

                            <Link to="/members">
                                <Nav.Link href="/" className="itemName">
                                    Members
                                </Nav.Link>
                            </Link>
                            {member.email && (
                                <Link to={`/profile/${member._id}`}>
                                    <Nav.Link href="/" className="itemName">
                                        {member.name}
                                    </Nav.Link>
                                </Link>
                            )}
                            {member.email && (
                                <Link to="/" onClick={logout}>
                                    <Nav.Link href="/" className="itemName">
                                        Logout
                                    </Nav.Link>
                                </Link>
                            )}
                        </Nav>

                        {!member.email && (
                            <div className="d-flex justify-content-around">
                                <Nav.Link className="px-0">
                                    <div
                                        className="pill-fill-btn mx-3"
                                        onClick={() => {
                                            setJoinUsInModalToggle(true);
                                        }}
                                    >
                                        JoinUs
                                    </div>
                                </Nav.Link>

                                <Nav.Link className="px-0">
                                    <div
                                        className="pill-border-btn me-3"
                                        onClick={() => {
                                            setSignInModalToggle(true);
                                        }}
                                    >
                                        SignIn
                                    </div>
                                </Nav.Link>
                            </div>
                        )}

                        {pathname === "/members" && (
                            <div className="searchBar">
                                <input
                                    className="search"
                                    type="text"
                                    value={value}
                                    onChange={onChange}
                                />
                                <button
                                    onClick={() => onSearch(value)}
                                    className="pill-border-btn searchBtn"
                                >
                                    <BiSearch />
                                </button>

                                <div className="searchDropdown">
                                    {autoCompleteData
                                        ?.filter((data) => {
                                            const searchTerm =
                                                value.toLocaleLowerCase();
                                            const name =
                                                data.toLocaleLowerCase();

                                            return (
                                                searchTerm &&
                                                name.includes(searchTerm) &&
                                                name !== searchTerm
                                            );
                                        })
                                        .map((name, i) => {
                                            return (
                                                <div
                                                    className="searchDropdownRow"
                                                    onClick={() =>
                                                        onSearch(name)
                                                    }
                                                    key={i}
                                                >
                                                    {name}
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        )}
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
