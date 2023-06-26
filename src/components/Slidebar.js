import React, { useState } from "react";

function Slidebar() {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform filtering logic with selectedOption and inputValue
    // Submit the form data or trigger the filtering action
    console.log("Filtering with:", selectedOption, inputValue);
  };
  const handleClearFilter = () => {
    setSelectedOption("");
    setInputValue("");
    // Perform any additional clearing logic
    console.log("Clearing filters");
  };

  return (
    <>
      {/* <nav class="fixed top-3 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-start">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span class="sr-only">Open sidebar</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="https://flowbite.com" class="flex ml-2 md:mr-24">
                                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
                                <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Flowbite</span>
                            </a>
                        </div>
                        <div class="flex items-center">
                            <div class="flex items-center ml-3">
                                <div>
                                    <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span class="sr-only">Open user menu</span>
                                        <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                    </button>
                                </div>
                                <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                    <div class="px-4 py-3" role="none">
                                        <p class="text-sm text-gray-900 dark:text-white" role="none">
                                            Neil Sims
                                        </p>
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                            neil.sims@flowbite.com
                                        </p>
                                    </div>
                                    <ul class="py-1" role="none">
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav> */}

      <aside
        id="logo-sidebar"
        class="fixed top-16  left-3 z--40 w-64  transition-transform  bg-[#5EA2D3] border-r border-gray-200 sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="bg-[#5EA2D3] m-0 p-2">
          <span class="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
            Accounts
          </span>
          <span class="self-center p1 text-lg  float-right  rounded pl-1 pr-1 font-semibold  bg-[#3B76A4]">
            <i class="fa-regular fa-less-than" style={{ color: "#f0f2f4" }}></i>
          </span>

          <span class="self-center text-sm float-right mx-1 mb-5 rounded pl-1 pr-1 font-semibold whitespace-nowrap dark:text-black dark:bg-white">
            PERSIST
            <input type="checkbox" className="h-4 w-4 m-1" />
          </span>
        </div>
        <div class="h-full text-gray bg-white ">
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="filterOption"
              className="text-sm  font-bold  text-bold text-[#5DA3D3] block"
            >
              ID
            </label>
            <div className="p-0 m-0">
              <select
                id="filterOption"
                className="font-medium border-2  rounded"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="">Equal</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <input
                type="text"
                className="border-2 m-2 border-gray rounded w-36"
                id="filterInput"
                value={inputValue}
                onChange={handleInputChange}
                // placeholder="Enter a value"
              />
            </div>
            <label
              htmlFor="filterUUID"
              className="text-sm  font-bold text-[#5DA3D3] block"
            >
              UUID
            </label>
            <input
              type="text"
              className="border-2 ml-0 border-gray rounded w-60"
              id="filterUUID"
              value={inputValue}
              onChange={handleInputChange}
              // placeholder="Enter a value"
            />
            <label
              htmlFor="filterUUID"
              className="text-sm  font-bold text-[#5DA3D3] block"
            >
              CONTRACTION
            </label>
            <select
              id="filterOption"
              className="font-medium border-2 w-60 rounded"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="">Equal</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <label
              htmlFor="filterName"
              className="text-sm  font-bold  text-bold text-[#5DA3D3] block uppercases"
            >
              Name
            </label>
            <div className="p-0 m-0">
              <select
                id="filterName"
                className="font-medium border-2 rounded"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="">Equal</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <input
                type="text"
                className="border-2  border-gray rounded w-36"
                id="filterInput"
                value={inputValue}
                onChange={handleInputChange}
                // placeholder="Enter a value"
              />
            </div>{" "}
            <label
              htmlFor="filterBalance"
              className="text-sm  font-bold   text-bold text-[#5DA3D3] block uppercases"
            >
              Balance
            </label>
            <div className="m-0 p-0">
              <select
                id="filterBalance"
                className="font-medium border-2 rounded"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="">Equal</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <input
                type="text"
                className="border-2 m-2 border-gray rounded w-36"
                id="filterInput"
                value={inputValue}
                onChange={handleInputChange}
                // placeholder="Enter a value"
              />
            </div>{" "}
            <label
              htmlFor="filterVat"
              className="text-sm font-bold  text-bold text-[#5DA3D3] block"
            >
              VAT
            </label>
            <div className="mt-0">
              <select
                id="filterVat"
                className="font-medium border-2 rounded"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="">Equal</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <input
                type="text"
                className="border-2 m-2 border-gray rounded w-36"
                id="filterInput"
                value={inputValue}
                onChange={handleInputChange}
                // placeholder="Enter a value"
              />
            </div>{" "}
            <label
              htmlFor="filterExternal"
              className="text-sm  font-bold  text-bold text-[#5DA3D3] block uppercase"
            >
              External
            </label>
            <div className="m-0 p-0">
              <select
                id="filterExternal"
                className="font-medium border-2 rounded"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="">Equal</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <input
                type="text"
                className="border-2 m-2 border-gray rounded  w-36"
                id="filterInput"
                value={inputValue}
                onChange={handleInputChange}
                // placeholder="Enter a value"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#5EA3D3] p-1 pl-3 pr-3 font-medium text-white rounded "
              >
                Filter
              </button>
              <button
                type="button"
                className="border-2 border-gray-300 p-1 pl-3 pr-3  font-medium text-black rounded ml-3"
                onClick={handleClearFilter}
              >
                Clear Filter
              </button>
            </div>
          </form>
          <div className="shadow-md">
            <div className="bg-[#5EA2D3] p-2 mt-1 rounded-t-lg mb-1 ">
              <span class="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
                Collection Actions
              </span>
            </div>
            <div>
              <p className="text-justify p-2">
                This batch operations affect selected records or if none is
                selected, it will involve all records by current filters and
                scopes.
              </p>
              <div class="flex">
                <button
                  type="button"
                  class="text-white bg-[#5EA3D3]-900 hover:bg-[#5EA3D3]-800 focus:ring-4 focus:outline-none  font-medium rounded-md text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-[#5EA3D3] dark:hover:bg-[#5EA3D3]-700 dark:focus:ring-[#5EA3D3]-800 m-2"
                >
                  Delete batch
                </button>
                <button
                  type="button"
                  class="text-white bg-[#5EA3D3]-700 hover:bg-[#5EA3D3]-800 focus:ring-4 focus:outline-none  font-medium rounded-md text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-[#5EA3D3] dark:focus:ring-[#5EA3D3]-800 m-2"
                >
                  Update batch
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div class="p-4 sm:ml-64">
        {/* <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid grid-cols-3 gap-4 mb-4">
            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
          <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
          <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Slidebar;
