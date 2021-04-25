import React from "react";
import { textConfig } from "../../const.config";
import "./footer.style.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer-sidenote" data-testId="footer">
        {textConfig.FOOTER_TEXT}
      </p>
    </footer>
  );
};

export default Footer;
