import React, {Component} from 'react';
import {Link,  Route} from "react-router-dom";
import EachProject from "./EachProject";
import ProgressBar from "react-bootstrap/ProgressBar";

class ProjectItem4 extends Component {
    render() {
        const company="누룽씨";
        const project="건강한 한끼 누룽지 씨리얼";
        const content="# 건강하고 든든한 한 끼, 챙겨 드셨나요?\n" +
            "바쁜 스케쥴 때문에 또는 입맛이 없어서 끼니를 거르거나 \n" +
            "인스턴트 음식을 드시고 있지는 않으신가요?                               \n" +
            "그래서 누룽누룽은 생각했습니다.";
        const progress=66.9;
        const money=progress*10000;
        const src="https://tumblbug-pci.imgix.net/a38ccb32c41bf3d6ce9c403f5ab612d814bc3ce3/f08dbd4b592b3d10da37b558a6b44197e33518c6/5389ee2f714122544d2a86dbca07833152ba7d8a/b7f23753-7e33-47ad-82d6-4992beacda0d.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=70b8b97ecf0df0f6abdfdaa0f85e72c5"
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

export default ProjectItem4;