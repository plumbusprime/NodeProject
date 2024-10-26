import * as fs from 'fs';

const filePath = './list.txt';

// Чтение
const readFile = (): any[] => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data).examples;
}

const writeFile = (data: any[]) => {
    fs.writeFileSync(filePath, JSON.stringify({ examples: data }, null, 2));
};

// GET
const getAll = () => {
    return readFile();
};

// GET ID
const getById = (id: number) => {
    const data = readFile();
    return data.find((el) => el.id === id) || null;
};

// POST
const addItem = (name: string) => {
    const data = readFile();
    const newItem = { id: Date.now(), name };
    data.push(newItem);
    writeFile(data);
    return newItem;
};

// PATCH
const updateItem = (id: number, name: string) => {
    const data = readFile();
    const index = data.findIndex((el) => el.id === id);
    if (index === -1) return null;
    data[index] = { ...data[index], name };
    writeFile(data);
    return data[index];
};

// DELETE
const deleteItem = (id: number) => {
    const data = readFile();
    const newData = data.filter((el) => el.id !== id);
    writeFile(newData);
    return newData;
};

// ВЫВОД
console.log("All ->", getAll());
console.log("ID ->", getById(1));
console.log("Add new item ->", addItem("NewName"));
console.log("Update ->", updateItem(1, "UpdatedName"));
console.log("Delete ->", deleteItem(1));