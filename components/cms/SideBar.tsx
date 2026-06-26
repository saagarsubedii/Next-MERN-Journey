import Link from "next/link"

export const SideBar = () => {
    return (
        <div className="flex w-full h-screen flex-col justify-between border-e border-gray-400 bg-gray-200">
            <div className="p-4">
                <ul className="mt-4 space-y-1">
                    <li>
                        <Link href="/cms" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900">
                            Dashboard
                        </Link>
                    </li>

                    <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900">
                                Hero / Banner

                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <ul className="mt-2 space-y-1 px-4">
                                <li>
                                    <Link href="/cms/banner" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900">
                                        Add Hero Banner
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/cms/banner" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900">
                                        List Hero Banner
                                    </Link>
                                </li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <Link href="/cms" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900">
                            Categories
                        </Link>
                    </li>

                    <li>
                        <Link href="/cms" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900">
                            Users
                        </Link>
                    </li>

                     <li>
                        <Link href="/cms" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900">
                            Products
                        </Link>
                    </li>

                     <li>
                        <Link href="/cms" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900">
                            Orders
                        </Link>
                    </li>

                   
                </ul>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <Link href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50 hover:transition-colors">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=1160"
                        className="size-10 rounded-full object-cover"
                    />

                    <p className="text-xs text-gray-900">
                        <strong className="block font-medium">Eric Frusciante</strong>

                        <span> eric@frusciante.com </span>
                    </p>
                </Link>
            </div>
        </div>
    )
}
