const {
  addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler,
} = require('./handler');

// Tambah Buku
const routes = [{
  method: 'POST',
  path: '/books',
  handler: addBookHandler,
},
// Mendapatkan Semua Buku Berdasarkan ID
{
  method: 'GET',
  path: '/books',
  handler: getAllBooksHandler,
},
// Mendapatkan Buku Berdasarkan ID
{
  method: 'GET',
  path: '/books/{id}',
  handler: getBookByIdHandler,
},
// Edit Buku Berdasarkan ID
{
  method: 'PUT',
  path: '/books/{id}',
  handler: editBookByIdHandler,
},
// Hapus Buku Berdasarkan ID
{
  method: 'DELETE',
  path: '/books/{id}',
  handler: deleteBookByIdHandler,
},
];

module.exports = routes;
