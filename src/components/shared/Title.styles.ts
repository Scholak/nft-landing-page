import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

interface TitleProps {
	shape?: boolean
}

const shine = keyframes`
	from {
		box-shadow: 0 14px 29px 10px #08013f;
	}
	to {
		box-shadow: 0 0 20px #BC5EFF;
	}
`

export const Title = styled(motion.h3)<TitleProps>`
	position: relative;
	font-size: 24px;
	color: ${({ theme }) => theme.colors.white};

	&:before {
		display: ${({ shape }) => (shape ? 'static' : 'none')};
		content: '';
		position: absolute;
		width: 40px;
		height: 40px;
		top: 50%;
		left: 0;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		background: linear-gradient(
			${({ theme }) => theme.colors.royalBLue},
			${({ theme }) => theme.colors.electricPurple}
		);
		animation: ${shine} 3s infinite alternate;
		z-index: -1;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		font-size: 32px;

		&:before {
			width: 60px;
			height: 60px;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		font-size: 40px;

		&:before {
			width: 85px;
			height: 85px;
		}
	}
`