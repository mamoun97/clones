
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Profile from "./profile";
import RightContent from "./right-content";
import { useState } from "react";


export default function Layout() {
  const [open, setOpen] = useState(true)
  return (
    <div className="w-full bg-content1 ">
      <div className="flex h-screen ">
        <Sidebar {...{ open, setOpen }} className="animateH-trLeft [animation-delay:4s] [animation-fill-mode:backwards]" />
        <div className="grow flex flex-col h-full w-full ">
          <Navbar {...{ open, setOpen }} className="animateH-trTop [animation-fill-mode:backwards] [animation-delay:4s]" />
          <div className="grow grid grid-cols-4 w-full relative no-scrollbar overflow-auto">
            <div className="col-span-3 p-6    max-md:col-span-full bg-content2 rounded-2xl animateH-trBottom [animation-fill-mode:backwards] [animation-delay:4s]">
              <Profile className="min-h-full" />
            </div>
            <div className="bg-content1 p-4 pt-1 sticky top-0 max-md:col-span-full  animateH-trRight [animation-fill-mode:backwards] [animation-delay:4s] ">
              <RightContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
