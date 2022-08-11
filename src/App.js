import HomePage from "./pages/Home/HomePage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import EventPage from "./pages/Events/EventPage";
import DynamicEvent from "./pages/Events/DynamicEvent";
import Header from "./components/Header/Header";
import MembersPage from "./pages/Members/MembersPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ContextProvider from "./StateManager/ContextProvider";
import AboutUs from "./pages/AboutUs/AboutUs";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
    return (
        <ContextProvider>
            <Router>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='/members' element={<MembersPage />} />

                    <Route path='/events' element={<EventPage to='events' />}>
                    </Route>
                    <Route path='/events/:eventId' element={<DynamicEvent />} />

                    <Route path='/news' element={<EventPage to='news' />} />

                    <Route path='/news/:newsId' element={<DynamicEvent />} />

                    <Route path='/about/ieee' element={<AboutUs />} />
                    <Route path='/about/ieee-r10' element={<AboutUs />} />
                    <Route path='/about/ieee-bs' element={<AboutUs />} />
                    <Route path='/about/ieee-lu-sb' element={<AboutUs />} />
                    <Route path='/about/ieee-cs-lu-sbc' element={<AboutUs />} />

                    <Route path='/publications' element={<EventPage to='publications' />} />
                    <Route path='/achievements' element={<EventPage to='achievements' />} />
                    <Route path='/gallery' element={<EventPage />} />


                    <Route path='*' element={<NotFoundPage />} />

                </Routes>
            </Router>
        </ContextProvider>
    );
}

export default App;
