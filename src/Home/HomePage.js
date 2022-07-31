import React, { useState } from "react";
import AchievementSection from "../components/HomePageComponents/AchievementSection";
import BackgroundCarousel from "../components/HomePageComponents/BackgroundCarousel";
import WelcomeSection from "../components/HomePageComponents/WelcomeSection";
import UpcomingEvents from "../components/HomePageComponents/UpcomingEvents";
import QuestionSection from "../components/HomePageComponents/QuestionSection";
import Footer from "../components/HomePageComponents/Footer";
import Header from "../components/Header/Header";
import MemberCard from "../components/MemberCard/MemberCard";
import DummyMembersPage from "../components/MemberCard/DummyMembersPage";

const HomePage = () => {

    const [file, setFile] = useState(null);
    const [photoUrl, setPhotoUrl] = useState('');
    const [fileNames, setFileNames] = useState([]);
    const domain = 'https://ieee-cs-lu-sbc.herokuapp.com/';

    const onFileSubmit = (e) => {
        e.preventDefault();


        const formData = new FormData();
        formData.append('photo', file);

        fetch(domain + 'upload', {
            method: 'POST',
            body: formData,
        }).then(response => response.json())
            .then(d => {
                setPhotoUrl(domain + d.path);
                console.log(domain + d.path);
            });


    }

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const getImages = () => {
        fetch(domain + 'upload')
            .then(res => res.json())
            .then(data => {
                setFileNames(data.fileNames.reverse());
            })
            .catch(e => console.log(e));
    }


    return (
        <>


            {/* <div className="d-flex justify-content-center align-items-center">
                <MemberCard />
            </div> */}


            {/* <Header></Header>
            <form onSubmit={onFileSubmit}>
                <input type="file" name='photo' onChange={onFileChange} />
                <button type="submit">Upload</button>
            </form>
            <br /><br />
            <img src={photoUrl} alt="" height={150} width='auto' /><br /><hr /><hr />

            <button onClick={getImages}>Get all images</button> <br /><br />

            {
                fileNames.map((fn) => {
                    return <><img src={domain + fn} alt="" height={150} width='auto' /><br /><hr /></>
                })
            } */}

            <div>
                <Header></Header>
                <BackgroundCarousel />
                <AchievementSection />
                <WelcomeSection />
                <UpcomingEvents />
                <QuestionSection />
                <Footer />
            </div>
        </>
    );
};

export default HomePage;
