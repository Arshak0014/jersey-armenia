import React from 'react';

const Introduction = () => {

    return (
        <div  style={{background: "bisque", padding: '30px 0'}}>
            <div className="introduction_main">
                <div className="introduction_main_block">
                    <div style={{fontSize: "13px"}}>
                        <i className="fa fa-shopping-cart"></i>
                        <div className="introduction_main_block_title">Անվանի ապրանքանիշեր</div>
                        <div className="introduction_main_block_desc">Ընտրություն կատարեք մեր մեծ տեսականուց։</div>
                    </div>
                </div>
                <div className="introduction_main_block">
                    <div style={{fontSize: "13px"}}>
                        <i className="fa fa-truck"></i>
                        <div className="introduction_main_block_title">Առաքման մասին</div>
                        <div className="introduction_main_block_desc">Առաքումը երևանում 1000֊1500դրամ, մարզերում Հայփոստով՝ անվճար։</div>
                    </div>
                </div>

                <div className="introduction_main_block">
                    <div style={{fontSize: "13px"}}>
                        <i className="fa fa-comments-o"></i>
                        <div className="introduction_main_block_title">Հաճախորդների սպասարկում</div>
                        <div className="introduction_main_block_desc">Պատրաստ ենք պատասխանել Ձեր հարցերին կապի հարմար միջոցներով։</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Introduction;