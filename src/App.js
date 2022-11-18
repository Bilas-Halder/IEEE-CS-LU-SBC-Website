import HomePage from "./pages/Home/HomePage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import EventPage from "./pages/Events/EventPage";
import DynamicEvent from "./pages/Events/DynamicEvent";
import Header from "./components/Header/Header";
import MembersPage from "./pages/Members/MembersPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ContextProvider from "./StateManager/ContextProvider";
import AboutUs from "./pages/AboutUs/AboutUs";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import {LoadedRoutes, ProtectedRoutes} from "./utilities/RouterRelated";
import AuthPage from "./pages/AuthPages/AuthPage";
import ProfilePage from "./pages/Profile/ProfilePage";

function App() {
    return (
        <ContextProvider>
            <Router>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route element={<LoadedRoutes />}>
                        <Route path="/" element={<HomePage />}></Route>

                        <Route
                            path="/signIn"
                            element={<AuthPage page="signIn" />}
                        />
                        <Route
                            path="/joinUs"
                            element={<AuthPage page="joinUss" />}
                        />
                        <Route path="/about/ieee" element={<AboutUs />} />
                        <Route path="/about/ieee-r10" element={<AboutUs />} />
                        <Route path="/about/ieee-bs" element={<AboutUs />} />
                        <Route path="/about/ieee-lu-sb" element={<AboutUs />} />
                        <Route
                            path="/about/ieee-cs-lu-sbc"
                            element={<AboutUs />}
                        />
                        <Route path="/members" element={<MembersPage />} />
                        <Route path="/members" element={<MembersPage />} />
                        <Route
                            path="/events"
                            element={<EventPage to="events" />}
                        ></Route>
                        <Route
                            path="/events/:eventId"
                            element={<DynamicEvent />}
                        />
                        <Route path="/news" element={<EventPage to="news" />} />

                        <Route
                            path="/news/:newsId"
                            element={<DynamicEvent />}
                        />

                        <Route
                            path="/publications"
                            element={<EventPage to="publications" />}
                        />
                        <Route
                            path="/achievements"
                            element={<EventPage to="achievements" />}
                        />
                        <Route path="/gallery" element={<EventPage />} />
                    </Route>
                    <Route element={<ProtectedRoutes />}>
                        <Route
                            path="/profile/:email"
                            element={<ProfilePage />}
                        ></Route>
                    </Route>

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <ToastContainer />
            </Router>
        </ContextProvider>
    );
}

export default App;

// .hr_line_container {
//     display: flex;
//     justify-content: center;
//     transform: translateX(0%);
// }

// .hr_line_box {
//     display: flex;

//     width: 35%;
//     height: 4px;
//     background-color: aquamarine;

//     overflow: hidden;
// }

// .hr_line_yel {
//     display: inline-block;
//     width: 50%;
//     height: 4px;
//     background-color: #e7ab53;
// }

// .hr_line_blu {
//     display: inline-block;
//     width: 50%;
//     height: 4px;
//     background-color: #0052a7;
// }
