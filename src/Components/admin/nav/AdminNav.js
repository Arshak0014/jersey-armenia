import React from 'react';
import {Link} from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import {firebase} from "../../../firebase";

const AdminNav = () => {

    const links = [
        {
            title: 'Jerseys',
            linkTo: '/admin_jerseys'
        },
        {
            title: 'Add jerseys',
            linkTo: '/admin_jerseys/add_jerseys'
        }
    ];

    const style = {
        color: '#ffffff',
        fontWeight: '300px',
        borderBottom: '1px solid #353535'
    };

    const renderItems = () => (
        links.map((link) => (
            <Link to={link.linkTo} key={link.title}>
                <ListItem button style={style}>
                    {link.title}
                </ListItem>
            </Link>
        ))
    );

    const logoutHandler = () => {
        firebase.auth().signOut().then(() => {
            console.log('Log out successful')
        },(error) => {
            console.log('error logging out')
        })
    };

    return (
        <div>
            {renderItems()}
            <ListItem button style={style} onClick={() => logoutHandler()}>
                Log out
            </ListItem>
        </div>
    );
};

export default AdminNav;