const {
  jalankanOptimasi,
  simpanHistori,
} = require("../services/optimasiService");

exports.prosesOptimasi = async (req, res) => {
  try {

    const bulan = parseInt(req.body.bulan);
    const tahun = parseInt(req.body.tahun);

    const hasil = await jalankanOptimasi({
      bulan,
      tahun,
    });

    await simpanHistori({
      bulan,
      tahun,
    });

    res.json(hasil);

  } catch (err) {

    console.error(err); 

    res.status(500).json({
      message: err.message,
      stack: err.stack, 
    });

  }
};