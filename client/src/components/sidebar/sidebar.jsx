import logo from "./logo.svg";
import graph from "./graph.png";
import budgeting from "./budgeting.png"
import brain from "./brain.png"
import './sidebar.css';

export default function Sidebar({currentPage, changeCurrentPage}){
    
    const imgStyle={
        height:"90px",
        margin: "50px 0 40px 0",
    }

    return(
        <div className="sidebar">
            <img src={logo} className={`logo ${currentPage === 'home' ? 'active' : ''}`} alt="" onClick={() => changeCurrentPage("home")}/>
            <Button1 active={currentPage === 'page1'} changeCurrentPage={changeCurrentPage}/>
            <Button2 active={currentPage === 'page2'} changeCurrentPage={changeCurrentPage}/>
            <Button3 active={currentPage === 'page3'} changeCurrentPage={changeCurrentPage}/>

        </div>
    )
}

function Button1({active, changeCurrentPage}){

    return(
        <div className={`button ${active ? 'active' : ''}`} onClick={() => changeCurrentPage("page1")}>
            <img src={budgeting} alt="" />
        </div>
    )
}

function Button2({active, changeCurrentPage}){

    return(
        <div className={`button ${active ? 'active' : ''}`} onClick={() => changeCurrentPage("page2")}>
            <img src={graph} alt="" />
        </div>
    )
}

function Button3({active, changeCurrentPage}){

    return(
        <div className={`button ${active ? 'active' : ''}`} onClick={() => changeCurrentPage("page3")}>
            <img src={brain} alt="" />
        </div>
    )
}