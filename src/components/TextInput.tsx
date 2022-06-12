import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../config/colors'
import { device } from '../config/devices'
import { Paragraph, Span } from './Typography'


interface ITextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string
  type?: string
  placeholder?: string
  width?: number
  label?: string
  inputRef?: React.RefObject<HTMLInputElement>,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
interface IProps {
  width?: number
}

export default function TextInput ({
  defaultValue = '',
  placeholder,
  width,
  label,
  inputRef,
  onChange,
  value,
  type ='text',
  ...rest
}: ITextInput) {

  return (
    <Group width={width}>
      <Paragraph font={300} size={12}>{label}</Paragraph>
      <Input
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...rest}
        onChange={onChange}
        value={value}
        type={type}
        ref={inputRef}
      />

    </Group>
  )
}

const Group = styled.div<IProps>`

  width: ${({ width }) => width || 100}%;
  @media ${device.laptop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`


const Input = styled.input`
  padding: 15px;
  background: ${COLORS.PaleGrey};
  box-sizing: border-box;
  border-radius: 5px;
  color: #333;
  font-family: inherit;
  font-size: 16px;
  border: 1px solid #e7e7e7;
  width: 100%;
  outline: none;
  @media ${device.laptop} {
    width: 80%;
    margin-bottom: 20px;
  }
`
