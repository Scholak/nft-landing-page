import { Button } from "../components/shared/Button.styles"
import { Paragraph } from "../components/shared/Paragraph.styles"
import { CollectionsSectionWrapper } from "../components/styled/Collection.styles"
import { Title } from "../components/shared/Title.styles"
import { Collection, CollectionContainer, RightContent } from "../components/styled/Collection.styles"
import collection1 from '../assets/colletion/collection1.png'
import collection2 from '../assets/colletion/collection2.png'
import collection3 from '../assets/colletion/collection3.png'
import collection4 from '../assets/colletion/collection4.png'
import etherium from '../assets/etherium.png'
import { moveLeft, moveRight } from "../animations"
import { useInView } from "framer-motion"
import { useRef } from "react"

const CollectionsSection = () => {
	const contentRef = useRef(null)
	const cardOneRef = useRef(null)
	const cardTwoRef = useRef(null)
	const cardThreeRef = useRef(null)
	const cardFourRef = useRef(null)

	const contentView = useInView(contentRef, { once: true })
	const cardOneView = useInView(cardOneRef, { once: true })
	const cardTwoView = useInView(cardTwoRef, { once: true })
	const cardThreeView = useInView(cardThreeRef, { once: true })
	const cardFourView = useInView(cardFourRef, { once: true })

  return (
		<CollectionsSectionWrapper>
			<CollectionContainer>
				<Collection
					variants={moveRight}
					initial='hidden'
					animate={cardOneView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.5 }}
					ref={cardOneRef}
				>
					<img src={collection1} alt='collection image' />
					<p>Ancient Ones</p>
					<div>
						<img src={etherium} alt='etherium icon' />
						<span>5.0 ETH</span>
					</div>
				</Collection>
				<Collection
					variants={moveRight}
					initial='hidden'
					animate={cardTwoView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.6 }}
					ref={cardTwoRef}
				>
					<img src={collection2} alt='collection image' />
					<p>Lost In Space</p>
					<div>
						<img src={etherium} alt='etherium icon' />
						<span>3.0 ETH</span>
					</div>
				</Collection>
				<Collection
					variants={moveRight}
					initial='hidden'
					animate={cardThreeView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.7 }}
					ref={cardThreeRef}
				>
					<img src={collection3} alt='collection image' />
					<p>God of War</p>
					<div>
						<img src={etherium} alt='etherium icon' />
						<span>7.0 ETH</span>
					</div>
				</Collection>
				<Collection
					variants={moveRight}
					initial='hidden'
					animate={cardFourView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.8 }}
					ref={cardFourRef}
				>
					<img src={collection4} alt='collection image' />
					<p>The Watchers</p>
					<div>
						<img src={etherium} alt='etherium icon' />
						<span>3.2 ETH</span>
					</div>
				</Collection>
			</CollectionContainer>
			<RightContent
				variants={moveLeft}
				initial='hidden'
				animate={contentView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.9 }}
				ref={contentRef}
			>
				<Title shape={true}>Latest NFT Collections</Title>
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci
					lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium lacus
					eget vulputate rhoncus.
				</Paragraph>
				<Button>View All Collectors</Button>
			</RightContent>
		</CollectionsSectionWrapper>
	)
}

export default CollectionsSection
