import Link from 'next/link'
import React from 'react'

const MenuBar = () => {

    return (
        <div className={menuStyles.maincontent}>
            <div>
                <img src='/assets/images/logo.png' />
            </div>
            <div className={menuStyles.menucontent}>
                <div className={menuStyles.menuinnercontent}>
                    <ul className={menuStyles.menuul}>
                        <li className={menuStyles.menuhover}>
                            <Link href="/">
                                <a className={menuStyles.menu} aria-current="page">Home</a>
                            </Link>
                        </li>
                        <li className={menuStyles.menuhover}>
                            <Link href="/store">
                                <a className={menuStyles.menu} aria-current="page">Marketplace</a>
                            </Link>
                        </li>
                        <li className={menuStyles.menuhover}>
                            <Link href="/cart">
                                <a href="#" className={menuStyles.menu} aria-current="page">Cart</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <button className={menuStyles.avatar} type="button">
                    <img className={menuStyles.avatarimg} src="https://i.pravatar.cc/30" alt="user photo" />
                    Green Writh
                    <svg className="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default MenuBar

const menuStyles = {
    maincontent: 'grid grid-cols-[25%_50%_25%] px-11 mt-4',
    menu: 'block py-2 pr-4 pl-3 text-black-600 font-bold tracking-wide',
    menuhover: 'hover:border-1 hover:bg-gray-100 hover:rounded hover:underline hover:text-[#222]',
    menucontent: 'flex items-center justify-center',
    menuinnercontent: "hidden justify-between items-center w-full text-sm md:flex md:w-auto md:order-1",
    menuul: "flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0",
    avatar: "flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white",
    avatarimg: "mr-2 w-8 h-8 rounded-full"
}