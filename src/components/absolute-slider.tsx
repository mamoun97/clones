import React, { useRef, useState } from 'react'
import Divbg from './divbg'
import { Button } from '@nextui-org/react'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'

export default function AbsoluteSlider() {
    const [items, setItems] = useState(Array(20).fill([
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
    ]).flat())
    const refs=items.map(_=>useRef<HTMLDivElement>(null))


    const [ids, setIds] = useState(items.map((_,k)=>k+1))
    const change = (dir: "left" | "right") => {
        let ar: any = [...ids]
        if (dir == "right")
            ar.push(ar.shift());
        else
            ar.unshift(ar.pop());
        setIds(ar)
    }
    return (
        <div className='h-screen flex flex-col justify-end   overflow-hidden w-screen relative'>


            {
                items.map((el, i) => {
                    
                    let isLast = el.id == ids[4]
                    let isFirst = el.id == ids[0]
                    let index = ids.indexOf(el.id)

                    return <div
                        className='w-32 h-44 transition-all bg-center bg-cover bg-no-repeat duration-700 absolute bottom-20  rounded-xl'
                       
                        ref={refs[i]}
                        style={
                            {
                                ...(isFirst||isLast) && {
                                    left: 0,
                                    bottom: 0,
                                    width: "100%",
                                    height: "100%",
                                    zIndex: isFirst?30:20,

                                } || {
                                    left: (600 + 134 * ids[i]) + "px",
                                    width: "128px",
                                    height: "176px",
                                    zIndex: 100 + index,
                                },
                                backgroundImage:`url('${el.image}')`
                            }}
                    >

                    </div>
                })
            }
            <div className="flex  justify-center mt-0 z-[1000]   gap-5 absolute bottom-0 left-0   w-full py-6">
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
