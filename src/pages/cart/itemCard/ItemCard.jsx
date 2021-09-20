import React from 'react'

function ItemCard() {
    return (
        <div className="border border-black py-5 my-3">
            
                <div className="flex justify-around  items-center">

                <div>
                   <img src="/Images/indoor1.png" alt="indoor" width="150px" />
                </div>
                <div className="text-lg font-semibold" > Golden Barrel</div>
                <div></div>
                <div>2</div>
                <div>100.000</div>

                
                
            </div>
        </div>
    )
}

export default ItemCard
