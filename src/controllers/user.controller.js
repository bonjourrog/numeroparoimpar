const controller = {};

controller.index = (req, res) => {
  res.render("index");
};

controller.verifyResult = (req, res) => {
  const { val } = req.body;
  try {
    if (val === "") {
      req.flash("message", "No deje el camo vacio");
      res.redirect("/");
    } else {
      console.log(val % 2);
      //Verify if val is odd
      if (val % 2 === 1) {
        console.log("Numero impar");
        req.flash("message", "Ingrese un numero par");
        res.redirect("/");
      }

      //Verify if 3 times val is odd or even
      const addition = val * 3;
      req.flash("number", val);
      if (addition % 2 === 1) {
        req.flash("message", `${val} x 3 = ${addition} \n El número es impar`);
        res.redirect("/");
      } else {
        req.flash("message", `${val} x 3 = ${addition} \n El número es par`);
        res.redirect("/");
      }
    }
  } catch (error) {
    console.log("Ha ocurrido un error :=>" + error.message);
  }
};

module.exports = controller;
