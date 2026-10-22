import { RiHome5Fill, RiSearch2Line, RiUserLine } from "react-icons/ri"
import images from "../assets"
import Home from "./components/home"
import { BiStoreAlt } from "react-icons/bi"
import { GoHeart } from "react-icons/go"
import { MouseEvent, useState } from "react"
import RecipePage from "./components/recipe-page"


export default function Layout() {

    return (
        <div className="h-screen flex flex-col w-full bg-content2">
            <div className="flex grow no-scrollbar overflow-auto">
                <Home />
            </div>
            <ButtomNav />
            {/* <RecipePage /> */}
            {/* <HoverEffectCards /> */}
        </div>
    )
}
function ButtomNav() {
    const [key, setKey] = useState(1)
    return <div className="grid grid-cols-5 w-full p-4 py-2 bg-content1">
        {
            [
                {
                    icon: <RiHome5Fill className="w-6 h-6" />,
                    label: "Home",
                    key: 1,
                },
                {
                    icon: <RiSearch2Line className="w-6 h-6" />,
                    label: "Search",
                    key: 2,
                },
                {
                    icon: <BiStoreAlt className="w-6 h-6" />,
                    key: 3,
                },
                {
                    icon: <GoHeart className="w-6 h-6" />,
                    label: "Favorites",
                    key: 4,
                },
                {
                    icon: <RiUserLine className="w-6 h-6" />,
                    label: "Profile",
                    key: 5,
                },
            ].map((el, k) => {
                return <div key={k} className="flex items-center justify-center">
                    <div className={`flex cursor-pointer items-center  flex-col gap-1 justify-center ${el.label ? "" : "bg-primary w-12 h-12 rounded-xl shadow-md text-white"} ${el.key == key ? "text-primary" : "text-foreground-500"}`} onClick={() => setKey(el.key)}>
                        {el.icon}
                        {el.label && <span className="text-[10px] font-medium">{el.label}</span>}
                    </div>
                </div>
            })
        }
    </div>
}




const HoverEffectCards: React.FC = () => {


    return (
        <div className="grid grid-cols-4 gap-6 p-6">
            <ul className="pt-16 md:pt-20 flex gap-6 md:grid md:grid-cols-3 md:flex-row">
                <li className="transition-200 w-full min-w-0 flex-[0_0_100%] rounded-2xl bg-glassy-100 backdrop-blur-[7px] shadow-inner-brand transition-colors md:flex md:flex-col card_card__tmXos md:flex-shrink p-8 circle-background-hover-effect-wrapper next-gen_card__iSOJW">
                    
                    <div className="circle-background-hover-effect next-gen-circles-background" id="translate: none; rotate: none; scale: none; transform: translate(-50%, -50%); left: 8px; top: 210px;"></div>
                    
                    <div className="relative flex-shrink-0 next-gen_illusWrapper__CcAHk">
                    </div><div className="mt-14 md:mt-10"><h3 className="text-2xl font-medium md:text-3xl">Lightning fast</h3><p className="mt-2 font-normal opacity-75">Search-as-you-type returns answers in less than 50 milliseconds. That's faster than the blink of an eye!</p></div>
                </li>
                <li className="transition-200 w-full min-w-0 flex-[0_0_100%] rounded-2xl bg-glassy-100 backdrop-blur-[7px] shadow-inner-brand transition-colors md:flex md:flex-col card_card__tmXos md:flex-shrink p-8 circle-background-hover-effect-wrapper next-gen_card__iSOJW">
                    <div className="circle-background-hover-effect next-gen-circles-background" id="translate: none; rotate: none; scale: none; transform: translate(-50%, -50%); left: 8px; top: 210px;"></div>

                    <div className="relative flex-shrink-0 next-gen_illusWrapper__CcAHk">
                    </div><div className="mt-14 md:mt-10"><h3 className="text-2xl font-medium md:text-3xl">Plug-n-play</h3><p className="mt-2 font-normal opacity-75">Deploy in a matter of minutes. Smart presets let you start searching through your data with zero configuration.</p></div>
                </li>
                <li className="transition-200 w-full min-w-0 flex-[0_0_100%] rounded-2xl bg-glassy-100 backdrop-blur-[7px] shadow-inner-brand transition-colors md:flex md:flex-col card_card__tmXos md:flex-shrink p-8 circle-background-hover-effect-wrapper next-gen_card__iSOJW">
                    
                    <div className="circle-background-hover-effect next-gen-circles-background" id="translate: none; rotate: none; scale: none; transform: translate(-50%, -50%); left: 8px; top: 210px;"></div>
                    
                    <div className="relative flex-shrink-0 next-gen_illusWrapper__CcAHk">
                    </div><div className="mt-14 md:mt-10"><h3 className="text-2xl font-medium md:text-3xl">Ultra relevant</h3><p className="mt-2 font-normal opacity-75">Take advantage of the most advanced full-text search engine with its out-of-the-box great relevancy that fits every use case.</p></div>
                </li></ul>
        </div>
    );
};


