import React from 'react';
import "./Navbar.css";
import { Menu } from 'antd';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="Navbar">
            <Menu class="py-3" style={{ fontWeight: "border", fontSize: "20px", display: "flex",padding:"10px" }}>
                <Link to="/">
                    <Menu.Item style={{color: "white"}}>
                        About Us
                    </Menu.Item>
                </Link>
                <Link to="/Contact">
                    <Menu.Item style={{color: "white"}}>
                        Contact
                    </Menu.Item>
                </Link>
            </Menu>

        </div>

    )
}


export default Navbar;