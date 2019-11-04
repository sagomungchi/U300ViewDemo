import React, {Component} from 'react';
import {Link,  Route} from "react-router-dom";
import EachProject from "./EachProject";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";

class ProjectItem5 extends Component {
    render() {
        const company="크림히어로즈";
        const project="2020 크림히어로즈 다이어리 & 캘린더";
        const content="안녕하세요. 크림히어로즈 집사입니다.저는 일곱 고양이와 함께 귀엽고 따뜻한 세상을 만들어 가고 싶어요.오늘도 고양이들과 함께 행복한 하루 되세요!";
        const progress=14.1;
        const money=progress*10000;
        const src="https://tumblbug-pci.imgix.net/6e9a642e6e4d5d647835e62e1f0158aec00ba4ff/37c103363b0ff303e25b096d7738951fd1d80465/ab62d35a72622d84d09b837e27434fa1c46ac2f3/79de02f2-b033-4026-8dfc-3dc779ac1af9.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=e4d7ee6d01c9a28668a3c2880216748f"
        const mentorsrc="https://mblogthumb-phinf.pstatic.net/20160203_75/embisrael_1454460008537g5Jeu_JPEG/m-2-1.jpg?type=w800"
        const mentorname="Harry Poter";
        const mentorcomment="마법같은 다이어리, 돈이 어디갔는지 모르는 마법";
        return (
            <div className="container">
                <Link to={"/eachProject/"+company+"/"+project+"/"+content+"/"+progress+"/"+mentorname+"/"+mentorcomment+"/img5"+"/mimg3"} style={{color:'black'}} className="card card-body bg-light mb-3">
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
                                    <h7>Magical!</h7>
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

export default ProjectItem5;