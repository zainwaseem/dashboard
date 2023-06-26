import React from 'react'

function Navigation() {
    return (

        <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between  mr-0 pr-0">
                <a href="https://flowbite.com/" class="flex items-center">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Accounts</span>
                </a>
                <div class="flex ">
                    <button type="button" class="text-white bg-deepskyblue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2">New Account</button>
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2">Import Accounts</button>

                </div>

            </div>
        </nav>

    )
}

export default Navigation