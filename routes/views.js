router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  
  //GET request for stats route in public folder
  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });