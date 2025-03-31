import "./comingSoon.css"
import logo from "../../assets/logo.jpg"
import { FaLinkedin } from "react-icons/fa";

export default function ComingSoon(){
    return (
        <>
        <div className="coming-soon-flexbox">
            <img src={logo} alt="offensive-technologies logo"/>
            <div className="information">
                <p id="upper-paragraph"><b>coming soon</b></p>
                <h1>Offensive<br/>Technologies</h1>
                <p>Covert execution. Advancing offense.</p>
                <a target="_blank" href="https://www.linkedin.com/company/offensive-technologies/"><FaLinkedin/></a>
            </div>
        </div>
        </>
    )
}