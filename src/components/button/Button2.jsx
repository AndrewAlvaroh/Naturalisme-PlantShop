import React from 'react'
import { Link } from 'react-router-dom'

function Button2(props) {
    return (
        <div>
            <div className="inline-block mr-2 mt-2">
            <Link to={props.to} type="button" className="focus:outline-none text-black text-sm font-semibold py-2 px-4 md:py-2.5 md:px-5 rounded-md border border-gray-600 hover:bg-gray-50 flex ">
                {props.namaButton}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            </Link>
            </div>

        </div>
    )
}

export default Button2
