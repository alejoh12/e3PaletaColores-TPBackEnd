import Color from "../database/Models/Color.js";

export const crearColor = async (req, res) => {
  try {
    console.log(req.body);
    const colorNuevo = new Color(req.body);
    await colorNuevo.save();
    res.status(201).json({
      mensaje: "El color fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "El color no pudo ser dado de alta.",
    });
  }
};

export const listarColores = async (req, res) => {
  try {
    const colores = await Color.find();
    res.status(200).json(colores);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      mensaje: "No se pudo obtener la lista de colores.",
    });
  }
};

export const obtenerColor = async (req, res) => {
  try {
    console.log(req.params.id);
    const colorBuscado = await Color.findById(req.params.id);
    res.status(200).json(colorBuscado);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      mensaje: "No se encontró el color buscado.",
    });
  }
};

export const editarColor = async(req,res) => {
  try {
    const colorBuscado = await Color.findById(req.params.id);
    if(!colorBuscado){
      return res.status(404).json({Mensaje:"El color no fue encontrado."})
    }
    await Color.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({mensaje: "El color fue editado correctamente."})
  } catch (error) {
    console.error(error)
    res.status(500).json({mensaje:"Ocurrio un error al editar el color."})
  }
}

export const borrarColor = async(req,res) => {
  try {
  const colorBuscado = await Color.findById(req.params.id);
  if(!colorBuscado){
    return res.status(404).json({Mensaje:"El color no fue encontrado."})
  }
  await Color.findByIdAndDelete(req.params.id);
  res.status(200).json({mensaje: "El color fue borrado correcta"})
} catch (error) {
  console.error(error)
  res.status(500).json({mensaje:"Ocurrio un error al borrar el color."})
}
}