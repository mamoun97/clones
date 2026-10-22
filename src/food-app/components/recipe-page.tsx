import { Button, Card } from '@nextui-org/react'
import { FaFireFlameCurved } from 'react-icons/fa6'
import { ImStatsBars2 } from 'react-icons/im'
import { MdOutlineAccessTime } from 'react-icons/md'
import images from '../../assets'
import { IoIosArrowBack, IoMdShare } from 'react-icons/io'
import { GoHeart } from 'react-icons/go'
import { HiMiniPlay } from 'react-icons/hi2'

export default function RecipePage() {
    return (
        <div className='h-full flex relative justify-between flex-col ' >
            <div className="absolute inset-0  bg-contain bg-no-repeat -translate-y-20" style={{
            backgroundImage: `url('https://occ-0-7995-778.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABayYu8W-vYLw0SmbQRQCFQloyqI2wARzEYBTBbQypghYLUGIhaV3iCHqTJozJvSN_Yd3y-05zIpq8ZfTd-devSakICaI6r5CXP_eoWSpcy_ihXWJmdPpmUQROo53f864E-q9eg.webp?r=1f9')`
        }}></div>
            <div className='flex justify-between p-4 relative'>
                <Button isIconOnly color='default' variant='flat' className='dark:bg-content1/70 text-white' radius='full' >
                    <IoIosArrowBack className='w-5 h-5' />
                </Button>
                <Button isIconOnly color='default' variant='flat' className='dark:bg-content1/70 text-white' radius='full' >
                    <GoHeart className='w-5 h-5' />
                </Button>
            </div>
            <Card className='p-4 py-6 pt-1  rounded-2xl rounded-b-none overflow-visible gap-1 relative'>
                <div className="absolute bottom-full flex justify-end p-4 w-full left-0">
                <IoMdShare className='w-6 h-6 text-white' />
                </div>
                <div className="flex justify-center my-3 ">
                    <div className="h-1 w-12 rounded-full bg-content3"></div>
                </div>
                <div className='flex items-center'>
                    <div className="grow">
                        <h1 className="text-lg font-semibold">Egg and cheese Sandwich</h1>
                        <p className="text-xs opacity-60 mt-1">by Mamoun ben</p>
                    </div>
                    <Button isIconOnly color='primary' radius='full' >
                        <HiMiniPlay />
                    </Button>
                </div>
                <div className="flex items-center gap-2 text-sm mt-2">
                    <MdOutlineAccessTime className='text-primary' />
                    <span>10 min</span>
                    <ImStatsBars2 className='text-success' />
                    <span>Medium</span>
                    <FaFireFlameCurved className='text-warning' />
                    <span>512 cal</span>
                </div>
                <h1 className="text-sm font-semibold mt-2">Description</h1>
                <p className='text-xs text-foreground-400'>
                    To make a simple and delicious egg and cheese sandwich, start by cooking an egg (scrambled, fried, or poached) seasoned to your taste.
                    While the egg cooks, toast {/* two slices of bread or an English muffin until lightly golden. Place a slice of cheese on the bread, add the cooked egg, and include optional toppings like spinach, avocado, or bacon if desired. Assemble the sandwich, warm it briefly to melt the cheese if needed, and enjoy a hearty meal! */}
                    <span className='text-[13px] font-semibold text-foreground-700 ms-1'>Read More</span>
                </p>
                <h1 className="text-sm font-semibold mt-2">Ingredients</h1>
                <div className='flex flex-col gap-1'>
                    {
                        [
                            {
                                name: "1 tablespoon olive oil",
                                icon: images.food_olive
                            },
                            {
                                name: "4 large eggs",
                                icon: images.food_eggs
                            },
                            {
                                name: "Salsa",
                                icon: images.food_salsa
                            },
                        ].map(el => {
                            return <Card className='p-2 flex-row gap-2 rounded-lg shadow-none bg-content2'>
                                <img src={el.icon} alt="" className='h-6 w-6' />
                                <span className='text-sm'>{el.name}</span>
                            </Card>
                        })
                    }
                </div>
            </Card>

        </div>
    )
}
