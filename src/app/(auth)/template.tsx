"use client"
import './styles.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NavLinks = [
    { name: 'Register', href: '/register' },
    { name: 'Login', href: '/login' },
    { name: 'Forget Password', href: '/forget-password' },
]

export default function AuthLayout({ children }) {
    const pathName = usePathname()
    const [Input, setInput] = useState('')

    return (
        <>
            <input type="text" value={Input} onChange={(e) => setInput(e.target.value)} />
            {NavLinks.map((link) => {
                const isActive = pathName.startsWith(link.href)

                return <Link key={link.name} href={link.href} className={isActive ? 'mr-4 text-orange-300 font-bold' : 'mr-4 text-blue-300 font-bold'} > {link.name}</Link >
            })}
            <h1>{Input}</h1>
            {children}
        </>
    )
}