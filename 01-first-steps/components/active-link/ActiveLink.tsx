'use client'
import React from "react";
import Link from "next/link";
import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";
interface Props  {
    path: string;
    text: string;
}
export const ActiveLink = ({ path, text }: Props) => {
    const pathName = usePathname();
    return (
        <Link className={`${style.link} ${(path === pathName) && style['active-link']}`} href={path}>{text}</Link>
    )
}