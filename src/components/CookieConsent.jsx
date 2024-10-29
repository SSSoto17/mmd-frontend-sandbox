import { LiaCookieBiteSolid } from "react-icons/lia";
import Button from "./Button";

const CookieConsent = () => {
  return (
    <article className="cookies">
      <ul>
        <li>
          <LiaCookieBiteSolid size="4em" />
        </li>
        <li>
          <button>&#215;</button>
        </li>
      </ul>
      <p>We use cookies to improve your user experience.</p>
      <Button />
    </article>
  );
};

export default CookieConsent;
