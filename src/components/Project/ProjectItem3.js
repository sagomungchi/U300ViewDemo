import React, {Component} from 'react';
import {Link,  Route} from "react-router-dom";
import EachProject from "./EachProject";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";

class ProjectItem3 extends Component {
    render() {
        const company="써옹";
        const project="동서양이 카드로 만났다, '민화 트럼프 카드'";
        const content="민화 트럼프 카드를 약 100개 정도 제작할 수 있는 최소 금액에 포장과 배송 등의 비용까지 고려하여 총 1,000,000원을 목표 금액으로 정했습니다. 목표 금액을 초과 달성할 경우에는 추가 제작 비용을 제외한 나머지 금액을 민화트럼프카드 제품의 퀄리티를 높이기 위해 사용할 예정입니다. 만약 500퍼센트 이상 달성한다면, 민화트럼프카드 엽서를 추가로 제공해 드리겠습니다";
        const progress=43;
        const money=progress*10000;
        const src="https://tumblbug-pci.imgix.net/745e4ad4e6ac53fb909a3c8da8b7e3e72a53e64d/14bec61d57bd5c1a1f98d774245389da35067770/6c371e965a5805bd94fe41fe09ce79292781e62f/3961bd4e-5561-4311-809e-534ed623e136.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=9d4dfa5e56b3044c31d8ae3f891a723d"
        const mentorsrc="https://cdn.vox-cdn.com/thumbor/fP-zKVpn-lZUh8iWeQAi9xFsN5Q=/0x0:640x427/920x613/filters:focal(0x0:640x427):format(webp)/cdn.vox-cdn.com/assets/1496753/stevejobs.jpg"
        const mentorname="Steve Jobs";
        const mentorcomment="예비창업자 및 학생들의 사업자금 조달에 큰 도움이 될 것, 부분적으로 개선해야 할 여지는 있으나 시간문제";
        return (
            <div className="container">
                <Link to={"/eachProject/"+company+"/"+project+"/"+content+"/"+progress+"/"+mentorname+"/"+mentorcomment+"/img3"+"/mimg1"} style={{color:'black'}} className="card card-body bg-light mb-3">
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

export default ProjectItem3;