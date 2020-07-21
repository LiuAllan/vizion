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
								vizion
							</div>
						</Grid>
						<Grid item md={6} xs={12}>
							<nav>
								<ul className="links">
									<Link to={{ pathname: '/placeholder' }}>
										<li>placeholder1</li>
									</Link>
									<Link>
										<li>placeholder2</li>
									</Link>
									<Link>
										<li>placeholder3</li>
									</Link>
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