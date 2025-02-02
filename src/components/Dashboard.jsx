import React from "react";
import SidebarLeft from "./SidebarLeft";
import AdminCarousel from "./AdminCarousel";
import { AdminCard } from "./AdminCard";

export default function Dashboard() {
  return (
    <main>
      <div class="flex h-screen bg-primary">
        {/* Sidebar Components */}
        <SidebarLeft />
        {/* <!-- Main content --> */}
        <div class="flex flex-col flex-1 overflow-y-auto">
          {/* Navbar Admin */}
          <section className=" flex justify-between">
            <div
              class="hidden w-full md:block md:w-auto bg-primary mt-10 px-36"
              id="navbar-multi-level"
            >
              <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    data-dropdown-trigger="hover"
                    class="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-secondary md:hover:bg-transparent md:border-0 md:hover:text-se md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent bg-primary md:hover:text-secondary"
                  >
                    Movie{" "}
                  </button>
                </li>
                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar1"
                    data-dropdown-trigger="hover"
                    class="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-secondary md:hover:bg-transparent md:border-0 md:hover:text-se md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent bg-primary md:hover:text-secondary"
                  >
                    TV Shows{" "}
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent bg-primary"
                  >
                    Catalog
                  </a>
                </li>
              </ul>
            </div>
            {/* Search Form Input */}
            <section className=" mt-5">
              <form class="max-w-md mx-auto w-[300px] ">
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-100 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                  />
                  <button
                    type="submit"
                    class="text-white absolute end-2.5 bottom-2.5 bg-secondary hover:bg-accent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>
            </section>
            {/* Profile */}
            <section className=" flex items-end gap-5 pe-14">
            <p className="text-white "> Veayor</p>
            <div>
              <img
                src="https://imgs.search.brave.com/4rX2hgwg-hJz3lKuo5dPya1VB1GAz1-r77zY3F-As0I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc0LzE1Lzk1/LzM2MF9GXzc0MTU5/NTU2XzY3bjU4MjNW/N0VpODdhNGc2Skpu/WUhDMHlNU28xQUV5/LmpwZw"
                alt=""
                className=" rounded-full w-14 h-12"
              />
            </div>
            </section>
          </section>

          {/* Body Dashboard */}
          <div class="p-4 bg-gray-500 h-[900px] rounded-tl-3xl mt-8">           
            <div className="">
              <AdminCarousel />
            </div>
            <div>
              <AdminCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
