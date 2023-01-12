import React from 'react';
import { Route, Routes} from 'react-router-dom';
import SocialMediaSharing from './components/home/view/social_media';

const Comp1 = () => {
    return(
        <h1>
            Comp1 
        </h1>
    )
}

const Comp2 = () => {
    return(
        <h1>
            Comp2
        </h1>
    )
}

const AppRoutes = () => {
    <Routes>
        <Route path="/" element={<Comp1 />}></Route>
        <Route path="/social" element={<SocialMediaSharing />}></Route>
        <Route path='/comp2' element={<Comp2 />}></Route>
    </Routes>
}

export default AppRoutes;