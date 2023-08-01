import styled from 'styled-components'

interface InputProps {
  width: string
}

export const Input = styled.input<InputProps>`
	outline: none;
	border: none;
	width: ${({ width }) => width}px;
	max-width: 100%;
	height: 60px;
	border-radius: 5px;
	color: ${({ theme }) => theme.colors.white};
	background: ${({ theme }) => theme.colors.midnightBlue};
	text-align: center;
	font-size: 16px;
	font-weight: 600;
`