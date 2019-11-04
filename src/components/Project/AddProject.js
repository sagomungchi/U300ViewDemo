import React, {Component} from 'react';
import {Route} from "react-router-dom"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import EachProject from "./EachProject";
import Button from "react-bootstrap/esm/Button";


class AddProject extends Component {
    render() {
        const company="Steve Jobs";
        const project="게임";
        const content="#소프트웨어 #게임 #";
        const progress=76.4;
        const money=progress*10000;
        const src="https://cdn.vox-cdn.com/thumbor/fP-zKVpn-lZUh8iWeQAi9xFsN5Q=/0x0:640x427/920x613/filters:focal(0x0:640x427):format(webp)/cdn.vox-cdn.com/assets/1496753/stevejobs.jpg";
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Row>
                                <Col>
                                    <h1 style={{paddingLeft:'20px'}} className="display-4 text-left">Mentor</h1></Col>
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
                            <div className="container">
                                <div className="card card-body bg-light mb-3">
                                    <div className="row">
                                        <div className="col-2">
                                            <span className="mx-auto"><img src={src}></img></span>
                                        </div>
                                        <div className="col-lg-6 col-md-4 col-8">
                                            <h3>{company} / {project}</h3>
                                            <p>{content}</p>
                                        </div>
                                        <div className="col-md-4 d-none d-lg-block">
                                            <h3>정기 멘토링</h3>
                                            <h6>월 50,000원</h6>
                                            <Button style={{fontSize:'5px',border:'none',backgroundColor:'black',height:'20px'}}>신청하기</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="card card-body bg-light mb-3">
                                    <div className="row">
                                        <div className="col-2">
                                            <span className="mx-auto"><img src="https://www.gotit.co.kr/wp-content/uploads/2018/10/origin_%EC%9E%90%EC%9A%B0%EB%A6%BC%EA%B9%80%EC%9C%A4%EC%95%84%EC%9C%A0%EB%AA%85%EC%B6%9C%ED%8C%90%EC%82%AC%EA%B0%80%EC%82%AC%EB%AC%B4%EB%8B%A8%EB%8F%84%EC%9A%A9%EB%AC%B8%EC%A0%9C%EC%A0%9C%EA%B8%B0-1.jpg"></img></span>
                                        </div>
                                        <div className="col-lg-6 col-md-4 col-8">
                                            <h3>김윤아 / 음악</h3>
                                            <p>#공연 #예술 #인디 #보컬</p>
                                        </div>
                                        <div className="col-md-4 d-none d-lg-block">
                                            <h3>정기 멘토링 , 월3회 오프라인 멘토링</h3>
                                            <h6>월 120,000원</h6>
                                            <Button style={{fontSize:'5px',border:'none',backgroundColor:'black',height:'20px'}}>신청하기</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="card card-body bg-light mb-3">
                                    <div className="row">
                                        <div className="col-2">
                                            <span className="mx-auto"><img src="https://mblogthumb-phinf.pstatic.net/20160203_75/embisrael_1454460008537g5Jeu_JPEG/m-2-1.jpg?type=w800"></img></span>
                                        </div>
                                        <div className="col-lg-6 col-md-4 col-8">
                                            <h3>Harry Porter / 문구</h3>
                                            <p>#문구 #예술 #마법 #바보</p>
                                        </div>
                                        <div className="col-md-4 d-none d-lg-block">
                                            <h3>정기 멘토링 , 월1회 오프라인 멘토링</h3>
                                            <h6>월 70,000원</h6>
                                            <Button style={{fontSize:'5px',border:'none',backgroundColor:'black',height:'20px'}}>신청하기</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProject;