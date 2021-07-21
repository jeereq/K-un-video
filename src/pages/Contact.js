import style from "../style/module/Contact.module.scss";
const Contact = () => {
	document.title = "Contact k'un";
	return (
		<>
			<div className={style.Contact}>
				<div className={style.container}>
					<form>
						<div className={style.left}>
							<div className={style.image}>
								<img src="../movies/fault.jpg" alt="mon profil" />
							</div>
							<h1>contact me</h1>
						</div>
						<div className={style.right}>
							<input type="text" name="name" placeholder="name" required />
							<input
								type="text"
								name="subject"
								placeholder="subject"
								required
							/>
							<textarea
								name="message"
								placeholder="message"
								required
							></textarea>
							<button type="submit">send message</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
