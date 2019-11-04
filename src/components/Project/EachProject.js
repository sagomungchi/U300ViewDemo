import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/esm/Button";


const EachProject = ({match}) => {
    const img1=(url)=>{
        if(url==="img1")
        return "http://www.u300.or.kr/upload/u300_63022350(0).png";
        else if(url==="img2")
            return "https://tumblbug-pci.imgix.net/6e9a642e6e4d5d647835e62e1f0158aec00ba4ff/bdc47ec250c59b428791d00b2654046ae0112607/3adf5cc0d9449bb8f0cfd7e3c4f490d6df51d76f/2e767912-3d65-4b23-acf0-c29b9edc9e2d.png?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=3d7327f489af4693ac78eb0fc90279f9";
        else if(url==="img3")
            return "https://tumblbug-pci.imgix.net/745e4ad4e6ac53fb909a3c8da8b7e3e72a53e64d/14bec61d57bd5c1a1f98d774245389da35067770/6c371e965a5805bd94fe41fe09ce79292781e62f/3961bd4e-5561-4311-809e-534ed623e136.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=9d4dfa5e56b3044c31d8ae3f891a723d";
        else if(url==="img4")
            return "https://tumblbug-pci.imgix.net/a38ccb32c41bf3d6ce9c403f5ab612d814bc3ce3/f08dbd4b592b3d10da37b558a6b44197e33518c6/5389ee2f714122544d2a86dbca07833152ba7d8a/b7f23753-7e33-47ad-82d6-4992beacda0d.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=70b8b97ecf0df0f6abdfdaa0f85e72c5";
        else if(url==="img5")
            return "https://tumblbug-pci.imgix.net/6e9a642e6e4d5d647835e62e1f0158aec00ba4ff/37c103363b0ff303e25b096d7738951fd1d80465/ab62d35a72622d84d09b837e27434fa1c46ac2f3/79de02f2-b033-4026-8dfc-3dc779ac1af9.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=e4d7ee6d01c9a28668a3c2880216748f";
        else if(url==="img6")
            return "https://tumblbug-pci.imgix.net/a38ccb32c41bf3d6ce9c403f5ab612d814bc3ce3/7535cc78113ab56f0232be248753d55e66d7c346/2606190f2561c6c11bb95fa2525a9aef088e5b8b/acfe021f-c249-4a1a-8c42-d6856b36fa44.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=aa6597ce002250c4e7317eae1770fdfd";

    };
    const img2=url=>{
        if(url==="mimg1")
            return "https://cdn.vox-cdn.com/thumbor/fP-zKVpn-lZUh8iWeQAi9xFsN5Q=/0x0:640x427/920x613/filters:focal(0x0:640x427):format(webp)/cdn.vox-cdn.com/assets/1496753/stevejobs.jpg";
        else if(url==="mimg2")
            return "https://www.gotit.co.kr/wp-content/uploads/2018/10/origin_%EC%9E%90%EC%9A%B0%EB%A6%BC%EA%B9%80%EC%9C%A4%EC%95%84%EC%9C%A0%EB%AA%85%EC%B6%9C%ED%8C%90%EC%82%AC%EA%B0%80%EC%82%AC%EB%AC%B4%EB%8B%A8%EB%8F%84%EC%9A%A9%EB%AC%B8%EC%A0%9C%EC%A0%9C%EA%B8%B0-1.jpg";
        else if(url==="mimg3")
            return "https://mblogthumb-phinf.pstatic.net/20160203_75/embisrael_1454460008537g5Jeu_JPEG/m-2-1.jpg?type=w800";
        else if(url==="mimg4")
            return "https://tumblbug-pci.imgix.net/a38ccb32c41bf3d6ce9c403f5ab612d814bc3ce3/f08dbd4b592b3d10da37b558a6b44197e33518c6/5389ee2f714122544d2a86dbca07833152ba7d8a/b7f23753-7e33-47ad-82d6-4992beacda0d.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=70b8b97ecf0df0f6abdfdaa0f85e72c5";
        else if(url==="mimg5")
            return "https://tumblbug-pci.imgix.net/6e9a642e6e4d5d647835e62e1f0158aec00ba4ff/37c103363b0ff303e25b096d7738951fd1d80465/ab62d35a72622d84d09b837e27434fa1c46ac2f3/79de02f2-b033-4026-8dfc-3dc779ac1af9.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=e4d7ee6d01c9a28668a3c2880216748f";
        else if(url==="mimg6")
            return "https://tumblbug-pci.imgix.net/a38ccb32c41bf3d6ce9c403f5ab612d814bc3ce3/7535cc78113ab56f0232be248753d55e66d7c346/2606190f2561c6c11bb95fa2525a9aef088e5b8b/acfe021f-c249-4a1a-8c42-d6856b36fa44.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=aa6597ce002250c4e7317eae1770fdfd";


    }
    const prog = match.params.progress;
    const progcontent = "모금률 (" + match.params.progress + "/100)";

    return (
        <div>
            <Container>

                <Row>
                    <Col style={{textAlign: 'center'}}>{match.params.name}</Col>
                </Row>
                <Row><Col style={{textAlign: 'center'}}><h1 style={{fontSize:'60px'}}>{match.params.name2}</h1></Col></Row>
                <Row style={{paddingTop: '20px'}}>
                    <Col style={{textAlign: 'center'}}><img
                        style={{width:'600px',height:'600px'}}
                        src={img1(match.params.img)}>

                    </img></Col>
                    <Col>
                        <Row><h3>{match.params.content}</h3></Row>
                        <Row style={{paddingTop:'100px'}}>

                            <Col>
                                <Row>
                                    <h2>Mentor Comment</h2>
                                </Row>
                                <Row>
                                    <h1>{match.params.mentorname}</h1>
                                </Row>
                                <Row>
                                    <h3>{match.params.mentorcomment}</h3>
                                </Row>
                            </Col>
                            <h4><img style={{width:'250px',height:'200px'}} src={img2(match.params.mimg)}/></h4>
                        </Row>
                    </Col>

                </Row>
            </Container>
            <Container style={{paddingTop: '20px', textAlign: 'right'}}>
                <ProgressBar label={progcontent} now={prog}/>
                <Button style={{
                    marginTop: '10px',
                    border: 'none',
                    backgroundColor: 'black',
                    fontSize: '40px',
                    textAlign: 'right'
                }}>투자하기</Button>
            </Container>
            <Container>
                <Row>

                </Row>
            </Container>

        </div>
    );
};
export default EachProject;