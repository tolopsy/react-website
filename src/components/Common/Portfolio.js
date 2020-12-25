import React, {Component} from 'react';

import PortfolioItem from './PortfolioItem';
import thumbnail_1 from "../assets/img/portfolio/01-thumbnail.jpg";
import thumbnail_2 from "../assets/img/portfolio/02-thumbnail.jpg";
import thumbnail_3 from "../assets/img/portfolio/03-thumbnail.jpg";
import thumbnail_4 from "../assets/img/portfolio/04-thumbnail.jpg";
import thumbnail_5 from "../assets/img/portfolio/05-thumbnail.jpg";
import thumbnail_6 from "../assets/img/portfolio/06-thumbnail.jpg";

const portfolioItems = [
    {title: "Threads", subtitle: "Illustration", image: thumbnail_1},
    {title: "Explore", subtitle: "Graphic Design", image: thumbnail_2},
    {title: "Finish", subtitle: "Identity", image: thumbnail_3},
    {title: "Lines", subtitle: "Branding", image: thumbnail_4},
    {title: "Southwest", subtitle: "Web Design", image: thumbnail_5},
    {title: "Window", subtitle: "Photography", image: thumbnail_6},
]

class Portfolio extends Component {
    render(){
        return(
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {portfolioItems.map(
                            (item, index) => { return <PortfolioItem {...item} key={index} />}
                        )} 
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;