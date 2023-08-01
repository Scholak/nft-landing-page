import {
	BottomSection,
	FooterMenu,
	FooterText,
	FooterWrapper,
	LeftSection,
	MenuLinks,
	MenuTitle,
	RightSection,
	SocialLinks,
} from '../components/styled/Footer.styles'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import logo from '../assets/logo.png'

const FooterSection = () => {
  return (
		<FooterWrapper>
			<LeftSection>
				<div>
					<img src={logo} alt='logo' />
				</div>
				<FooterText>
					Amazing NFTs marketplace, Authentic and unique digital creation.
				</FooterText>
				<SocialLinks>
					<FaWhatsapp />
					<FaFacebookF />
					<FaInstagram />
					<FaYoutube />
				</SocialLinks>
			</LeftSection>
			<RightSection>
				<FooterMenu>
					<MenuTitle>Marketplace</MenuTitle>
					<MenuLinks>
						<li>Explore</li>
						<li>NFTs</li>
						<li>Collectibles</li>
						<li>Virtual Reality</li>
					</MenuLinks>
				</FooterMenu>
				<FooterMenu>
					<MenuTitle>Resources</MenuTitle>
					<MenuLinks>
						<li>Help Center</li>
						<li>Partners</li>
						<li>Blog</li>
						<li>Newsletter</li>
					</MenuLinks>
				</FooterMenu>
				<FooterMenu>
					<MenuTitle>Company</MenuTitle>
					<MenuLinks>
						<li>About Us</li>
						<li>Careers</li>
						<li>Support</li>
						<li>Newsletter</li>
					</MenuLinks>
				</FooterMenu>
			</RightSection>
			<BottomSection>
				<p>Copyright 2022 sapphire, All right reserved.</p>
				<div>
					<p>Privacy Policy</p>
					<p>Terms & Conditions</p>
				</div>
			</BottomSection>
		</FooterWrapper>
	)
}

export default FooterSection
