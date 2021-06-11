import React, {Component} from "react";
import CarouselBox from '../components/CarouselBox'
import {CardDeck, Container,Card} from "react-bootstrap";
export default class Home extends Component{
    render(){
        return(
            <>
            <CarouselBox/>
            <Container>
            <h2 className="text-center m-4">Our team</h2>
                <CardDeck>
                    <Card>
                        <Card.Img variant='top'
                        src
                        />
                    </Card>
                </CardDeck>
            </Container>
        </>
        );
    }
}
