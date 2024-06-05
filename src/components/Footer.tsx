import facebookLogo from "../assets/img/Facebook-icon.png";
import twitterLogo from "../assets/img/logo-twitter.webp";

const Footer = () => {
  return (
    <footer>
      <p>
        By{" "}
        <a href="https://twitter.com/nannerb" target="_blank">
          @nannerb
        </a>
        , inspired by this{" "}
        <a
          href="https://www.twitter.com/missingcloudltd/status/826203153934729218"
          target="_blank"
        >
          tweet
        </a>
      </p>
      <div>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=http://fastgood.cheap&title=Fast%20Good%20Cheap"
          target="_blank"
        >
          <img src={facebookLogo} alt="facebook" />
        </a>

        <a
          href="https://twitter.com/intent/tweet?url=http%3A%2F%2Ffastgood.cheap&text=Fast%20Good%20Cheap"
          target="_blank"
        >
          <img src={twitterLogo} alt="twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
