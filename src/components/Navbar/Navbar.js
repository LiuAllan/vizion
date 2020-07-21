import React from 'react';
import Headroom from 'react-headroom';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import StyledNavbar from './StyledNavbar';


const Navbar = () => {
	return(
		<Headroom>
			<StyledNavbar>
				<div className="navbar-container">
					<Grid container direction="row" >
						<Grid item md={6} xs={12}>
							<div className="logo">
								<Link to={{pathname: '/'}}>
									vizion
								</Link>
							</div>
						</Grid>
						<Grid item md={6} xs={12}>
							<nav>
								<ul className="links">
									<li>
										<Link to={{ pathname: '/placeholder' }}>
											placeholder1
										</Link>
									</li>

									<li>
										<Link to={{ pathname: '/' }}>
											placeholder2
										</Link>
									</li>
									
								</ul>
							</nav>
						</Grid>
					</Grid>
				</div>
			</StyledNavbar>
		</Headroom>
	);
}

export default Navbar;