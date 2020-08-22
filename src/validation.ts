import {format} from "date-fns"

const YMD_REGEX = /^\d{4}-\d{2}-\d{2}$/;

const isDate = (s: string) => {
	return !isNaN(Date.parse(s));
};

type ISO8601Test = [Date | undefined, Boolean];

const compose = (s: string): ISO8601Test => {
	const parts = s.split("-");
	if (parts.length != 3) {
		return [undefined, false];
	}
	const v = parts.map((p) => parseInt(p));
	const testDate = new Date(v[0], v[1] - 1, v[2], 0, 0, 0);
	const iso = testDate.toISOString().split("T");
	return iso[0] === s ? [testDate, true] : [undefined, false];
};

const constructTest = (s: string) => {
	const [_, test] = compose(s);
	return test;
};

export const isValidDate = (possible: any) => {
	if (typeof possible !== "string") {
		return false;
	}
	if (!YMD_REGEX.test(possible)) {
		return false;
	}
	return constructTest(possible);
};

export const toDate = (possible: any) => {
	const [d, _] = compose(possible);
	return d;
};

export const ISO8681 = (d: Date) => {
	return format(d, "yyyy-MM-dd")
}