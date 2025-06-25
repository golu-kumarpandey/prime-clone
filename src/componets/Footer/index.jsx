import FooterSection from "./style";
import { MdOutlineLanguage } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <div className="content">
          <div className="flex-container">
            <div className="logo-container">
              <p className="logo-text">Climex</p>

              <div className="custom-select">
                <MdOutlineLanguage className="icon" />
                <select>
                  <option>English</option>
                  <option>Hindi</option>
                </select>
                <FaCaretDown className="icon" />
              </div>
            </div>

            <div className="right-container">
              <div className="list-container">
                <h2 className="list-heading">Connect Us</h2>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="list-container">
                <h2 className="list-heading">Manage</h2>
                <ul>
                  <li>
                    <a href="#">Account</a>
                  </li>
                  <li>
                    <a href="#">Manage Account</a>
                  </li>
                  <li>
                    <a href="#">Buy Gift Card</a>
                  </li>
                  <li>
                    <a href="#">Redeem Gift Card</a>
                  </li>
                </ul>
              </div>
              <div className="list-container">
                <h2 className="list-heading">Information</h2>
                <ul>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                  <li>
                    <a href="#">Terms & Condition</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="copy-right">@2022 copyright: Chillax.com</p>
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;
