import { ThemeProvider } from "styled-components" 
import FooterSection from "./sections/FooterSection"
import NewsletterSection from "./sections/NewsletterSection"
import CreatorsSection from "./sections/CreatorsSection"
import CardsSection from "./sections/CardsSection"
import CollectionsSection from "./sections/CollectionsSection"
import ChooseUsSection from "./sections/ChooseUsSection"
import HeroSection from "./sections/HeroSection"
import NavbarSection from "./sections/NavbarSection"

const theme = {
	colors: {
		darkBlue: '#160E2A',
		darkBLueLighen: '#1F1539',
		midnightBlue: '#0D0819',
		royalBLue: '#6147F8',
		lightBlue: '#7D7AD8',
		dodgerBlue: '#40AFFD',
		slateBlue: '#545C71',
		electricPurple: '#BC5EFF',
		pink: '#AB2FFE',
		lavenderPink: '#E6B9FF',
		periwinkle: '#9E89FF',
		seaGreen: '#80AB9E',
		white: '#FFFFFF',
	},
	breakPoints: {
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
	},
}

const App = () => {
  return (
		<ThemeProvider theme={theme}>
			<NavbarSection />
			<HeroSection />
			<CreatorsSection />
			<CollectionsSection />
			<ChooseUsSection />
			<CardsSection />
			<NewsletterSection />
			<FooterSection />
		</ThemeProvider>
	)
}

export default App
