import { Button, Card, Input } from "@nextui-org/react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdRemove } from "react-icons/md";
import { PiCurrencyDollarSimple } from "react-icons/pi";


export default function RightContent({className=""}:{className?:string}) {
    return (
        <div className={className}>
            <h1 className="text-base mb-2 font-semibold">
                Donate
            </h1>
            <Card className="p-2 bg-content3 shadow-none gap-2">
                <div className="flex gap-2">
                    <Input
                        type="text"
                        label=""
                        placeholder=""
                        value={"3.00"}
                        labelPlacement="outside"
                        className='grow'
                        startContent={
                            <PiCurrencyDollarSimple />
                        }
                    />
                    <Button isIconOnly color="default" className="dark:bg-black bg-foreground-700 text-white">
                        <MdRemove />
                    </Button>
                    <Button isIconOnly color="default" className="dark:bg-black bg-foreground-700 text-white">
                        <AiOutlinePlus />
                    </Button>
                </div>
                <Input
                    type="text"
                    label=""
                    placeholder="Your name"
                    labelPlacement="outside"
                />
                <Input
                    type="text"
                    label=""
                    placeholder="Add message"
                    labelPlacement="outside"
                />
                <Button fullWidth color="default" className=" font-semibold bg-content4">
                    Donate 3.00
                    <PiCurrencyDollarSimple />
                </Button>

            </Card>
            <h1 className="text-base mb-2 font-semibold mt-4">
                Subscription tier
            </h1>
            <Card className="bg-content3 shadow-none gap-2 p-4 ">
                <div className="flex justify-between">
                    <h1 className="text-lg font-semibold">
                        Basic
                    </h1>
                    <h1 className="text-2xl font-semibold flex items-center gap-1">
                        <span>
                            4$
                        </span>
                        <span className="text-sm text-foreground-400">
                            / mth
                        </span>
                    </h1>
                </div>
                <div className="text-sm opacity-70 font-medium">
                    <p>What's included:</p>
                    <ul className="list-disc list-inside">
                        <li >Access to primeum posts.</li>
                        <li>One free course</li>
                    </ul>
                </div>
                <Button fullWidth color="default" className="bg-content1 font-semibold">
                    You are subscribed
                </Button>
            </Card>
            <Card className="bg-violet-950 dark:bg-violet-800 text-white  mt-2 shadow-none gap-2 p-4 ">
                <div className="flex justify-between">
                    <h1 className="text-lg font-semibold">
                        Advenced
                    </h1>
                    <h1 className="text-2xl font-semibold flex items-center gap-1">
                        <span>
                            8$
                        </span>
                        <span className="text-sm text-foreground-500">
                            / mth
                        </span>
                    </h1>
                </div>
                <div className="text-sm opacity-70 font-medium">
                    <p>What's included:</p>
                    <ul className="list-disc list-inside">
                        <li >Access to primeum posts.</li>
                        <li>All free course</li>
                    </ul>
                </div>
                <Button fullWidth color="secondary">
                    Subscribe
                </Button>
            </Card>
        </div>
    )
}
