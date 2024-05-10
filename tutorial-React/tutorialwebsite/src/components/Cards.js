import React from 'react';
import CardItem from './CardItem';
import './cards.css';

function Cards(){
    return(
        <div className='cards'>
            <h1>Check out this epic destinations</h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <CardItem 
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the amazon jungle"
                            label="Adventure"
                            path='/services'
                        />
                        <CardItem 
                            src="images/img-2.jpg"
                            text="Explore the hidden waterfall deep inside the amazon jungle"
                            label="Adventure"
                            path='/services'
                        />
                    </ul>
                    <ul className='cards_items'>
                        <CardItem
                        src='images/img-3.jpg'
                        text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Mystery'
                        path='/services'
                        />
                        <CardItem
                        src='images/img-4.jpg'
                        text='Experience Football on Top of the Himilayan Mountains'
                        label='Adventure'
                        path='/products'
                        />
                        <CardItem
                        src='images/img-8.jpg'
                        text='Ride through the Sahara Desert on a guided camel tour'
                        label='Adrenaline'
                        path='/signup'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards