import BaseMode from "./../base/BaseMode";

const Navbar = ({ mode }) => {
  return (
    <nav>
      <h1>Where in the world?</h1>
      <BaseMode mode={mode} />
    </nav>
  );
};

export default Navbar;
