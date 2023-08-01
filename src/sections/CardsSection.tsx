import { CardsSectionWrapper } from "../components/styled/Card.styles"
import { Title } from "../components/shared/Title.styles"
import { Card, CardContainer } from "../components/styled/Card.styles"
import wallet from '../assets/card/wallet.png'
import collection from '../assets/card/collection.png'
import add from '../assets/card/add.png'
import list from '../assets/card/list.png'
import { useInView } from "framer-motion"
import { useRef } from "react"
import { moveTop } from "../animations"

const CardsSection = () => {
	const titleRef = useRef(null)
	const cardOneRef = useRef(null)
	const cardTwoRef = useRef(null)
	const cardThreeRef = useRef(null)
	const cardFourRef = useRef(null)

	const titleView = useInView(titleRef, { once: true })
	const cardOneView = useInView(cardOneRef, { once: true })
	const cardTwoView = useInView(cardTwoRef, { once: true })
	const cardThreeView = useInView(cardThreeRef, { once: true })
	const cardFourView = useInView(cardFourRef, { once: true })

  return (
		<CardsSectionWrapper>
			<Title
				shape={true}
				variants={moveTop}
				initial='hidden'
				animate={titleView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.6 }}
				ref={titleRef}
			>
				Create And Sell Your NFTs
			</Title>
			<CardContainer>
				<Card
					variants={moveTop}
					initial='hidden'
					animate={cardOneView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.5 }}
					ref={cardOneRef}
				>
					<img src={wallet} alt='wallet icon' />
					<h4>Set Up Your Wallet</h4>
					<p>
						Once you’ve set up your wallet of choice, connect it to OpenSea by
						clicking the wallet icon in the top right corner. Learn about the
						wallets we support.
					</p>
				</Card>
				<Card
					variants={moveTop}
					initial='hidden'
					animate={cardTwoView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.6 }}
					ref={cardTwoRef}
				>
					<img src={collection} alt='wallet icon' />
					<h4>Create Your Collection</h4>
					<p>
						Click My Collections and set up your collection. Add social links, a
						description, profile & banner images, and set a secondary sales fee.
					</p>
				</Card>
				<Card
					variants={moveTop}
					initial='hidden'
					animate={cardThreeView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.7 }}
					ref={cardThreeRef}
				>
					<img src={add} alt='wallet icon' />
					<h4>Add Your NFTs</h4>
					<p>
						Upload your work (image, video, audio, or 3D art), add a title and
						description, and customize your NFTs with properties, stats, and
						unlockable content.
					</p>
				</Card>
				<Card
					variants={moveTop}
					initial='hidden'
					animate={cardFourView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.8 }}
					ref={cardFourRef}
				>
					<img src={list} alt='wallet icon' />
					<h4>List Them For Sale</h4>
					<p>
						Choose between auctions, fixed-price listings, and declining-price
						listings. You choose how you want to sell your NFTs, and we help you
						sell them!
					</p>
				</Card>
			</CardContainer>
		</CardsSectionWrapper>
	)
}

export default CardsSection
