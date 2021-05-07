export default function CardHeader({ name, styled }) {
	return (
		<>
			<div className={` card ${styled}`}>
				<img src={`movies/${name}`} alt="" />
			</div>
		</>
	);
}
