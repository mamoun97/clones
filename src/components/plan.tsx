import { Button, Card, Divider, Tab, Tabs } from '@nextui-org/react'
import { BsBox } from 'react-icons/bs'
import { MdCheck } from 'react-icons/md'
import { PiCrownLight, PiCrownSimple } from 'react-icons/pi'
import { TbDiamond } from 'react-icons/tb'


export default function Plan() {
    return (
        <div>
            <div className="flex items-center justify-center flex-col text-center gap-2 ">
                <p className='text-xs font-semibold text-secondary'>
                    Pricing
                </p>
                <h1 className='text-2xl font-bold text-foreground-700'>
                    Choose the Plan That Best Fits Your Needs
                </h1>
                <p className='text-sm max-w-2xl text-foreground-500'>
                    Our CRM affers a range of plans to cater to different business sizes and requirements. All plans include Al-powered features to streamline your workflows and boost productivity.
                </p>

            </div>
            <div className="flex justify-center my-4 mt-6">
                <Tabs variant='bordered' color='secondary' classNames={{
                    tabList: " border border-content4"
                }}>
                    <Tab key="m" title="Monthly" />
                    <Tab key="y" title={
                        <div className='flex items-center gap-1'>
                            Yearly
                            <span className='text-foreground-500 text-[10px] p-[0px] px-2 rounded-md bg-content3'>
                                Popular
                            </span>
                        </div>
                    } />
                </Tabs>
            </div>
            <div className="grid grid-cols-4 gap-3 w-full  max-w-[1400px]">
                {
                    data.map((el, k) => {
                        return <div className='bg-secondary/65 dark:bg-secondary/10 rounded-2xl group' key={k}>
                            <Card isPressable className={`p-4 w-full gap-3 group-hover:border-secondary  group-hover:-rotate-2 group-hover:-translate-y-2  min-w-56 border-1 shadow-sm border-content4 ${el.isPopular ? "bg-secondary-50 border-secondary" : ""}`}>
                                <div className='border flex items-center justify-center h-10 w-10 rounded-lg border-content4 text-secondary'>
                                    {el.icon}
                                </div>
                                <h1 className={`text-sm flex items-center gap-2 font-semibold ${el.isPopular ? "text-secondary" : ""}`}>
                                    {el.name}
                                    {
                                        el.isPopular && <span className='text-secondary text-[10px] p-[0px] px-2 rounded-md bg-secondary/10'>
                                            Popular
                                        </span>
                                    }
                                </h1>
                                <div className={`flex items-end ${el.isPopular ? "text-secondary" : ""}`}>
                                    <span className='text-4xl font-bold'>
                                        {el.price}
                                    </span>
                                    <span className='text-xs'>
                                        {el.period}
                                    </span>
                                </div>
                                <p className='text-foreground-400 text-xs'>{el.team}</p>
                                <Button variant={el.isPopular ? "solid" : 'bordered'} className={`border ${!el.isPopular ? "border-foreground-300" : "border-secondary"} `} color='secondary' fullWidth>
                                    {el.btnText}
                                </Button>
                                <Divider className={`my-2 ${el.isPopular ? "bg-secondary-200" : "bg-foreground-200"}`} />
                                <ul className='flex flex-col gap-[5px]'>
                                    {
                                        el.features.map((item, index) => {
                                            return <li className='flex gap-2 text-sm '>
                                                <MdCheck className='text-secondary text-lg' />
                                                <span className='text-foreground-600'>{item}</span>
                                            </li>
                                        })
                                    }
                                </ul>
                            </Card>
                        </div>
                    })
                }

            </div>
        </div>
    )
}


const data = [
    {
        icon: <BsBox className='w-6 h-6' />,
        "name": "Starter",
        "price": "$49",
        "period": "per month",
        "team": "Small teams",
        "btnText": "Get Started",
        "features": [
            "Up to 3 users",
            "Basic CRM features",
            "Email support",
            "AI insights",
            "Mobile access"
        ]
    },
    {
        icon: <PiCrownSimple className='w-6 h-6' />,
        "name": "Professional",
        "price": "$99",
        "period": "per month",
        "team": "Growing teams",
        "btnText": "Get Started",
        "features": [
            "Up to 10 users",
            "Advanced CRM features",
            "Priority support",
            "AI insights",
            "Mobile access"
        ],
        isPopular: true,
    },
    {
        icon: <TbDiamond className='w-6 h-6' />,
        "name": "Business",
        "price": "$179",
        "period": "per month",
        "team": "Established buisinesses",
        "btnText": "Get Started",
        "features": [
            "Up to 50 users",
            "All CRM features",
            "Dedicated support",
            "AI insights",
            "Mobile access"
        ]
    },
    {
        icon: <PiCrownLight className='w-6 h-6' />,
        "name": "Enterprise",
        "price": "Custom",
        "team": "Large enterprises",
        "btnText": "Contact Us",
        "features": [
            "Unlimited users",
            "Custom CRM features",
            "24/7 support",
            "AI insights",
            "Mobile access"
        ]
    }
]
