type User = { name: string; email: string };

const usuarios: User[] = [
    { name: 'Joao', email: 'Joao@email.com' },
    { name: 'Ana', email: 'Ana@email.com' },
    { name: 'Pedro', email: 'Pedro@email.com' },
    { name: 'Maria', email: 'Maria@email.com' },
    { name: 'Carlos', email: 'Carlos@email.com' },
    { name: 'Leticia', email: 'Leticia@email.com' },
    { name: 'Marcos', email: 'Marcos@email.com' },
    { name: 'Giovana', email: 'Giovana@email.com' },
];

function findByEmail(email: string): User | null {
    return usuarios.find((user) => user.email === email) ?? null;
}

console.log(findByEmail('Marcos@email.com'));
