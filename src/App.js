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

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/members' element={<MembersPage />} />

                <Route path='/events' element={<EventPage />}>
                </Route>
                <Route path='/events/:eventId' element={<DynamicEvent />} />

                <Route path='/news' element={<EventPage />} />

                <Route path='/news/:newsId' element={<DynamicEvent />} />

                <Route path='/publications' element={<EventPage />} />
                <Route path='/achievements' element={<EventPage />} />
                <Route path='/gallery' element={<EventPage />} />


                <Route path='*' element={<NotFoundPage />} />




            </Routes>
        </Router>
    );
}

export default App;
