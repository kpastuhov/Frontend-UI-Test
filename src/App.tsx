import './App.css';
import 'antd/dist/antd.css';
import { FOOTER_TEXT } from './constants';
import { data } from './data';
import { Rate, Progress } from 'antd';
import styled from "styled-components";

const CommonText = styled.div `
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
`;
const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  padding: 16px 16px 12px;
  border: 1px solid #E4E4E4;
  border-radius: 12px;
  gap: 16px;
  max-width: 1110px;
`;
const MainContent = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;
const Footer = styled(CommonText) `
  align-self: center;
  padding: 0 88px;
  text-align: center;
  color: #CED0D5;
`;
const BrandImage = styled.img `
  width: 96px;
  height: 48px;
  padding: 0 8px 0;
`;
const BonusWrapper = styled.div `
  max-width: 276px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const GetBonus = styled(CommonText) `
  max-width: 240px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;
const NewPlayer = styled(CommonText) `
  color: #0F84EB;
`;
const BonusFooter = styled(CommonText) `
  color: #A5A5AB;
`;
const BonusAge = styled.span `
  color: #C90A0A;
`;
const GamesWrapper = styled.div `
  display: flex;
  gap: 24px;
`;
const GameContainer = styled.div `
  width: 72px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const GameImage = styled.img `
  height: 44px;
  border-radius: 5px;
`;
const GameDescription = styled(CommonText) `
  height: 28px;
  text-align: center;
  text-decoration-line: underline;
  color: #929292;
`;
const RateContainer = styled.div `
  align-self: flex-start;
  width: 88px;
  height: 42px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const RateComp = styled(Rate) `
  font-size: 17px;
  color: #FF9500;
`;
const VotesCount = styled(CommonText) `
  color: #A5A5AB;
  margin-bottom: 4px;
`;
const LinkText = styled(CommonText) `
  text-decoration-line: underline;
  color: #0F84EB;
`;
const GetBonusContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: center;
`;
const GetBonusButton = styled.button `
  width: 132px;
  height: 44px;
  background: #C90A0A;
  border-radius: 40px;
  border: unset;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(CommonText) `
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: white;
`;

const ButtonDescription = styled(CommonText) `
  color: #A5A5AB;
`;

const {
  providerName,
  providerLogo,
  providerBonus,
  slotsImages,
  providerRating,
  providerVisitLink,
  minDeposit,
  minDepositLabel,
  providerScore
} = data;
const brandImageUrl = providerLogo.logo.src;
const { 
  offerTitle,
  offerSubText,
  offerAge,
  offerSite
} = providerBonus;

const [moneyTrain, fluffy, starburst] = slotsImages;

function App() {
  return (
    <Wrapper>
      <MainContent>
        <BrandImage src={brandImageUrl} alt={providerName} />
        <BonusWrapper>
          <GetBonus>
            {offerTitle}
          </GetBonus>
          <NewPlayer>
            {offerSubText}
          </NewPlayer>
          <BonusFooter>
            <BonusAge>{offerAge}</BonusAge>
            , {offerSite}
          </BonusFooter>
        </BonusWrapper>
        <GamesWrapper>
          <GameContainer>
            <GameImage src={moneyTrain.image.src} alt={moneyTrain.text} />
            <GameDescription>{moneyTrain.text}</GameDescription>
          </GameContainer>
          <GameContainer>
            <GameImage src={fluffy.image.src} alt={fluffy.text} />
            <GameDescription>{fluffy.text}</GameDescription>
          </GameContainer>
          <GameContainer>
            <GameImage src={starburst.image.src} alt={starburst.text} />
            <GameDescription>{starburst.text}</GameDescription>
          </GameContainer>
        </GamesWrapper>
        <RateContainer>
          <RateComp allowHalf defaultValue={4.5} />
          <VotesCount>Votes ({providerRating.votes})</VotesCount>
          <LinkText>{providerRating.linkText}</LinkText>
        </RateContainer>
        <Progress type="circle" format={() => providerScore.score} strokeColor="#F5A623" percent={60} width={58} />
        <GetBonusContainer>
          <GetBonusButton>
            <ButtonText>
              {providerVisitLink.text}
            </ButtonText>
          </GetBonusButton>
          <ButtonDescription>
              {minDepositLabel} - {minDeposit}
            </ButtonDescription>
        </GetBonusContainer>
      </MainContent>
      <Footer>
        {FOOTER_TEXT}
      </Footer>
    </Wrapper>
  );
}

export default App;
