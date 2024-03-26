import Color from "../database/Models/Color.js";

export const listarColores = (req, res) => {
  console.log("Hola comisión");
  res.send("Aqui listar la lista de elementos.");
};

export const crearColor = async(req, res) => {
  try {
    console.log(req.body)
    const colorNuevo = new Color(req.body);
    await colorNuevo.save();
    res.status(201).json({
      mensaje: "El color fue creado correctamente"
    })    
  } catch (error) {
    console.log(error)
    res.status(400).json({
      mensaje:"El color no pudo ser dado de alta."
    })
    
  }
};