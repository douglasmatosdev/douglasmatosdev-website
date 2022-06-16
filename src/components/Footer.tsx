import Link from 'next/link'
import { profile } from '../utils'

interface FooterProps {
    displayName: string
}

export function Footer({ displayName }: FooterProps) {
    return (
        <footer className="w-full p-4 fixed bottom-0 left-0 right-0 bg-gray-800 flex items-center justify-center md:p-6 dark:bg-gray-800">
            <div className={`
            flex w-10/12 mx-auto flex-col jusify-center items-center text-center
            lg:flex-row md:justify-between
            `}>
                <span
                    className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
                >
                    &copy; {new Date().getFullYear()}
                    <Link href={profile.linkedin}>
                        <a className="hover:underline"> {displayName}</a>
                    </Link>

               . All Rights Reserved.
                </span>
                <ul className="flex justify-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}
