import { Button, Card, Chip } from "@nextui-org/react";
import { useState } from "react";
import { FaBehance, FaDribbble, FaGoogle, FaInstagram } from "react-icons/fa6";
import { IoList } from "react-icons/io5";


export default function ListAnimation() {
    const [open, setOpen] = useState(true)
    return (
        <div className="flex items-center justify-center  py-14 h-full bg-[#DFD8D8]">
            <Card className="h-[228px] w-[228px]  bg-[#F0F0F0] shadow-none">
                <div className="h-[54px] flex items-center px-2 justify-between">
                    <Button className="" size="sm" isIconOnly onClick={() => setOpen(!open)}>
                        <IoList />
                    </Button>
                </div>
                <div className="flex mx-3  grow flex-col gap-1 relative">
                    {
                        [
                            {
                                icon: FaDribbble,
                                name: "Dribbble",
                                price: "227.323$",
                                pers: "43%",

                            },
                            {
                                icon: FaInstagram,
                                name: "Instagram",
                                price: "150.543$",
                                pers: "27%",

                            },
                            {
                                icon: FaBehance,
                                name: "Behance",
                                price: "92.345$",
                                pers: "11%",

                            },
                            {
                                icon: FaGoogle,
                                name: "Google",
                                price: "45.943$",
                                pers: "7%",

                            }
                        ].map((el, i) => {
                            return <div className={"transition-all bg-content1 flex items-center  rounded-xl h-[38px] absolute w-full"}
                                style={
                                    open ? {
                                        left: 0,
                                        top: (i * 41) + "px",
                                        maxWidth:"100%"
                                    } : {
                                        top: 0,
                                        left: (i * 52) + "px",
                                        maxWidth:"48px",
                                    }
                                }>
                                <div className="w-[38px] transition-all h-[38px]  flex items-center justify-center" style={
                                    open ? {
                                    } : {
                                        width:"48px",
                                        height:"48px"
                                    }
                                }>
                                    <el.icon className="" />
                                </div>
                                <div className="grow flex transition-all  gap-2 max-w-full overflow-hidden items-center pe-1" style={
                                    open?{}:{
                                        maxWidth:"0",
                                        opacity:0
                                    }
                                }>
                                    <span className="text-[10px] font-medium text-foreground-500">
                                        {el.name}
                                    </span>
                                    <div className="grow"></div>
                                    <span className="text-[10px] font-semibold text-foreground-700">
                                        {el.price}
                                    </span>
                                    <Chip size="sm" className="p-0 min-w-8 text-center text-[10px]">
                                        {el.pers}
                                    </Chip>
                                </div>

                            </div>
                        })
                    }
                </div>
            </Card>
        </div>
    )
}
