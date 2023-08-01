import styled from 'styled-components'
import { SectionWrapper } from '../shared/Section.styles'
import { motion } from 'framer-motion'

export const HeroSectionWrapper = styled(SectionWrapper)`
	position: relative;
	display: flex;
	flex-direction: column-reverse;
	margin-top: 0;
	gap: 0;

	&:before {
		content: '';
		position: absolute;
		inset: 0;
		top: 95%;
		border-bottom-left-radius: 50%;
		border-bottom-right-radius: 50%;
		background: ${({ theme }) => theme.colors.darkBLueLighen};
		z-index: -2;
	}

	&:after {
		content: '';
		position: absolute;
		inset: 0;
		bottom: 5%;
		background: linear-gradient(
			to bottom,
			${({ theme }) => theme.colors.darkBlue},
			${({ theme }) => theme.colors.darkBLueLighen}
		);
		z-index: -2;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		gap: 40px;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		margin-top: 80px;
		gap: 60px;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		flex-direction: row;

		&:before {
			top: 85%;
		}

		&:after {
			bottom: 15%;
		}
	}
`

export const HeroImage = styled(motion.div)`
	img {
		display: block;
		max-width: 100%;
		max-height: 100%;
	}
`

export const Shadow = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	box-shadow: 0 0 200px 200px ${({ theme }) => theme.colors.electricPurple},
		0 0 400px 225px ${({ theme }) => theme.colors.pink},
		0 0 600px 300px ${({ theme }) => theme.colors.royalBLue};
		z-index: -1;
`

export const Content = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	gap: 20px;

	h1 {
		font-family: 'Jura', sans-serif;
		font-size: 48px;
		font-weight: 500;
		line-height: 1.5;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(
			to bottom,
			${({ theme }) => theme.colors.lavenderPink},
			${({ theme }) => theme.colors.periwinkle}
		);
	}

	p {
		line-height: 1.5;
		color: ${({ theme }) => theme.colors.white};
		font-weight: 300;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		width: 50%;
		gap: 60px;

		h1 {
			font-size: 72px;
			line-height: 1.3;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}) {
		padding-right: 150px;
	}
`

export const CTA = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	img {
		width: 72px;
		height: 72px;
		transform: translateY(8px);
	}

	div {
		font-family: 'Poppins', sans-serif;

		p:first-child {
			font-weight: bold;
			font-size: 20px;
			margin-bottom: 12px;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		div p:last-child {
			width: 300px;
		}
	}
`