import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Alex Jones',
        email: 'alexjones@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Joe Smith',
        email: 'joesmith@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
];

export default users;
