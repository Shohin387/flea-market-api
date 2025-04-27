import { IsEmail, IsNotEmpty, IsString, Length, Matches} from "class-validator";
import { IForLogIn, IForReg } from "src/interfaces/auth";

export class RegDTO implements IForReg {
	@IsString({message: "Поле Name должно содержать строку"})
	@IsNotEmpty({message: "Все поля обЪязательны"})
	name: string;

	@IsString({message: "Поле должно содержать строку"})
	@Length(4, 150, {message: "Длина userName не менее 4 символов"})
	@IsNotEmpty({message: "Все поля обЪязательны"})
	userName: string;

	@IsEmail({},{message: 'Некоректный email'})
	@IsNotEmpty({message: "Все поля обЪязательны"})
	email: string;

	@IsString({message: "Поле должно содержать строку"})
	@Length(8, 16, {message: "Пароль должен быть мин 8 символов"})
	@Matches(/^(?=.*[A-Z])(?=.[0-9]).+$/, {message: 'Пароль должен содержать хотябы одну заглавную букву и одну цифпу'})
	@IsNotEmpty({message: "Все поля обЪязательны"})
	password: string;
}


export class LogInDTO implements IForLogIn {
	@IsEmail({},{message: 'Некоректный email'})
	@IsNotEmpty({message: "Все поля обЪязательны"})
	email: string;

	@IsString({message: "Поле должно содержать строку"})
	@Length(8, 16, {message: "Пароль должен быть мин 8 символов"})
	@Matches(/^(?=.*[A-Z])(?=.[0-9]).+$/, {message: 'Пароль должен содержать хотябы одну заглавную букву и одну цифпу'})
	@IsNotEmpty({message: "Все поля обЪязательны"})
	password: string;
}