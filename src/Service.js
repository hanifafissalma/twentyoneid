import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './static/scss/_core.scss';

const Service = () => {
    return(
        <div>
            <Nav/>
            <section className="section-even">
                <h1 className="text-dark text-center animated fadeInUp">Our Service</h1>
                <br/>
                <div className="row -flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src="./images/campaign.png" alt="service" className="animated fadeInUp"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2 className="text-orange animated fadeInUp delay-1">Digital Campaign</h2>
                        <div className="intro-text animated fadeInUp delay-1">
                            Perubahan market trend menjadi online marketplace mendorong pemilik bisnis untuk segera menyusun strategi tersendiri agar mampu bersaing. Cukup duduk manis saja, biarkan kami yang merancang strategi pemasaran digital Anda.
                        </div>
                        <br/>
                        <h3 className="text-orange animated fadeInUp delay-2">What we do?</h3>
                        <ol className="intro-text">
                            <li className="m-b-20 animated fadeInUp delay-3">
                                Riset produk<br/>
                                Menganalisis setiap kelebihan produk untuk dikemas menarik dalam sebuah konten
                            </li>
                            <li className="m-b-20 animated fadeInUp delay-4">
                                Media<br/>
                                Menganalisis media/channel yang tepat untuk pemasaran konten yang sesuai dengan goalsMenganalisis setiap kelebihan produk untuk dikemas menarik dalam sebuah konten
                            </li>
                            <li className="m-b-20 animated fadeInUp delay-5">
                                Optimasi<br/>
                                Menggunakan berbagai tools Digital Advertising mulai dari Search engine marketing, Google Display Network, Facebook & IG Ads hingga Youtube Ads.
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
            <section className="section-odd">
                <div className="row -flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2 className="text-orange animatable fadeInup">Social Media Management</h2>
                        <div className="intro-text animatable fadeInUp delay-1">
                            Kami dapat membantu Anda menyusun conten sosial media yang lebih menarik, 
                            berisi dan terukur untuk mencapai goal pemasaran. Layanan daily ini akan 
                            membantu Anda mendapatkan right audiens. Metode yang digunakan meliputi:
                        </div>
                        <ol className="intro-text">
                            <li className="m-t-20 m-b-20 animatable fadeInUp delay-2">
                                Konsep dan strategi
                            </li>
                            <li className="m-b-20 animatable fadeInUp delay-3">
                                Targeting audiens
                            </li>
                            <li className="m-b-20 animatable fadeInUp delay-4">
                                Optimasi konten
                            </li>
                            <li className="m-b-20 animatable fadeInUp delay-5">
                                Analytics dan reports
                            </li>
                        </ol>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src="./images/smm.png" alt="service" className="animatable fadeInUp"/>
                    </div>
                </div>
            </section>
            <section className="section-even">
                <div className="row -flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src="./images/web_development.png" alt="service" className="animatable fadeInUp"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2 className="text-orange animatable fadeInUp delay-1">Web Development</h2>
                        <div className="intro-text animatable fadeInUp delay-1">
                            Dibutuhkan strategi khusus untuk membangun sebuah website yang kuat dan 
                            berpengaruh. Kami akan membantu Anda menciptakan website dengan tampilan 
                            yang sesuai dengan visi misi perusahaan. Layanan yang kami tawarkan antara 
                            lain:
                        </div>
                        <div className="intro-text animatable fadeInUp delay-2 m-t-20 m-b-20">
                            Corporate website
                        </div>
                        <div className="intro-text animatable fadeInUp delay-2 m-b-20">
                            Product website
                        </div>
                        <div className="intro-text animatable fadeInUp delay-2 m-b-20">
                            E-commerce
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-odd">
                <div className="row -flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2 className="text-orange animatable fadeInup">Search Engine Optimization (SEO)</h2>
                        <div className="intro-text animatable fadeInUp delay-1">
                            Menjadi nomer 1 dihalaman Search engine seperti google adalah goal setiap pebisnis. 
                            Setiap orang akan menjadikan website Anda sebagai rujukan sebelum melakukan aktifitas 
                            buying. Website Anda akan lebih menggema ketika di optimasi. Percayakan itu kepada kami.
                        </div>
                        <div className="intro-text animatable fadeInUp delay-2">
                            SEO akan membantuk memacu trafik website Anda lebih dari 90% dan jaminan 
                            berada di <b className="text-orange">halaman pertama engine source (google)</b>.
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src="./images/seo.png" alt="service" className="animatable fadeInUp"/>
                    </div>
                </div>
            </section>
            <section className="section-even">
                <div className="row -flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src="./images/eo.png" alt="service" className="animatable fadeInUp"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2 className="text-orange animatable fadeInUp delay-1">Event Organizer</h2>
                        <div className="intro-text animatable fadeInUp delay-1">
                            Meski market telah bergeser ke online namun kami tidak melupakan pentingnya 
                            peran aktifitas offline. Dukungan strategi digital plus aktifitas online yang 
                            terukur akan menciptakan pemasaran yang lebih masif.
                        </div>
                        <ol className="intro-text">
                            <li className="m-t-20 m-b-20 animatable fadeInUp delay-2">
                                Media Monitoring
                            </li>
                            <li className="m-b-20 animatable fadeInUp delay-2">
                                Brand Activation
                            </li>
                            <li className="m-b-20 animatable fadeInUp delay-3">
                                CSR Activation
                            </li>
                            <li className="m-b-20 animatable fadeInUp delay-3">
                                Publishing
                            </li>
                            <li className="m-t-20 m-b-20 animatable fadeInUp delay-4">
                                Meeting Incentive Conference Exhibition
                            </li>
                            <li className="m-b-20 animatable fadeInUp delay-4">
                                Corporate Event
                            </li>
                            <li className="m-b-20 animatable fadeInUp delay-5">
                                Event Consultant
                            </li>
                            <li className="m-b-20 animatable fadeInUp delay-5">
                                Inflatable Screen Service & Rent
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
export default Service;