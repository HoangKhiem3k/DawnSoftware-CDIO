import React from 'react'
import {NavLink} from 'react-router-dom'
export default function MenuJira() {
    return (
        <div className="menu">
            <div className="account">
                <div className="avatar">
                    <img src={require("../../assets/img/logo.png")} alt="avatar" />
                </div>
                <div className="account-info">
                    <p>Dawn Software</p>
                    <p>User name...</p>
                </div>
            </div>
            <div className="control">
                <div>
                    <i className="fa fa-credit-card mr-1" />
                    <NavLink className="text-dark" activeStyle={{color:'blue'}} to="/jira" activeClassName="active font-weight-bold text-primary" >Dawn Board</NavLink>
                </div>
                <div>
                    <i className="fa fa-cog mr-1" /> 
                    <NavLink className="text-dark"  activeStyle={{color:'blue'}} to='/createproject' activeClassName="active font-weight-bold  text-primary" >Create project</NavLink>
                </div>
                <div>
                    <i className="fa fa-cog mr-1" /> 
                    <NavLink className="text-dark"  activeStyle={{color:'blue'}} to='/projectmanagement' activeClassName="active font-weight-bold  text-primary" >Project management</NavLink>
                </div>
            </div>
            <div className="feature">
                <div>
                <i className="fa fa-user-tie"></i>
                    <span> Hoàng Khiêm</span>
                </div>
                <div>
                <i className="fa fa-user-tie"></i>
                    <span> Trung Hiếu</span>
                </div>
                <div>
                <i className="fa fa-user-tie"></i>
                    <span> Quốc Huy</span>
                </div>
                <div>
                <i className="fa fa-user-tie"></i>
                    <span> Thúy Hằng</span>
                </div>
                <div>
                <i className="fa fa-user-tie"></i>
                    <span> Thu Uyên</span>
                </div>
            </div>
        </div>
    )
}