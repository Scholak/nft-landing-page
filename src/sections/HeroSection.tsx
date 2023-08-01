import {
	Content,
	Shadow,
	CTA,
	HeroImage,
	HeroSectionWrapper,
} from '../components/styled/Hero.styles'
import heroImg from '../assets/hero.png'
import playBtn from '../assets/playBtn.png'
import { useRef } from 'react'
import { moveLeft, moveRight } from '../animations'

const HeroSection = () => {
	const leftRef = useRef(null)
	const rightRef = useRef(null)

  return (
		<HeroSectionWrapper>
			<Shadow />
			<Content
				ref={leftRef}
				variants={moveRight}
				initial='hidden'
				animate='visible'
				transition={{ duration: 1, delay: 0.6 }}
			>
				<h1>Keep Calm & Collect Your NFTs.</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci
					lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium lacus
					eget vulputate rhoncus. Vivamus egestas, orci eu lobortis pulvinar.
				</p>
				<CTA>
					<img src={playBtn} alt='play button' />
					<div>
						<p>Let’s get started!</p>
						<p>Watch this quick demo video to see how to get started.</p>
					</div>
				</CTA>
			</Content>
			<HeroImage
				ref={rightRef}
				variants={moveLeft}
				initial='hidden'
				animate='visible'
				transition={{ duration: 1, delay: 0.4 }}
			>
				<img src={heroImg} alt='hero image' />
			</HeroImage>
		</HeroSectionWrapper>
	)
}

export default HeroSection
