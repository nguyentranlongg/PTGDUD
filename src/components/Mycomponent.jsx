import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class Mycomponent extends React.Component {
    state = {
        listUser: [
            { id: 1, Name: "Dung", Age: 49 },
            { id: 2, Name: "Hoang", Age: 34 },
            { id: 3, Name: "Chien", Age: 32 },
        ],
    };

    // Thêm user vào danh sách
    handleAddnewUser = (userObject) => {
        this.setState({
            listUser: [userObject, ...this.state.listUser],
        });
    };

    // Xoá user khỏi danh sách
    handleDeleteUser = (userId) => {
        const updatedList = this.state.listUser.filter(user => user.id !== userId);
        this.setState({ listUser: updatedList });
    };

    render() {
        return (
            <div>
                <h2>Thêm người dùng</h2>
                <AddUserInfor handleAddnewUser={this.handleAddnewUser} />
                
                <h2>Danh sách người dùng</h2>
                <DisplayInfor listUser={this.state.listUser} handleDeleteUser={this.handleDeleteUser} />
            </div>
        );
    }
}

export default Mycomponent;
