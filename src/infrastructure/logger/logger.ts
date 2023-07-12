import { Book } from "../../domain/entities/Book";

export class BookLogger {
    static log(book: Book): void {
        console.log(`Book ID: ${book.id}`);
        console.log(`Tiitle: ${book.title}`);
        console.log(`Author: ${book.author}`);
        console.log(`Publication Year: ${book.publicationYear}`);
        console.log("------------------------------------------");
    }
}