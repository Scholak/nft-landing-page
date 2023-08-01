import { Button } from "../components/shared/Button.styles"
import { Input } from "../components/shared/Input.styles"
import { NewsLetterSectionWrapper } from "../components/styled/Newsletter.styles"
import { Title } from "../components/shared/Title.styles"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { moveTop } from "../animations"

const NewsletterSection = () => {
	const ref = useRef(null)

	const isInView = useInView(ref, { once: true })

  return (
		<NewsLetterSectionWrapper
			variants={moveTop}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'}
			transition={{ duration: 1, delay: 0.5 }}
			ref={ref}
		>
			<Title>Ready for Next NFT Drop?</Title>
			<Input width='350' placeholder='youremail@xyz.com'></Input>
			<Button>Send Email</Button>
		</NewsLetterSectionWrapper>
	)
}

export default NewsletterSection
