import React from 'react'
import './Accountpreview.css'

const Accountpreview = () => {
    return (
        <div className='Accountpreview-container'>
            <div className="Accountpreview-inner-container">
                <h1>Account preview</h1>
                <p>Look up any Forsage GroWays member account in preview mode. Enter ID or GroWays address to preview or click Demo to view a random account.
                </p>
                <div className="Accountpreview-container">

                    <div className="Accountpreview-left-container">
                        <h4>Enter ID or GroWays Wallet</h4>
                        <div className='input-and-button'>
                            <input type="text" placeholder='example :54821' />
                            <button> Preview</button>

                        </div>

                    </div>
                    <div className="Accountpreview-right-container">
                        <h4>Don't know any ID?</h4>
                        <button>Check Demo</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Accountpreview
