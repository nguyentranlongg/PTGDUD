import React from "react";

class UserInfor extends React.Component {
    render() {
        const { itemUserInfor, handleDeleteUser } = this.props;

        return (
            <div style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
                <h3 style={{ color: itemUserInfor.Age < 33 ? "red" : "black" }}>User is name: {itemUserInfor.Name}</h3>
                <p style={{ color: itemUserInfor.Age < 33 ? "red" : "black" }}>User age: {itemUserInfor.Age}</p>
                <button onClick={() => handleDeleteUser(itemUserInfor.id)}>Xoá</button>
            </div>
        );
    }
}

export default UserInfor;
