import React, {Component} from 'react';
import {Link,  Route} from "react-router-dom";
import EachProject from "./EachProject";
import ProgressBar from "react-bootstrap/ProgressBar";

class ProjectItem1 extends Component {
    render() {
        const company="사고뭉치";
        const project="Toping";
        const content="높은 환수리스크로 실현될 수 없던 아이디어 단계의 크라우드 펀딩을 사업화 트랙이라는 새로운 개념으로 창의적인 대학생 아이디어가 창업까지\n" +
            "                                이어질 수 있도록 돕는\n" +
            "                                크라우드펀딩 플랫폼";
        const progress=76.4;
        const money=progress*10000;
        return (
                <div className="container">
                    <Link to={"/eachProject/"+company} style={{color:'black'}} className="card card-body bg-light mb-3">
                        <div className="row">
                            <div className="col-2">
                                <span className="mx-auto"><img src="http://www.u300.or.kr/upload/u300_63022350(0).png"></img></span>
                            </div>
                            <div className="col-lg-6 col-md-4 col-8">
                                <h3>{company} / {project}</h3>
                                <p>{content}</p>
                            </div>
                            <div className="col-md-4 d-none d-lg-block">
                                <ProgressBar now={progress} label={(money)+"/1000000"}/>
                                <Route path={'/eachProject/:name'} as="asd" component={EachProject}/>
                            </div>
                        </div>
                    </Link>
                </div>

        );
    }
}

export default ProjectItem1;