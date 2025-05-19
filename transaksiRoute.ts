import express from 'express'
import {
   getAllTransaksi,
   getPeminjamanById,
   addPeminjaman,
   pengembalianBarang,
   getUsageAnalysis,
   analyzeItems
} from './transaksiController.js'



const app = express()


app.get('/borrow', getAllPeminjaman)
app.get('/borrow/:id', getPeminjamanById)
app.post('/borrow', addPeminjaman)
app.post('/return', pengembalianBarang)
app.post('/usage-report', getUsageAnalysis )
app.post('/borrow-analysis', analyzeItems)

export default app