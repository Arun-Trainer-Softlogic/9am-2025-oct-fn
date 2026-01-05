
function UserRole() {

    const role = "admin";


    if(role === "admin"){
        return <h2>Admin DashBoard </h2>
    }else if (role === "user") {
        return <h2>user DashBoard</h2>
    }else {
        return <h2>Guest page </h2>
    }

}

export default UserRole