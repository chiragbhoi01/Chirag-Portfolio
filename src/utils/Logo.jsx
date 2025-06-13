import { profileLogo } from "../assets/image/image";

function Logo({ width = "50px" }) {
    return (
        <div>
            <img src={profileLogo} alt="Portfolio-Logo" width={width} />
        </div>
    );
}

export default Logo;
