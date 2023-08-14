import "./Home.css";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
export const Home = () => {
    return (
        <div className="Home">
            <div className="Container">
                <h1 className="header">
                    Hau Sian Cing
                </h1>
                <span>
                    Web Developer
                </span>
                <div className="social-list">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/margaret.5.94?mibextid=ZbWKwL">
                                <img src="/386622_facebook_icon.png" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/HauSianCing">
                                <img src="/git2.png" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/margaret-cing-5874ab244">
                                <img src="/linkedin.png" /></a>
                        </li>
                    </ul>
                </div>

            </div>
            <img src="./IT-image.jpg" id="IT-Image" />

        </div>

    );
}
const MyTooltip = (tt) => (
    <Tooltip>
        {tt}
    </Tooltip>
);
