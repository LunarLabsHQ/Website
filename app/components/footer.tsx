"use client"
export function FooterComp (){
    return <div>
            <div className="border rounded-3xl m-5 grid justify-start p-16 pb-28 gap-20  text-white bg-black footer ">
                <div className="underline italic text-3xl">get in touch</div>
                <div className="text-7xl font-bold">journey to the moon starts here.</div>
                <div className="flex space-x-10">
                    <div><a href="https://x.com/lunarlabshq">x</a></div>
                    <div><a href="mailto:hq.lunarlabs@gmail.com">mail</a></div>
                    <div>github</div>
                    <div><a href="https://www.linkedin.com/company/lunarlabshq">linkedin</a></div>
                    <div>discord</div>

                </div>
            </div>
    </div>
}