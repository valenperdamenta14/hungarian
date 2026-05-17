const {
  jalankanOptimasi,
} = require("../services/optimasiService");

exports.prosesOptimasi = async (req, res) => {

  try {

    const hasil = await jalankanOptimasi();

    res.json(hasil);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};