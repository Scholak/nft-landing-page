import { CreatorsSectionWrapper } from '../components/styled/Creators.styles'
import { Title } from '../components/shared/Title.styles'
import map from '../assets/map.png'
import { Button } from '../components/shared/Button.styles'
import { moveTop } from '../animations'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const CreatorsSection = () => {
	const ref = useRef(null)

	const isInView = useInView(ref, { once: true })

  return (
		<CreatorsSectionWrapper
			variants={moveTop}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'}
			transition={{ duration: 1, delay: 0.5 }}
		>
			<Title shape={true}>Top Creators</Title>
			<img src={map} alt='' ref={ref} />
			<Button>View All Collectors</Button>
		</CreatorsSectionWrapper>
	)
}

export default CreatorsSection
