import { Card } from '@nextui-org/react'

import SliderCustom from './slider-custom'
import ProfileCardEffects from './profile-card-effect'
import GalleryAnimation from './gallery-animation'
import Plan from './plan'
import Swiper1 from './swiper1'
import ListAnimation from './list-animation'
import DatePicker from './Datepicker'

export default function MacWindow() {
    return (
        <Card className=' my-6  relative min-h-96 p-  '>
            <div className="flex gap-2 p-4">
                {
                    ["#fe5f57", "#febc2e", "#28c840"].map(el => (
                        <div className={`w-4 h-4 rounded-full `} style={{
                            backgroundColor: el
                        }} key={el}></div>
                    ))
                }
            </div>
            <div>
                <div className=' px- min-w-[560px]'>
                    {/* <SliderCustom /> */}
                    <ProfileCardEffects />
                    {/* <GalleryAnimation /> */}
                    {/* <div className="m-4"><Plan /></div> */}
                    {/* <Swiper1/> */}
                    {/* <ListAnimation /> */}
                    {/* <DatePicker /> */}
                </div>
            </div>
        </Card>
    )
}
