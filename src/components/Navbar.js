import { Add, LogoutOutlined } from "@mui/icons-material"
import ShoppingBagRounded from "@mui/icons-material/ShoppingBagRounded"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { motion } from "framer-motion"
import React from 'react'
import { Link, useNavigate,useLocation } from 'react-router-dom'
import avatar from '../assets/avatar.png'
import logo from "../assets/ri.png"
import { useGlobalContext } from "../context"
import { app } from "../firebase.config"
const Navbar = ({totalItems}) => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location =useLocation();
const{user,setUser,isMenu,setIsMenu}=useGlobalContext()
const login =async()=>{
  if (!user) {
    const { user } = await signInWithPopup(firebaseAuth, provider);
    const { providerData } = user;
    setUser(providerData[0])
    localStorage.setItem("user", JSON.stringify(providerData[0]));
  } else {
    setIsMenu(!isMenu);
  }
}
const logout =()=>{
  setIsMenu(false);
  localStorage.clear();
  setUser(null)
  navigate("/", { replace: true });
}
  return (
    <nav className='bg-gray-200 py-4 px-6 z-101 '>
       <div className="flex container justify-between items-center">
          <div className="flex md:ml-5">
            <Link
                to="/"
                className="flex items-center"
              >
                <img src={logo} alt="logo" className="w-12 object-cover" />
              </Link>
              <motion.ul className='flex gap-2 wrap items-center' initial={{opacity:0,x:200}} animate={{opacity:1 ,x:1 }} exit={{opacity:0,x:200}}>
                  <li 
                  className='flex flex-col uppercase font-lg relative hover:before:absolute hover:before:content hover:before:w-12 hover:before:top-6 hover:before:left-2 hover:before:h-1 hover:before:bg-gradient-to-tr from-slate-400 to-slate-600 px-2 rounded-sm'><Link to="/">Home</Link></li>
                  <li className='flex flex-col uppercase font-lg relative hover:before:absolute hover:before:content hover:before:w-20 hover:before:top-6 hover:before:left-2 hover:before:h-1 hover:before:bg-gradient-to-tr from-slate-400 to-slate-600 px-2 rounded-sm'><Link to="/Products">Products</Link></li>
            </motion.ul>
          </div>
          
          <div className="flex relative text-center items-center gap-4">
            {location.pathname!=="/cart"&&
            <div
            className="relative flex items-center justify-center"
          >
            <Link to="/cart"><ShoppingBagRounded className="text-orange-400 text-2xl cursor-pointer hover:scale-110 hover:text-activeText" /></Link>
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-activeText flex items-center justify-center bg-orange-400">
                <p className="text-sm text-white font-semibold">{totalItems}</p>
              </div>
        </div>
            }
                <motion.img
                  whileTap={{ scale: 0.6 }}
                  src={user ? user.photoURL : avatar}
                  alt={"avatar"}
                  referrerPolicy="no-referrer" /*some time it does not show image if running in localhost */
                  className="w-10 min-w-[40px] min-h-[40px] shadow-md rounded-full"
                  onClick={login}
                />
                {isMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    className="w-40 absolute text-base rounded-lg bg-gray-50 flex flex-col top-10 right-2 shadow-lg z-10"
                  >
                    {user && user.email === "hackerabcxyz77@gmail.com" && (
                      <Link to="/createItem">
                        <p className="hover:bg-gray-200 rounded-lg px-4 py-2 flex gap-3 cursor-pointer transition-all ease-in-out items-center">
                          New Item
                          <Add/>
                        </p>
                      </Link>
                    )}
                    <p
                      className="hover:bg-gray-200 rounded-lg px-4 py-2 flex gap-3 cursor-pointer transition-all ease-in-out items-center"
                      onClick={logout}
                    >
                      Logout <LogoutOutlined/>
                    </p>
                  </motion.div>
                )}
          </div>
       </div>
    </nav>
  )
}

export default Navbar