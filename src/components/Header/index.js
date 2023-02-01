import coverImage from '../../assets/cover/cover-image.jpeg';

function Header(props) {
  return (
    <header className='flex-row space-between px-1'>
      <h1>Nicole Trieu</h1>
      <img src={coverImage} alt='pink and orange gradient'></img>
      {props.children}
    </header>
  ) 
};

export default Header;