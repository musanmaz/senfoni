const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Turknet\'e hoşgeldiniz',
      statusCode: 200
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Bir hata oluştu',
      statusCode: 500,
      error: error.message
    });
  }
});

// Hatalı endpoint'ler için 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Sayfa bulunamadı',
    statusCode: 404
  });
});

// Genel hata yakalayıcı middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: 'Sunucu hatası',
    statusCode: 500,
    error: err.message
  });
});

module.exports = app; 