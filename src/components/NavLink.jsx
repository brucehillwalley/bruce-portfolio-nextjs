"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const  NavLink = ({link}) => {
    const pathName = usePathname()
   
    return (
        <Link className={`rounded text-sky-900 p-1 ${pathName === link.url && "bg-sky-900 text-white"}`} href={link.url}>{link.title}</Link>
    )
}

export default NavLink