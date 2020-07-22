import React, { useContext } from 'react';
// Components
import Headroom from 'react-headroom';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import EzSnackbar from '../Snackbar';
// Styles
import StyledNavbar from './StyledNavbar';
// Global Context
import { GlobalContext } from '../../context/GlobalState';



const Navbar = () => {

	const {setSnackbarOpen, setSnackbarClose, snackbarOpen} = useContext(GlobalContext);

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
											Pandemic Analysis
										</Link>
									</li>

									<div>
										<li onClick={ () => setSnackbarOpen() }>
											<Link to=''>
												World Expenses
											</Link>
										</li>
										<EzSnackbar open={snackbarOpen} close={() => setSnackbarClose()} />
									</div>
									
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