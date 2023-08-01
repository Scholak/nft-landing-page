import styled from 'styled-components'

export const NavbarWrapper = styled.nav`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 60px 20px;
	background: rgba(255, 255, 255, .1);
	backdrop-filter: blur(50px);
	z-index: 10;
	transform: translateX(-100%);
	transition: all 0.3s;

	&.active {
		transform: translateX(0);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		right: 0;
		bottom: initial;
		width: 100%;
		transform: translateX(0);
		flex-direction: row;
		align-items: center;
		padding: 10px 80px;
		border-bottom: 1px solid ${({ theme }) => theme.colors.white};
	}
`

export const NavLogoWrapper = styled.div`
  img {
    display: block;
    height: 100%;
  }

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    height: 60px;
	}
`

export const NavLinks = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 20px;
	color: ${({ theme }) => theme.colors.white};
	font-size: 24px;

	li {
		cursor: pointer;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		flex-direction: row;
		font-size: 20px;
		gap: 30px;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}) {
		gap: 40px;
	}
`

export const AuthLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    flex-direction: row;
    gap: 12px;
  }
`

export const Toggle = styled.div`
	position: fixed;
	top: 5%;
	right: 5%;
	z-index: 10;
	width: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 8px;
	cursor: pointer;
	z-index: 50;

	span {
		display: block;
		width: 100%;
		height: 3px;
		border-radius: 3px;
		background: ${({ theme }) => theme.colors.white};
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		display: none;
	}
`