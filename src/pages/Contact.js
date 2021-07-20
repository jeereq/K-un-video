import style from "../style/module/Contact.module.scss";
const Contact = () => {
	return (
		<>
			<div className={style.Contact}>
				<div className={style.container}>
					<form>
						<div className={style.left}></div>
						<div className={style.right}>
							<input type="text" name="name" placeholder="name" />
							<input type="text" name="subject" placeholder="subject" />
							<textarea name="message" placeholder="message"></textarea>
							<button type="submit">send message</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default Contact;
