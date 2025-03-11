import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from '@/public/images/logo.svg';
import DefaultAvatar from '@/public/images/default-avatar.svg';
import propTypes from 'prop-types'

export default function Header({ onLight }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userCookies = decodeURIComponent(window.document.cookie)?.split(";")?.find?.(item => item.indexOf("BWAMICRO:user") > -1)?.split("=")[1] ?? null;
    console.log(userCookies);
    setUser(userCookies ? JSON.parse(userCookies) : null);
  }, [])


  const router = useRouter();
  const linkColor = onLight ? "text-gray-900" : "text-white";
  const linkCTA = router.pathname.indexOf("/login") > -1 ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register` : `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;
  const textCTA = router.pathname.indexOf("/login") > -1 ? `Daftar` : `Masuk`;

  return (
    <header className="flex justify-between items-center">
      <div style={{ height: 54 }}>
        <Logo className="on-dark"></Logo>
      </div>
      <ul className="flex items-center">
        <li>
          <a href="/" className={[linkColor, "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" ")}>Home</a>
        </li>
        <li>
          <Link href="/" className={[linkColor, "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" ")}>Pricing</Link>
        </li>
        <li>
          <Link href="/" className={[linkColor, "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" ")}>Features</Link>
        </li>
        <li>
          <Link href="/" className={[linkColor, "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium"].join(" ")}>Story</Link>
        </li>
        <li>
          {
            user ?
              <a target="_blank" rel="noopener noereferrer" href={linkCTA} className="hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6 inline-flex items-center">
                <span className="rounded-full overflow-hidden mr-3 border-2 border-orange-500">
                  {
                    user?.avatar ? <img src={user?.avatar} alt={user?.name} className="object-cover w-8 h-8 inline-block" />
                      : <DefaultAvatar className="fill-indigo-500 w-8 h-8 inline-block" />
                  }
                </span>
                Hi, {user.name}
              </a>
              : <a target="_blank" rel="noopener noereferrer" href={linkCTA} className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6">{textCTA}</a>
          }

        </li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  onLight: propTypes.bool,
}