import { useState } from "react"


function ControlledInputs() {

    const [name, setName] = useState("")

    const handleChange = (e)=> {
        setName(e.target.value)
    }



    return (
        <div>
            <h2>Controlled inputs</h2>

            <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Enter Your name "
            />

<p>Typed Value :  {name}</p>

        </div>
    )
}

export default ControlledInputs