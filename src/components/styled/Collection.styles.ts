import styled from 'styled-components'
import { SectionWrapper } from '../shared/Section.styles'
import { motion } from 'framer-motion'

export const CollectionsSectionWrapper = styled(SectionWrapper)`
	position: relative;
	display: grid;
	gap: 40px;

	&:before {
		content: '';
		position: absolute;
		top: 10%;
		bottom: 30%;
		left: 0;
		box-shadow: 0 0 400px 150px ${({ theme }) => theme.colors.pink},
			0 0 800px 200px ${({ theme }) => theme.colors.royalBLue};
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		&:before {
			top: 30%;
			transform: translateY(-50%);
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}) {
		grid-template-columns: repeat(2, 1fr);
		gap: 300px;

		&:before {
			top: 50%;
		}
	}
`

export const RightContent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		gap: 30px;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		gap: 40px;
	}
`

export const CollectionContainer = styled.div`
	display: grid;
	gap: 60px;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		grid-template-columns: repeat(2, 1fr);
		gap: 100px;
	}
`

export const Collection = styled(motion.div)`
	margin: auto;
	color: ${({ theme }) => theme.colors.white};
	font-weight: 600;
	border: 1px solid ${({ theme }) => theme.colors.white};

	& > * {
		transform: translate(20px, -30px);
	}

	& > img {
		width: calc(100% + 20px);
		padding: 10px;
		background: ${({ theme }) => theme.colors.darkBlue};
	}

	& > p {
		margin: 10px 0;
	}

	div {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}) {
		&:nth-child(2n) {
			transform: translateY(100px);
		}
	}
`