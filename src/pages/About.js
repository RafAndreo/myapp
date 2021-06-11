import React, {Component} from "react";
import CarouselBox from "../components/CarouselBox";
import {Container, Nav, Tab,Col, Row} from "react-bootstrap";

export default class About extends Component{
    render(){
        return(
            //<CarouselBox/>
            <Container>
                <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                        <Nav.Link eventKey='first' >
                                            Leastet
                                        </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey='second' >
                                        Game novelties
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third' >
                                        Game Reviews
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                                <img src='https://www.gamespace.com/wp-content/uploads/2021/02/Burning-Crusade-768x432.jpg'/>
                                <p></p>
                                <p>Endless adventures in three unique incarnations of World of Warcraft
                                    Join millions of players and discover an incredible world full of legends, magic and exciting adventures. With a single subscription, you can play in the game worlds of World of Warcraft, World of Warcraft: Burning Crusade Classic, as well as in the worlds of the classic WoW era.

                                    For a limited time, you can get the Lucky Yun vehicle in World of Warcraft and the Imp in the Ball toy in Burning Crusade Classic as a gift when you pay for a 6-month subscription! Lucky Yun can also be purchased separately.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                                <img src='https://xchip.ru/wp-content/uploads/2021/02/resident-evil-village-2-640x360.jpg'/>
                                <p>-Gaming Nexus</p>
                                <p>Resident Evil Village earns a spot right up there as one of the very best Resident Evil games in the franchise’s 25 year run. Village is an amalgamation of what made Resident Evil 4 and Resident Evil 7 fan-favourite entries. Though it also delivers on it’s own ambition with new breeds of terrifying enemies never seen before in Resident Evil. The Village is a desolate, decrepit, dolorous setting but undeniably beautiful thanks to some of the best art direction ever seen in the series. In an age of day one patches and bugs, Resident Evil looks and runs flawlessly on the PlayStation 5 version used in this review. Resident Evil Village is a Game of the Year contender.
                                </p>
                                <p>-M3</p>
                               <p> Resident Evil: Village takes the ground work from the seventh part and mixes it together with the very best from the previous Resident Evil titles. It enchants and shocks us at the same time, to the point that we become completely addicted to it. A contemporary classic that sets a new standard, just as Resident Evil 4 once did.
                            </p>
                                <p>-Gaming age</p>
                                <p>Resident Evil Village is not a game for everyone, and I feel Resident Evil 7 fans will enjoy it much more than the average player — but having fan favorite Chris Redfield back into the story was a welcome addition (including the retcon of his appearance in RE7).</p>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>

        )
    }
}
