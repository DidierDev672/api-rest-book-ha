import { Book } from "../../domain/entities/Book";
import { BookRepository } from "../repositories/BookRepository";

export class BookPersistence implements BookRepository {
    private books: Book[] = [];

    getAllBooks(): Book[] {
        return this.books;
    }

    getBookById(id: string): Book | undefined {
        return this.books.find((book) => book.id === id);
      }
    
      createBook(book: Book): Book {
        this.books.push(book);
        return book;
      }
    
      updateBook(id: string, updatedBook: Book): Book | undefined {
        const bookIndex = this.books.findIndex((book) => book.id === id);
        if (bookIndex !== -1) {
          this.books[bookIndex] = updatedBook;
          return updatedBook;
        }
        return undefined;
      }
    
      deleteBook(id: string): Book | undefined {
        const bookIndex = this.books.findIndex((book) => book.id === id);
        if (bookIndex !== -1) {
          const deletedBook = this.books.splice(bookIndex, 1)[0];
          return deletedBook;
        }
        return undefined;
      }
}