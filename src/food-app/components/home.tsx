import { Badge, Button, Card, Input, User } from "@nextui-org/react";
import { MdNotifications } from "react-icons/md";
import { RiNotification2Line, RiSearch2Fill, RiSearch2Line } from "react-icons/ri";
import images from "../../assets";
import { GoHeart } from "react-icons/go";


export default function Home() {
    return (
        <div className="w-full  h-full no-scrollbar  gap-4 justify-start overflow-auto">
            <div className=" flex p-4  justify-between bg-content1 relative w-full items-center">
                <User
                    name="Mamoun ben"
                    description="a cook"
                    avatarProps={{
                        src: images.p2
                    }}
                    classNames={{
                        name: "font-semibold"
                    }}
                />
                <Badge content="" color="primary" shape="circle" placement="top-right">
                    <Button isIconOnly color="default" variant="flat">
                        <RiNotification2Line className="w-5 h-5" />
                    </Button>
                </Badge>
            </div>
            <div className="flex flex-col gap-2 p-4">
                <h1 className="text-xl font-medium leading-6 max-w-[70%] ">
                    What do you want to cook today?
                </h1>

                <Input
                    label=""
                    type="search"
                    classNames={{
                        input: "!bg-content1",
                        inputWrapper: "!bg-content1"

                    }}
                    startContent={
                        <RiSearch2Line className="text-primary  w-5 h-5" />
                    }
                />
                <Card className="p-4 h-44 relative rounded-2xl bg-no-repeat bg-cover bg-center shadow-none" style={{
                    backgroundImage: `url('https://canadianfoodfocus.org/wp-content/uploads/2021/03/cultural-cuisine.jpg')`
                }} >
                    <div className="absolute items-start bg-black/70 text-white inset-0 p-4 flex flex-col justify-center gap-2">
                        <h1 className="text-lg font-semibold opacity-95">New Recipe</h1>
                        <p className=" opacity-95 max-w-[60%] text-sm">
                            When you order 20$
                            Automatically applied
                        </p>
                        <Button color="default" size="sm" radius="full" variant="solid" className="text-primary bg-content2 dark:bg-foreground-800  font-semibold">
                            Order Now
                        </Button>
                    </div>

                </Card>

                <Card className="p-4 py-6 gap-2 grid grid-cols-4 h-auto shadow-none rounded-2xl">
                    {
                        [
                            {
                                name: "bibimbap",
                                icon: images.food_bibimbap
                            },
                            {
                                name: "biryani",
                                icon: images.food_biryani
                            },
                            {
                                name: "diet",
                                icon: images.food_diet
                            },
                            {
                                name: "drink",
                                icon: images.food_drink
                            },
                            {
                                name: "hamburger",
                                icon: images.food_hamburger
                            },
                            {
                                name: "lunch time",
                                icon: images.food_lunch_time
                            },
                            {
                                name: "pizza",
                                icon: images.food_pizza
                            },
                            {
                                name: "ramen",
                                icon: images.food_ramen
                            }
                        ].map(el => {
                            return <div className="flex items-center justify-center gap-1 flex-col">
                                <img src={el.icon} className="w-7 h-7" alt="" />
                                <span className="whitespace-nowrap text-xs text-foreground-600">{el.name}</span>
                            </div>
                        })
                    }

                </Card>

                <div className="grid grid-cols-2 gap-2 ">
                    {
                        [
                            {
                                image: "https://static01.nyt.com/images/2024/01/22/multimedia/22EggsKejriwal-rex-jpwt/22EggsKejriwal-rex-jpwt-superJumbo.jpg",
                                name: "Egg and cheese Sandwich"
                            },
                            {
                                image: "https://saltedmint.com/wp-content/uploads/2024/02/Shakshuka-Eggs-2.jpg",
                                name: "Egg and cheese Sandwich"
                            }
                        ].map(el => {
                            return <Card className="bg-center h-52 bg-cover bg-no-repeat" style={{
                                backgroundImage: `url('${el.image}')`
                            }}>
                                <div className="h-full bg-black/50 p-2 flex justify-between flex-col">
                                    <div className="flex justify-between">
                                        <Button size="sm" className="bg-black/50 text-white" radius="full">
                                            Breakfast
                                        </Button>
                                        <Button size="sm" isIconOnly className="bg-black/50 text-white" radius="full">
                                            <GoHeart className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="text-white">
                                        <h1 className="text-sm font-semibold">{el.name}</h1>
                                        <p className="text-xs opacity-60">by Mamoun ben</p>
                                    </div>
                                </div>

                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
