import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home";
import AllBeers from "../pages/AllBeers/AllBeers";
import Detail from "../pages/Detail/Detail";

const useRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/allbeers" element={<AllBeers/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
    )
}

export default useRoutes;