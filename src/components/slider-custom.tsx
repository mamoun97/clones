
"use client"
import React from "react";
import { Slider } from "@nextui-org/react";
const tab = [
    32, 50, 14, 55, 27,
    11, 45, 18, 38, 24,
    41, 20, 29, 52, 13,
    35, 22, 49, 12, 33,
    42, 47, 15, 28, 30,
];
export default function SliderCustom() {
    const [value, setValue] = React.useState<any>([0, 100]);
    return (
        <div className="flex  justify-center ">
            <div className="w-full max-w-80 ">
                <div className="h-16  mb-4 flex gap-2
                 justify-between items-end">
                    {
                        tab.map((height, index) => {
                            let i = index * 4
                            return <div className="w-[4px] flex
                             items-end 
                            rounded-[3px]  bg-content3" style={{
                                height: height + "px"
                            }}>
                                <div className="bg-primary h-0 
                                transition-height 
                                ease-in-out !duration-700 
                                rounded-lg w-full "
                                    style={{
                                        height: (i >= value[0] &&
                                             i <= value[1]) ?
                                              "100%" : "0"
                                    }}></div>
                            </div>
                        })
                    }
                </div>
                <div className={``}></div>
                <Slider
                    label=""
                    step={1}
                    maxValue={100}
                    minValue={0}
                    value={value}
                    hideValue
                    size="sm"
                    color="primary"
                    onChange={(e)=>setValue(e)}
                    className="max-w-md"
                />
            </div>
        </div>
    );
}

