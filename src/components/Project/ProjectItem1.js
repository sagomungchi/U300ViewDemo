import React, {Component} from 'react';
import {Link,  Route} from "react-router-dom";
import EachProject from "./EachProject";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";

class ProjectItem1 extends Component {
    render() {
        const company="사고뭉치";
        const project="Toping";
        const content="높은 환수리스크로 실현될 수 없던 아이디어 단계의 크라우드 펀딩을 사업화 트랙이라는 새로운 개념으로 창의적인 대학생 아이디어가 창업까지\n" +
            "                                이어질 수 있도록 돕는\n" +
            "                                크라우드펀딩 플랫폼";
        const progress=76.4;
        const money=progress*10000;
        const src="http://www.u300.or.kr/upload/u300_63022350(0).png";
        const mentorsrc="https://cdn.vox-cdn.com/thumbor/fP-zKVpn-lZUh8iWeQAi9xFsN5Q=/0x0:640x427/920x613/filters:focal(0x0:640x427):format(webp)/cdn.vox-cdn.com/assets/1496753/stevejobs.jpg"
        const mentorname="Steve Jobs";
        const mentorcomment="예비창업자 및 학생들의 사업자금 조달에 큰 도움이 될 것, 부분적으로 개선해야 할 여지는 있으나 시간문제";
        return (
                <div className="container">
                    <Link to={"/eachProject/"+company+"/"+project+"/"+content+"/"+progress+"/"+mentorname+"/"+mentorcomment+"/img1"+"/mimg1"} style={{color:'black'}} className="card card-body bg-light mb-3">
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

export default ProjectItem1;