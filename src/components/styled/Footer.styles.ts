import styled from 'styled-components'

export const FooterWrapper = styled.footer`
	display: grid;
	padding: 20px;
	background: ${({ theme }) => theme.colors.midnightBlue};

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		gap: 40px;
		grid-template-columns: repeat(2, 1fr);
		padding: 35px;
	}
`

export const LeftSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 24px;
	text-align: center;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		text-align: left;
		grid-column: 1 / span 2;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		grid-column: 1 / span 1;
		margin-left: 40px;
	}

	@media screen {
	}
`

export const RightSection = styled.div`
	display: grid;
	gap: 32px;
	text-align: center;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		grid-template-columns: repeat(3, 1fr);
		gap: 0;
		text-align: left;
		grid-column: 1 / span 2;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		grid-column: 2 / span 1;
	}
`

export const BottomSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 30px;
	margin-top: 20px;
	color: ${({ theme }) => theme.colors.slateBlue};
	font-weight: 500;

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		grid-column: 1 / span 2;
		flex-direction: row;

		div {
			flex-direction: row;
			gap: 40px;
		}

    & > p {
      margin-left: 40px;
    }
	}
`

export const FooterText = styled.p`
	flex: 1;
	margin-bottom: auto;
	font-size: 20px;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.white};

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
		font-size: 24px;
	}
`

export const SocialLinks = styled.div`
	display: flex;
	align-items: center;
  justify-content: space-between;
	gap: 20px;
  margin-bottom: 24px;
	color: ${({ theme }) => theme.colors.lightBlue};

	svg {
		width: 50px;
		height: 50px;
		padding: 8px;
		border-radius: 50%;
		border: 2px solid ${({ theme }) => theme.colors.lightBlue};
    cursor: pointer;
	}

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    justify-content: flex-start;
    margin-bottom: 0;
  }
`

export const FooterMenu = styled.div`
	color: ${({ theme }) => theme.colors.white};
`

export const MenuTitle = styled.h3`
	font-size: 28px;
	margin-bottom: 10px;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		margin-bottom: 20px;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
		font-size: 32px;
		margin-bottom: 40px;
	}
`

export const MenuLinks = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 20px;
	list-style: none;
	font-size: 20px;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		gap: 24px;
		font-size: 24px;
	}
`

