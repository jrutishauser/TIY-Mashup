var inspirebutton = document.getElementById('inspire');
var quotehere = document.getElementById('quotehere');

var adviceApi = 'http://api.adviceslip.com/advice';
$.getJSON(adviceApi, function (advice) {
    var quoteDrop = function () {
        $('#quotehere').text(advice.slip.advice);
        console.log('wat');
    };
    inspirebutton.onclick = quoteDrop;
});

$('.schedule').on('click', function () {
    window.open("https://calendly.com/susanna", '_blank');
});

$('.question').on('click', function (e) {

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
];

    var randomQuestion = function () {
        return questions[Math.floor(Math.random() * questions.length)];
    };
    $('#quotehere').text(randomQuestion);
    var currentQ = $('#quotehere').text();
    $('#quotehere').append('<fieldset><input id="answer" type="text" placeholder="Answer here">' +
        '<input id="submit" type="submit" value="Slack It!"></input></input></fieldset>');
    $('#submit').on('click', function (event) {
        var ans = $('#answer').val();
        $.post('https://slack.com/api/chat.postMessage\?token\=' +
            'xoxp-3520991751-3641328250-3752113976-71ae8c\&channel\=%2' +
            '3susannabottest\&text\=' + '>' + currentQ + '  ' + '*' +
            ans + '*' + '&username\=' + 'SusannaBot\&icon_emoji\=%3Amonkey_face%3A\&pretty\=1');
        $('#quotehere').empty();
    }); // onclick for submit answer to slack button

}); //onclick for generating a random question