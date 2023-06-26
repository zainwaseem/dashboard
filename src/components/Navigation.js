import React from "react";

function Navigation() {
  return (
    <nav class="bg-[#353B46] dark:bg-[gray]-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="pe-3 flex flex-wrap items-center justify-between  mr-0 pr-0">
        <a href="#/" class="flex items-center">
          <span class="self-center text-base ps-5 font-semibold whitespace-nowrap dark:text-white">
            Accounts
          </span>
        </a>
        <div class="flex">
          <button
            type="button"
            class="text-white bg-[#5EA3D3]-900 hover:bg-[#5EA3D3]-800 focus:ring-4 focus:outline-none  font-medium rounded-md text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-[#5EA3D3] dark:hover:bg-[#5EA3D3]-700 dark:focus:ring-[#5EA3D3]-800 m-2"
          >
            New Account
          </button>
          <button
            type="button"
            class="text-white bg-[#5EA3D3]-700 hover:bg-[#5EA3D3]-800 focus:ring-4 focus:outline-none  font-medium rounded-md text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-[#5EA3D3] dark:focus:ring-[#5EA3D3]-800 m-2"
          >
            Import Accounts
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
