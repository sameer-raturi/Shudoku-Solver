# Shudoku-Solver
It can solve 9*9 shudoku problems
<hr>
Steps to play the game

1] add the input in the cells, input must be from 1 to 9 digit.

2] click on solve button , it will solve the shudoku and display the output in the cells.

3] click on reset to clear all the input fields.

<hr>

sample input :

<img width="1724" alt="Screenshot 2022-02-11 at 12 36 34 AM" src="https://user-images.githubusercontent.com/73246474/153479192-9dec60e4-e233-4c8f-8f4e-f41c8c6aef2e.png">


sample output :

<img width="1670" alt="Screenshot 2022-02-11 at 12 36 57 AM" src="https://user-images.githubusercontent.com/73246474/153479276-4ce2d7f5-1fc5-4171-a02f-5ef5a297bdf5.png">

<hr>
working :

I have made the index.html file which contains the basic structure of the web page and styles.css to give the styling. The main work is done in index.js file in which i have added the code to make the table of input fields and then using DOM manipulation taken the inputs from the user and stored it in the array. After that i have solved the shudoku using the backtracking algorithm and displayed the output in the screen.
