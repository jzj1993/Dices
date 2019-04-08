/**
 * Image Source
 * https://pixabay.com/en/dice-cube-die-one-1-game-luck-152173/
 */

var round = 0;
var balance = 0;

function input() {
    while (true) {
        var message = "Please enter dice number (3 ~ 6)";
        var text = prompt(message, "");
        // cancel
        if (text === null) {
            return null;
        }
        try {
            var n = parseInt(text);
            if (n >= 3 && n <= 6) {
                return n;
            }
        } catch (e) {
            console.error(e)
        }
    }
}

function inputAndPlay() {
    var N = input();
    if (N !== null) {
        play(N);
    }
}

function setup() {
    round = 0;
    balance = 0;
    setTitle('Welcome');
    var content = [];
    content.push('<p>How to play: ' +
        ' First you are asked to enter the number of dice (between 3 and 6) that will be used in the game.' +
        ' Then you can play several rounds, in each round you will get a point which depends on the number of all the dices.' +
        ' Finally, when you click "End Game", you can see total balance and average points per round you get during the game.</p>');
    content.push('<button onclick="inputAndPlay()">Go</button>');
    setContent(content);
}

function setContent(html) {
    document.getElementById('content').innerHTML = html.map(function (item) {
        return '<div class="content-item">' + item + '</div>';
    }).join("");
}

function setTitle(title) {
    document.getElementById('title').innerHTML = title;
}

function sum(values) {
    return values.reduce(function (a, b) {
        return a + b;
    }, 0);
}

function sortValues(values) {
    return values.slice(0).sort(function (a, b) {
        return a - b;
    });
}

function getRandom() {
    return Math.floor(Math.random() * 6) + 1;
}

function getDices(N) {
    var values = [];
    for (var i = 0; i < N; i++) {
        values.push(getRandom());
    }
    return values;
}

function rollDices(N, tick, finish) {
    var count = 0;
    var delay = 40;

    function next() {
        var dices = getDices(N);
        if (count >= 20) {
            tick(dices);
            setTimeout(function () {
                finish(dices);
            }, 500);
        } else {
            tick(dices);
            count++;
            delay *= 1.05;
            setTimeout(next, delay);
        }
    }

    next();
}

function getDiceHTML(values) {
    var html = values.map(function (value) {
        return '<img class="dice" src="' + value + '.png">';
    }).join("");
    return '<div class="dice-container">' + html + '</div>';
}

function isSame(sort) {
    return sort[0] === sort[sort.length - 1];
}

function isSameNMinus1(sort) {
    var last = sort.length - 1;
    return (sort[0] === sort[last - 1] && sort[0] !== sort[last])
        || (sort[1] === sort[last] && sort[0] !== sort[1])
}

function isARun(sort) {
    for (var i = 1; i < sort.length; i++) {
        if (sort[i] - sort[0] !== i) {
            return false;
        }
    }
    return true;
}

function isAllDifferent(sort) {
    for (var i = 1; i < sort.length; i++) {
        if (sort[i] === sort[i - 1]) {
            return false;
        }
    }
    return true;
}

function computePoint(values) {
    var N = values.length;
    var sort = sortValues(values);
    if (isSame(sort)) {
        return {points: 60 + sort[0] * N, bonus: 60, type: 'same'};
    }
    if (isSameNMinus1(sort)) {
        return {points: 40 + sum(sort), bonus: 40, type: 'same_n_minus_1'};
    }
    if (isARun(sort)) {
        return {points: 20 + sum(sort), bonus: 20, type: 'run'};
    }
    if (isAllDifferent(sort)) {
        return {points: sum(sort), bonus: 0, type: 'different'};
    }
    return {points: 0, bonus: 0, type: 'other'};
}

function showRoundResult(values, N) {
    var result = computePoint(values);
    balance += result.points;
    var content = [];
    // the dice values (possibly in the form of a nice graphical representation),
    content.push(getDiceHTML(values));
    // the number points won in that round, and
    var pointsText = 'Points in this round: ' + result.points;
    if (result.bonus > 0) {
        pointsText += ' (with ' + result.bonus + ' bonus)'
    }
    pointsText += '.';
    content.push(pointsText);
    // the balance of points at the end of the round.
    content.push('Total balance of points: ' + balance + '.');
    // two options
    content.push('<button onclick="play(' + N + ')">Try Again</button>'
        + '<button onclick="end()">End Game</button>');
    setContent(content);
}

function play(N) {
    round++;
    // the number of rounds played,
    setTitle('Round ' + round);

    rollDices(N, function (values) {
        var content = [getDiceHTML(values)];
        setContent(content);
    }, function (values) {
        showRoundResult(values, N);
    });
}

function end() {
    setTitle('Congratulations');
    var content = [];
    // the number of rounds played,
    content.push('You have played ' + round + ' round(s).');
    // the balance of points when reaching the end stage,
    content.push('Your total balance of points is ' + balance + '.');
    // the average number of points won per round played.
    var average = round === 0 ? 0 : (balance / round).toFixed(1);
    content.push('Average points per round is ' + average + '.');
    // Button
    content.push('<button onclick="setup()">Play Again</button>');
    setContent(content);
}

setup();
