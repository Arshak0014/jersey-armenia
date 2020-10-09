import React, {Component} from 'react';
import ProductCard from "../ui/product_card";
import Fade from 'react-reveal/Fade';

import stripes from "../../Resources/images/stripes.png";

import {firebaseJerseys,firebase} from "../../firebase";
import {firebaseLooper, reverseArray} from "../ui/misc";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Promise} from 'core-js';
import {Tag} from '../ui/misc';

class TheCoats extends Component {

    state = {
        loading: true,
        jerseys: [],
        filterJerseys: [],
        teamFilter: 'All'
    };

    componentDidMount() {
        firebaseJerseys.limitToLast(200).once('value').then(snapshot => {
            const jerseys = firebaseLooper(snapshot);
            let promises = [];
            for(let key in jerseys){
                promises.push(
                    new Promise((resolve,reject) => {
                        firebase.storage().ref('jerseys')
                            .child(jerseys[key].image).getDownloadURL()
                            .then(url => {
                                jerseys[key].url = url;
                                resolve()
                            })
                    })
                )
            }

            Promise.all(promises).then(() => {
                this.setState({
                    loading: false,
                    jerseys: reverseArray(jerseys),
                    filterJerseys: reverseArray(jerseys)
                });
            })

        });

    }

    showJerseys = (jerseys) => (
        jerseys ?
            jerseys.map((jersey) => (
                jersey.type === 'Coats' && jersey.ageLimit === 'Adult' && (jersey.gender === 'Male' || jersey.gender === "Unisex") ?
                    <Fade left delay={jersey.id*10} key={jersey.id}>
                        <div className="item">
                            <div className="wrapper">
                                <ProductCard
                                    jersey={jersey}
                                />
                            </div>
                        </div>
                    </Fade>
                    : null

            ))
            :null
    );

    showFilteredTeam = (team) => {
        const list = this.state.jerseys.filter((jersey) => {
            return jersey.title === team
        });
        this.setState({
            filterJerseys: team === "All" ? this.state.jerseys : list,
            teamFilter: team
        })
    };

    render() {
        return (
            <div>
                <div className="the_team_container"
                     style={{background: `url(${stripes}) repeat`}}
                >
                    <div style={{
                        display: "flex",
                        justifyContent: 'center',
                        marginTop: '150px'
                    }}
                         className="admin_progress">
                        {this.state.loading ?
                            <CircularProgress thickness={7} style={{color: '#98c5e9',zIndex: '10'}}/>
                            : null
                        }
                        {this.state.loading ?
                            <div className="cyrcul"></div>
                            : null
                        }
                    </div>
                    { !this.state.loading ?
                        <div  className="container_the_shop">
                            <Tag
                                bck="#00202e"
                                size="20px"
                                weight="bold"
                                color="#ffffff"
                                margin="0px 20px"

                            >
                                Բաճկոններ
                            </Tag>

                            <div className="match_filters">
                                <div className="match_filters_box">
                                    <div className="cont">
                                        <div className={`option ${this.state.teamFilter === "All" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("All")}
                                        >
                                            All
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Real Madrid" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Real Madrid")}
                                        >
                                            #RealMadrid
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Barcelona" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Barcelona")}
                                        >
                                            #Barcelona
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Atletico" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Atletico")}
                                        >
                                            #Atletico
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "PSJ" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("PSJ")}
                                        >
                                            #PSJ
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Roma" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Roma")}
                                        >
                                            #Roma
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Juventus" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Juventus")}
                                        >
                                            #Juventus
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Inter" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Inter")}
                                        >
                                            #Inter
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Milan" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Milan")}
                                        >
                                            #Milan
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Napoli" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Napoli")}
                                        >
                                            #Napoli
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Bayern" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Bayern")}
                                        >
                                            #Bayern
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Borussia" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Borussia")}
                                        >
                                            #Borussia
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Liverpool" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Liverpool")}
                                        >
                                            #Liverpool
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Arsenal" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Arsenal")}
                                        >
                                            #Arsenal
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Manchester City" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Manchester City")}
                                        >
                                            #ManchesterCity
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Manchester United" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Manchester United")}
                                        >
                                            #ManchesterUnited
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Chelsea" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Chelsea")}
                                        >
                                            #Chelsea
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Tottenham" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Tottenham")}
                                        >
                                            #Tottenham
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Ajax" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Ajax")}
                                        >
                                            #Ajax
                                        </div>
                                    </div>
                                    <div style={{marginTop: '5px'}} className="cont">
                                        <div className={`option ${this.state.teamFilter === "Italy" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Italy")}
                                        >
                                            #Italy
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "France" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("France")}
                                        >
                                            #France
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Brazil" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Brazil")}
                                        >
                                            #Brazil
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Argentina" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Argentina")}
                                        >
                                            #Argentina
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "England" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("England")}
                                        >
                                            #England
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Russia" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Russia")}
                                        >
                                            #Russia
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Germany" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Germany")}
                                        >
                                            #Germany
                                        </div>
                                        <div className={`option ${this.state.teamFilter === "Spain" ? "active" : ""}`}
                                             onClick={() => this.showFilteredTeam("Spain")}
                                        >
                                            #Spain
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container_table">
                                {this.showJerseys(this.state.jerseys)}
                            </div>

                        </div>
                        : null
                    }

                </div>
            </div>
        );
    }
}

export default TheCoats;
