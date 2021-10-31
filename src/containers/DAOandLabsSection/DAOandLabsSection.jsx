import React from 'react';
import SectionPadding from '../../components/SectionPadding/SectionPadding';
import './DAOandLabsSection.scss';

const Card = props =>{
    return(
        <div className = "card">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

const Button = props =>{
    const {text} = props;
    return(
        <button>{text}</button>
    )
}

const DAOandLabsSection = props =>{
    return(
        <div className = "dao-and-labs-section">
            <SectionPadding>
            <div className = "first-block">
                <div className ="left-side">
                    <h3>Honey Finance is run by our DAO and operated by Honey Labs.</h3>
                </div>
                <Card
                    title = "Honey DAO"
                    text = "Governed by the Honey token, the DAO allows stakeholders to decide vote on strategy. The  Honey DAO also governs the treasury, emissions, and insurance funds of the protocol."
                />
            </div>
            <div className = "second-block">
                <div className = "left-side">
                    <div className = "buttons-container">
                        <Button text = "Whitepaper"/>
                        <Button text = "Documentation"/>
                    </div>                    
                </div>

                <Card
                    title = "Honey Labs"
                    text = "Honey Labs builds the protocol and proposes changes to the DAO. It oversees day to day operations and implements changes to the protocol."
                />
            </div>
            </SectionPadding>
        </div>
    )
}

export default DAOandLabsSection;