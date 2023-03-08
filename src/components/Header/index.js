import coverImage from '../../assets/cover/cover-image.jpeg';

function Header(props) {
  return (
    <header className='flex-row space-between px-1'>
      <div className='name-container'>
        <h1>Nicole Trieu</h1>
      </div>
      <div className='banner'>
        <img src={coverImage} alt='pink and orange gradient'></img>
      </div>
      {props.children}
    </header>
  ) 
};

export default Header;