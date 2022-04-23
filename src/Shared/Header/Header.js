import React, { useState } from 'react';
import Logo from '../../Images/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiUserCircle } from 'react-icons/bi';
import { ImHome } from 'react-icons/im';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { GiTrophyCup } from 'react-icons/gi';

import './Header.css';

const Header = (props) => {

    const [navVisible, setNavVisible] = useState(2);
    //2 hidden, 1 smooth hide, 0 visible

    const toggleVisibility = () => setNavVisible(navVisible === 1 || navVisible === 2 ? 0 : 2);

    return (
        <div className='navContainer'>
            <div className="navDiv">
                <div className="navMenuBtn">
                    <div className="navMenuBtn2" onClick={toggleVisibility}>
                        <GiHamburgerMenu></GiHamburgerMenu>
                    </div>
                </div>
                <div className="navLogoContainer">
                    <img src={Logo} alt="" className="navLogo" />
                </div>
                <div className="navUserIcon">
                    <div className="navUserName">
                        Naimur Rahib
                    </div>
                    <div className="navUserImg">
                        <BiUserCircle />
                    </div>
                </div>
            </div>

            <div className="navMenuContainer" onMouseEnter={() => setNavVisible(0)} onMouseLeave={() => setNavVisible(1)}>
                <div className={navVisible === 0 ? 'navMenu navMenuVisible' : navVisible === 1 ? 'navMenu navMenuSmoothHide' : 'navMenu navMenuHide'}>
                    <div className="navTopMenu">
                        <div className="navItem active">
                            <div className="itemIcon">
                                <ImHome />
                            </div>
                            <div className="itemTag">
                                Home
                            </div>
                        </div>
                        <div className="navItem achievementItem">
                            <div className="itemIcon achievementIcon">
                                <GiTrophyCup />
                            </div>
                            <div className="itemTag achievementTag">
                                Achievements
                            </div>

                        </div>
                        <div className="navItem">
                            <div className="itemIcon">
                                <BsFillCalendarEventFill />
                            </div>
                            <div className="itemTag">
                                Activities
                            </div>
                        </div>
                        <div className="navItem">
                            <div className="itemIcon">
                                <ImHome />
                            </div>
                            <div className="itemTag">
                                About
                            </div>
                        </div>
                        <div className="navItem">
                            <div className="itemIcon">
                                <FaUsers />
                            </div>
                            <div className="itemTag">
                                Members
                            </div>
                        </div>
                    </div>
                    <div className="navDownMenu">
                        <div className="navItem">
                            <div className="itemIcon">
                                <AiFillSetting />
                            </div>
                            <div className="itemTag">
                                Settings
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;