import React, {Component} from 'react';

import TeamMember from "./TeamMember";

import image_1 from "../assets/img/team/1.jpg";
import image_2 from "../assets/img/team/2.jpg";
import image_3 from "../assets/img/team/3.jpg";

const members = [
    {name: "Kay Garland", role: "Lead Designer", image: image_1},
    {name: "Larry Parker", role: "Lead Marketer", image: image_2},
    {name: "Diana Petersen", role: "Lead Developer", image: image_3},
]

class Teams extends Component {
    render(){
        return(
            
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {members.map(
                        (member, index) => { return <TeamMember {...member} key={index} />}
                    )}
                    
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        )
    }
}

export default Teams;