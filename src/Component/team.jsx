import React from 'react';

const Team = () => {
    return (
        <section className="team section-padding bg-blck">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mb-20">
                        <h2 className="section-title"><span>Other Team</span></h2>
                        <hr className="border-1" />
                        <p className="section-title2">
                            Quisque sed tellus nullam biben the volutpat dignissim pretium.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="team-card mb-30">
                            <div className="team-img">
                                <img src="img/team/3.jpg" alt="Enrico Brown" className="w-100" />
                            </div>
                            <div className="team-content">
                                <h3 className="team-title">Enrico Brown</h3>
                                <p className="team-text">
                                    I'm a professional product photographer in New York, NY. Quisque sed tellus nullam biben the volutan vetium.
                                </p>
                                <a href="team-details.html" className="button-tersiyer">About me</a>
                            </div>
                            <div className="title-box">
                                <h3 className="mb-0">Enrico Brown</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-card mb-30">
                            <div className="team-img">
                                <img src="img/team/1.jpg" alt="Micheal Martin" className="w-100" />
                            </div>
                            <div className="team-content">
                                <h3 className="team-title">Micheal Martin</h3>
                                <p className="team-text">
                                    I'm a professional bride photographer in London, UK. Quisque sed tellus nullam biben the volutan vetium.
                                </p>
                                <a href="team-details.html" className="button-tersiyer">About me</a>
                            </div>
                            <div className="title-box">
                                <h3 className="mb-0">Micheal Martin</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-card mb-30">
                            <div className="team-img">
                                <img src="img/team/2.jpg" alt="Olivia White" className="w-100" />
                            </div>
                            <div className="team-content">
                                <h3 className="team-title">Olivia White</h3>
                                <p className="team-text">
                                    I'm a professional fashion photographer in Bern, Switzerland. Quisque sed tellus nullam biben the volutan vetium.
                                </p>
                                <a href="team-details.html" className="button-tersiyer">About me</a>
                            </div>
                            <div className="title-box">
                                <h3 className="mb-0">Olivia White</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
