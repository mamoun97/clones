import { div } from "framer-motion/client"
import images from "../../assets"
import { Button } from "@nextui-org/react"
import { BiPlus } from "react-icons/bi"



const data = [
    {
        image: images.logo,
        name: "Add story",
        hasStory: false,
        isProfile: true
    },
    {
        image: images.story1,
        name: "malakalnairi",
        hasStory: true
    },
    {
        image: images.story2,
        name: "apple",
        hasStory: true
    },
    {
        image: images.story3,
        name: "kosdevlab",
        hasStory: true
    },
    {
        image: images.story4,
        name: "nazdumanskyy",
        hasStory: true
    },
    {
        image: images.story5,
        name: "flutterdaily",
        hasStory: true
    },
]
export default function Stories() {
    return (
        <div className="flex items-center gap-3 no-scrollbar overflow-auto ps-3">
            {
                data.map((el, k) => {
                    return <Story {...el} key={k} />
                })
            }
        </div>
    )
}
type PropsType = {
    image: string,
    name: string,
    hasStory: boolean,
    isProfile?: boolean
}
function Story(props: PropsType) {
    return <div className="w-20 min-w-20">
        <div className="pt-[100%] relative">
            {
                props.hasStory ? <>
                    <div className="bg-gradient-to-tr absolute inset-0 rounded-full from-[#fcb045] via-[#fd1d1d] to-[#833AB4]"></div>
                    <div className="bg-content1 absolute inset-[2px] rounded-full"></div>
                </> : ""
            }
            {
                props.isProfile ? <div className={`absolute bg-white  rounded-full ${props.hasStory ? "inset-1" : "inset-[2px]"}  `} >
                    <div className={`absolute bg-white bg-cover rounded-full inset-2 bg-no-repeat bg-center `} style={{
                        backgroundImage: `url('${props.image}')`
                    }}>

                    </div>
                    <span className="absolute w-6 h-6 max-w-6 right-0 bottom-0 bg-primary text-white border-2 border-content1 rounded-full flex items-center justify-center">
                        <BiPlus className="w-4 h-4" />
                    </span>
                </div> :
                    <div className={`absolute bg-white bg-cover rounded-full ${props.hasStory ? "inset-1" : "inset-[2px]"} bg-no-repeat bg-center `} style={{
                        backgroundImage: `url('${props.image}')`
                    }}></div>
            }


        </div>
        <h5 className="text-center px-2 mt-2 text-xs font-normal">{props.name}</h5>
    </div>

}
