import Link from 'next/link'

interface FooterProps {
    displayName: string
}

export function Footer({ displayName }: FooterProps) {
    return (
        <footer className="mt-8 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span
                className="text-sm text-gray-500 sm:text-center dark:text-gray-400"
            >
                &copy; {new Date().getFullYear()}
                <Link href="">
                    <a className="hover:underline"> {displayName}</a>
                </Link>

                . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>

    )
}