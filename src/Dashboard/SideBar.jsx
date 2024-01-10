
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards, HiOutlineCloudUpload } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import MobileDashboard from './MobileDashboard';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
const SideBar = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className=''>
      <Sidebar aria-label="Sidebar with content separator example" className='hidden md:block '>
        <Sidebar.Logo
          className='w-10 h-10 rounded-full'
          imgAlt="Flowbite logo"
        ><Dropdown
        arrowIcon={false}
        inline
        label={<Avatar alt="User settings" img="https://cdn.vectorstock.com/i/1000x1000/34/29/man-with-inscription-admin-icon-outline-style-vector-30713429.webp" rounded/>}
      />
          <Link to ="/">
          <p>
            {user?.displayName || "Admin" }
          </p>
          </Link>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              icon={HiChartPie}>
              <Link to="/">
              <p>
                Dashboard
              </p>
              </Link>
            </Sidebar.Item>
            <Sidebar.Item
              icon={HiOutlineCloudUpload}>
              <Link to="/upload">
              <p>
                Upload Book
              </p>
              </Link>
            </Sidebar.Item>

            <Sidebar.Item
              icon={HiInbox}
            >
              <Link to="/manage">
              <p>
                ManageBooks
              </p>
              </Link>
            </Sidebar.Item>
            <Sidebar.Item
              icon={HiUser}
            >
              <a href={'https://console.firebase.google.com/project/library-management-e0fe1/authentication/users'} target="_blank">
              <p>
                Users
              </p>
              </a>
            </Sidebar.Item>
            <Sidebar.Item
              icon={HiArrowSmRight}
            >
              <Link to="/login">
              <p>
                Sign In
              </p>
              </Link>
            </Sidebar.Item>
            <Sidebar.Item
              icon={HiTable}
            >
              <Link to="/logout">
              <p>
                Log out
              </p>
              </Link>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div className='md:hidden'>
          <MobileDashboard/>
      </div>
    </div>
  )
}

export default SideBar