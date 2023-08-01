import { AuthLinks, NavLinks, NavLogoWrapper, NavbarWrapper, Toggle } from "../components/styled/Navbar.styles"
import logo from '../assets/logo.png'
import { Button } from "../components/shared/Button.styles"
import { useState } from "react"

const NavbarSection = () => {
	const [open, setOpen] = useState<boolean>(false)

  return (
		<>
			<Toggle onClick={() => setOpen(!open)}>
				<span></span>
				<span></span>
				<span></span>
			</Toggle>
			<NavbarWrapper className={open ? 'active' : ''}>
				<NavLogoWrapper>
					<img src={logo} alt='logo' />
				</NavLogoWrapper>
				<NavLinks>
					<li>Marketplace</li>
					<li>About</li>
					<li>Resources</li>
					<li>FAQ</li>
				</NavLinks>
				<AuthLinks>
					<Button>Log In</Button>
					<Button>Sign Up</Button>
				</AuthLinks>
			</NavbarWrapper>
		</>
	)
}

export default NavbarSection
