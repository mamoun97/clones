import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { FaPlaystation } from 'react-icons/fa'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import { MdArrowOutward, MdLaptopChromebook } from 'react-icons/md'


export default function Swiper1() {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Devil May Cry 5",
            bgColor: "bg-orange-600/50",
            select: true,
            type: "pc",
            image: "https://helios-i.mashable.com/imagery/articles/056ABnGrTvBE3vLZzglQ5F3/hero-image.fill.size_1200x900.v1623383987.jpg"
        },
        {
            id: 2,
            name: "GTA 5  Xbox",
            bgColor: "bg-lime-600/50",
            select: false,
            type: "play",
            image: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/19571008/cxvw3qhv2qgvf71rjedb.jpg?quality=90&strip=all&crop=2.9761904761905,0,94.047619047619,100"
        },
        {
            id: 3,
            name: "Red dead shop redemption",
            bgColor: "bg-cyan-500/50",
            select: false,
            type: "pc",
            image: "https://gaming-cdn.com/images/products/5679/screenshot/red-dead-redemption-2-pc-game-rockstar-wallpaper-3.jpg"
        },
        {
            id: 4,
            name: "Call of Duty Black Ops 6",
            bgColor: "bg-rose-600/50",
            select: false,
            type: "pc",
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202405/2921/05a08ddb076656e71324f6d578bdbaa16c8925ab01dc3046.png"
        },
        {
            id: 5,
            name: "Far Cry 6 Gameplay",
            bgColor: "bg-amber-500/50",
            select: false,
            type: "play",
            image: "https://i.ytimg.com/vi/19LjHGDxl0Q/maxresdefault.jpg"
        },
    ])


    const [ids, setIds] = useState([1, 2, 3, 4, 5])
    const change = (dir: "left" | "right") => {
        let ar: any = [...ids]
        if (dir == "right")
            ar.push(ar.shift());
        else
            ar.unshift(ar.pop());
        setIds(ar)
    }
    return (
        <div className='flex justify-cente   mt-2 items-center  flex-col overflow-hidden relative'>
            
            {
                items.map((el, i) => {
                    let isFirst = el.id == ids[0]
                    return <div className={`absolute transition-all duration-700 inset-0 ${isFirst?"opacity-20":"opacity-0"}  bg-center bg-cover bg-no-repeat`} style={{
                        backgroundImage: `url('${items[ids[0] - 1].image}')`
                    }}></div>
                })
            }
            <div className='relative  w-56 h-[375px] mt-12 z-0 '>
                {
                    items.map((el, i) => {
                        let isLast = el.id == ids[4]
                        let isFirst = el.id == ids[0]
                        let index = ids.indexOf(el.id)
                        return <div className='w-56 flex transition-all ease-in-out duration-700 overflow-hidden  rounded-2xl top-8 left-0 flex-col gap-5 absolute p-3 bg-gradient-to-b  from-green-950 shadow-2xl  shadow-white to-primary' style={{
                            transform: `translateY(${isLast ? "100%" : (-index * 25) + "px"}) scale(${1 - (index * 0.05)}) rotate(${index * 3}deg)`,
                            zIndex: 100 - index,
                            opacity: 1 - (index * 0.18)
                        }}>
                            <div className="absolute inset-0 blur-sm opacity-40 bg-center bg-cover bg-no-repeat" style={{
                                backgroundImage: `url('${el.image}')`
                            }}></div>
                            <div className="flex justify-between relative">
                                {el.type == "play" ? <FaPlaystation className='w-4 h-4 text-white' /> :
                                    <MdLaptopChromebook className='w-4 h-4 text-white' />}
                                <div className="w-6 h-6 text-white  rounded-full flex items-center justify-center">
                                    <MdArrowOutward className='w-4 h-4' />
                                </div>
                            </div>
                            <h1 className={`text-xl relative px-4 text-center transition-all duration-700  ${isFirst ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"} leading-6 h-[48px] text-white  text-center line-clamp-2`}>
                                {el.name}
                            </h1>
                            <div className={`relative shadow-md pt-[100%] ease-in-out overflow-hidden bg-white rounded-full duration-700 transition-all ${isFirst ? "translate-y-0 scale-100 opacity-100" : "translate-y-1/4 scale-90 opacity-0"}`}>
                                <div className="absolute inset-0 bg-center bg-cover bg-no-repeat  opacity-90" style={{
                                    backgroundImage: `url('${el.image}')`
                                }}></div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="flex justify-center mt-0  backdrop-blur-sm bg-gradient-to-b from-transparent  to-white/70 gap-5 relative   w-full py-6">
                <Button onClick={() => change("left")} isIconOnly radius='full' className='text-primary border-1 border-dashed border-primary bg-primary-50 hover:bg-primary hover:text-white' color='primary' size='md'>
                    <IoArrowBack className='w-4 h-4' />
                </Button>
                <Button onClick={() => change("right")} isIconOnly radius='full' className='text-primary border-1 border-dashed border-primary bg-primary-50 hover:bg-primary hover:text-white' color='primary' size='md'>
                    <IoArrowForward className='w-4 h-4' />
                </Button>
            </div>
        </div>
    )
}
