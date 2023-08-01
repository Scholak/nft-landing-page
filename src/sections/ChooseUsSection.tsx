import { Paragraph } from "../components/shared/Paragraph.styles"
import { Title } from "../components/shared/Title.styles"
import { ChooseUsSectionWrapper, Content, Feature, Features } from "../components/styled/ChooseUs.styles"
import marketplace from '../assets/choose-us/marketplaceIcon.png'
import moneyProtection from '../assets/choose-us/moneyProtectionIcon.png'
import dataProtection from '../assets/choose-us/dataProtectionIcon.png'
import fastAndSecure from '../assets/choose-us/fastAndSecureIcon.png'
import { useInView } from "framer-motion"
import { useRef } from "react"
import { moveLeft, moveRight, moveTop } from "../animations"

const ChooseUsSection = () => {
	const contentRef = useRef(null)
	const featureOneRef = useRef(null)
	const featureTwoRef = useRef(null)
	const featureThreeRef = useRef(null)
	const featureFourRef = useRef(null)

	const contentView = useInView(contentRef, { once: true })
	const featureOneView = useInView(featureOneRef, { once: true })
	const featureTwoView = useInView(featureTwoRef, { once: true })
	const featureThreeView = useInView(featureThreeRef, { once: true })
	const featureFourView = useInView(featureFourRef, { once: true })

  return (
		<ChooseUsSectionWrapper>
			<Content
				variants={moveTop}
				initial='hidden'
				animate={contentView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.9 }}
				ref={contentRef}
			>
				<Title shape={true}>Why Choose Us?</Title>
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci
					lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium lacus
					eget vulputate rhoncus. Vivamus egestas, orci eu lobortis pulvinar.
					<br />
					<br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci
					lacus, tempor nec accumsan ac, luctus ut sem.
				</Paragraph>
			</Content>
			<Features>
				<Feature
					variants={moveLeft}
					initial='hidden'
					animate={featureOneView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.5 }}
					ref={featureOneRef}
				>
					<img src={marketplace} alt='marketplace' />
					<p>Marketplace</p>
				</Feature>
				<Feature
					variants={moveRight}
					initial='hidden'
					animate={featureTwoView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.6 }}
					ref={featureTwoRef}
				>
					<img src={moneyProtection} alt='money protection' />
					<p>Money Protection</p>
				</Feature>
				<Feature
					variants={moveLeft}
					initial='hidden'
					animate={featureThreeView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.7 }}
					ref={featureThreeRef}
				>
					<img src={dataProtection} alt='data protection' />
					<p>Data Protection</p>
				</Feature>
				<Feature
					variants={moveRight}
					initial='hidden'
					animate={featureFourView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.8 }}
					ref={featureFourRef}
				>
					<img src={fastAndSecure} alt='fast and secure' />
					<p>Fast & Secure</p>
				</Feature>
			</Features>
		</ChooseUsSectionWrapper>
	)
}

export default ChooseUsSection
