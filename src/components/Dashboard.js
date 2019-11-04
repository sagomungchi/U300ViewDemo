import React, {Component} from 'react';
import ProjectItem1 from "./Project/ProjectItem1";
import ProjectItem2 from "./Project/ProjectItem2";
import ProjectItem6 from "./Project/ProjectItem6";
import ProjectItem3 from "./Project/ProjectItem3";
import ProjectItem4 from "./Project/ProjectItem4";
import ProjectItem5 from "./Project/ProjectItem5";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class Dashboard extends Component {
    render() {
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Row>
                                <Col>
                                    <h1 style={{paddingLeft:'20px'}} className="display-4 text-left">Projects</h1></Col>
                                <Col style={{paddingLeft:'80px',marginTop:'20px'}} ><h2><a style={{color:'black'}} href="#">전체</a>
                                    <a style={{fontSize:"25px" ,paddingLeft:"20px",color:'black'}} href="#">비즈{""}{""}</a>
                                    <a style={{fontSize:"25px" ,paddingLeft:"20px",color:'black'}} href="#">테크{""}{""}</a>
                                    <a style={{fontSize:"25px"  ,paddingLeft:"20px",color:'black'}} href="#">게임{""}{""}</a>
                                    <a style={{fontSize:"25px" ,paddingLeft:"20px",color:'black'}} href="#">음악{""}{""}</a>
                                    <a style={{fontSize:"25px" ,paddingLeft:"20px",color:'black'}} href="#">공연{""}{""}</a>
                                    <a style={{fontSize:"25px" ,paddingLeft:"20px",color:'black'}} href="#">사진{""}{""}</a>
                                    <a style={{fontSize:"25px" ,paddingLeft:"20px",color:'black'}} href="#">출판</a>


                                </h2></Col>
                            </Row>
                            <br/>
                            <hr/>

                            <ProjectItem4/>
                            <ProjectItem2/>
                            <ProjectItem5/>
                            <ProjectItem6/>
                            <ProjectItem3/>
                            <ProjectItem1/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;