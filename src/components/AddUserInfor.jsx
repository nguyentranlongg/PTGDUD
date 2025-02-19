import React from "react";

class AddUserInfor extends React.Component {
    state = {
        Name: "",
        Age: "",
    };

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault(); // Ngăn tải lại trang
        
        // Gọi hàm handleAddnewUser từ component cha
        this.props.handleAddnewUser({
            id: Math.floor(Math.random() * 100) + 1 + "user",
            Name: this.state.Name,
            Age: this.state.Age,
        });

        // Xóa dữ liệu trong input sau khi thêm
        this.setState({ Name: "", Age: "" });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        type="text"
                        name="Name"
                        placeholder="Nhập tên"
                        value={this.state.Name}
                        onChange={this.handleOnChange}
                    />
                    <br />
                    <input
                        type="number"
                        name="Age"
                        placeholder="Nhập tuổi"
                        value={this.state.Age}
                        onChange={this.handleOnChange}
                    />
                    <br />
                    <button type="submit">Thêm</button>
                </form>
            </div>
        );
    }
}

export default AddUserInfor;
