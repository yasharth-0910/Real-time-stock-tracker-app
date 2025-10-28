'use client'

import Link from "next/link";
import {nav_item} from "@/lib/constant";
import {usePathname} from "next/navigation";

const NavItems = () => {

    const pathname = usePathname()

    const isActive = (path: string) => {
        if(path == '/') return pathname == '/';

        return pathname.startsWith(path);
    }

    return (
        <ul className="flex flex-col sm:flex-row p-2 gap-3  sm:gap-10 font-medium">
            {nav_item.map(({href, label})=> (
                <li key={href}>
                    <Link href={href} className={`hover:text-yellow-500 transition-colors ${
                        isActive(href) ?  'text-gray-100' : ''
                    }`}>
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default NavItems
