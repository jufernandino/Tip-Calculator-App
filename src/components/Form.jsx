import dollarIcon from "/images/icon-dollar.svg";
import personIcon from "/images/icon-person.svg";

const Form = () => {
    return (
        <div>
           <div className="form">
                  <div className="label_and_input">
                      <label className="label" htmlFor="bill">Bill</label>
                      <input type="number" id="bill" name="bill" />  
                      <img src={dollarIcon} aria-hidden="true" className="icon" />  
                  </div>

                  <div className="tip-section">
                    <p className="label">Selected Tip %</p>
                    <div className="tip-amount-wrapper">
                        <div className="tip-amount">
                            <input type="radio" name="tip" value=".05"/>
                            <div className="select-tip">5%</div>
                        </div>
                        <div className="tip-amount">
                            <input type="radio" name="tip" value=".1"/>
                            <div className="select-tip">10%</div>
                        </div>
                        <div className="tip-amount">
                            <input type="radio" name="tip" value=".15"/>
                            <div className="select-tip">15%</div>
                        </div>
                        <div className="tip-amount">
                            <input type="radio" name="tip" value=".2"/>
                            <div className="select-tip">20%</div>
                        </div>
                        <div className="tip-amount">
                            <input type="radio" name="tip" value=".25"/>
                            <div className="select-tip">25%</div>
                        </div>
                        <div className="tip-amount">
                            <input type="radio" name="tip" value=".5"/>
                            <div className="select-tip">50%</div>
                        </div>
                        <input type="number" className="tip-custom"/>
                    </div>
                  </div>

                  <div className="label_and_input">
                        <div className="label-wrapper">
                            <label htmlFor="n_people">Number of People</label>
                            <p>Error</p>
                        </div>
                        <input type="number" id="n_people" name="n_people" />
                        <img src={personIcon} aria-hidden="true" className="icon" />    
                  </div>
            </div>

        </div>
    )
}

export default Form