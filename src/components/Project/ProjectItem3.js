import React, {Component} from 'react';
import {Link,  Route} from "react-router-dom";
import EachProject from "./EachProject";
import ProgressBar from "react-bootstrap/ProgressBar";

class ProjectItem3 extends Component {
    render() {
        const company="써옹";
        const project="동서양이 카드로 만났다, '민화 트럼프 카드'";
        const content="민화 트럼프 카드를 약 100개 정도 제작할 수 있는 최소 금액에 포장과 배송 등의 비용까지 고려하여 총 1,000,000원을 목표 금액으로 정했습니다. 목표 금액을 초과 달성할 경우에는 추가 제작 비용을 제외한 나머지 금액을 민화트럼프카드 제품의 퀄리티를 높이기 위해 사용할 예정입니다. 만약 500%이상 달성한다면, 민화트럼프카드 엽서를 추가로 제공해 드리겠습니다";
        const progress=43;
        const money=progress*10000;
        const src="https://tumblbug-pci.imgix.net/745e4ad4e6ac53fb909a3c8da8b7e3e72a53e64d/14bec61d57bd5c1a1f98d774245389da35067770/6c371e965a5805bd94fe41fe09ce79292781e62f/3961bd4e-5561-4311-809e-534ed623e136.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=9d4dfa5e56b3044c31d8ae3f891a723d"
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

export default ProjectItem3;