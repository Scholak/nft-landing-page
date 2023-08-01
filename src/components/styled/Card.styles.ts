import styled from 'styled-components'
import { SectionWrapper } from '../shared/Section.styles'
import { motion } from 'framer-motion'

export const CardsSectionWrapper = styled(SectionWrapper)`
	position: relative;

	&:before {
		content: '';
		position: absolute;
		bottom: -40px;
		left: 0;
		height: 40px;
		width: 100%;
		border-bottom: 1px solid #9b55fc;
		border-radius: 50%;
		z-index: -1;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}) {
		&:before {
			bottom: -100px;
			height: 100px;
		}
	}
`

export const CardContainer = styled.div`
	display: grid;
	gap: 50px;
	margin-top: 25px;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		grid-template-columns: repeat(2, 1fr);
		gap: 75px;
		margin-top: 50px;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		grid-template-columns: repeat(4, 1fr);
		gap: 125px;
		margin-top: 75px;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}) {
		gap: 150px;
	}
`

export const Card = styled(motion.div)`
	display: grid;
	gap: 20px;
	color: ${({ theme }) => theme.colors.white};
	font-family: 'Inter', sans-serif;

	img {
		display: block;
		width: 30%;
		margin: 0 auto;
	}

	h4 {
		font-size: 20px;
		font-weight: 500;
		text-align: center;
	}

	p {
		font-weight: 300;
		line-height: 1.5;
		text-align: center;
	}
`