import { useRef } from "react"



function UncontrolledInputs() {
    const inputRef = useRef(null)

    const handleSubmit = () => {
        alert("entered value : " + inputRef.current.value)
    }

    return (
        <div>
            <h2> Uncontrolled inputs </h2>

            <input
                type="text"
                ref={inputRef}
            />
            


            
            <button onClick={handleSubmit}>Submit me </button>
        </div>
    )
}

export default UncontrolledInputs