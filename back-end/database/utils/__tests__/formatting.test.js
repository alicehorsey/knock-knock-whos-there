const { formatJokeData } = require("../formatting");

describe("Testing formatting joke data function", () => {
    test("Given an empty array, returns a new array.", () => {
        const input = [];
        const expectedOutput = [];
        expect(formatJokeData(input)).toEqual(expectedOutput);
    })
    test("Given an array of objects, returns a new array with ammended objects (with key of id removed).", () => {
        const input = [{
            id: 1,
            type: "general",
            setup: "What did the fish say when it hit the wall?",
            punchline: "Dam."
        },
        {
            id: 2,
            type: "general",
            setup: "How do you make a tissue dance?",
            punchline: "You put a little boogie on it."
        },
        {
            id: 3,
            type: "general",
            setup: "What's Forrest Gump's password?",
            punchline: "1Forrest1"
        }];
        const expectedOutput = [{
            type: "general",
            setup: "What did the fish say when it hit the wall?",
            punchline: "Dam."
        },
        {
            type: "general",
            setup: "How do you make a tissue dance?",
            punchline: "You put a little boogie on it."
        },
        {
            type: "general",
            setup: "What's Forrest Gump's password?",
            punchline: "1Forrest1"
        }];
        expect(formatJokeData(input)).toEqual(expectedOutput);
    })
    test("Given an array of objects, the original array is not mutated.", () => {
        const input = [{
            id: 1,
            type: "general",
            setup: "What did the fish say when it hit the wall?",
            punchline: "Dam."
        },
        {
            id: 2,
            type: "general",
            setup: "How do you make a tissue dance?",
            punchline: "You put a little boogie on it."
        },
        {
            id: 3,
            type: "general",
            setup: "What's Forrest Gump's password?",
            punchline: "1Forrest1"
        }];
        const expectedOutput = [{
            id: 1,
            type: "general",
            setup: "What did the fish say when it hit the wall?",
            punchline: "Dam."
        },
        {
            id: 2,
            type: "general",
            setup: "How do you make a tissue dance?",
            punchline: "You put a little boogie on it."
        },
        {
            id: 3,
            type: "general",
            setup: "What's Forrest Gump's password?",
            punchline: "1Forrest1"
        }];
        formatJokeData(input)
        expect(input).toEqual(expectedOutput);
    })
})