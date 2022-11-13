import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Loading from "../../components/Loading/Loading";
import MemberCard from "../../components/MemberCard/MemberCard";
import useAuth from "../../StateManager/useAuth";

const MembersPage = (props) => {
    const [members, setMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {committeeMembersData, setCommitteeMembersData, setAutoCompleteData} =
        useAuth();
    const year = "2022";

    // remove dummy to get actual data from database

    const url = `https://ieee-cs-lu-sbc.herokuapp.com/committee/${year}/dummy`;

    const fetchData = () => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setMembers(data);
                setCommitteeMembersData(data);
                setIsLoading(false);
                setAuto(data);
            });
    };

    useEffect(() => {
        if (committeeMembersData.length === 0) {
            fetchData();
        } else {
            setMembers(committeeMembersData);
            setIsLoading(false);
            setAuto(committeeMembersData);
        }
    }, []);

    const setAuto = (data) => {
        const newData = data?.map((d) => d?.name);
        newData.sort();
        console.log(newData);
        setAutoCompleteData(newData);
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <Container>
                <Row>
                    {members.map((member, index) => (
                        <Col
                            xs={12}
                            md={6}
                            lg={4}
                            className="d-flex justify-content-center"
                        >
                            <MemberCard key={index} member={member} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default MembersPage;
