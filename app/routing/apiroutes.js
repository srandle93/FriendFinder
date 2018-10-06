
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.get("/api/friends/:friend", function(req, res) {
    var chosen = req.params.friends;
  
    console.log(chosen);
  
    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
    return res.json(false);
  });