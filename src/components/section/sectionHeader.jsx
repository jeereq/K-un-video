import React, { useEffect } from "react";
import { background } from "../../data/dataSectionHeader";
import { data } from "../../data/dataSectionHeader";
import Card from "../cards/CardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
export default function SectionHeader() {
	useEffect(() => {}, []);
	const click = (keys) => {
		console.log(keys);
	};
	return (
		<>
			<section id="header">
				<img src={`movies/${background}`} alt="" />
				<div className="container">
					<div className="container__left">
						<div className="top"></div>
						<div className="bottom"></div>
					</div>
					<div className="container__right">
						<div className="center">
							<div className="btn">
								<h2>le gros titre du film en fond</h2>
								<button className="left">
									<FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
								</button>
							</div>
						</div>
						<div className="right">
							<h2>news</h2>
							<div className="containerCard">
								<Carousel
									showThumbs={false}
									showArrows={false}
									axis="vertical"
									autoPlay
									infiniteLoop
									onClickItem={click}
								>
									{data.map(({ name }, index) => {
										let active = "";
										if (index === 0) active = "active";
										return (
											<Card key={index} name={name} styled={active}></Card>
										);
									})}
								</Carousel>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
