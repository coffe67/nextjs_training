import Link from "next/link";
import {HomeIcon} from '@primer/octicons-react';
import { ActiveLink } from '../active-link/ActiveLink';
const navItems = [
    {path: '/about', text: 'About'},
    {path: '/contact', text: 'Contact'},
    {path: '/prices', text: 'Prices'},
]
export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href="/" className="flex items-center">
                <HomeIcon />
                <span>Home</span>
            </Link>
            {navItems.map((navItem) => <ActiveLink key={navItem.path} {...navItem}/>)}                       
        </nav>
    )
}