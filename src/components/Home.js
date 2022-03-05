import meImage from "../assets/me.jpg";
import outlookImage from "../assets/outlook.png";
import linkedInImage from "../assets/linkedin.png";

function Home() {
  return (
    <div className="container">
      <img src={meImage} alt="me" className="me-img" />
      <h1 className="my-name">Ahmed Bargady</h1>
      <div className="icon-container">
        <a
          href="mailto:ahmed.bargady@outlook.com"
          rel="noopener noreferrer"
          target="_blank">
          <img src={outlookImage} alt="outlook" className="icon-img" />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-bargady/"
          rel="noopener noreferrer"
          target="_blank">
          <img src={linkedInImage} alt="linkedIn" className="icon-img" />
        </a>
      </div>
    </div>
  );
}

export default Home;
