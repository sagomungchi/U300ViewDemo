import React, {Component} from 'react';
import img2 from '../../static/TopiLogo.png'
class Header extends Component {
    render() {
        return (
            <div>
                <nav style={{fontSize:'30px'}} className="navbar navbar-expand-sm navbar-light bg-white mb-4">
                    <div className="container">

                        <div className="collapse navbar-collapse" id="mobile-nav">

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a  style={{marginTop:'7px'}} className="nav-link" href="/dashboard">
                                        Project
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a  style={{marginLeft:'30px', marginTop:'7px'}} className="nav-link" href="/addproject">
                                        Mentor
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav mr-auto">
                                <li style={{marginLeft:"10px"}} className="nav-item">
                                    <a  style={{fontSize:'50px'}}  className="navbar-brand" href="/main">
                                        Toping
                                    </a>
                                </li>
                            </ul>


                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a  style={{fontSize:'20px'}}  className="nav-link " href="register.html">
                                        사고뭉치 회원님
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;