import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderLeader({lead}){
    if(lead!=null){
        return(
            <div key={lead.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object src={lead.image} alt={lead.name} className="renderLeader" />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{lead.name}</Media>
                    <Media>{lead.designation}</Media>
                    <br />
                    <p>{lead.description}</p>
                  </Media>
                </Media>
             </div>
        );
    }
    else{
        return(
            <div></div>
        
        );
    }
}

function About(props) {

    const leaders = props.leaders.map((leader) => {
            return (
                <RenderLeader lead={leader} />
            );
        
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2017, in INDIA. With its unique brand of world melting memories' cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in INDIA.  Featuring five of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>Mocktails and milkshakes</em>, a successful chain started by our CEO, Mr. Srinivasa, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">25 Mar. 2017</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$9,149</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">17</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">"If life is a bowl of dark ice cream, small moments we enjoyed are colorful sprinkles all over it." — Unknown</p>
                                <footer className="blockquote-footer">
                                <cite title="Source Title">"Without ice cream, there would be darkness and chaos."</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12" >
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        
                            {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;  