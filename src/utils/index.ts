export const profile = {
    initials: 'dms',
    nickName: 'douglasmatosdev',
    displayName: 'Douglas Matos',
    firstName: 'Douglas',
    lastName: 'Silva',
    fullName: 'Douglas Matos da Silva',
    description: 'Father, husband, brother and software developer.',
    gravatar: 'https://avatars.githubusercontent.com/u/57239907?v=4',
    github: 'https://github.com/douglasmatosdev',
    linkedin: 'https://www.linkedin.com/in/devdouglasmatos/',
    facebook: 'https://www.facebook.com/devdouglasmatos/',
    whatsapp: 'https://api.whatsapp.com/send?phone=5521994642132&text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site.',
    email: 'douglasmatosdev@gmail.com',
    twitter: 'https://twitter.com/devdouglasmatos',
    discord: 'douglasmatosdev#8237',
    twitch: 'https://www.twitch.tv/douglasmatosdev'
}

export function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ')
}

export const navigation: Navigation[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Studies', href: '/studies', current: false },
    { name: 'Contact', href: '/contact', current: false }
]