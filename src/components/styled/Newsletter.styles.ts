import { motion } from 'framer-motion'
import styled from 'styled-components'

export const NewsLetterSectionWrapper = styled(motion.section)`
	margin: 100px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		margin: 150px 0;
		gap: 30px;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		margin: 200px 0;
		gap: 40px;
	}
`
