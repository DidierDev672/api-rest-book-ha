import { Book } from "../../domain/entities/Book";

export interface BookRepository {
    getAllBooks(): Book[];
    getBookById(id: String): Book | undefined;
    createBook(book: Book): Book;
    updateBook(id: String, updatedBook: Book): Book | undefined;
    deleteBook(id: String): Book | undefined;
}