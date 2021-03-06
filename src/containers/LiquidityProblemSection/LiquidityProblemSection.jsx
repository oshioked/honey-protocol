import React from 'react';
import LiquidityProblemCard from '../../components/LiquidityProblemCard/LiquidityProblemCard';
import SectionPadding from '../../components/SectionPadding/SectionPadding';
import './LiquidityProblemSection.scss';

const LiquidityProblemSection = props =>{
    return(
        <div className = "liquidity-problem-section">
            <SectionPadding>
                <div className = "container">
                    <h2>NFT liquidity problem</h2>
                    <div className = 'cards-container'>
                        <LiquidityProblemCard
                            title = "Opportunity cost"
                            textParagraphs = {[
                                `Liquidity in an NFT has an opportunity cost relative to Defi. By allocating capital to NFTs, you forego the
                                potential returns and yield of that capital being invested in DeFi`,
                                `If stablecoin farms are yielding 12% APR, the capital you allocate to NFTs has an implicit cost measured;`,
                                `(p x 1.12 - p) x y = opp. cost`,
                                `where p = purchase price of NFT, y = years holding NFT and opp. cost = opportunity cost of NFT`
                            ]}
                        />
                        <LiquidityProblemCard
                            title = "Non-fungibility"
                            textParagraphs = {[
                                `NFTs cannot be traded easily, and require you to wait sometimes days for buyers to purchase them from you.`,
                                `This often leads to undercutting floor prices and other unwanted behaviours`,
                                `Receiving immediate liquidity through collateralisation will reduce listings and reduce floor price volatility.`
                            ]}
                        />
                        <LiquidityProblemCard
                            title = "Unrealized gains"
                            textParagraphs = {[
                                `Buying an NFT cheap and seeing it 100x will only lead to gains if you sell said NFT, forcing you to no longer be part of the community you joined.`,
                                `Collateralising your NFT will let you profit from these gains without ever having to sell your beloved digital art.`,
                                `Flipping NFTs is no longer necessary, allowing projects to create more long lasting communities.`
                            ]}
                        />
                    </div>
                </div>
            </SectionPadding>
        </div>
    )
}

export default LiquidityProblemSection;