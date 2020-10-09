import React, {Component} from 'react';
import win from '../../Resources/images/win.png'
import {Tag} from '../ui/misc';
import stripes from '../../Resources/images/stripes.png';


class WinJersey extends Component {

    render() {
        return (

            <div className="the_team_container"
                 style={{background: `url(${stripes}) repeat`}}
            >
                <div className="container win_j">
                    <div style={{paddingTop: '50px'}}>
                        <Tag
                            bck="#00202e"
                            size="40px"
                            weight="bold"
                            color="#ffffff"
                            margin="5px 20px"

                        >
                            Հաղթիր քո «ջերսին»
                        </Tag>
                        <div style={{ paddingLeft: "20px",paddingTop: "20px"}}>
                            ՍԻրելի այցելու, մենք ժամանակ առ ժամանակ անցկացնում ենք խաղարկություններ,
                            մրցույթներ, որտեղ կարող եք հաղթել ձեր սիրելի ֆուտբոլիստի կամ սիրելի ակումբի
                            մարզաշապիկը կամ համազգեստը։ Խաղարկությունների մասին միշտ տեղյակ լինելու համար
                            հետևեք մեր <b><a href="https://www.facebook.com/jerseyarmenia/" title="facebook.com">«instagram»</a></b>֊ին
                            և <b><a href="https://www.facebook.com/jerseyarmenia/" title="instagram.com">«facebook»</a></b>֊ին:
                        </div>
                    </div>
                    <div style={{width: "100%"}}>
                        <div style={{
                            width: "100%",
                            height: "500px",

                            backgroundImage: `url(${win})`,
                            backgroundRepeat: "no-repeat"
                        }}>

                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default WinJersey;

