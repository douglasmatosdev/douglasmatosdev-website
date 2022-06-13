interface HomeHeroProps {
    title: string
    subtitle: string
}

export function HomeHero({ title, subtitle }: HomeHeroProps) {
    return (
        <div className="relative text-center bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="text-center">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block text-indigo-600 xl:inline">{title}</span>{' '}
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                                {subtitle}
                            </p>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
