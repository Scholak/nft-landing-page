import styled  from 'styled-components'

export const Paragraph = styled.p`
	font-family: 'Poppins', sans-serif;
	font-size: 20px;
	line-height: 1.5;
	color: ${({ theme }) => theme.colors.seaGreen};
`