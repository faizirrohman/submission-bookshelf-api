const {
    tambahBukuHandler,
    semuaBukuHandler,
    bukuByIdHandler,
    editBukuByIdHandler,
    hapusBukuByIdHandler,
} = require('./handler');


const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: tambahBukuHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: semuaBukuHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: bukuByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBukuByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: hapusBukuByIdHandler,
    },
];

module.exports = routes;