import styled from 'styled-components'
import { device } from '../config/devices'

interface IProps {
  center?: boolean
  size?: number
  font?: number
  color?: string
  position?: 'left' | 'right' | 'center'
}

export const TextHeader = styled.h1<IProps>`
  font-style: normal;
  font-size: ${({ size }) => size || 30}px;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  line-height: 25px;
  @media ${device.laptop} {
    font-size: 25px;
  }
`

export const Subtitle = styled.h4<IProps>`
  font-style: normal;
  font-weight: bold;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 10px;
  @media ${device.laptop} {
    font-size: 20px;
  }
`

export const Paragraph = styled.p<IProps>`
font-family: 'Poppins', sans-serif; 
  font-style: normal;
  font-weight: ${({ font }) => (font ? font : 'normal')};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  font-size: ${({ size }) => (size ? size > 40 ? 40 :size : 18)}px;
  color: ${({ color }) => (color ? color : '#000000')};

  @media ${device.laptop} {
    font-size: ${({ size }) => (size ? size : 14)}px;
  }
`

export const Span = styled.span<IProps>`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  color:${({ color }) => (color ? color : '#000000')};
  font-weight: ${({ font }) => (font ? font : 'normal')};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  font-size: ${({ size }) => (size ? size > 40 ? 40 :size : 12)}px;
  
  @media ${device.laptop} {
    font-size: ${({ size }) => (size ? size : 14)}px;
  }
`

export const Header = styled.p<IProps>`
font-family: 'Poppins', sans-serif; 
  font-style: normal;
  font-weight: ${({ font }) => (font ? font : 'normal')};
  text-align: ${({ position }) => (position ? position : 'center')};
  font-size: ${({ size }) => (size ? size > 25 ? 25 :size : 12)}px;
  color: ${({ color }) => (color ? color : '#000000')};

  @media ${device.laptop} {
    font-size: ${({ size }) => (size ? size : 14)}px;
  }
`
