var friends = require("../data/friends.js");

module.exports = function (app) {
    app.post("/api/meetme", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };

        var userData = req.body;
        var userScores = userData.scores;

        var totalDifference;

        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDifference = 0;

            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];
                totalDifference += Math.abs(parseInt(currentUserScore - parseInt(currentFriendScore)));
            }

            if (totalDifference <= bestMatch.friendDifference) {
                //
                bestMatch.name = currentFriend.name;
                //
                bestMatch.photo = currentFriend.photo;
                //
                bestMatch.friendDifference = totalDifference;
            }
        }

        friends.push(userData);
        res.json(bestMatch);
    })
}
