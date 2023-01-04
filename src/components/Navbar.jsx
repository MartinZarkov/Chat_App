import React from 'react';
import SignIn from './SignIn'
import LogOut from './LogOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const style = {
    nav: `bg-emerald-300 h-20 flex justify-between items-center p-4 border rounded mt-10`,
    heading: `text-blue-500 text-3xl font-bold`
}

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat</h1>
      {user ? <LogOut /> : <SignIn />}

    </div>
  );
};

export default Navbar;
