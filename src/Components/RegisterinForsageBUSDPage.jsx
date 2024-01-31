import React from 'react'
import './RegisterinForsageBUSDPage.css'

const RegisterinForsageBUSDPage = () => {
    return (
        <>
            <div className="RegisterinForsageBUSDPage-container">
                <div className="RegisterinForsageBUSDPage-inner-container">

                    <div className="RegisterinForsageBUSDPage-left-container">
                        <span className=" Heading inline-block text-two-half text-white mb-10 sm:mb-7.5 sm:text-2xl"> Registration <br /> in <span className="notranslate"> Forsage BUSD</span></span>

                        <div className='Upline-input'>
                            <label>Your upline</label>
                            <div>
                                <input type="text" placeholder='Upline' defaultValue={1} />
                            </div>
                        </div>

                        <div className='five-li'>
                            <ul>
                                <li>Wallet : connected</li>
                                <li>Network : Smart chain</li>
                                <li>Registration : available</li>
                                <li>Wallet : connected</li>
                                <li>Wallet : connected</li>
                            </ul>
                        </div>

                        <div className='check-again-div'>
                            <button className='check-again-button'>Ckeck Again</button>
                            <div style={{ color: 'gray' }}>
                                Registration fee
                            </div>
                        </div>

                    </div>
                    <div className="RegisterinForsageBUSDPage-right-container">
                        <div className="RegisterinForsageBUSDPage-inner-right-container">
                            <h3>Information</h3>
                            <span style={{color:'white', paddingBottom:'10px'}}>Insufficient balance for registration.</span>
                            <br />
                            <span style={{color:'#899FB5', marginBottom:'20px', lineHeight:'25px'}}>Registration requires <span class="text-white notranslate">10.9 BUSD</span> and at least <span class="text-white notranslate">0.005 BNB</span>.  <span>Your wallet balance: <span class="notranslate text-red">0.00 BUSD</span> and <span class="notranslate text-red">0.000 BNB</span>.</span></span>
                            
                            <div className='readguied'>
                                <button>Read Guied</button>
                            </div>

                            <div className='whatisGroways'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RegisterinForsageBUSDPage
