import {startOfMonth, endOfMonth, format, differenceInDays, addDays} from "date-fns"
import {toDate} from "./validation"


const firstDayOfMonth = (d: string) => {
	return fmt(startOfMonth(toDate(d)!))
}

const lastDayOfMonth = (d: string) => {
	return fmt(endOfMonth(toDate(d)!))
}

const fmt = (d: Date) => {
	return format(d, "yyyy-MM-dd")
}

const diffInDays = (left: string, minus: string) => {
	return differenceInDays(toDate(left)!, toDate(minus)!)
}

const daysInMonth = (d: string) => {
	const mid =  toDate(d)
	return mid?.getDate()
}

const daysTillNextMonth = (d: string) : number => {
	const mid = toDate(d)
	const nextMonth = addDays(endOfMonth(mid!), 1)
	return differenceInDays(nextMonth, mid!)
}

export const ISO8601 = {
	firstDayOfMonth,
	lastDayOfMonth,
	daysInMonth,
	daysTillNextMonth,
	diffInDays
}