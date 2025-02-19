import React from "react";
import UserInfor from "./UserInfor";

class DisplayInfor extends React.Component {
    render() {
        const { listUser, handleDeleteUser } = this.props;

        return (
            <div>
                {listUser.length > 0 ? (
                    listUser.map((user) => (
                        <UserInfor key={user.id} itemUserInfor={user} handleDeleteUser={handleDeleteUser} />
                    ))
                ) : (
                    <p>Không có dữ liệu.</p>
                )}
            </div>
        );
    }
}

export default DisplayInfor;
