import React from 'react'
import './App.css'
import styled from 'styled-components'
import { device } from './config/devices'
import { COLORS } from './config/colors'
import { arrow, face, leftArrow, marsSymbol, venusSymbol } from './assets'
import { Paragraph } from './components/Typography'
import TextInput from './components/TextInput'
import { genders, memberShips } from './config/static'
import PrimaryButton from './components/button'
import "rsuite/dist/rsuite.min.css";
import { Animation } from 'rsuite';

interface IProps {
  section: number
}

function App () {
  const [section, setSection] = React.useState(0)

  return (
    <Container>
      <LeftContainer>
        <LeftContent>
          <img src={face} alt='face' />
          <Paragraph font={700} size={40} center>
            Front-end challenge!
          </Paragraph>

          <Paragraph font={300} size={28} center>
            This is a design that you will need to code up and impress us.
          </Paragraph>
          {section === 0 && (
          <ArrowContainer onClick={() => setSection(1)}>
          <img src={arrow} alt='face' />
        </ArrowContainer>
          )}

          {section === 1 && (
                      <ArrowContainer onClick={() => setSection(0)}>
          
                      <img src={leftArrow} alt='face' />
                      </ArrowContainer>
          )}


        </LeftContent>
      </LeftContainer>
      <RightContainer section={section}>

        <RightContent>
          {section === 0 ? (
                      <Animation.Slide in={true} placement='right'>
            <div>
              <Paragraph font={700} size={40}>
                My world today
              </Paragraph>

              <Paragraph font={300} size={23}>
                pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. <b style={{textDecoration:'underline'}}>View all days</b>
                {' '}eu libero sit amet quam egestas semper. Aenean ultricies mi
                vitae est. Mauris placerat eleifend leo. Quisque sit amet est et
                sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum,
                elit eget tincidunt condimentum, eros ipsum rutrum orci,
                sagittis tempus lacus enim ac dui. Donec non enim in turpis
                pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
                faucibus, tortor neque egestas augue, eu vulputate magna eros eu
                erat. Aliquam erat
              </Paragraph>
            </div>
            </Animation.Slide>
          ) : (
            <Animation.Slide in={true} placement='left'>
            <div style={{ width: '100%' }}>
              <TextInput label='Name' />
              <GenderWrapper>
                <Paragraph font={300} size={12}>
                  Gender
                </Paragraph>
                <GenderContainer>
                  {genders.map(gender => (
                    <div
                      key={gender.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div
                        style={{
                          width: '50px',
                          height: '50px',
                          backgroundColor: COLORS.PaleGrey,
                          borderRadius: '50%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        {gender.icon}
                      </div>
                      <div
                        style={{
                          marginLeft: '10px'
                        }}
                      >
                        <Paragraph
                          font={300}
                          size={12}
                          color={COLORS.GenderText}
                        >
                          {gender.title}
                        </Paragraph>
                      </div>
                    </div>
                  ))}
                </GenderContainer>
              </GenderWrapper>
              <TextInput label='Date of Birth' type='date' />
              <TextInput label='Email' type='email' />
              <TextInput label='Mobile' type='number' />
              <TextInput label='Customer ID' type='text' />

              <GenderWrapper>
                <Paragraph font={300} size={12}>
                  MemberShip
                </Paragraph>
                <GenderContainer>
                  {memberShips.map(memberShip => (
                    <div
                      key={memberShip.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div
                        style={{
                          width: '50px',
                          height: '50px',
                          backgroundColor: memberShip.background,
                          borderRadius: '50%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        {memberShip.icon}
                      </div>
                      <div
                        style={{
                          marginLeft: '10px'
                        }}
                      >
                        <Paragraph
                          font={300}
                          size={12}
                          color={COLORS.GenderText}
                        >
                          {memberShip.title}
                        </Paragraph>
                      </div>
                    </div>
                  ))}
                </GenderContainer>
              </GenderWrapper>

              <ButtonWrapper>
                <PrimaryButton
                  color='#000000'
                  background={COLORS.PaleGrey}
                  title='CANCEL'
                  style={{
                    marginRight: '20px'
                  }}
                />
                <PrimaryButton
                  color='#FFFFFF'
                  background={COLORS.BlueGreen}
                  title='SAVE'
                />
              </ButtonWrapper>
            </div>
            </Animation.Slide>
          )}
        </RightContent>

      </RightContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.laptop} {
    flex-direction: row;
    borderradius: 50px;
  }
`

const LeftContainer = styled.div`
  width: 100%;
  padding: 7%;
  background-color: ${COLORS.Yellow};
  height: 100vh;
  @media ${device.laptop} {
    width: 40%;
  }
`

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
`

const RightContainer = styled.div<IProps>`
  background-color: ${({ section }) =>
    section === 0 ? COLORS.Tangerine : '#FFFFFF'};
  min-height: 100vh;
  padding: 30px;
  @media ${device.laptop} {
    width: 60%;
    padding: 7%;
  }
`

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  height: 100%;
`

const ArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.CharcoalGrey};
  border-radius: 50%;
  cursor: pointer;
`
const GenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  @media ${device.laptop} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

const GenderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  @media ${device.laptop} {
    width: 80%;
  }
`

const ButtonWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 20px;
@media ${device.laptop} {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
`;

export default App
