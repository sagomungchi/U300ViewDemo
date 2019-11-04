import React, {Component} from 'react';
import {Link,  Route} from "react-router-dom";
import EachProject from "./EachProject";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";

class ProjectItem4 extends Component {
    render() {
        const company="누룽씨";
        const project="건강한 한끼 누룽지 씨리얼";
        const content="건강하고 든든한 한 끼, 챙겨 드셨나요. 바쁜 스케쥴 때문에 또는 입맛이 없어서 끼니를 거르거나 인스턴트 음식을 드시고 있지는 않으신가요. 그래서 누룽누룽은 생각했습니다.";
        const progress=66.9;
        const money=progress*10000;
        const src="https://tumblbug-pci.imgix.net/a38ccb32c41bf3d6ce9c403f5ab612d814bc3ce3/f08dbd4b592b3d10da37b558a6b44197e33518c6/5389ee2f714122544d2a86dbca07833152ba7d8a/b7f23753-7e33-47ad-82d6-4992beacda0d.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=70b8b97ecf0df0f6abdfdaa0f85e72c5"
        const mentorsrc="https://cdn.vox-cdn.com/thumbor/fP-zKVpn-lZUh8iWeQAi9xFsN5Q=/0x0:640x427/920x613/filters:focal(0x0:640x427):format(webp)/cdn.vox-cdn.com/assets/1496753/stevejobs.jpg"
        const mentorname="Steve Jobs";
        const mentorcomment="예비창업자 및 학생들의 사업자금 조달에 큰 도움이 될 것, 부분적으로 개선해야 할 여지는 있으나 시간문제";
       
        return (
            <div className="container">
                <Link to={"/eachProject/"+company+"/"+project+"/"+content+"/"+progress+"/"+mentorname+"/"+mentorcomment+"/img4"+"/mimg1"} style={{color:'black'}} className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto"><img src={src}></img></span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>{company} / {project}</h3>
                            <p>{content}</p>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ProgressBar now={progress} label={(money)+"/1000000"}/>
                            <Row style={{paddingTop:'20px'}}>
                                <Col>
                                    <img style={{width:'128px',height:'100px'}} src={mentorsrc}></img></Col>
                                <Col>
                                    <h3>mentor</h3>
                                    <h5>{mentorname}</h5>
                                    <h7>Good idea!</h7>
                                    <h5>★★★★★</h5>
                                </Col>

                            </Row>
                            <Route path={'/eachProject/:name/:name2/:content/:progress/:mentorname/:mentorcomment/:img/:mimg'} as="asd" component={EachProject}/>
                        </div>
                    </div>
                </Link>
            </div>

        );
    }
}

export default ProjectItem4;