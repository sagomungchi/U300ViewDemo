import React, {Component} from 'react';
import {Link,  Route} from "react-router-dom";
import EachProject from "./EachProject";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";

class ProjectItem6 extends Component {
    render() {
        const company="nu thanks";
        const project="간직하고 생각하며, '써내려 간 시선'";
        const content="저는 사진가이자 남자 승무원입니다. 캐리어에는 항상 간단한 옷가지와 필름카메라, 그리고 여분의 필름 한 롤이 들어있습니다. 조금은 특별하다고 말할 수 있는 일을 하며, 여행과는 다른 시선으로 주변의 모습을 바라봅니다.";
        const progress=12.7;
        const money=progress*10000;
        const src="https://tumblbug-pci.imgix.net/a38ccb32c41bf3d6ce9c403f5ab612d814bc3ce3/7535cc78113ab56f0232be248753d55e66d7c346/2606190f2561c6c11bb95fa2525a9aef088e5b8b/acfe021f-c249-4a1a-8c42-d6856b36fa44.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=aa6597ce002250c4e7317eae1770fdfd"
        const mentorsrc="https://cdn.vox-cdn.com/thumbor/fP-zKVpn-lZUh8iWeQAi9xFsN5Q=/0x0:640x427/920x613/filters:focal(0x0:640x427):format(webp)/cdn.vox-cdn.com/assets/1496753/stevejobs.jpg"
        const mentorname="Steve Jobs";
        const mentorcomment="예비창업자 및 학생들의 사업자금 조달에 큰 도움이 될 것, 부분적으로 개선해야 할 여지는 있으나 시간문제";
        return (
            <div className="container">
                <Link to={"/eachProject/"+company+"/"+project+"/"+content+"/"+progress+"/"+mentorname+"/"+mentorcomment+"/img6"+"/mimg1"} style={{color:'black'}} className="card card-body bg-light mb-3">
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

export default ProjectItem6;