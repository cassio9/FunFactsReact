import logo from "../assets/Group.png";

function Header() {
  return (
    <header>
      <div className="nav-left">
        <img src={logo} />
        <h3>ReactFacts</h3>
      </div>
      <h4 className="nav-right">React Course - Project 1</h4>
    </header>
  );
}

export default Header;
