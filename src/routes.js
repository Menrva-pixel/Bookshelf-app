const {
  addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler,
} = require('./handler');

// Tambah Buku
const routes = [{
  method: 'POST',
  path: '/books',
  handler: addBookHandler,
},
// Semua Buku
{
  method: 'GET',
  path: '/books',
  handler: getAllBooksHandler,
  query: {
    name: { type: 'string', caseInsensitive: true, optional: true },
    reading: { type: 'number', optional: true },
    finished: { type: 'number', optional: true },
  },
},
// Buku By Id
{
  method: 'GET',
  path: '/books/{id}',
  handler: getBookByIdHandler,
},
// Edit Buku
{
  method: 'PUT',
  path: '/books/{id}',
  handler: editBookByIdHandler,
},
// Hapus Buku
{
  method: 'DELETE',
  path: '/books/{id}',
  handler: deleteBookByIdHandler,
},
];

module.exports = routes;
