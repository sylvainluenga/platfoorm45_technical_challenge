import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../config/colors'
import { device } from '../config/devices'
import { Span } from './Typography'

interface IPrimaryBtn {
  title?: string
  onClick?: () => void
  isSubmit?: boolean
  width?: string
  icon?: JSX.Element
  color: string
  background: string
  style ?: React.CSSProperties
}

interface IProps {
  background: string
}

function PrimaryButton({
  title,
  onClick,
  isSubmit,
  width ,
  color,
  background,
  style
}: IPrimaryBtn) {
  return (
        <Button
          style={style}
          type={isSubmit ? 'submit' : 'button'}
          onClick={onClick}
          background={background}
        >
          <Span color={color} center>{title}</Span>
        </Button>
  )
}

const Button = styled.button<IProps>`
  width: 100%;
  background: ${({ background }) =>
  background};
  border-radius: 6px;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
  align-items: center;
  text-align: center;
  letter-spacing: 0.75px;
  margin-bottom: 15px;
  cursor: pointer;
  padding: 15px;
  display: flex;
  justify-content: center;
  @media ${device.laptop} {
    width: 30%;
  }
`

export default PrimaryButton
