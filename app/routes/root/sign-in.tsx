import React from 'react'
import { Link, redirect } from 'react-router'
import logo from "../../../public/assets/icons/logo.svg";
import google from "../../../public/assets/icons/google.svg";
import { loginWithGoogle } from '~/appwrite/auth';
import { account } from '~/appwrite/client';

{/*export async function clientLoader() {
    try {
        const user = await account.get();
        if(!user.id) return redirect("/");

    } catch(e) {
        console.log("error fetching user", e);
    }
}*/}
const SignIn = () => {
    
  return (
    <main className='auth'>
        <section className='size-full glassmorphism flex-center px-6'>
            <div className="sign-in-card">
                <header className="header">
                    <Link to="/">
                    <img src={logo} alt="logo" className="size-[30px]" />
                    </Link>
                    <h1 className='p-28-bold text-dark-100'>Tourvisto</h1>
                </header>
                <article>
                    <h2 className="p-28-semibold text-dark-100 text-center">Start Your Journey</h2>
                    <p className="p-18-regular text-center text-gray-100 leading-7!">
                        Sign in with Google to manage destinations, iterations, and user activity with ease.
                    </p>
                </article>
                <button className='button-class h-11! w-full!' onClick={loginWithGoogle}>
                    <img src={google} className='size-5' />
                    <span className='p-18-semibold text-white'>Sign in with Google</span>
                </button>
            </div>
        </section>
    </main>
  )
}

export default SignIn
