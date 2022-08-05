import PropTypes from 'prop-types'
 
 
const Header = ({ title }) => {
 return (
   <header className='header'>
     <h2>{title}</h2>
     <button className='btn'>Delete</button>
   </header> 
 )
}
Header.defaultProps = {
   title: 'Add New Tasks',
}

Header.propTypes = {
   title: PropTypes.string,
}

export default Header
