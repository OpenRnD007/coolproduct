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
                        {/* <li className={menuStyles.menuhover}>
                            <Link href="/cart">
                                <a href="#" className={menuStyles.menu} aria-current="page">Cart</a>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>

            <div className="self-center flex">
                <button className={menuStyles.avatar} type="button">
                    <img className={menuStyles.avatarimg} src="https://i.pravatar.cc/30" alt="user photo" />
                    Green Writh
                </button>
                <svg className='ml-4' width={25} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 512 512">
                    <path d="m485.7,198.5c-10.7-13.4-25.3-20.8-41.1-20.8h-36.1c-3.4-92.6-70.5-166.7-152.5-166.7-82,0-149.1,74.1-152.5,166.7h-36.1c-15.8,0-30.4,7.4-41.1,20.8-13.5,16.8-18.4,40.2-13.3,62.7l43.3,190.8c6.5,28.8 28.9,49 54.4,49h290.5c25.5,0 47.9-20.1 54.4-49l43.4-190.8c5.1-22.5 0.2-45.9-13.3-62.7zm-229.7-146.7c59.6-1.42109e-14 108.4,55.8 111.6,125.9h-223.2c3.2-70 52-125.9 111.6-125.9zm203.2,200.3l-43.3,190.9c-2.2,9.8-8.5,17.2-14.6,17.2h-290.6c-6.1,0-12.4-7.4-14.6-17.2l-43.3-190.9c-2.3-10.1-3.7-33.6 14.6-33.6h377.2c19.7,0 16.9,23.5 14.6,33.6z"></path>
                    <path d="m154.7,259.1c-11.3,0-20.4,9.1-20.4,20.4v127.5c0,11.3 9.1,20.4 20.4,20.4 11.3,0 20.4-9.1 20.4-20.4v-127.5c0.1-11.2-9.1-20.4-20.4-20.4z"></path>
                    <path d="m253.6,259.1c-11.3,0-20.4,9.1-20.4,20.4v127.5c0,11.3 9.1,20.4 20.4,20.4 11.3,0 20.4-9.1 20.4-20.4v-127.5c0-11.2-9.2-20.4-20.4-20.4z"></path>
                    <path d="m352.4,259.1c-11.3,0-20.4,9.1-20.4,20.4v127.5c0,11.3 9.1,20.4 20.4,20.4 11.3,0 20.4-9.1 20.4-20.4v-127.5c5.68434e-14-11.2-9.1-20.4-20.4-20.4z"></path>
                </svg>
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
    avatar: "flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 ring-4 ring-gray-100 dark:focus:ring-gray-700 dark:text-white",
    avatarimg: "mr-2 w-8 h-8 rounded-full"
}