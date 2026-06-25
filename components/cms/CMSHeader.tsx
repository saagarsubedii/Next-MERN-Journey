import Image from "next/image"
export const CMSHeader = () => {
    return (
        <>
            <a
                href="https://hyperui.dev/cdn-cgi/content?id=gSkc1fpgk.RieOPO7cYpCT.W1mR.C3nFoQRfPhymDiE-1782411965.1589565-1.2.1.1-NNjDYcJGnhgILfo5Xgb4NT_y.qbIsEJMnTmHYrWIN2s"
                aria-hidden="true"
                rel="nofollow noopener"
                style={{ display: 'none', visibility: 'hidden' }}
            />
            <header className="bg-white dark:bg-gray-900">
                <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600 dark:text-teal-300" href="#">
                        <Image src="/logo.png" width={40} height={40} alt="logo"/>
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        
                        <div className="relative hidden md:block">
                        <div className="flex item-center text-white text-lg gap-3 hover:cursor-pointer">
                            <button type="button" className="overflow-hidden rounded-full border border-gray-300 shadow-inner dark:border-gray-600">
                            <span className="sr-only">Toggle dashboard menu</span>

                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=1160" alt="" className="size-10 object-cover"/>
                        </button>
                        <p>Sagar Subedi</p>
                        </div>

                        <div className="hidden absolute insert-end-0 z-10 mt-0.5 w-56 rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900" role="menu">
                            <div className="p-2">
                            <a href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300" role="menuitem">
                                My profile
                            </a>

                            <a href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300" role="menuitem">
                                My data
                            </a>

                            <a href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300" role="menuitem">
                                Team settings
                            </a>

                            <form method="POST" action="#">
                                <button type="submit" className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-600/10" role="menuitem">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"></path>
                                </svg>

                                Logout
                                </button>
                            </form>
                            </div>
                        </div>

                        <div className="block md:hidden">
                            <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </header>
        </>
    )
}