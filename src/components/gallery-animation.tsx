import { Avatar, Card } from '@nextui-org/react'
import React, { useState } from 'react'
import { FaPlaystation } from 'react-icons/fa'
import { MdLaptopChromebook } from 'react-icons/md'

export default function GalleryAnimation() {
    const [items, setItems] = useState([
        {
            name: "Devil May Cry 5",
            bgColor: "bg-orange-600/50",
            select: true,
            type: "pc",
            image: "https://helios-i.mashable.com/imagery/articles/056ABnGrTvBE3vLZzglQ5F3/hero-image.fill.size_1200x900.v1623383987.jpg"
        },
        {
            name: "GTA 5  Xbox",
            bgColor: "bg-lime-600/50",
            select: false,
            type: "play",
            image: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/19571008/cxvw3qhv2qgvf71rjedb.jpg?quality=90&strip=all&crop=2.9761904761905,0,94.047619047619,100"
        },
        {
            name: "Red dead shop redemption",
            bgColor: "bg-cyan-500/50",
            select: false,
            type: "pc",
            image: "https://gaming-cdn.com/images/products/5679/screenshot/red-dead-redemption-2-pc-game-rockstar-wallpaper-3.jpg"
        },
        {
            name: "Call of Duty: Black Ops 6",
            bgColor: "bg-rose-600/50",
            select: false,
            type: "pc",
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202405/2921/05a08ddb076656e71324f6d578bdbaa16c8925ab01dc3046.png"
        },
        {
            name: "Far Cry 6 Gameplay",
            bgColor: "bg-amber-500/50",
            select: false,
            type: "play",
            image: "https://i.ytimg.com/vi/19LjHGDxl0Q/maxresdefault.jpg"
        },
    ])
    return (
        <div className='flex min-w-[480px] gap-[5px] w-full '>
            {
                items.map((el, k) => {
                    return <div   onClick={() => {

                        setItems(items.map((item, index) => {
                            return { ...item, select: index == k }
                        }))
                    }} className={`${el.select ? "w-[60%]" : "w-[10%]"} h-80 overflow-hidden relative rounded-lg bg-center bg-no-repeat bg-cover
                    shadow-[0_0_50px_0_#0003_inset] !transition-all duration-300 cursor-pointer  flex flex-col justify-end p-[8px]
                    
                     `}
                        style={{
                            backgroundImage: `url('${el.image}')`
                        }}>
                        <div className={`transition-background  absolute inset-0 ${el.select ? "bg-transparent" : "bg-black/40"}`}>
                        <div className={`absolute inset-0 transition-all duration-1000 bg-gradient-to-b from-transparent 
                            to-black/40 ${el.select ? "translate-y-0" : "translate-y-full"}`}>

                        </div>
                        </div>
                        <div className={`h-7 w-7 flex justify-center items-center relative transition-all duration-500 rounded-lg ${el.select?"bg-content1 text-primary":"bg-content1/5 text-white"}`}>
                            {el.type=="play"?<FaPlaystation className='w-4 h-4 text-inherit'/>:
                            <MdLaptopChromebook className='w-4 h-4 text-inherit'/>}
                            <div className={`absolute text-sm whitespace-nowrap text-white top-1/2    -translate-y-1/2 tracking-wider left-full pl-3  font-bold`}>
                                {[...el.name].map((item,t)=>{
                                    return <span key={item+t} className={`transition-all duration-400 `}
                                    style={{
                                        transitionDelay:t*15+"ms",
                                        opacity:el.select ?"1":"0",
                                        transform:`translateY(${el.select?0:100}px)`
                                    }}>
                                        {item}
                                    </span>
                                })}
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
