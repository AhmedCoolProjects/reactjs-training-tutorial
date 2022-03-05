import logo from "../assets/logo.png"; // use ../ to go back to the parent directory

function TopNavbar() {
  return (
    <div className="top_navbar">
      <img className="logo" src={logo} alt="logo" />
      <h1>Hello CODE</h1>
    </div>
  );
}
export default TopNavbar;
