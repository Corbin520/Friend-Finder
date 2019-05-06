

var friendOptions = [
    {
      name: 'Napoleon Dynamite',
      photo: 'placeholder',
      scores: [3, 5, 2, 5, 1, 3, 2, 4, 4, 1] 
    },
    {
      name: 'Donovan Mitchell',
      photo: 'placeholder',
      scores: [1, 5, 4, 1, 3, 2, 2, 4, 5, 1]
 
    },
];


// create a function that will compair each score vaiable 
    function differences() {

    // for loop over the array because we need to get the value out of the scores
    // but need to first loop over the answers to get each value or name.
        for (var i = 0; i < friendOptions.length; i++) {
            console.log(friendOptions[i].scores);
            console.log("-----NEW ARRAY-----")

        // Once we get the value between the arrays, we need to loop over the score
        // and get the array of numbers or answers
        var diff = 0;
            for (var j = 0; j < friendOptions[i].scores.length; j++) {
                console.log(friendOptions[i].scores[j])
                diff += Math.abs(friendOptions[i].scores[j] - friendOptions[i].scores[j]);
                
                // console.log(diff)
            }  
        }
        // Once the loop is completed and the arrays are showing, we need to compare
        // our arrays using math.abs to get the absolute value


            // We will need to minus each number in the array from the same in the 
            // second array at each index.

                // compare newFriendsAnswer.scores TO Friend Options.scores
    }
    // var mathTest = Math.abs(friendOptions[0] - friendOptions[1])
    // console.log(mathTest)

differences()


// export the data to our route
// module.exports = friendOptions;













//         find difference (subtraction) newFrindAnswers.scores[j] to answers[i].scores[j];
//         Math.abs(a - b)
        
    // get the value out of the scores array

//     for (var i = 0; i < answers.length; i++) {

//         console.log(answers.length)

//         var diff = 0
        
//         for (var j = 0; j < answers[i].scores.length; j++) {
//             console.log(Math.abs(answers.scores[j].length))

//         }
//     }

// function dif(a, b) {
//     return Math.abs(a - b);
// }

// console.log(dif(3, 5))
  











    
    
    // diff += Math.abs(ansers[i].scores[j] - newFriendAnswers)

// 6. Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example:
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: 2 + 1 + 2 = 5
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
//    * The closest match will be the user with the least amount of difference.

// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    * The modal should display both the name and picture of the closest match.