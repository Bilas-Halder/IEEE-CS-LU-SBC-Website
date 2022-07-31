import React, { useRef, useState } from 'react';
import './MemberCard.css';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { Overlay, OverlayTrigger, Tooltip } from 'react-bootstrap';

const MemberCard = ({ member }) => {

    const { name, designation, imgUrl, description, passingYear, batch, membershipID } = member;
    const { email, linkedin, facebook, github } = member.contact;

    const [tooltip, setTooltip] = useState(() => <>Click to Copy <br /> IEEE MemberShip ID</>);

    function timeout(delay = 1000) {
        return new Promise(res => setTimeout(res, delay));
    }
    const copyMemID = async () => {
        navigator.clipboard.writeText(membershipID);
        setTooltip(() => <>IEEE MemberShip ID <br /> Copied  </>);
        await timeout(2000);
        setTooltip(() => <>Click to Copy <br /> IEEE MemberShip ID</>);
    }


    const [showEmailCopied, setShowEmailCopied] = useState(false);
    const target = useRef(null);
    const copyEmail = async () => {
        navigator.clipboard.writeText(email);
        setShowEmailCopied(true);
        await timeout(2000);
        setShowEmailCopied(false);
    }

    const imgStyle = {
        backgroundImage: `url("${imgUrl}")`,
    }
    return (
        <>
            <div className="cardContainer">
                {/* create a member details card */}
                <div className="memCard">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 100, hide: 200 }}
                        overlay={<Tooltip id="button-tooltip">
                            <span className='memTooltip'>{tooltip}</span>
                        </Tooltip>}
                    >
                        <div className="memID" onClick={copyMemID}>19283746</div>
                    </OverlayTrigger>
                    <div className="memImgCon">
                        <div className="circleAnimation">
                            <svg className="circle">
                                <circle cx="90" cy="90" r="88" />
                                <circle cx="90" cy="90" r="91" />
                            </svg>
                            <svg className="smallCircle cir1">
                                <circle cx="10" cy="10" r="2" />
                            </svg>
                            <svg className="smallCircle cir2">
                                <circle cx="10" cy="10" r="1.5" />
                            </svg>
                            <svg className="smallCircle cir3">
                                <circle cx="10" cy="10" r="1" />
                            </svg>
                            <svg className="smallCircle cir4">
                                <circle cx="10" cy="10" r="2" />
                            </svg>
                            <svg className="smallCircle cir5">
                                <circle cx="10" cy="10" r="1.5" />
                            </svg>
                            <svg className="smallCircle cir6">
                                <circle cx="10" cy="10" r="1" />
                            </svg>


                        </div>
                        <div className="memCardImgCon">
                            <div className="memCardImage" style={imgStyle}></div></div>
                    </div>
                    <div className="cardDetails">
                        <div className="cardName">
                            <h3>{name}</h3>
                            <p>{designation}</p>
                        </div>
                    </div>
                    <div className="memDescription">
                        {description}
                    </div>
                    <div className="memBottomCon hoverEffectBottom">
                        <div className="memBottom">
                            <div className="memBottomContent">
                                <div className="memPassingYear">Passing Year <span>{passingYear}</span></div>
                                <div className="memVerLine">

                                </div>

                                <div className="memBatch">Batch <span className="memDept">{batch}</span></div>
                            </div>

                        </div>
                    </div>


                    <div className="memBottomIcons">
                        {
                            github && <a target='_blank' href={github} className="socialIconBtn githubIcon" rel="noreferrer">
                                <FiGithub />
                            </a>
                        }
                        {
                            linkedin && <a target='_blank' href={linkedin} className="socialIconBtn linkedinIcon" rel="noreferrer">
                                <FaLinkedinIn />
                            </a>
                        }
                        {
                            email && <div ref={target} onClick={copyEmail} className="socialIconBtn emailIcon">
                                <AiTwotoneMail />
                            </div>
                        }
                        {
                            email && <Overlay target={target.current} show={showEmailCopied} placement="top">
                                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                                    <div
                                        {...props}
                                        style={{
                                            position: 'absolute',
                                            backgroundColor: 'rgb(40 97 153)',
                                            padding: '2px 10px',
                                            color: 'white',
                                            borderRadius: '5px',
                                            ...props.style,
                                        }}
                                    >
                                        Email Copied
                                    </div>
                                )}
                            </Overlay>
                        }
                        {
                            facebook && <a target='_blank' href={facebook} className="socialIconBtn facebookIcon" rel="noreferrer">
                                <FaFacebookF />
                            </a>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default MemberCard;