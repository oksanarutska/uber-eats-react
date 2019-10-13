import React from 'react';
import './Header.scss';

function Header() {

    return (
        <div className={"wrapper_header"}>
            <div className={"wrapper "}>
                <div className={"header"}>

                    <div>
                        <a href={"#"}>
                            <p className={"header_logo"}>uber<span>eats</span></p>


                        </a></div>
                    <div className={"header_location"}>
                        <select className={"wrapper_choose"}>
                            <option className={"choose_date"}>ASAP</option>
                        </select>

                        <p>to</p>
                        <div className={"wrapper_location"}>
                            <input className={'location'}/>
                            <img src={require('../assets/image/icon-location.png')}/>
                        </div>


                    </div>
                    <div className={"header_button"}>
                        <a href={"#"} className={"button_sing"}>Sing In</a>
                        <a href={"#"} className={"button_sing button_register"}>Register</a>
                        <a href={"#"} className={"button_bag"}>
                            <img src={require('../assets/image/shopping-bag.png')}/>
                        </a>

                    </div>


                </div>


            </div>

        </div>



    );
}

export default Header;
