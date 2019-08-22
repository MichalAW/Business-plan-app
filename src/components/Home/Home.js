import React, { Component } from 'react'
import Footer from '../Layout/Footer/Footer';
import Menubar from '../Layout/MenuBar/Menubar';
import Midbar from '../Layout/Midbar/Midbar';
import Topbar from '../Layout/Topbar/Topbar';
import PanelBar from '../Layout/PanelBar/PanelBar';
import Build from '../Layout/Products/Build/Build';
import Furnishings from '../Layout/Products/Furnishings/Furnishings';
import Installation from '../Layout/Products/Installation/Installation';
import Machine from '../Layout/Products/Machine/Machine';
import HomeContent from '../HomeContent/HomeContent';

export default class Home extends Component {
  	render() {
		return (
			<div>
				<header>
					<Topbar/>
					<Midbar/>
					<Menubar/>
				</header>
				<PanelBar/>
				<Build/>
				<Furnishings/>
				<Installation/>
				<Machine/>
				<HomeContent/>
				<Footer/>
			</div>
		)
	}
}
