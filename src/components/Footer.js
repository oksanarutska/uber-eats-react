import React from 'react'
import './Footer.scss'


function Footer() {
    return (

        <div className={"wrapper_footer"}>
            <div className={"wrapper"}>
                <div className={"footer"}>
                    <div className={"footer_logo"}>
                        <p>uber<span>eats</span></p>
                    </div>
                    <div className={"wrapper_menu"}>
                        <div className={"footer_options"}>
                            <select className={'select_language'}>
                                <option>english</option>
                            </select>
                            <a className={"text_logo"} href={"/"}><span>#</span>UberEats</a>
                            <div>
                                <a href={"/"}> <img src={require('../assets/image/facebook .png')}/></a>
                                <a href={"/"}> <img src={require('../assets/image/twitter.png')}/></a>
                            </div>

                        </div>

                        <div className={"menu"}>


                            <a href={"/"} className={"menu_element"}>About UberEats</a>
                            <a href={"/"} className={"menu_element"}>Become a Delivery Partner</a>
                            <a href={"/"} className={"menu_element"}>Become a Restaurant Partner</a>


                        </div>

                        <div className={"menu"}>


                            <a href={"/"} className={"menu_element"}>See all cities</a>
                            <a href={"/"} className={"menu_element"}>Pricing</a>
                            <a href={"/"} className={"menu_element"}>Help</a>
                            <a href={"/"} className={"menu_element"}>FAQs</a>


                        </div>

                    </div>
                    <div className={"wrapper_use"}>
                        <a href={"/"}><img src={require('../assets/image/app_store.png')}/></a>
                        <a  href={"/"}><img src={require('../assets/image/en_badge_web.png')}/></a>

                    </div>
                    <div className={"wrapper_privacy"}>
                        <div><a href={"/"}>© 2017 Uber Technologies Inc.</a></div>
                        <div><a href={"/"}>Privacy</a></div>
                        <div><a href={"/"}>Terms</a></div>

                    </div>

                </div>

            </div>

        </div>
    )

}

export default Footer;