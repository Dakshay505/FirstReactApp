import React from 'react'
import { Link } from 'react-router-dom'

export default function NavClone(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${props.mode}`} style={{color:props.mode==="dark"?"white":"black"}}>
                <div className="container-fluid" >
                    <Link className="navbar-brand" to="/" style={{color:props.mode==="dark"?"white":"black"}}>TextUtils</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" style={{color:props.mode==="dark"?"white":"black"}} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{color:props.mode==="dark"?"white":"black"}} to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" style={{color:props.mode==="dark"?"white":"black"}} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                 {/* pending for now check later */}
                                <ul className="dropdown-menu" >
                                    <li><a className="dropdown-item" style={{color:props.mode==="dark"?"white":"black"}} href="/">Action</a></li>
                                    <li><a className="dropdown-item" style={{color:props.mode==="dark"?"white":"black"}} href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" style={{color:props.mode==="dark"?"white":"black"}} /></li>
                                    <li><a className="dropdown-item" style={{color:props.mode==="dark"?"white":"black"}} href="/">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <div className='bg-danger mx-2' onClick={()=>{props.dark("danger")}} style={{height:"20px", width:"40px"}}></div>
                <div className='bg-info mx-2' onClick={()=>{props.dark("info")}} style={{height:"20px", width:"40px"}}></div>
                <div className='bg-secondary mx-2' onClick={()=>{props.dark("secondary")}} style={{height:"20px", width:"40px"}}></div>
                <div className='bg-primary mx-2' onClick={()=>{props.dark("primary")}} style={{height:"20px", width:"40px"}}></div>
                <div className="form-check form-switch mx-3">
                <input className="form-check-input" onChange={props.dark} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">darkMode</label>
                </div>
            </nav>
        </div>)
}
