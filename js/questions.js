var questions = [
    'If you were a vegetable what would you be and why?',
    'If you could travel to any country, where would you go?',
    'If you could have a beer(or other drink) with any president, who would you choose?',
    'Describe your personality as a breakfast cereal (capn crunch, lucky charms etc)',
    'If you had to eat just one meal for the rest of your life what would it be?',
    'As a child, what did you want to be when you grew up?',
    'Which season(fall, winter, spring, summer) would you want to be all year long?',
    'What movie/TV/book character would you choose to be for a day?',
    'If you could choose a super power, what would it be and why?',
    'Are you a cat or a dog person, and why did you choose cat?',
    'You win a free (up-to) 3-topping pizza, what do you choose?'
]

// _.sample(collection, [n])
// gets a random element or [n] random elements from a collection
// collection can be array|object|string

// var item = items[Math.floor(Math.random()*questions.length)];
// this method uses vanilla js and the standard math.floor and math.random methods
// would be better to use if no other lodash is being used, because its kind of redic to import a library for one thing, ya dig?


// Posting to slack???
// curl --data "Hello from Slackbot" $'https://my.slack.com/services/hooks/slackbot?token=oLqLmTpxS5rDKghRQe5qbd9K&channel=%orl_jan2015_frontend'
// url: https://api.slack.com/slackbot
// looks like this would be useful

// url: https://tiystudents.slack.com/services/new/slackbot
// could be a problem??
