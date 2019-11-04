import React, {Component} from 'react';
import {Link,  Route} from "react-router-dom";
import EachProject from "./EachProject";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";

class ProjectItem2 extends Component {
    render() {
        const company="모우미";
        const project="음악으로 여행하는 -여기서 거기를듣다- 재즈공연";
        const content="모우미가 만난 지역 아티스트들은 음악적 색깔의 다양성 이외에도 지역의 이야기를 담은 음악과 그 지역만의 분위기를 해석하고 표현하는 공연을 만드는 아티스트였습니다. 그렇기에, 그들의 음악을 통해서 우리는 충분히 그들이 말하는 지역을 보고 느낄 수 있었습니다. 말 그대로, 여기서 거기를 들을 수 있었던 경험이었습니다.";
        const progress=52;
        const money=progress*10000;
        const src="https://tumblbug-pci.imgix.net/6e9a642e6e4d5d647835e62e1f0158aec00ba4ff/bdc47ec250c59b428791d00b2654046ae0112607/3adf5cc0d9449bb8f0cfd7e3c4f490d6df51d76f/2e767912-3d65-4b23-acf0-c29b9edc9e2d.png?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=3d7327f489af4693ac78eb0fc90279f9"
        const mentorsrc="https://www.gotit.co.kr/wp-content/uploads/2018/10/origin_%EC%9E%90%EC%9A%B0%EB%A6%BC%EA%B9%80%EC%9C%A4%EC%95%84%EC%9C%A0%EB%AA%85%EC%B6%9C%ED%8C%90%EC%82%AC%EA%B0%80%EC%82%AC%EB%AC%B4%EB%8B%A8%EB%8F%84%EC%9A%A9%EB%AC%B8%EC%A0%9C%EC%A0%9C%EA%B8%B0-1.jpg"
        const mentorname="김윤아";
        const mentorcomment="색다른 재즈 콘서트, 티켓사서 들으세요";
        return (
            <div className="container">
                <Link to={"/eachProject/"+company+"/"+project+"/"+content+"/"+progress+"/"+mentorname+"/"+mentorcomment+"/img2"+"/mimg2"} style={{color:'black'}} className="card card-body bg-light mb-3">
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
                                    <h7>놀라워요!</h7>
                                    <h5>★★★★</h5>
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

export default ProjectItem2;