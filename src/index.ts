import {info} from 'loglevel'

export class Hello {
	name: string = ""
	Hi() {
		info(`Hello, ${this.name}!`)
	}
} 

info("hello!")