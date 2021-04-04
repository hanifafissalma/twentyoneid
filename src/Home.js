import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

const Home = () => {
    return(
        <div>
            <Nav/>
            <section className="section-even background-index">
                <div className="container">
                    <div className="row m-t-50">
                        <div className="col-md-6 col-sm-12">
                            <h1 className="text-orange animated fadeInUp">
                                <span className="text-dark">Together</span>
                                <span className="text-orange"> Stronger</span>
                            </h1>
                            <div className="intro-text text-muted font-semibold animated fadeInUp delay-1">
                                Twenti.one menyediakan layanan digital marketing lengkap mulai dari 
                                Social Media manajemen, Search Engine Optimization (SEO), Content 
                                Marketing hingga Event Organizer.
                                <br/>
                                Bersama-sama kita akan wujudkan keinginan Anda.
                            </div>
                            <br/>
                            <button className="btn btn-primary btn-md btn-wide animated fadeInUp delay-2">HIRE US</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-odd" id="services">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title animatable fadeInUp">Services</h2>
                        <p className="section-description"></p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 animatable fadeInUp delay-1">
                            <div className="box">
                                <div className="icon">
                                    <a href="">
                                        <img src="./images/campaign.png" style={{width:'100px'}}/>
                                    </a>
                                </div>
                                <h4 className="title"><a href="">Digital Campaign</a></h4>
                                <p className="description">
                                    Perubahan market trend menjadi online marketplace mendorong 
                                    pemilik bisnis untuk segera menyusun strategi tersendiri agar 
                                    mampu bersaing. Cukup duduk manis saja, biarkan kami yang 
                                    merancang strategi pemasaran digital Anda.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 animatable fadeInUp delay-1">
                            <div className="box">
                                <div className="icon">
                                    <a href="">
                                        <img src="./images/digital_ad.png" style={{width:'90px'}}/>
                                    </a>
                                </div>
                                <h4 className="title"><a href="">Digitial Advertising</a></h4>
                                <p className="description">
                                    Cukup beritahu kami apa yang ingin Anda capai, Awarness, Engagement atau bahkan Leads? 
                                    Kami siap bekerja bersama mewujudkan goal Anda.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 animatable fadeInUp delay-1">
                            <div className="box">
                                <div className="icon">
                                    <a href="">
                                        <img src="./images/smm.png" style={{width:'100px'}}/>
                                    </a>
                                </div>
                                <h4 className="title"><a href="">Social Media Management</a></h4>
                                <p className="description">
                                    Kami dapat membantu Anda menyusun conten sosial media yang lebih menarik, 
                                    berisi dan terukur untuk mencapai goal pemasaran.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-20">
                        <div className="col-lg-2 col-md-2 col-sm-2"></div>
                        <div className="col-lg-4 col-md-6 col-sm-12 animatable fadeInUp delay-2">
                            <div className="box">
                                <div className="icon">
                                    <a href="">
                                        <img src="./images/content.png" style={{width:'90px'}}/>
                                    </a>
                                </div>
                                <h4 className="title"><a href="">Content Marketing</a></h4>
                                <p className="description">
                                    Content adalah jiwa sebuah campaign, serahkan pada kami content marketing 
                                    yang Anda butuhkan. Mulai dari artikel, grafis hingga video production. Dapatkan 
                                    lebih banyak leads dan customer dengan content istimewa.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 animatable fadeInUp delay-2">
                            <div className="box">
                                <div className="icon">
                                    <a href="">
                                        <img src="./images/web_development.png" style={{width:'100px'}}/>
                                    </a>
                                </div>
                                <h4 className="title"><a href="">Web Development</a></h4>
                                <p className="description">
                                    Dibutuhkan strategi khusus untuk membangun sebuah website yang kuat dan berpengaruh. 
                                    Kami akan membantu Anda menciptakan website dengan tampilan yang sesuai dengan visi 
                                    misi perusahaan.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    </div>
                    <div className="row m-t-20">
                        <div className="col-lg-2 col-md-2 col-sm-2"></div>
                        <div className="col-lg-4 col-md-6 col-sm-12 animatable fadeInUp delay-3">
                            <div className="box">
                                <div className="icon">
                                    <a href="">
                                        <img src="./images/eo.png" style={{width:'140px'}}/>
                                    </a>
                                </div>
                                <h4 className="title"><a href="">Event Organizer</a></h4>
                                <p className="description">
                                    Meski market telah bergeser ke online namun kami tidak melupakan 
                                    pentingnya peran aktifitas offline. Dukungan strategi digital 
                                    plus aktifitas online yang terukur akan menciptakan pemasaran 
                                    yang lebih masif.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 animatable fadeInUp delay-3">
                            <div className="box">
                                <div className="icon">
                                    <a href="">
                                        <img src="./images/seo.png" style={{width:'130px'}}/>
                                    </a>
                                </div>
                                <h4 className="title"><a href="">Search Engine Optimization</a></h4>
                                <p className="description">
                                    Menjadi nomer 1 dihalaman Search engine seperti google adalah goal setiap 
                                    pebisnis. Setiap orang akan menjadikan website Anda sebagai rujukan 
                                    sebelum melakukan aktifitas buying. Website Anda akan lebih menggema 
                                    ketika di optimasi. Percayakan itu kepada kami.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    </div>

                </div>
            </section>
            <section className="section-even" id="about">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title animatable fadeInUp">Our Client & Partners</h2>
                        <p className="section-description animatable fadeInUp delay-1">Media Placement</p>
                    </div>
                    <div className="image-show-desktop">
                        <div className="m-t-30 shipper-logo-display animatable fadeInUp delay-2">
                            <img
                                src="./images/client/logo_toyota.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_mitsubishi.png"
                                className="shipper-logo-portrait"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_gmt.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_soraya.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_stabilo.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_valbury.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                        </div>
                        <div className="m-t-30 shipper-logo-display animatable fadeInUp delay-2">
                            <img
                                src="./images/client/logo_lg.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_sinarmeadow.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_qatar.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_kominfo.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_kdk.png"
                                className="shipper-logo-portrait"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_pgn.png"
                                className="shipper-logo-portrait"
                                alt="logo"
                            />
                        </div>
                        <div className="m-t-30 shipper-logo-display animatable fadeInUp delay-3">
                            <img
                                src="./images/client/logo_ckm.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_bsm.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_jakon.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_altrak.png"
                                className="shipper-logo-portrait"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_agit.png"
                                className="shipper-logo-portrait"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_dcrepes.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                        </div>
                        <div className="m-t-30 shipper-logo-display animatable fadeInUp delay-3">
                            <img
                                src="./images/client/logo_ahm.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_elcy.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_mybrand.jpeg"
                                className="shipper-logo"
                                alt="logo"
                            />
                        </div>
                    </div>
                    <div className="image-show-991">
                        <div className="m-t-30 shipper-logo-display animatable fadeInUp delay-2">
                            <img
                                src="./images/client/logo_toyota.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_mitsubishi.png"
                                className="shipper-logo-portrait"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_gmt.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_soraya.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_stabilo.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_valbury.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_lg.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_sinarmeadow.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_qatar.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_kominfo.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_kdk.png"
                                className="shipper-logo-portrait"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_pgn.png"
                                className="shipper-logo-portrait"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_ckm.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_bsm.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_jakon.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_altrak.png"
                                className="shipper-logo-portrait"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_agit.png"
                                className="shipper-logo-portrait"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_dcrepes.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_ahm.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_elcy.png"
                                className="shipper-logo"
                                alt="logo"
                            />
                            <img
                                src="./images/client/logo_mybrand.jpeg"
                                className="shipper-logo"
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
export default Home;