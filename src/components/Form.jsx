import './Form.css'

import dollarIcon from "/images/icon-dollar.svg";
import personIcon from "/images/icon-person.svg";

const Form = () => {
    return (
        <div>
           <div className="form">
                  <div className="label-and-input">
                      <label className="label" htmlFor="bill">Bill</label><br/>
                      <img src={dollarIcon} aria-hidden="true" className="dollar-icon" />  
                      <input className='input-bill' type="number" id="bill" name="bill" />  
                  </div>

                  <div className="tip-section">
                    <p className="label">Selected Tip %</p>
                    <div className="tip-amount-wrapper">
                        <div className="tip-amount-line1">
                            <div className="tip-amount">
                                <input type="radio" name="tip" value=".05" />
                                <div className="select-tip">5%</div>
                            </div>
                            <div className="tip-amount">
                                <input type="radio" name="tip" value=".1" />
                                <div className="select-tip">10%</div>
                            </div>
                            <div className="tip-amount">
                                <input type="radio" name="tip" value=".15" />
                                <div className="select-tip">15%</div>
                            </div>
                        </div>
                        <div className="tip-amount-line2">
                            <div className="tip-amount">
                                <input type="radio" name="tip" value=".25" />
                                <div className="select-tip">25%</div>
                            </div>
                            <div className="tip-amount">
                                <input type="radio" name="tip" value=".5" />
                                <div className="select-tip">50%</div>
                            </div>
                            <div className="tip-amount">
                                <input type="number" className="custom-input" />
                            </div>
                        </div>
                    </div>

                  </div>

                  <div className="label-and-input">
                        <div className="label-wrapper">
                            <label className='label' htmlFor="n_people">Number of People</label>
                        </div>
                        <input className='input-n-people' type="number" id="n-people" name="n-people" />
                        <img src={personIcon} aria-hidden="true" className="icon" />    
                  </div>
            </div>
        </div>
    )
}

export default Form