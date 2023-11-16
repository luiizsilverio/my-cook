class recipeController {
  
  static index = async (req, res) => {
    res.render('index', { title: "My-Cook | Início" });
  }
}

module.exports = recipeController;
