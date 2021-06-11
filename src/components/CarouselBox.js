import React, {Component} from 'react';
import Caurousel from "react-bootstrap/Carousel";
import game1 from '../assets/g1.jpg'
import game2 from '../assets/g2.jpg'
import game3 from '../assets/g3.jpg'
import game4 from '../assets/g4.jpg'
import game5 from '../assets/g5.jpg'
export default class CarouselBox extends Component {
    render() {
        return (
            <Caurousel data-interval="10">
               <Caurousel.Item>
                   <img
                    className='d-block w-100'
                    src={game1}
                    alt='Game'
                   />
                   <Caurousel.Caption>
                       <h3>The latest gaming news only with us at GameSpot</h3>

                   </Caurousel.Caption>
               </Caurousel.Item>
                <Caurousel.Item>
                    <img
                        className='d-block w-100'
                        src={game2}
                        alt='Game'
                    />
                    <Caurousel.Caption>
                        <h3>The latest gaming news only with us at GameSpot</h3>

                    </Caurousel.Caption>
                </Caurousel.Item>
                <Caurousel.Item>
                    <img
                        className='d-block w-100'
                        src={game3}
                        alt='Game'
                    />
                    <Caurousel.Caption>
                        <h3>The latest gaming news only with us at GameSpot</h3>

                    </Caurousel.Caption>
                </Caurousel.Item>
                <Caurousel.Item>
                    <img
                        className='d-block w-100'
                        src={game4}
                        alt='Game'
                    />
                    <Caurousel.Caption>
                        <h3>The latest gaming news only with us at GameSpot</h3>

                    </Caurousel.Caption>
                </Caurousel.Item>
                <Caurousel.Item>
                    <img
                        className='d-block w-100'
                        src={game5}
                        alt='Game'
                    />
                    <Caurousel.Caption>
                        <h3>The latest gaming news only with us at GameSpot</h3>

                    </Caurousel.Caption>
                </Caurousel.Item>
            </Caurousel>
        );
    }
}

