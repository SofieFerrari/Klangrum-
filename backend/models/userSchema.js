import mongoose from "mongoose"
import bcrypt from "bcrypt"

const { Schema, model } = mongoose

const userSchema = new Schema({
	userName: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
		validate: [
			{
				validator: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(value),
				message:
					"Password must contain at least one uppercase letter, one lowercase letter, and a number",
			},
		],
	},
	accessToken: {
		type: String,
		default: () => bcrypt.genSaltSync(),
	},
})

export const User = model("User", userSchema)

// Möjlig förbättring: accessToken-fältet
// Det kan vara bättre att generera ett riktigt accessToken (t.ex. en JWT-token eller något annat unikt värde) när användaren loggar in eller vid behov, snarare än att använda ett salt från bcrypt.genSaltSync(). Ett salt är mer lämpligt för hashning av lösenord än för användning som ett autentiseringstoken.
