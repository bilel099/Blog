import React from 'react';
import './Home.css';
import homeimg from './homeimg.jpg';
import djeans from './djeans.jpg'; 
import jeanbuggy from './jeanbuggy.jpg';
import Product from './Product';
import sportclothes from './sportclothes.jpg';
import shoes from './shoes.jpg';
import tie from './tie.jpg';
import casquette from './casquette.jpg';
import maillot from './maillot.jpg';
import jacket from './jacket.jpg';


function Home() {
    return (
        <div className="home">
            <img className="home__image" src={homeimg} alt="Home" />
            <div className="home__row">
                <Product
                    id="1223455"
                    title="Jean"
                    price={80}
                    rating={4}
                    image={djeans}
                    
                />
                <Product
                    id="00002"
                    title="Jean Baggy"
                    price={110}
                    rating={5}
                    image={jeanbuggy}
                />
                <Product
                    id="00003"
                    title="Sport Clothes"
                    price={75}
                    rating={5}
                    image={sportclothes}
                />
                <Product
                    id="00004"
                    title="Shoes"
                    price={80}
                    rating={4}
                    image={shoes}
                />
                <Product
                    id="1223"
                    title="tie"
                    price={30}
                    rating={6}
                    image={tie}
                />
                <Product
                    id="1223455"
                    title="casquette"
                    price={30}
                    rating={5}
                    image={casquette}
                />
                <Product
                    id="1223455"
                    title="Maillot Ess du Sahel"
                    price={60}
                    rating={10}
                    image={maillot}
                />
                <Product
                    id="1223455"
                    title="jacket"
                    price={120}
                    rating={8}
                    image={jacket}
                />
                
                
            </div>
        </div>
    );
}

export default Home;
