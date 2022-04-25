import {timesTwo} from "./functions"

test("Does it multiply by two?", () => {
    expect(timesTwo(4)).toBe(8);
});