大作业，掷骰子小游戏



附上题目： https://cgi.csc.liv.ac.uk/~ullrich/COMP519/assignment2N-2020-21.html

# COMP519 Web Programming (2020-21) -- Assignment 2: JavaScript

Your task for this practical assignment consists of two parts:

1. Develop a JavaScript program that provides the functionality stated in the [Requirements section](https://cgi.csc.liv.ac.uk/~ullrich/COMP519/assignment2N-2020-21.html#requirements) below.
2. Make the system that you have created accessible and usable via the URL`http://student.csc.liv.ac.uk/~<your user name>/game.html`taking care of the requirements set out in [Submission and Setup](https://cgi.csc.liv.ac.uk/~ullrich/COMP519/assignment2N-2020-21.html#Submission) section below.

## Requirements

The program simulates a simple game of chance using three to six dice. The dice are six-sided and each side has a distinct number between 1 and 6 on it. When a dice is rolled, then each number occurs with equal chance. The game proceeds in three stages, *setup*, *play*, and *end* stage.

During the *setup* stage the user is asked to enter the number of dice that will be used in the game. If the input of the user is not a natural number between 3 and 6, then an error message should be shown and the user is asked again for a number. This continues until the input of the user is a natural number between 3 and 6, denoted by *N* in the following. The check and error messages must be realised using JavaScript, not using HTML5 elements and attributes.

During the *play* stage the game proceeds in *rounds* during which the program maintains a *balance* of points won and the number of rounds played. Initialy, both balance and number of rounds played is zero.

In each round, the program first increments the number of rounds played by one, then rolls the *N* dice and computes the number of points won according to the following table:

| Description                                         | Points Calculation                     | Example (with four dice) | Example Points Calculation |
| --------------------------------------------------- | -------------------------------------- | ------------------------ | -------------------------- |
| All *N* dice have the same value                    | 60 + Sum of the values of all the dice | 3,3,3,3                  | 60 + 3 + 3 + 3 + 3 = 72    |
| *N - 1* but not *N* dice have the same value        | 40 + Sum of the values of all the dice | 4,4,4,6                  | 40 + 4 + 4 + 4 + 6 = 58    |
| 2,5,2,2                                             | 40 + 2 + 5 + 2 + 2 = 51                |                          |                            |
| A run (a sequence *K+1* to *K+N* for some *K ≥ 0*)  | 20 + Sum of the values of all the dice | 3,4,5,6                  | 20 + 3 + 4 + 5 + 6 = 38    |
| 4,3,2,1                                             | 20 + 4 + 3 + 2 + 1 = 30                |                          |                            |
| 4,6,3,5                                             | 20 + 4 + 6 + 3 + 5 = 38                |                          |                            |
| All dice have different values, but it is not a run | Sum of the values of all the dice      | 4,5,3,1                  | 4 + 5 + 3 + 1 = 13         |
| 3,6,2,5                                             | 3 + 6 + 2 + 5 = 16                     |                          |                            |
| Any other outcome                                   | 0                                      | 4,5,3,3                  | 0                          |

The number of points won is then added to the balance of points and constitutes the balance at the end of the round.

The program will then display

- the number of rounds played,
- the dice values (possibly in the form of a nice graphical representation),
- the number points won in that round, and
- the balance of points at the end of the round.

The program then provides the user with the options (i) to continue with another round, or (ii) to end the game. If option (i) is chosen, then the program remains in the play stage and proceeds with another round. If option (ii) is chosen, then the program proceeds to the end stage.

In the *end* stage, the program computes the average number of points won per round and displays

- the number of rounds played,
- the balance of points when reaching the end stage,
- the average number of points won per round played, rounded to one digit after the decimal point.

Additional requirements and comments:



- The bulk of your JavaScript code should be in a JavaScript library called `game.js`. Before submitting your solution, you should create a copy of `game.js` named `game.pretty.js` in a directory other than your `public_html` directory, say, your home directory. Then make the file `game.js` indecipherable for humans using the command `uglifyjs $HOME/game.pretty.js --compress --mangle > $HOME/public_html/game.js`. Make sure that after performing this operation your game still works. Also make sure that the file `game.pretty.js` can only be read by yourself.
- Use of images for the dice and absence of JavaScript prompts and alerts improve the quality of the game design. Remember that if you use images, then they must be your own or your use must be legal under copyright law. You should also provide a reference for the source or sources of your images in your code.
- Within each round of the play stage, the user only needs to be shown the information for the current round, there is no requirement that the user can still see what happened in previous rounds. Indeed, it may result in better quality game design if they do not.
- The code should be written in such a way that it could deal with an arbitrary number of dice.
- JavaScript engines differ from browser to browser. You should make sure that your system works in all commonly used browsers (e.g., Google Chrome, Mozilla Firefox, Microsoft Internet Explorer 9 or higher) and on all commonly used platforms (e.g., Linux derivatives and Microsoft Windows).
- Your JavaScript program should only depend on your own code. JavaScript libraries/frameworks should not be used.
- Your code should follow the [COMP519 Coding Standard](https://cgi.csc.liv.ac.uk/~ullrich/COMP519/notes/COMP519CodingStandard.pdf). This includes pointing out which parts of your code have been developed with the help of on-line sources or textbooks and references for these sources.



## Submission and Setup

Submit all relevant files (game.html, game.js, game.pretty.js, any CSS file, and local images) via the departmental submission system at https://sam.csc.liv.ac.uk/COMP/Submissions.pl (COMP519-2: JavaScript).

Make game.html, game.js, and other files (but not game.pretty.js) accessible via the departmental web server.

The files submitted must be identical to those made accessible via the departmental web server. Furthermore, no alterations are allowed to the latter after files have been submitted. If a submitted file and the corresponding file on the departmental web server have different timestamps, then the later timestamp will be used to determine lateness. This applies even if the earlier file is used for marking.

Permissions of the files in your filestore must be such that no other user can view their contents in the filestore.

## Deadline

The deadline for this practical assignment is

**Thursday, 26 November 2020, 17:00**

Earlier submission is possible, but any submission after the deadline attracts the standard lateness penalties. Late re-submission is not possible. Please remember that a strict interpretation of `lateness' is applied by the Department, that is, work submitted or made accessible at Thursday, 26 November 2020, 17:01 is considered to be a day late.



## Assessment

This practical assignment will address the following learning outcomes of the module:

- be able to use a range of technologies and programming languages available to organisations and businesses and be able to choose an appropriate architecture for a web application.
- be able to develop reasonably sophisticated client-side web applications using one or more suitable technologies and to make informed and critical decisions in that context.

This practical assignment will contribute **25%** to the overall mark of COMP519. Failure on this assignment may be compensated by higher marks on other assignments for this module.

Marks will be awarded according to the following scheme:

- Submission, Setup, Error-freeness, Compatibility with browsers: 10
- Usability and quality of the interface: 16
- Correctness and quality of the implementation of the *setup* stage: 8
- Correctness and quality of the implementation of the *play* stage: 38
- Correctness and quality of the implementation of the *end* stage: 6
- Use of suitable functions and data structures for the computations: 10
- Formatting, commenting, and quality of code: 12

In more detail, the requirements above translate into about 30 criteria that your system and its underlying code must satisfy. Marks are given according to the extent to which the system is observed to behave in the expected way and produces correct results, and, to a lesser extent, how well the code is written. Code that has no observable effect will receive no marks.

As stated above, the University policy on late submissions applies to this assignment, as do the University policy on coursework submission (available at https://www.liverpool.ac.uk/media/livacuk/tqsd/code-of-practice-on-assessment/appendix_Q_cop_assess.pdf) and the University policy on academic integrity (available at http://www.liv.ac.uk/student-administration/student-administration-centre/policies-procedures/academic-integrity/). You should follow the [COMP519 Lab Rules](https://cgi.csc.liv.ac.uk/~ullrich/COMP519/notes/COMP519LabRules.pdf) to ensure that you do not breach that policy.



## Feedback

You can expect individual feedback for this assignment about two weeks after the deadline. Generic feedback might be provided shortly after Thursday, 3 December 2020, 17:00 (seven days after the deadline). You should take that to be date referred to in Section 5.1.4.(i) of the PGT Computer Science Student Handbook.