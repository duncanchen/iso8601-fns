import {isValidDate, toDate,} from "../validation"
import {ISO8601} from "../ISO8601"

it("test-date", () => {
	expect(isValidDate("2020-01-01")).toBe(true)
	expect(isValidDate("2020-02-30")).toBe(false)
	expect(isValidDate("not-a-date")).toBe(false)
	expect(isValidDate(222)).toBe(false)
})

it ("test-compose", () => {
	const d = toDate("2020-01-02")
	expect(d).not.toBe(null)
	expect(typeof d).toBe("object")
})

it("date-fns", () => {
	const first = ISO8601.firstDayOfMonth("2020-03-11")
	expect(first.endsWith("01")).toBe(true)
	const last = ISO8601.lastDayOfMonth("2020-03-11")
	const diff = ISO8601.diffInDays(last, first)
	expect(diff).toBe(30)
	expect(ISO8601.daysInMonth(first)).toBe(1)
	expect(ISO8601.daysTillNextMonth(last)).toBe(1)
})