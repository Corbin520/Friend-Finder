// import { userInfo } from "os";

// This will be the array of objects that each user + existing users will be stored
var friendOptions = [

    { // index[0]
      name: 'Napoleon Dynamite',
      photo: 'placeholder',
      scores: [3, 5, 2, 5, 1, 3, 2, 4, 4, 1] 
    },
    { // index[1]
      name: 'Donovan Mitchell',
      photo: 'placeholder',
      scores: [1, 5, 4, 1, 3, 2, 2, 4, 5, 1]
      
    },
];


var user = []

// create a function that will compair each score vaiable 
    function differences() {

    // for loop over the FriendOptions to get each value from the array of objects
        for (var i = 0; i < friendOptions.length; i++) {

           // get the first index of the first user array
            console.log(friendOptions[i].scores[i])
          
            
            // console.log(friendOptions[i].scores);
            console.log("-----NEW ARRAY-----")

        // difference needs to start at 0
        var diff = 0;

            // now that we have each object from the array seperated, loop through the scores
            for (var j = 0; j < friendOptions[i].scores.length; j++) {

                // console.log(friendOptions[i].scores[0])
                // diff += Math.abs(friendOptions[i].scores[j] - friendOptions[i].scores[j]);
                

                // console.log(Math.abs(friendOptions[i].scores.length))
                    // Output: '10' for each index
            }  
        } 
    }
    
    differences()


    // Q's answer to our compairing homework.

    // var bestMatch = {
    //     name: "",
    //     photo: "",
    //     friendDifferences: Infinity
    // };

    // var userData = req.body;
    // var userScores = userData.scores;

    // var totalDifference;

    // for(var i = 0; i < friend.length; i++) {
    //     var currentFriend = friends[i];
    //     totalDifference = 0;

    //     for (var j = 0; j < currentFriend.scores.length; j++) {
    //         var currentFriendScore = currentFriend.score[j];
    //         var currentUserScore = userScores[j];

    //         totalDifference += Math.abs(parseInt(currentUserScore - parseInt(currentFriendScore)))
    //     }
    // }

    // if(totalDifference <= bestMatch.friendDifference) {
    //     bestMatch.name = currentFriend.name
    //     friends.push(userData)

    //     resizeBy.json(bestmatch)
    // }
    // end of answers














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
