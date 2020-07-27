import React, { useContext, useEffect } from 'react';
// Components
import Headroom from 'react-headroom';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import EzSnackbar from '../Snackbar';
import MediaQuery from 'react-responsive';
import Burger from '../Burger/Burger';
// Styles
import StyledNavbar from './StyledNavbar';
// Global Context
import { GlobalContext } from '../../context/GlobalState';

const Navbar = () => {

	const {setSnackbarOpen, setSnackbarClose, snackbarOpen} = useContext(GlobalContext);

	return(
		<>
			<MediaQuery minWidth={960}>
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
												<Link to={{ pathname: '/pandemic' }}>
													Pandemic Tracking
												</Link>
											</li>

											<li>
												<Link to={{ pathname: '/anime' }}>
													Anime Data
												</Link>
											</li>

											{/*}
											<div>
												<li onClick={ () => setSnackbarOpen() }>
													<Link>
														Placeholder
													</Link>
												</li>
												<EzSnackbar open={snackbarOpen} close={() => setSnackbarClose()} />
											</div>
											*/}
											
										</ul>
									</nav>
								</Grid>

							</Grid>
						</div>
					</StyledNavbar>
				</Headroom>
			</MediaQuery>
			<MediaQuery maxWidth={959}>
				<Burger />
			</MediaQuery>
		</>
	);
}

export default Navbar;