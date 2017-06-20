var rn = require('random-number');

module.exports = (router,db) => {

  router.post('/registerNumber',(req, res) => {

    const userid = req.body.phone;
    const terms  = req.body.terms;

    if (userid && terms) {
      db.get(userid,(err,record) => {
        if (err && !err.notFound) {
          return res.json({success:false, message: "El número ya existe", data: null});
        }
        if (record) {
          return res.json({success:false, message: "El número ya existe", data: null});
        }
        const gen = rn.generator({
          min:  000000,
          max:  999999,
          integer: true
        });
        const user = Object.assign({},req.body,{code: gen()});
        console.log(user);

        db.put(userid,user,(err) => {
          if (err) return res.json({success: false, message: err, data: null});
        });
        return res.json({success:true, message: "Usuario válido", data: user});
      });
    } else {
      res.json({success: false, message: "Parametros incorrectos", data: req.body});
    }
  });

  router.post('/resendCode',(req, res) => {
    const userId = req.body.phone;
    if (userId) {
      db.get(userId,(err,record) => {
        if (err) {
          if (err.notFound) {
            return res.json({success: false, message: "Número no encontrado", data: null});
          }
          return res.json({success: false, message: "Hubo error al obtener el registro", data: null});
        }
        const gen = rn.generator({
          min:  000000,
          max:  999999,
          integer: true
        });
        const code = gen();
        const user = Object.assign({},record,{code: code});
        db.put(userId,user,(err) => {
          if (err) { return res.json({success:false,message:"Hubo un error guardando el usuario",data:null}); }
          console.log(user);
          res.json({success: true, message: "Nuevo código generado", data: code});
        });
      });
    } else {
      return res.json({success: false, message: "parámetros incorrectos", data: null});
    }
  });

  router.post('/createUser',(req, res) => {
      const phone = req.body.phone;
      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.password;

      if (phone && name && email && password) {
        db.get(phone,(err,record) => {
          if (err) {
            if (err.notFound) {
              return res.json({success: false, message: "Número no encontrado", data: null});
            }
            return res.json({success: false, message: "Hubo error al obtener el registro", data: null});
          }
          if (record.terms && record.code) {
            const user = Object.assign({},record,{name: req.body.name,email: req.body.email,password: req.body.password});

            db.put(phone,user,(err) => {
              if (err) {
                return res.json({success: false, message: "Hubo un problema al crear el usuario", data: null});
              }
            });
            return res.json({success: true, message: "Usuario creado con éxito", data: user});
          } else {
            return res.json({success: false, message: "Terminos no aceptados y codigo no generado"});
          }
        });
      } else {
        res.json({success: false, message: "Parámetros incorrectos", data: null});
      }
  });

  router.post('/registerCard',(req,res) => {
    const userId = req.body.phone;
    const card = req.body.card;
    const cardPassword = req.body.cardPassword;

    if (userId && card && cardPassword) {
      db.get(userId,(err,record) => {
        if (err) {
          if (err.notFound) return res.json({success: false, message: "Usuario no encontrado", data: false});
          return res.json({success: false, message: "Hubo un error obteniendo el usuario",data:false});
        }
        const user = Object.assign({},record,{card: card, card: cardPassword});
        db.put(userId,user,(err) => {
          if (err) {
            return res.json({success: false, message: "Hubo un problema al agregar la tarjeta", data: null});
          }
        });
        console.log(user);
        return res.json({success: false, message: "Tarjeta añadida correctamente", data: user});
      });
    } else {
      res.json({success:false, message: "Parámetros incorrectos", data: null});
    }
  });

  return router;
}
