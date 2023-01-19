import {ChevronDownIcon, EllipsisVerticalIcon} from '@heroicons/react/24/outline'
import {Popover, Transition} from '@headlessui/react'

const solutions = [
    {
        name: 'Insights',
        description: 'Measure actions your users take',
        href: '##',
    },
    {
        name: 'Automations',
        description: 'Create your own targeted content',
        href: '##',
    },
    {
        name: 'Reports',
        description: 'Keep track of your growth',
        href: '##',
    },
]

function App() {
    return (
        <div className={"w-full flex items-center justify-center min-h-screen bg-gray-300"}>
            <div className={"w-[140px] "}>
                <Popover className="relative">
                    {({open}) => (
                        <>
                            <Popover.Button
                                className={`
                ${open ? '' : 'text-opacity-90'}
                flex items-center justify-center rounded-md bg-indigo-700 p-2  text-white`}
                            >
                                <EllipsisVerticalIcon
                                    className={`${open ? '' : 'text-opacity-70'}
                                     h-5 w-5 text-orange-300 transition duration-150  ease-in-out group-hover:text-opacity-80`}
                                    aria-hidden="true"
                                />
                            </Popover.Button>
                            <Transition
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel
                                    className="absolute left-1/2 z-10 mt-3 w-full max-w-[140px] -translate-x-1/3 transform px-4 sm:px-0 ">
                                    <div className="bg-white space-y-4  text-sm font-semibold p-4 rounded-lg">
                                        <div>
                                            <a href={"#"}>
                                                <p className={"cursor-pointer  hover:text-indigo-600"}>Archive</p>
                                            </a>
                                        </div>
                                        <div>
                                            <a href={"#"}>
                                                <p className={"cursor-pointer  hover:text-indigo-600"}>Share</p>
                                            </a>
                                        </div>
                                        <div>
                                            <a href={"#"}>
                                                <p className={"cursor-pointer  hover:text-indigo-600"}>Delete</p>
                                            </a>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </div>
        </div>
    )
}

export default App
