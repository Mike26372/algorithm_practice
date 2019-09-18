/**

Requirement: Create a library that reimplements a subset of moment-timezone.js functionality. Specifically,you will:
a. create a constructor or object factory that returns a moment object
b. implement the format method
c. implement the tz method

References:
a. Moment-Timezone: https://momentjs.com/timezone/
b. https://momentjs.com/timezone/docs/#/using-timezones/

Specs:

1. Given a Unix timestamp (# of seconds since epoch: https://en.wikipedia.org/wiki/Unix_time), instantiate a moment object.

You are not allowed to use any libraries or the JS Date object.

2. Implement a format method that outputs a string of format HH:MM:SS mm dd yyyy (edited) 

Method Signature:
`format(): string`

Example:
`moment(0).format() //=> 00:00:00 01 01 1970`

2. Update the format method to take a formatString param.  Handled cases as any ordering of the terms HH, MM, SS, mm, dd, yyyy

Method Signature:
`format(formatString: string): string`

Example:
`moment(0).format(yyyy dd HH) //=> 1970 01 00:00:00`

3. Implement the tz method with 3 timezones: UTC (default), PST, EST

This should either clone the moment instance with an updated timezone OR mutate the existing timezone (Please justify your choice of API)

Method Signature:
`tz(timezone: string): Moment`

You are required to support 3 timezone arguments:

1. UTC (default)
2. EST
3. PST

4. (Bonus) How do you account for daylight savings time?

Consideration:
a. Leap Years
b. Extensible functionality to compare two different moment objects
c. UTC offsets
d. How do I validate that the argument passed to the constructor is valid?

*/
//  86400

class moment {
  constructor(seconds) {
    this.epoch = seconds;
    this.secsPerDay = 86400;
    this.secsPerYear = 86400 * 365;
    this.secsPerMonth = 86400 * 30;
    this.secsPerHour = 60 * 60;
    this.secsPerMinute = 60;
    // this.daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 20, 31, 30, 31]
  }

  //`moment(0).format() //=> 00:00:00 01 01 1970`

  _lead(num, length = 2) {
    let result = "" + num;

    while (result.length < length) {
      result = "0" + result;
    }

    return result;
  }

  format() {
    let yearsSinceEpoch = Math.floor(this.epoch / this.secsPerYear);

    let monthsInSeconds = this.epoch % this.secsPerYear;
    let monthsSinceEpoch = Math.floor(monthsInSeconds / this.secsPerMonth);

    let daysInSeconds = monthsInSeconds % this.secsPerMonth;
    let daysSinceEpoch = Math.floor(daysInSeconds / this.secsPerDay);

    let hoursInSeconds = daysInSeconds % this.secsPerDay;
    let hoursSinceEpoch = Math.floor(hoursInSeconds / this.secsPerHour);

    let minutesInSeconds = hoursInSeconds % this.secsPerHour;
    let minutesSinceEpoch = Math.floor(minutesInSeconds / this.secsPerMinute);

    let secondsSinceEpoch = minutesInSeconds % this.secsPerMinute;

    return `${this._lead(hoursSinceEpoch)}:${this._lead(
      minutesSinceEpoch,
      2
    )}:${this._lead(secondsSinceEpoch)} ${this._lead(
      1 + monthsSinceEpoch
    )} ${this._lead(1 + daysSinceEpoch)} ${1970 + yearsSinceEpoch}`;
  }
}

when("this situations happens", () => {
  assert("this should happen");
});

// data set [timpes]
// for ts of timestamps
// Return correct [year, months, days, minutes, seconds]
// Return correct formatted timestamp [format1, format2, format3]
// Handles leap year correctly
// Handles timezones correctly [UTC, EST, PST]
//
