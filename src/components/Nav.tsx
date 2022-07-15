import { Link } from 'react-router-dom'
type Props = {}

const Nav = (props: Props) => {
  return (
    <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white'>
      <h2 className='font-bold'>GitHub Search</h2>
      <span>
        <Link to={'/'}>Home</Link>
        <Link className='ml-5' to={'/favourites'}>Favourites</Link>
      </span>
    </nav>
  )
}

export default Nav