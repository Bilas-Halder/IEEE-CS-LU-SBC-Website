import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Loading from '../../components/Loading/Loading';
import MemberCard from '../../components/MemberCard/MemberCard';

const MembersPage = (props) => {
    const [members, setMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const year = '2022';

    // remove dummy to get actual data from database

    const url = `https://ieee-cs-lu-sbc.herokuapp.com/committee/${year}/dummy`;

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            setMembers(data);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <Container>
                <Row>
                    {
                        members.map((member, index) => <Col xs={12} md={6} lg={4} className='d-flex justify-content-center'><MemberCard key={index} member={member} /></Col>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default MembersPage;