const formatValue = (value: string | number | boolean) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else if (typeof value === 'boolean') {
    return !value;
  }
};

const getLength = (value: string | any[]): number => {
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type book = {
  title: string;
  rating: number;
};

const filterByRating = (books: book[]): book[] => {
  const filterBooks = books.reduce((item: book[], book) => {
    if (book.rating >= 4) {
      item.push(book);
    }
    return item;
  }, []);

  return filterBooks;
};

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  const activeUser = users.filter((user) => user.isActive);

  return activeUser;
};

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? 'Yes' : 'No'}`
  );
};

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

const getUniqueValues = (array1: number[], array2: number[]): number[] => {
  const map = new Map<number, boolean>();

  array1.forEach((element) => {
    map.set(element, true);
  });
  array2.forEach((element) => {
    map.set(element, true);
  });

  return [...map.keys()];
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (products: Product[]): number => {
  const totalPrice = products.reduce((acc, product) => {
    let price = product.price * product.quantity;
    if (product.discount) {
      acc += price - (price * product.discount) / 100;
    } else {
      acc += price;
    }

    return acc;
  }, 0);

  return totalPrice;
};
