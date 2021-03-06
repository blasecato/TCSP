import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import { auth } from '../services/Auth/AuthActions';
import LayoutHome from "../components/LayoutHome/LayoutHome";
import Footer from "../components/Footer/Footer";

import Tcp from "../assets/image/tcp.png";
import img1 from "../assets/image/img/img1.jpg";
import img2 from "../assets/image/img/img2.jpg";
import img3 from "../assets/image/img/img3.jpg";
import img4 from "../assets/image/img/img4.jpg";
import img5 from "../assets/image/img/img5.jpg";
import img6 from "../assets/image/img/img6.jpg";
import { Button } from 'antd';

export const Home = () => {
	const dispatch = useDispatch()
	const [state, setstate] = useState(
		{
			submoduleSelect: undefined,
			kitPending: false,
			currentIndex: 0,
			responsive: {
				0: { items: 1 },
				768: { items: 2 },
				992: { items: 4 },
			}
		}
	)

	const { submoduleSelect, kitPending, currentIndex, responsive } = state;

	const handleLogout = () => {
		dispatch(auth.logout())
	}

	return (
		<div className="home">
			<div className="home__img">
				<img src={Tcp}></img>
			</div>
			<LayoutHome></LayoutHome>
			<div className="caroucel" >
				<div className="caroucel-content">
					<div className="cerrar">
						<Button className="button" onClick={handleLogout}>Cerrar sesión</Button>
					</div>

					<AliceCarousel
						responsive={responsive}
						startIndex={currentIndex}
						slideToIndex={currentIndex}
						dotsDisabled={false}
						buttonsDisabled={false}
						duration={400}
						//onSlideChanged={this.onSlideChanged}
						mouseTrackingEnabled
					>
						<div className="card">
							<img src={img5} />
						</div>
						<div className="card">
							<img src={img2} />
						</div>
						<div className="card">
							<img src={img3} />
						</div>
						<div className="card">
							<img src={img4} />
						</div>
						<div className="card">
							<img src={img1} />
						</div>
						<div className="card">
							<img src={img6} />
						</div>
					</AliceCarousel>
				</div>
			</div>
			<Footer />
		</div>
	)
}