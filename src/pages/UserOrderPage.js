import React from 'react';
import UserOrder from '../features/user/component/UserOrder';
import Navbar from '../features/navbar/Navbar';

function UserOrderPage(props) {
    return (
        <div>
            <Navbar>
            <UserOrder/>
            </Navbar>
           
           
        </div>
    );
}

export default UserOrderPage;