"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { UserIcon, EyeFilledIcon, EyeSlashFilledIcon } from "@/lib/icons";

const links = {
  dashboard: {
    products: {
      title: "מוצרים",
      link: "#",
    },
    orders: {
      title: "הזמנות",
      link: "#",
    },
    products2: {
      title: "מוצרים-2",
      link: "#",
    },
    orders2: {
      title: "הזמנות-2",
      link: "#",
    },
  },
};

export default function Sidebar() {
  const [showVersion, setShowVersion] = useState(false);

  return (
    <>
      <aside className="fixed right-0 top-0 z-20 h-screen w-60 overflow-hidden bg-zinc-50 shadow-md ">
        <Link href={"/"} className="mb-3 flex items-center justify-center py-6 outline-none">
          <Image src={"https://merakiui.com/images/logo.svg"} alt="Logo" width={40} height={40} className="me-2 w-6" />
          <span className="">Logo</span>
        </Link>

        <ul className="relative m-0 list-none px-[0.2re]">
          <li className="relative">
            <Link
              href={"/"}
              className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary/5 hover:text-blue-600 hover:outline-none focus:bg-primary/5 focus:text-blue-600 focus:outline-none active:bg-primary/5 active:text-blue-600 active:outline-none motion-reduce:transition-none">
              <span className="me-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:text-blue-600 group-focus:[&>svg]:text-blue-600 group-active:[&>svg]:text-blue-600 group-data-[twe-sidenav-state-active]:[&>svg]:text-blue-600 motion-reduce:[&>svg]:transition-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z"
                    clipRule="evenodd"></path>
                </svg>
              </span>
              <span>Webiste traffic</span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
        <Link href={"/"}>
          <Image src={"https://merakiui.com/images/logo.svg"} alt="Logo" width={40} height={40} className="h-7 w-auto" />
        </Link>

        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6">
            // 1
            <div className="space-y-3">
              <label className="px-3 text-xs text-gray-500">לוח בקרה</label>

              {Object.keys(links.dashboard).map((key: string, index: number) => {
                return (
                  <Link key={index} href={links.dashboard[key as keyof typeof links.dashboard].link} className="hover:bg-web-100 flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300">
                    <UserIcon />
                    <span className="mx-2 text-sm font-medium">{links.dashboard[key as keyof typeof links.dashboard].title}</span>
                  </Link>
                );
              })}
            </div>
            // 2
            <div className="space-y-3">
              <label className="px-3 text-xs text-gray-500">לוח בקרה - 2</label>

              {Object.keys(links.dashboard).map((key: string, index: number) => {
                return (
                  <Link key={index} href={links.dashboard[key as keyof typeof links.dashboard].link} className="hover:bg-web-100 flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300">
                    <UserIcon />
                    <span className="mx-2 text-sm font-medium">{links.dashboard[key as keyof typeof links.dashboard].title}</span>
                  </Link>
                );
              })}
            </div>
            // 3
            <div className="space-y-3">
              <label className="px-3 text-xs text-gray-500">לוח בקרה - 3</label>

              {Object.keys(links.dashboard).map((key: string, index: number) => {
                return (
                  <Link key={index} href={links.dashboard[key as keyof typeof links.dashboard].link} className="hover:bg-web-100 flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300">
                    <UserIcon />
                    <span className="mx-2 text-sm font-medium">{links.dashboard[key as keyof typeof links.dashboard].title}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>

        <div className="mt-6 flex flex-col items-end justify-between">
          <div className="bg-web-100 mx-auto flex w-full cursor-pointer items-center justify-center rounded-lg px-3 py-2" onClick={() => setShowVersion((perv) => !perv)}>
            <span className="mx-2 font-mono text-xs text-gray-500">{showVersion ? "1.0.0" : "Beta Version"}</span>
            {showVersion ? <EyeSlashFilledIcon className="text-xs text-gray-500" /> : <EyeFilledIcon className="text-xs text-gray-500" />}
          </div>
        </div>
      </aside> */}

      {/* Test */}
      {/* <nav id="main-navbar" className="shadow-dark-mild fixed left-0 right-0 top-0 flex w-full flex-nowrap items-center justify-between bg-zinc-50 py-[0.6rem] dark:bg-neutral-700 lg:flex-wrap lg:justify-start xl:ps-60" data-twe-navbar-ref="">
        <div className="flex w-full flex-wrap items-center justify-between px-4">
          <button
            data-twe-sidenav-toggle-ref=""
            data-twe-target="#sidenav-1"
            className="text-surface block border-0 bg-transparent px-2.5 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-300 xl:hidden"
            aria-controls="#sidenav-1"
            aria-haspopup="true">
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"></path>
              </svg>
            </span>
          </button>

          <form className="relative me-auto ms-4 flex flex-wrap items-stretch xl:mx-0">
            <input
              type="search"
              className="focus:shadow-inset dark:bg-body-dark dark:autofill:shadow-autofill relative m-0 inline-block w-[1%] min-w-[225px] flex-auto rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition duration-300 ease-in-out focus:border-primary focus:text-gray-700 focus:outline-none dark:border-white/10 dark:text-neutral-300 dark:placeholder:text-neutral-300"
            />
            <span className="flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-600 dark:text-white [&>svg]:w-4" id="basic-addon2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
              </svg>
            </span>
          </form>

          <ul className="relative flex items-center">
            <li className="relative" data-twe-dropdown-ref="">
              <a className="me-4 flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700" href="#" id="navbarDropdownMenuLink" role="button" data-twe-dropdown-toggle-ref="" aria-expanded="false">
                <span className="dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 [&>svg]:w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                      clipRule="evenodd"></path>
                  </svg>
                </span>
                <span className="absolute -mt-2.5 ms-2.5 rounded-full bg-red-600 px-1.5 py-[1px] text-[0.6rem] text-white">1</span>
              </a>
              <ul
                className="dark:bg-surface-dark absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block"
                aria-labelledby="navbarDropdownMenuLink"
                data-twe-dropdown-menu-ref="">
                <li>
                  <a
                    className="dark:bg-surface-dark block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref="">
                    Some news
                  </a>
                </li>
                <li>
                  <a
                    className="dark:bg-surface-dark block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref="">
                    Another news
                  </a>
                </li>
                <li>
                  <a
                    className="dark:bg-surface-dark block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref="">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="me-4">
              <a href="#">
                <span className="text-gray-500 hover:text-gray-700 focus:text-gray-700 dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 [&>svg]:w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960">
                    <path d="m247-904 57-56 343 343q23 23 23 57t-23 57L457-313q-23 23-57 23t-57-23L153-503q-23-23-23-57t23-57l190-191-96-96Zm153 153L209-560h382L400-751Zm360 471q-33 0-56.5-23.5T680-360q0-21 12.5-45t27.5-45q9-12 19-25t21-25q11 12 21 25t19 25q15 21 27.5 45t12.5 45q0 33-23.5 56.5T760-280ZM80 0v-160h800V0H80Z"></path>
                  </svg>
                </span>
              </a>
            </li>

            <li className="me-4">
              <a href="#">
                <span className="text-gray-500 hover:text-gray-700 focus:text-gray-700 dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 [&>svg]:w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </span>
              </a>
            </li>

            <li className="relative" data-twe-dropdown-ref="">
              <a className="me-4 flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700" href="#" id="navbarDropdown" role="button" data-twe-dropdown-toggle-ref="" aria-expanded="false">
                <span className="relative inline-block h-[11px] w-4 overflow-hidden leading-[11px] decoration-inherit">
                  <span className="inline-block h-[11px] w-4 content-[''] [background-position:-36px_-26px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"></span>
                </span>
              </a>
              <ul
                className="dark:bg-surface-dark absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block"
                aria-labelledby="navbarDropdown"
                data-twe-dropdown-menu-ref="">
                <li>
                  <a
                    className="dark:bg-surface-dark block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref="">
                    <span className="relative me-2 inline-block h-[11px] w-4 overflow-hidden leading-[11px] decoration-inherit">
                      <span className="inline-block h-[11px] w-4 content-[''] [background-position:-36px_-26px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"></span>
                    </span>
                    <span className="me-4">English</span>
                    <span className="inline-block text-success-600 dark:text-success-500 [&>svg]:h-3.5 [&>svg]:w-3.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="my-2 border-neutral-100 dark:border-white/10" />
                </li>
                <li>
                  <a
                    className="dark:bg-surface-dark block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref="">
                    <span className="relative me-2 inline-block h-[11px] w-4 overflow-hidden leading-[11px] decoration-inherit">
                      <span className="inline-block h-[11px] w-4 content-[''] [background-position:-72px_-572px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"></span>
                    </span>
                    Polski
                  </a>
                </li>
                <li>
                  <a
                    className="dark:bg-surface-dark block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref="">
                    <span className="relative me-2 inline-block h-[11px] w-4 overflow-hidden leading-[11px] decoration-inherit">
                      <span className="inline-block h-[11px] w-4 content-[''] [background-position:0px_-1196px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"></span>
                    </span>
                    中文
                  </a>
                </li>
                <li>
                  <a
                    className="dark:bg-surface-dark block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref="">
                    <span className="relative me-2 inline-block h-[11px] w-4 overflow-hidden leading-[11px] decoration-inherit">
                      <span className="inline-block h-[11px] w-4 content-[''] [background-position:-36px_-910px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"></span>
                    </span>
                    日本語
                  </a>
                </li>
                <li>
                  <a
                    className="dark:bg-surface-dark block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref="">
                    <span className="relative me-2 inline-block h-[11px] w-4 overflow-hidden leading-[11px] decoration-inherit">
                      <span className="inline-block h-[11px] w-4 content-[''] [background-position:0px_-1430px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"></span>
                    </span>
                    Deutsch
                  </a>
                </li>
                <li>
                  <a
                    className="dark:bg-surface-dark block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref="">
                    <span className="relative me-2 inline-block h-[11px] w-4 overflow-hidden leading-[11px] decoration-inherit">
                      <span className="inline-block h-[11px] w-4 content-[''] [background-position:0px_-1976px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"></span>
                    </span>
                    Français
                  </a>
                </li>
                <li>
                  <a
                    className="dark:bg-surface-dark block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref="">
                    <span className="relative me-2 inline-block h-[11px] w-4 overflow-hidden leading-[11px] decoration-inherit">
                      <span className="inline-block h-[11px] w-4 content-[''] [background-position:-0px_-1742px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"></span>
                    </span>
                    Español
                  </a>
                </li>
                <li>
                  <a
                    className="dark:bg-surface-dark block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref="">
                    <span className="relative me-2 inline-block h-[11px] w-4 overflow-hidden leading-[11px] decoration-inherit">
                      <span className="inline-block h-[11px] w-4 content-[''] [background-position:-72px_-884px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"></span>
                    </span>
                    Русский
                  </a>
                </li>
                <li>
                  <a
                    className="dark:bg-surface-dark block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref="">
                    <span className="relative me-2 inline-block h-[11px] w-4 overflow-hidden leading-[11px] decoration-inherit">
                      <span className="inline-block h-[11px] w-4 content-[''] [background-position:-72px_-702px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"></span>
                    </span>
                    Português
                  </a>
                </li>
              </ul>
            </li>

            <li className="relative" data-twe-dropdown-ref="">
              <a className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none" href="#" id="navbarDropdownMenuLink" role="button" data-twe-dropdown-toggle-ref="" aria-expanded="false">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" className="h-[22px] w-[22px] rounded-full" alt="Avatar" loading="lazy" />
              </a>
              <ul
                className="dark:bg-surface-dark absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block"
                aria-labelledby="dropdownMenuButton2"
                data-twe-dropdown-menu-ref="">
                <li>
                  <a
                    className="dark:bg-surface-dark block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref="">
                    My profile
                  </a>
                </li>
                <li>
                  <a
                    className="dark:bg-surface-dark block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref="">
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    className="dark:bg-surface-dark block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref="">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav> */}
    </>
  );
}

{
  /*
  

    <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
      <Link href={"/"}>
        <Image src={"https://merakiui.com/images/logo.svg"} alt="Logo" width={40} height={40} className="h-7 w-auto" />
      </Link>

      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6">
        // 1
          <div className="space-y-3">
            <label className="px-3 text-xs text-gray-500">לוח בקרה</label>

            {Object.keys(links.dashboard).map((key: string, index: number) => {
              return (
                <Link key={index} href={links.dashboard[key as keyof typeof links.dashboard].link} className="hover:bg-web-100 flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300">
                  <UserIcon />
                  <span className="mx-2 text-sm font-medium">{links.dashboard[key as keyof typeof links.dashboard].title}</span>
                </Link>
              );
            })}
          </div>

          // 2
          <div className="space-y-3">
            <label className="px-3 text-xs text-gray-500">לוח בקרה - 2</label>

            {Object.keys(links.dashboard).map((key: string, index: number) => {
              return (
                <Link key={index} href={links.dashboard[key as keyof typeof links.dashboard].link} className="hover:bg-web-100 flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300">
                  <UserIcon />
                  <span className="mx-2 text-sm font-medium">{links.dashboard[key as keyof typeof links.dashboard].title}</span>
                </Link>
              );
            })}
          </div>

          // 3
          <div className="space-y-3">
            <label className="px-3 text-xs text-gray-500">לוח בקרה - 3</label>

            {Object.keys(links.dashboard).map((key: string, index: number) => {
              return (
                <Link key={index} href={links.dashboard[key as keyof typeof links.dashboard].link} className="hover:bg-web-100 flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300">
                  <UserIcon />
                  <span className="mx-2 text-sm font-medium">{links.dashboard[key as keyof typeof links.dashboard].title}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      <div className="mt-6 flex flex-col items-end justify-between">
        <div className="bg-web-100 mx-auto flex w-full cursor-pointer items-center justify-center rounded-lg px-3 py-2" onClick={() => setShowVersion((perv) => !perv)}>
          <span className="mx-2 font-mono text-xs text-gray-500">{showVersion ? "1.0.0" : "Beta Version"}</span>
          {showVersion ? <EyeSlashFilledIcon className="text-xs text-gray-500" /> : <EyeFilledIcon className="text-xs text-gray-500" />}
        </div>
      </div>
    </aside>
*/
}
