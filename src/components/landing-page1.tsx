import { Avatar, Button, Card } from "@nextui-org/react";
import { FaApple, FaFire } from "react-icons/fa";
import { GoStar } from "react-icons/go";
import { MdArrowForwardIos, MdSelectAll } from "react-icons/md";
import { TbCircleArrowRight, TbNorthStar, TbPlant2, TbSettingsFilled } from "react-icons/tb";
import { Fragment } from "react/jsx-runtime";

export default function LandingPage1() {
    return (
        <div className="h-screen flex flex-col w-full max-w-5xl py-6">
            <Card className="p-2 px-4 shadow-none max-w-3xl m-auto border w-full  border-content4 flex-row  items-center justify-between">
                <span className="text-lg font-extrabold">
                    SyncSync
                </span>
                <ul className="flex items-center text-base font-medium gap-3">
                    <li>Features </li>
                    <li>Pricing </li>
                    <li>About </li>
                    <li>Blog </li>
                    <li>Contact </li>

                </ul>
                <Button variant="flat" className="font-semibold" endContent={<FaApple className="w-4 h-4"/>}>
                    Download For ios
                </Button>
            </Card>
            <div className="grow flex w-full  ">
                <div className="h-full flex flex-col justify-around ">
                    <IconBg className="rotate-[30deg] shadow-blue-400 from-blue-400 to-blue-700">
                        <FaFire className="w-8 h-8 text-white" />
                    </IconBg>
                    <IconBg className="rotate-[-30deg] shadow-green-400 from-green-600 to-green-800 ">
                        <TbPlant2 className="w-8 h-8 text-white" />
                    </IconBg>
                </div>
                <div className="grow flex gap-6 flex-col items-center justify-center">
                    <div className="p-1 text-xs flex gap-2 items-center">
                        <div className="flex items-center">
                            <Avatar className="w-6 h-6 border border-white " src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <Avatar className="w-6 h-6 border border-white -ms-2" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                            <Avatar className="w-6 h-6 border border-white -ms-2" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                        </div>
                        <span className="text-xs text-foreground-500">200+ Businesses Scaled</span>
                    </div>
                    <h1 className="text-center text-6xl font-semibold max-w-2xl leading-[70px]">
                        Power Up Your Workflow
                    </h1>
                    <p className="text-center max-w-xl text-foreground-500">
                        Discover A Powerful Tool Designed To Streamline Your Tasks, Enhance Collaboration, And Drive Efficiency
                    </p>
                    <Button endContent={
                        <MdArrowForwardIos />
                    } className="bg-gradient-to-b  shadow-2xl from-foreground-500 to-foreground-900 text-content2 font-semibold">
                        Learn More
                    </Button>
                </div>
                <div className="h-full flex flex-col justify-around">
                    <IconBg className="rotate-[-30deg] from-content3 shadow-content3 to-content4 " >
                        <TbNorthStar className="w-8 h-8  " />
                    </IconBg>
                    <IconBg className="rotate-[30deg] shadow-orange-300 from-orange-200 via-orange-600 to-violet-600">
                        <TbSettingsFilled className="w-8 h-8 text-white " />
                    </IconBg>
                </div>
            </div>
            <div className="flex justify-center gap-3">
                {
                    items.map((el, k) => {
                        return <Fragment>
                            <div key={k} className="flex gap-2 text-center items-center  max-w-60 flex-col">

                                <div className="p-1 px-6 rounded-full border border-content3">
                                    <el.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h1>{el.label}</h1>
                                    <p className="text-xs mt-2 text-foreground-500">{el.desc}</p>
                                </div>
                            </div>
                            {
                                k < 2 && <div className="h-5/6 bg-content2 w-[2px]"></div>
                            }
                        </Fragment>
                    })
                }
            </div>
        </div >
    )
}

function IconBg({ className = "", children }: { className?: string, children: React.ReactNode }) {
    return <div className={" w-14 h-14 bg-gradient-to-br  shadow-2xl rounded-[20px] flex items-center justify-center " + className}>
        {children}
    </div>
}
const items = [
    {
        icon: TbCircleArrowRight,
        label: "Efficiency",
        desc: "Reduce Manual Effort With Automated Workflows"
    },
    {
        icon: GoStar,
        label: "Collaboration",
        desc: "Work Together Seamlessly, No Matter Where Your Team Is Located"
    },
    {
        icon: MdSelectAll,
        label: "Scalability",
        desc: "Our Platform Grows With Your Business"
    },
]


