import { slide as Menu } from 'react-burger-menu';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledBurger = styled.div`
	/* Position and sizing of burger button */
	.bm-burger-button {
	  position: fixed;
	  width: 32px;
	  height: 26px;
	  left: 36px;
	  top: 36px;
	}

	/* Color/shape of burger icon bars */
	.bm-burger-bars {
	  background: #373a47;
	}

	/* Color/shape of burger icon bars on hover*/
	.bm-burger-bars-hover {
	  background: #8a56e9;
	}

	/* Position and sizing of clickable cross button */
	.bm-cross-button {
	  height: 24px;
	  width: 24px;
	}

	/* Color/shape of close button cross */
	.bm-cross {
	  background: #8a56e9;
	}

	/*
	Sidebar wrapper styles
	Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
	*/
	.bm-menu-wrap {
	  position: fixed;
	  height: 100%;
	}

	/* General sidebar styles */
	.bm-menu {
	  background: #fff;
	  padding: 2.5em 1.5em 0;
	  font-size: 1.15em;
	  overflow: hidden !important;
	}

	/* Morph shape necessary with bubble or elastic */
	.bm-morph-shape {
	  fill: #373a47;
	}

	/* Wrapper for item list */
	.bm-item-list {
	  color: #b8b7ad;
	  padding: 0.8em;

	  a {
	  	text-decoration: none;
	  	color: #8a56e9;
	  }
	}

	/* Individual item */
	.bm-item {
	  display: inline-block;
	  // padding-bottom: 1em;

	}

	/* Styling of overlay */
	.bm-overlay {
	  background: rgba(0, 0, 0, 0.3);
	}

`;

const Burger = () => {

	return(
		<StyledBurger>
			<Menu className="burger">
				<Link to={{ pathname: '/' }}>Home</Link>
				<Link to={{ pathname: '/pandemic' }}>Pandemic Tracking</Link>
				<Link to={{ pathname: '/anime' }}>Anime Data</Link>
			</Menu>
		</StyledBurger>
	);
}

export default Burger;