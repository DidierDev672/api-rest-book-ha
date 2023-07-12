import { Book } from "../entities/Book";
import { BookRepository } from "../../infrastructure/repositories/BookRepository";

export class BookService {
    private bookRepository: BookRepository;

    constructor(bookRepository: BookRepository){
        this.bookRepository = bookRepository;
    }

    getAllBooks(): Book[] {
        return this.bookRepository.getAllBooks();
    }

    getBookById(id: String): Book | undefined {
        return this.bookRepository.getBookById(id);
    }

    createBook(book: Book): Book {
        return this.bookRepository.createBook(book);
    }

    updateBook(id: String, updatedBook: Book): Book | undefined {
        return this.bookRepository.updateBook(id, updatedBook);
    }

    deleteBook(id: String): Book | undefined {
        return this.bookRepository.deleteBook(id);
    }
}