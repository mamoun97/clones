import { Avatar, Button, Card, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image, Tab, Tabs } from '@nextui-org/react'
import { Fragment } from 'react'
import { FaFire, FaHeart } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { course } from '../../data/course'
import { GoLock } from 'react-icons/go'
import { MdBookmarks } from 'react-icons/md'
import { HiLocationMarker } from 'react-icons/hi'

export default function Profile({ className = "" }: { className?: string }) {
    return (
        <div className={'flex flex-col gap-3 ' + className}>
            <div className={`h-36 relative rounded-2xl shadow-md  bg-cover bg-no-repeat bg-center`} style={{
                backgroundImage: `url("https://media.sproutsocial.com/uploads/3a_facebook-cover-photo_labels@2x-1.png")`
            }}>
                <Avatar
                    size='lg'
                    radius='lg'
                    className='absolute left-6 rtl:right-6 rtl:left-[initial] bottom-0 translate-y-1/4 border-3 border-content2'
                    src='https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png'
                />
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="">
                    <h1 className='text-2xl  font-bold flex gap-1'>
                        <FaFire className='text-rose-600' />
                        Mamoun dev</h1>
                    <p className='text-sm text-foreground-400 flex gap-3'>
                        <span>Frontend developer</span>
                        <span className='flex items-center gap-1'>
                            <HiLocationMarker />
                            Algeria
                        </span>
                    </p>
                </div>
                <Card className='shadow-sm flex-row items-center gap-2 p-2 px-4'>
                    {
                        [
                            {
                                icon: <FaFire className='text-foreground-400' />,
                                name: "Subscribers",
                                number: 3200
                            },
                            {
                                icon: <FaFire className='text-foreground-400' />,
                                name: "Posts",
                                number: 34
                            },
                            {
                                icon: <FaFire className='text-foreground-400' />,
                                name: "Likes",
                                number: 1423
                            },
                        ].map((el, k) => {
                            return <Fragment key={k}>
                                <div className="flex items-center gap-2 grow">
                                    {el.icon}
                                    <div className='flex flex-col leading-[14px] gap-1'>
                                        <span className='font-bold'>{el.number}</span>
                                        <span className='text-sm text-foreground-400'>{el.name}</span>
                                    </div>
                                </div>
                                {k < 2 && <div className='w-[1px] bg-content2 h-5/6'></div>}
                            </Fragment>
                        })
                    }
                </Card>
            </div>
            <div className="flex items-center justify-between">
                <Tabs variant='solid' color='default' classNames={{
                    tabList: "  bg-content1 shadow dark:bg-content3",
                    cursor: "bg-content3 font-bold dark:bg-content1",
                    // cursor: "bg-foreground-300  font-bold dark:bg-content4",
                    // tabContent:"pb-2"
                }}>
                    <Tab key="a" title="Posts" />
                    <Tab key="m" title="Goals" />
                    <Tab key="y" title={
                        <div className='flex items-center gap-1'>
                            Comminuty
                            <span className='text-white text-[10px] p-[0px] px-2 rounded-md bg-primary'>
                                3
                            </span>
                        </div>
                    } />
                    <Tab key="s" title="Courses" />
                </Tabs>
                <div className='flex gap-1 items-center'>
                    <span className='text-foreground-600 text-sm'>
                        Sort by :
                    </span>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button color="default" variant='flat' size='sm'>
                                Most Popular
                                <IoIosArrowDown />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="new">Most</DropdownItem>

                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <div className="grid grid-cols-3 max-md:grid-cols-2 gap-2">
                {
                    course.map(el => {
                        return <Card  className='p-2 rounded-2xl bg-content1 shadow-sm   gap-1'>
                            <div className='relative rounded-lg overflow-hidden'>
                                <Image
                                    isBlurred
                                    alt="Card background"
                                    className="object-cover h-40 rounded-lg z-0 relative"
                                    src={el.image}
                                    width={"100%"}
                                />
                                {
                                    el.isLock && <div className='absolute inset-0 bg-white/40 flex items-center justify-center'>
                                        <Button color="default" size='sm' radius='full' className='bg-black/70 text-white '>
                                            <GoLock className='w-4 h-4' />
                                            Locked
                                        </Button>
                                    </div>
                                }
                                {
                                    el.isPremium && <div className='absolute inset-0  flex  justify-end p-2'>

                                        <Chip color="warning" size='sm'>Premium</Chip>
                                    </div>
                                }
                            </div>
                            <div className='flex flex-col gap-1 p-2 w-full'>
                                <div className='flex items-center justify-between'>
                                    <h1 className='font-semibold line-clamp-1'>{el.title}</h1>
                                    <span className='text-foreground-400 text-xs whitespace-nowrap'>1 day</span>
                                </div>
                                <p className='text-foreground-500 text-xs line-clamp-2'>
                                    {el.description}
                                </p>
                                <div className="flex gap-1 text-foreground-400 items-center mt-2">
                                    <FaHeart />
                                    <span className='text-xs'>{el.likes} Likes</span>
                                    <span className='me-2'></span>
                                    <MdBookmarks />
                                    <span className='text-xs'>{el.saves} Saved</span>
                                </div>
                            </div>
                        </Card>
                    })
                }
            </div>
        </div>
    )
}

