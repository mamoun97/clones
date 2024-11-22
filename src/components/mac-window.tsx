import { Card } from '@nextui-org/react'

import SliderCustom from './slider-custom'
import ProfileCardEffects from './profile-card-effect'
import GalleryAnimation from './gallery-animation'

export default function MacWindow() {
    return (
        <Card className='max-w-3xl my-6  relative min-h-96 p-4  '>
            <div className="flex gap-2">
                {
                    ["#fe5f57", "#febc2e", "#28c840"].map(el => (
                        <div className={`w-4 h-4 rounded-full `} style={{
                            backgroundColor: el
                        }} key={el}></div>
                    ))
                }
            </div>
            <div>
                <div className='my-10 p-6'>
                    {/* <SliderCustom /> */}
                    {/* <ProfileCardEffects /> */}
                    <GalleryAnimation />
                </div>
            </div>
        </Card>
    )
}
