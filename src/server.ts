import express, { Express  } from "express";
import { BookController } from "./adapters/rest/BookController";
import { BookService } from "./domain/services/BookService";
import { BookRepository } from "./infrastructure/repositories/BookRepository";
import { BookPersistence } from "./infrastructure/persistence/BookPersistence";

function createServer(): Express {
    const app: Express = express();

    const bookRepository: BookRepository = new BookPersistence();
    const bookService: BookService = new BookService(bookRepository);
    const bookController: BookController = new BookController(bookService);

    app.use(express.json());

    app.get("/books", (req, res) => bookController.getAllBooks(req, res));
    app.get("/books/:id", (req, res) => bookController.getBookById(req, res));
    app.post("/books", (req, res) => bookController.createBook(req, res));
    app.put("/books/:id", (req, res) => bookController.updateBook(req,res));
    app.delete("/books/:id", (req, res) => bookController.deleteBook(req, res));

    return app;
}

const server: Express = createServer();
const port = 3000;

server.listen(3000, () => {
    console.log(`Server listening on http://localhost:${port}/books`);
});