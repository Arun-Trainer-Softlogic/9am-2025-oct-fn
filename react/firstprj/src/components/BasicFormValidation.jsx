import React, { useState } from 'react'

function BasicFormValidation() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    // validate 



    const validate = () => {
        let newErrors = {};

        if (formData.name.trim() === "") {
            newErrors.name = "Name is required";
        }

        if (!formData.email.includes("@")) {
            newErrors.email = "Email is invalid";
        }

        if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // handle submit 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert("Form submitted successfully!");
            console.log(formData);
        }
    };

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <h2>Basic Form Validation</h2>


                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <p style={{ color: "red" }}>{errors.name}</p>
                </div>

                <div>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <p style={{ color: "red" }}>{errors.email}</p>
                </div>


                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <p style={{ color: "red" }}>{errors.password}</p>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default BasicFormValidation