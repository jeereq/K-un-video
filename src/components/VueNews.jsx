import style from "../style/module/vueNEws.module.scss";
const VueNews = ({ ListNews }) => {
	return (
		<>
			{ListNews.length > 0 ? (
				<div className={style.vueNews}>
					<div className={style.top}>
						<div className={style.left}>
							<img
								src={`https://image.tmdb.org/t/p/w500/${ListNews[0].poster_path}`}
								alt={ListNews[0].title}
							/>
						</div>
						<div className={style.right}>
							<img
								src={`https://image.tmdb.org/t/p/w400/${ListNews[1].poster_path}`}
								alt={ListNews[1].title}
							/>
						</div>
					</div>
					<div className={style.middle}>
						<div className={style.center}>
							<img
								src={`https://image.tmdb.org/t/p/w400/${ListNews[2].poster_path}`}
								alt={ListNews[2].title}
							/>
						</div>
						<div className={style.center}>
							<img
								src={`https://image.tmdb.org/t/p/w400/${ListNews[3].poster_path}`}
								alt={ListNews[3].title}
							/>
						</div>
						<div className={style.center}>
							<img
								src={`https://image.tmdb.org/t/p/w400/${ListNews[4].poster_path}`}
								alt={ListNews[4].title}
							/>
						</div>
					</div>
					<div className={style.bottom}>
						<div className={style.left}>
							<img
								src={`https://image.tmdb.org/t/p/w500/${ListNews[5].poster_path}`}
								alt={ListNews[5].title}
							/>
						</div>
						<div className={style.right}>
							<img
								src={`https://image.tmdb.org/t/p/w300/${ListNews[6].poster_path}`}
								alt={ListNews[6].title}
							/>
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
};
export default VueNews;
