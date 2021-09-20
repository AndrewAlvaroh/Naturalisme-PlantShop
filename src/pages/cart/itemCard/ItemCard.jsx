import React, { Component } from 'react'


export class ItemCard extends Component {

    state = {
        order : 1
    }

    handlePlus = () => {
       this.setState({
           order : this.state.order + 1
       })
    }
    handleMinus = () => {
        if(this.state.order > 1 ) {
            this.setState({
                order : this.state.order - 1
            })
        }
       
    }

    render(props) {
        return (
            <div>
                <div className="border border-black py-5 my-3">
            
            <div className="flex justify-around  items-center">

            <div>
               <img src="/Images/indoor1.png" alt="indoor" width="150px" />
            </div>
            <div className="text-lg font-semibold" > {this.props.namaProduct}</div>
            <div></div>

            <div className="flex justify-center border items-center">
                <div className=" bg-blue-600 hover:bg-blue-500 text-white rounded-sm  px-3  py-1">
                <button onClick={this.handleMinus} className="text-lg">-</button>  
                </div>
                <div >
                    <input type="text" value={this.state.order} className="text-center w-20" />
                </div>
                <div className=" bg-blue-600 hover:bg-blue-500 text-white rounded-sm  px-3 py-1">
                  <button onClick={this.handlePlus} className="text-lg">+</button>  
                </div>
            </div>


            <div>{this.props.harga}</div>

            
            
        </div>
    </div>
            </div>
        )
    }
}

export default ItemCard
