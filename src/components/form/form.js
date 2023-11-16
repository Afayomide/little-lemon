import "./form.css"
import {BsCalendar} from "react-icons/bs"
import { BsClock } from "react-icons/bs"
import { BsPeople } from "react-icons/bs"

function Form () {
    return(
        <>
            <form>
            <div className="input">
            <label for="date">Choose Date:</label>
            <div>
            <input id="date" type="date"/>
            </div>
            </div>

            <div className="input">
            <label for="time">Choose Time:</label>
            <div>
            <input id="time" type="time"/>
            </div>
            </div>

            <div className="input">
               <label for="number">Table for how many?</label>
               <div>
                <BsPeople/><input id="number" type="number"/>
                </div>
            </div>
            <div className="input">
            <textarea placeholder="any special request?"></textarea>
            </div>
            <button>Reserve Table</button>
            </form>
        </>
    )
}
export default Form