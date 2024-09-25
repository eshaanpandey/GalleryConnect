// src/components/Header.jsx
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  const headerStyle = {
    padding: '15px 0',
    borderBottom: '1px solid #ccc', // Subtle border for separation
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto',
    padding: '0 20px',
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif', // Standard font
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '15px', // Space between nav items
    marginLeft: 'auto', // Push nav links to the right
  };

  const navItemStyle = {
    color: 'black', // Black font color
    padding: '10px 15px',
    borderRadius: '5px',
    textDecoration: 'none', // Remove underline
    transition: 'background-color 0.3s ease',
  };

  const navItemHoverStyle = {
    backgroundColor: '#f0f0f0', // Light gray on hover
  };

  const profilePictureStyle = {
    height: '30px',
    width: '30px',
    borderRadius: '50%', // Circular profile picture
    objectFit: 'cover',
  };

  const userLogoStyle = {
    fontSize: '16px', // Adjust font size for user logo
  };

  return (
    <div style={headerStyle}>
      <div style={containerStyle}>
        <Link to='/' style={{ marginRight: 'auto' }}>
          <h1 style={titleStyle}>GalleryConnect</h1>
        </Link>
        <ul style={navLinksStyle}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li style={navItemStyle} onMouseOver={e => e.currentTarget.style.backgroundColor = navItemHoverStyle.backgroundColor} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
              Home
            </li>
          </Link>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <li style={navItemStyle} onMouseOver={e => e.currentTarget.style.backgroundColor = navItemHoverStyle.backgroundColor} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
              About
            </li>
          </Link>
          {currentUser && (
            <Link to='/dashboard' style={{ textDecoration: 'none' }}>
              <li style={navItemStyle} onMouseOver={e => e.currentTarget.style.backgroundColor = navItemHoverStyle.backgroundColor} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                Dashboard
              </li>
            </Link>
          )}
          <Link to='/profile' style={{ textDecoration: 'none' }}>
            <li style={navItemStyle}>
              {currentUser ? (
                <img
                  src={'../public/uploads/userImage.jpg'}
                  alt='profile'
                  style={profilePictureStyle}
                />
              ) : (
                <span style={userLogoStyle}>👤 Sign In</span>
              )}
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
