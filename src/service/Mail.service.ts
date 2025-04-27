import * as nodemailer from "nodemailer"
import SMTPTransport from "nodemailer/lib/smtp-transport"

export class SendMail {
	private to:string
	public msg: string
	private transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo, SMTPTransport.Options>
	constructor(to: string, msg?: string) {
		this.to = to
		this.msg = msg
		this.transporter = nodemailer.createTransport({
			host: "smtp.mail.ru",
			port: 465,
			auth: {
				user: process.env.SMTP_USER,
				pass: "tkfCnkF9CrrFFgit02cW"
			}
		})
		console.log(process.env.SMTP_USER)
		console.log(process.env.SMTP_PASS)


	}

	async send() {
		const randomInt = Math.floor(Math.random() * (9999 - 1000) + 1000)
		await this.transporter.sendMail({
			from: process.env.SMTP_USER,
			to: this.to,
			subject: "Активация аккаунта на сайте Барахолка",
			text: '',
			html: !this.msg 
			? `
				<div>
					<h1>Благодарен вам за регестрацию!</h1>
					<h2>Для активации аккаунта введите код ниже</h2>
					<b>${randomInt}</b>
				</div> 
			`
			: this.msg
		})
		return randomInt
	}
}