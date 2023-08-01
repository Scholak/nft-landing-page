import { motion } from 'framer-motion'
import styled from 'styled-components'

export const SectionWrapper = styled(motion.section)`
	margin: 150px 0;
	padding: 0 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		margin: 200px 0;
		padding: 0 60px;
		gap: 40px;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		margin: 250px 0;
		padding: 0 80px;
		gap: 60px;
	}
`