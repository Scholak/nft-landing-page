import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ChooseUsSectionWrapper = styled.section`
	position: relative;
	display: grid;
	gap: 50px;
	padding: 0 10px;
	margin: 150px 0;

	&:before {
		content: '';
		position: absolute;
		top: -100px;
		left: 0;
		height: calc(100% + 200px);
		width: calc(100%);
		background: ${({ theme }) => theme.colors.midnightBlue};
		border: 2px solid ${({ theme }) => theme.colors.pink};
		border-left: none;
		border-right: none;
		z-index: -1;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		margin: 200px 0;
		padding: 0 40px;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		grid-template-columns: repeat(2, 1fr);
		margin: 250px 0;
		padding: 0 80px;
		gap: 100px;

		&:before {
			width: calc(100% - 100px);
			border-top-right-radius: 300px;
			border-bottom-right-radius: 300px;
			border-right: 2px solid ${({ theme }) => theme.colors.pink};
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		gap: 200px;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}) {
		gap: 400px;
	}
`

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`

export const Feature = styled(motion.div)`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	padding: 32px 0;
	border-radius: 10px;
	border: 1px solid #f5fbf2;
	color: ${({ theme }) => theme.colors.white};

	&:before {
		content: '';
		position: absolute;
		z-index: -1;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		&:first-child,
		&:nth-child(2) {
			transform: translateX(-50px);
		}
	}
`

export const Features = styled.div`
	display: grid;
	gap: 20px;

	${Feature}:first-child:before {
		top: 10%;
		left: 40%;
		background: #ffb413;
		box-shadow: 0 0 50px 30px #ffb413;
	}

	${Feature}:nth-child(2):before {
		bottom: 30%;
		left: 50%;
		background: #ff5a13;
		box-shadow: 0 0 50px 30px #ff5a13;
	}

	${Feature}:nth-child(3):before {
		top: 20%;
		left: 40%;
		background: #2fb8eb;
		box-shadow: 0 0 50px 30px #2fb8eb;
	}

	${Feature}:last-child:before {
		bottom: 40%;
		right: 40%;
		background: #00e3a5;
		box-shadow: 0 0 50px 30px #00e3a5;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		grid-template-columns: repeat(2, 1fr);
		gap: 32px;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		margin-right: 50px;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		margin-right: 100px;
	}
`

