import React from 'react'

function Content2() {
    return (
        <div className="mb-20 md:mb-32 lg:mb-52">
            <div className="mx-10 md:h-80" style={{backgroundColor: "#00260a"}}>
                <div className="flex justify-center text-gray-200">
                    <div className="mt-10">
                        <div className="text-center md:text-left mb-2 text-xs md:text-base lg:text-lg">Shop</div>
                        <div >
                            <img src="/Images/content4.png" alt="content" className="w-60 lg:w-72"/>
                        </div>
                    </div>

                    <div className="mt-10 md:mx-5">
                         <div className="text-center md:text-left mb-2 text-xs md:text-base lg:text-lg">Inspirasi</div>
                        <div >
                            <img src="/Images/content2.png" alt="content" className="w-60 lg:w-72"/>
                        </div>
                    </div>
                    <div className="mt-10 ">
                    <div className="text-center md:text-left mb-2 text-xs md:text-base lg:text-lg">Pembuatan taman</div>
                        <div >
                            <img src="/Images/content3.png" alt="content" className="w-60 lg:w-72"/>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Content2
