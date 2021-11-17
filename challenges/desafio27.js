const nomeEmpresa = "PASSAREDO";
const voosDomestivos = db.voos.countDocuments({
  "empresa.nome": nomeEmpresa,
  natureza: "Doméstica",
});

db.resumoVoos.insertOne(({ 
  empresa: nomeEmpresa,
  totalVoosDomesticos: voosDomestivos,
 }));

 db.resumoVoos.find({}, {
   empresa: 1,
   totalVoosDomesticos: 1,
   _id: 0,
 }).limit(1);
