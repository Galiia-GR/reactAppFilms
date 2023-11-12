import Logo from './Logo';

type Props = {
  children: any;
};
function NavBar({ children }: Props) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

export default NavBar;
