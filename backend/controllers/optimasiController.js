const {
  jalankanOptimasi,
} = require("../services/optimasiService");

exports.prosesOptimasi = async (
  req,
  res
) => {

  try {

    
    const hari =
      req.body?.hari ||
      req.query?.hari;

    const hasil =
      await jalankanOptimasi(
        parseInt(hari)
      );

    res.json(hasil);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};