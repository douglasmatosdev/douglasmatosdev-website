import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Fragment } from 'react'

import { Disclosure, Menu } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

interface NavbarProps {
    navigation: Navigation[]
    gravatar: string
    nickName: string
}

export function Navbar({ navigation, gravatar, nickName }: NavbarProps): JSX.Element {
    const router = useRouter()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string): void => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <Disclosure as="nav" className="bg-gray-800 mb-20">
            {({ open }) => (
                <Fragment>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Menu as="div" className="relative flex justify-center items-end">
                                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none">
                                        <Image
                                            width={48}
                                            height={48}
                                            src={gravatar}
                                            objectFit="cover"
                                            alt="Picture of the author"
                                            className="h-8 w-8 rounded-full"
                                        />
                                    </Menu.Button>
                                    <Link href="/">
                                        <a className="ml-4 h-8 w-auto text-white">{nickName}</a>
                                    </Link>
                                </Menu>
                            </div>

                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">

                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                onClick={e => handleClick(e, item.href)}
                                                key={item.name}
                                                href={item.href}
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:bg-gray-900 focus:text-white"
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:bg-gray-900 focus:text-white"
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </Fragment>
            )}
        </Disclosure>
    )
}
