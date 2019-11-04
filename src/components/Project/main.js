import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from "react-bootstrap/Carousel";
import ProgressBar from "react-bootstrap/ProgressBar";
import Media from "react-bootstrap/Media";


class Main extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'black'}}>
                <Carousel>
                    <Carousel.Item style={{marginLeft: '200px'}}>
                        <img
                            className="w-50 h-50 align-content-center"
                            src="https://tumblbug-pci.imgix.net/6e9a642e6e4d5d647835e62e1f0158aec00ba4ff/ca2e8f3aeb3404c68d35790dddada9a92558d421/fd4ff0e81b718d8ce038796938737c1e3dc0cde3/43dff59d-e24b-485d-916a-82180027439c.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=761469dd446c0c3a38fe4c2ef41e7116"
                            alt="First slide"
                        />
                        <Carousel.Caption style={{textAlign: 'right', marginRight: '150px',}}>
                            <h3>브루스 브라더스</h3>
                            <p>월간커피, 아름다운 가을 단풍을 모티브로 한 콜드브루 커피
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{marginLeft: '200px'}}>
                        <img
                            className="align-items-center w-50 h-50"
                            src="https://tumblbug-pci.imgix.net/a38ccb32c41bf3d6ce9c403f5ab612d814bc3ce3/77f1f632125ddea92714a670d08c5bd9536c9c89/382e3ce6583fb2094e58423cb8fbc4a43eb52088/e4537734-b3b7-4f3b-b109-1c8990ca7e27.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b60863ff5da955040a02e45c48fe7897"
                            alt="Third slide"
                        />

                        <Carousel.Caption style={{textAlign: 'right', marginRight: '150px'}}>
                            <h3>이화여대 댄스동아리 언타이틀</h3>
                            <p>언타이틀의 첫 정기공연에 여러분을 초대합니다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{marginLeft: '200px'}}>
                        <img
                            className="align-items-center w-50 h-50"
                            src="https://tumblbug-pci.imgix.net/a38ccb32c41bf3d6ce9c403f5ab612d814bc3ce3/f08dbd4b592b3d10da37b558a6b44197e33518c6/5389ee2f714122544d2a86dbca07833152ba7d8a/b7f23753-7e33-47ad-82d6-4992beacda0d.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=70b8b97ecf0df0f6abdfdaa0f85e72c5"
                            alt="Third slide"
                        />

                        <Carousel.Caption style={{textAlign: 'right', marginRight: '150px'}}>
                            <h3>누룽씨</h3>
                            <p>건강한 한끼 누룽지 씨리얼</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div style={{
                    fontSize: '42px',
                    paddingLeft: '220px',
                    paddingTop: '20px',
                    backgroundColor: 'white'
                }}>
                    Hot Item {""}
                    <img style={{width: '25px', height: '25px'}}
                         src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/flame-512.png"></img>
                    {""} - 투자자들이 주목하는 Hot 아이템
                </div>
                <div style={{paddingLeft: '10px', paddingTop: '10px', backgroundColor: 'white'}}>
                    <Media style={{paddingLeft: '250px'}}>
                        <img
                            style={{width: "160px", height: '160px'}}
                            className="mr-auto"
                            src="http://www.u300.or.kr/upload/u300_63022350(0).png"
                            alt="Generic placeholder"
                        />
                        <Media.Body style={{paddingLeft: '20px', paddingRight: '450px'}}>
                            <h2>Toping</h2>
                            <h7><ProgressBar  style={{color:"black",width: '520px'}} color='success' variant="custom" label="764,000/1,000,000" now={76.4}/>
                            </h7>
                            <h6>(76.4%/100.0%)</h6>
                            <h6 style={{width: '500px'}}>
                                높은 환수리스크로 실현될 수 없던 아이디어 단계의 크라우드 펀딩을 사업화 트랙이라는 새로운 개념으로 창의적인 대학생 아이디어가 창업까지
                                이어질 수 있도록 돕는
                                크라우드펀딩 플랫폼
                            </h6>
                        </Media.Body>
                    </Media>
                    <Media style={{paddingTop: '40px', paddingLeft: '250px'}}>
                        <img
                            style={{width: "160px", height: '160px'}}
                            className="mr-auto"
                            src="https://tumblbug-pci.imgix.net/6e9a642e6e4d5d647835e62e1f0158aec00ba4ff/bdc47ec250c59b428791d00b2654046ae0112607/3adf5cc0d9449bb8f0cfd7e3c4f490d6df51d76f/2e767912-3d65-4b23-acf0-c29b9edc9e2d.png?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=3d7327f489af4693ac78eb0fc90279f9"
                            alt="Generic placeholder"
                        />
                        <Media.Body style={{paddingLeft: '20px', paddingRight: '450px'}}>
                            <h2>음악으로 여행하는 -여기서 거기를듣다- 재즈공연</h2>
                            <h7><ProgressBar style={{width: '520px'}} label="520,000/1,000,000" now={52}/>
                            </h7>
                            <h6>(52/100.0%)</h6>
                            <h6 style={{width: '500px'}}>
                                모우미가 만난 지역 아티스트들은 음악적 색깔의 다양성 이외에도 지역의 이야기를 담은 음악과 그 지역만의 분위기를 해석하고 표현하는 공연을 만드는 아티스트였습니다.
                                그렇기에, 그들의 음악을 통해서 우리는 충분히 그들이 말하는 지역을 보고 느낄 수 있었습니다. 말 그대로, 여기서 거기를 들을 수 있었던 경험이었습니다.
                            </h6>
                        </Media.Body>
                    </Media>
                    <Media style={{paddingTop: '30px', paddingLeft: '250px'}}>
                        <img
                            style={{width: "160px", height: '160px'}}
                            className="mr-auto"
                            src="https://tumblbug-pci.imgix.net/745e4ad4e6ac53fb909a3c8da8b7e3e72a53e64d/14bec61d57bd5c1a1f98d774245389da35067770/6c371e965a5805bd94fe41fe09ce79292781e62f/3961bd4e-5561-4311-809e-534ed623e136.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=9d4dfa5e56b3044c31d8ae3f891a723d"
                            alt="Generic placeholder"
                        />
                        <Media.Body style={{paddingLeft: '20px', paddingRight: '450px'}}>
                            <h2>동서양이 카드로 만났다, '민화 트럼프 카드'</h2>
                            <h7><ProgressBar style={{width: '520px'}} label="430,000/1,000,000" now={43}/>
                            </h7>
                            <h6>(43%/100.0%)</h6>
                            <h6 style={{width: '500px'}}>
                                민화 트럼프 카드를 약 100개 정도 제작할 수 있는 최소 금액에 포장과 배송 등의 비용까지 고려하여 총 1,000,000원을 목표 금액으로 정했습니다. 목표 금액을 초과 달성할 경우에는 추가 제작 비용을 제외한 나머지 금액을 민화트럼프카드 제품의 퀄리티를 높이기 위해 사용할 예정입니다. 만약 500%이상 달성한다면, 민화트럼프카드 엽서를 추가로 제공해 드리겠습니다
                            </h6>
                        </Media.Body>
                    </Media>
                </div>

                <div style={{
                    fontSize: '42px',
                    paddingLeft: '220px',
                    paddingTop: '20px',
                    backgroundColor: 'white'
                }}>
                    New Item!
                </div>
                <div style={{paddingLeft: '10px', paddingTop: '10px', backgroundColor: 'white'}}>
                    <Media style={{paddingLeft: '250px'}}>
                        <img
                            style={{width: "160px", height: '160px'}}
                            className="mr-auto"
                            src="https://tumblbug-pci.imgix.net/a527863dcf042abafe6ad6630769514211f8b1a6/8192fc98c71267a1d26400590b0f4bca453e7926/becc53e5cd513936636d13f63bd474be42081989/ac237583-50fa-4775-b82e-c5ffe3022945.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=77e1755fe40089f0454a272746838773"
                            alt="Generic placeholder"
                        />
                        <Media.Body style={{paddingLeft: '20px', paddingRight: '450px'}}>
                            <h2>고양이는 왜 생선을 버리고 샴푸를 물고 갔을까요?</h2>
                            <h7><ProgressBar  style={{color:"black",width: '520px'}} color='success' variant="custom" label="120,000/1,000,000" now={12}/>
                            </h7>
                            <h6>(12%/100.0%)</h6>
                            <h6 style={{width: '500px'}}>
                                고양이의 목욕스트레스를 줄일 수 있는 방법은 없을까?
                                집사라면 누구나 공감하는 고양이의 목욕스트레스! 후추와 크림이의 집사로써 누구보다 냥이의 스트레스를 잘 알고 있기 때문에, 1g(일그램)에서 냥이의 스트레스를 줄일 방법을 고민해 보았습니다.
                            </h6>
                        </Media.Body>
                    </Media>
                    <Media style={{paddingTop: '40px', paddingLeft: '250px'}}>
                        <img
                            style={{width: "160px", height: '160px'}}
                            className="mr-auto"
                            src="https://tumblbug-pci.imgix.net/a38ccb32c41bf3d6ce9c403f5ab612d814bc3ce3/49efc2d8b8a418c2b95e2a99a3e0dbac5ef86381/0ae6100a6965da4ff8fd0de25b2ed9707308d87b/b7715468-1b35-4690-bf13-54fc0f57ac13.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=e688936b53f585f19da328673d3039d5"
                            alt="Generic placeholder"
                        />
                        <Media.Body style={{paddingLeft: '20px', paddingRight: '450px'}}>
                            <h2>타임 스토리즈, 새로운 임무</h2>
                            <h7><ProgressBar style={{width: '520px'}} label="764,000/1,000,000" now={0}/>
                            </h7>
                            <h6>(0/100.0%)</h6>
                            <h6 style={{width: '500px'}}>
                                산토 토마스 데 아퀴노는 정식 확장이 아니기 때문에 해외에서도 구하기 힘든 시나리오이며, 언어권에 따라서는 아예 생산이 되지 않은 국가도 있습니다. (참고로 아래 해외 판매처의 이미지에서 산토 토마스 데 아퀴노의 가격은 24.9유로, 국내 배송비는 7.2유로로 우리 돈으로 약 42,000원가량에 해당하는 금액입니다)
                            </h6>
                        </Media.Body>
                    </Media>
                    <Media style={{paddingTop: '30px', paddingLeft: '250px'}}>
                        <img
                            style={{width: "160px", height: '160px'}}
                            className="mr-auto"
                            src="https://tumblbug-pci.imgix.net/a38ccb32c41bf3d6ce9c403f5ab612d814bc3ce3/5807c6df6d39de2c7e5cca113822b69ed9471af6/ba3cc418693c11c62e53bf7d317f26d0c12249a0/27a715d9-db44-45e4-bb38-73e09467b392.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=ed9d70a47d02cf955196e13e8347e1ca"
                            alt="Generic placeholder"
                        />
                        <Media.Body style={{paddingLeft: '20px', paddingRight: '450px'}}>
                            <h2>니알라토텝 혼돈의 비명피리</h2>
                            <h7><ProgressBar style={{width: '520px'}} label="0/1,000,000" now={0}/>
                            </h7>
                            <h6>(0%/100.0%)</h6>
                            <h6 style={{width: '500px'}}>
                                상형문자가 기록된 웅크린 모습의 크툴루 조각상을 제작한 HCL3DPRINTING 입니다.
                                저희의 두번째 텀블벅 프로젝트 니알라토텝 비명피리에 오신걸 환영합니다.
                            </h6>
                        </Media.Body>
                    </Media>
                </div>


            </div>


        )
            ;
    }
}

export default Main;