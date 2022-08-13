import React from 'react';
import styled from 'styled-components';

function Footer() {
	return (
		<FooterContainer>
			<Location>
				<span>Morocco | By yoel3imari</span>
			</Location>
			<Navigation>
				<Help>
					<ul>
						<li>
							<a href='https://about.google/'>About</a>
						</li>
						<li>
							<a href='https://www.google.com/intl/en_ma/ads/?utm_source=google.com'>Advertising</a>
						</li>
						<li>
							<a href='https://www.google.com/services/?utm_source=google.com'>Business</a>
						</li>
						<li>
							<a href='https://google.com/search/howsearchworks/'>How Search Works</a>
						</li>
					</ul>
				</Help>
				<Legallity>
					<ul>
						<li>
							<a href='https://policies.google.com/privacy'>Privacy</a>
						</li>
						<li>
							<a href='https://policies.google.com/terms'>Terms</a>
						</li>
						<li>
							<span>Settings</span>
						</li>
					</ul>
				</Legallity>
			</Navigation>
		</FooterContainer>
	)
}

const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #f2f2f2;
	color: #70757a;
    width: 100%;

	ul {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		column-gap: 30px;
		row-gap: 1rem;
	}
`;

const Location = styled.div`
	width: 100%;
	padding-bottom: 1rem;
	padding-block: 1rem;
	border-bottom: 1px solid #dadce0;
	font-size: 14px;
	
	span {
		padding-left: 30px;
	}
`;

const Navigation = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	row-gap: 1rem;
	width: 100%;
	padding-block: 1rem;
	font-size: 14px;
`;

const Help = styled.div`
	padding-left: 30px;
`;

const Legallity = styled.div`
	padding-right: 30px;
`;

export default Footer