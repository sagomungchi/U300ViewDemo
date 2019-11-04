import React, {Component} from 'react';
import {Link,  Route} from "react-router-dom";
import EachProject from "./EachProject";
import ProgressBar from "react-bootstrap/ProgressBar";

class ProjectItem2 extends Component {
    render() {
        const company="모우미";
        const project="음악으로 여행하는 -여기서 거기를듣다- 재즈공연";
        const content="모우미가 만난 지역 아티스트들은 음악적 색깔의 다양성 이외에도 지역의 이야기를 담은 음악과 그 지역만의 분위기를 해석하고 표현하는 공연을 만드는 아티스트였습니다. 그렇기에, 그들의 음악을 통해서 우리는 충분히 그들이 말하는 지역을 보고 느낄 수 있었습니다. 말 그대로, 여기서 거기를 들을 수 있었던 경험이었습니다.";
        const progress=52;
        const money=progress*10000;
        const src="https://tumblbug-pci.imgix.net/6e9a642e6e4d5d647835e62e1f0158aec00ba4ff/bdc47ec250c59b428791d00b2654046ae0112607/3adf5cc0d9449bb8f0cfd7e3c4f490d6df51d76f/2e767912-3d65-4b23-acf0-c29b9edc9e2d.png?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=3d7327f489af4693ac78eb0fc90279f9"
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

export default ProjectItem2;