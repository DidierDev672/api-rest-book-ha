import { Request, Response } from "express";
import { Book } from "../../domain/entities/Book";
import { BookService } from "../../domain/services/BookService";
import { BookLogger } from "../../infrastructure/logger/logger";

export class BookController {
    private bookService: BookService;

    constructor(bookService: BookService){
        this.bookService = bookService;
    }

    getAllBooks(req: Request, res: Response): void {
        const books: Book[] = this.bookService.getAllBooks();
        res.status(200).json(books);
    }

    getBookById(req: Request, res: Response): void {
        const bookId: String = req.params.id;
        const book: Book | undefined = this.bookService.getBookById(bookId);
        if (book) {
          res.status(200).json(book);
        } else {
          res.status(404).json({ error: 'Book not found' });
        }
      }

      createBook(req: Request, res: Response): void {
        const newBook: Book = req.body;
        const createdBook: Book = this.bookService.createBook(newBook);
        BookLogger.log(newBook);
        res.status(201).json(createdBook);
      }

      updateBook(req: Request, res: Response): void {
        const bookId: String = req.params.id;
        const updatedBook: Book = req.body;
        const book: Book | undefined = this.bookService.updateBook(bookId, updatedBook);
        if (book) {
          res.status(200).json(book);
        } else {
          res.status(404).json({ error: 'Book not found' });
        }
      }

      deleteBook(req: Request, res: Response): void {
        const bookId: String = req.params.id;
        const deletedBook: Book | undefined = this.bookService.deleteBook(bookId);
        if (deletedBook) {
          res.status(200).json(deletedBook);
        } else {
          res.status(404).json({ error: 'Book not found' });
        }
      }
}