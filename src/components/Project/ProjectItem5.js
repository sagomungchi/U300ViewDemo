import React, {Component} from 'react';
import {Link,  Route} from "react-router-dom";
import EachProject from "./EachProject";
import ProgressBar from "react-bootstrap/ProgressBar";

class ProjectItem5 extends Component {
    render() {
        const company="크림히어로즈";
        const project="2020 크림히어로즈 다이어리 & 캘린더";
        const content="민화 트럼프 카드를 약 100개 정도 제작할 수 있는 최소 금액에 포장과 배송 등의 비용까지 고려하여 총 1,000,000원을 목표 금액으로 정했습니다. 목표 금액을 초과 달성할 경우에는 추가 제작 비용을 제외한 나머지 금액을 민화트럼프카드 제품의 퀄리티를 높이기 위해 사용할 예정입니다. 만약 500%이상 달성한다면, 민화트럼프카드 엽서를 추가로 제공해 드리겠습니다";
        const progress=14.1;
        const money=progress*10000;
        const src="https://tumblbug-pci.imgix.net/6e9a642e6e4d5d647835e62e1f0158aec00ba4ff/37c103363b0ff303e25b096d7738951fd1d80465/ab62d35a72622d84d09b837e27434fa1c46ac2f3/79de02f2-b033-4026-8dfc-3dc779ac1af9.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=e4d7ee6d01c9a28668a3c2880216748f"
        return (
            <div className="container">
                <Link to={"/eachProject/"+company} style={{color:'black'}} className="card card-body bg-light mb-3">
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
                            <Route path={'/eachProject/:name'} as="asd" component={EachProject}/>
                        </div>
                    </div>
                </Link>
            </div>

        );
    }
}

export default ProjectItem5;