import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';
import IconButton from '@material-ui/core/IconButton';

const StyledFooter = styled.div`
	text-align: center;
	font-size: 12px;
	color: rgba(0,0,0, 0.3);
	height: 100%;
	width: 100%;

	a {
		color: rgba(0,0,0, 0.3);
	}
`;

const Footer = () => {
	return (
		<>
			<StyledFooter>

				<p>Created by <a href="https://www.linkedin.com/in/liuallan/">Allan Liu</a></p>
				<div className="socials">
					<IconButton aria-label="Twitter" onClick={() => window.open('https://twitter.com/aLiu_ftw')}>
						<TwitterIcon style={{ 'color': 'rgba(0,0,0, 0.3)'}} fontSize='small' />
					</IconButton>
					<IconButton aria-label="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/liuallan/')}>
						<LinkedInIcon style={{ 'color': 'rgba(0,0,0, 0.3)'}} fontSize='small' />
					</IconButton>
					<IconButton aria-label="Github" onClick={() => window.open('https://github.com/LiuAllan')}>
						<GitHubIcon style={{ 'color': 'rgba(0,0,0, 0.3)'}} fontSize='small' />
					</IconButton>
					<IconButton aria-label="Portfolio" onClick={() => window.open('https://liuallan.com/')}>
						<PublicIcon style={{ 'color': 'rgba(0,0,0, 0.3)'}} fontSize='small' />
					</IconButton>
				</div>
			</StyledFooter>
		</>
	);
}

export default Footer;