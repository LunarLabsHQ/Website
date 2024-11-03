import Image from "next/image"

export const Hero = () => {
    return (
        <div className="">
            <div>
                <Image src="/moon2.png" alt="moon" width={549.19} height={430.91} className="relative ml-24 mt-10" />
            </div>
            <div className="text-9xl absolute top-[400px] right-[260px]">
                <span className="font-erode">moonshot</span>{" "}
                <span className="font-satoshi font-bold ">your ideas</span>
            </div>
        </div>
    )   
}