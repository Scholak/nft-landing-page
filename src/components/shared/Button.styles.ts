import styled from 'styled-components'

export const Button = styled.button`
	position: relative;
	outline: none;
	border: none;
	padding: 16px 48px;
	color: ${({ theme }) => theme.colors.white};
	background: ${({ theme }) => theme.colors.midnightBlue};
	border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

	&:before {
		content: '';
		position: absolute;
		width: calc(100% + 4px);
		height: calc(100% + 4px);
		top: -2px;
		left: -2px;
		background: linear-gradient(
			to right,
			${({ theme }) => theme.colors.dodgerBlue},
			${({ theme }) => theme.colors.pink}
		);
		border-radius: 6px;
		z-index: -1;
	}
`