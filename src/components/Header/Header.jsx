import './Header.css';

const Header = ({ title }) => {
  return (
    <>
      <h1 className="header" data-testid="header-1">
        {title}
      </h1>
      <h3 title="Header">Cats</h3>
    </>
  );
};

export default Header;
