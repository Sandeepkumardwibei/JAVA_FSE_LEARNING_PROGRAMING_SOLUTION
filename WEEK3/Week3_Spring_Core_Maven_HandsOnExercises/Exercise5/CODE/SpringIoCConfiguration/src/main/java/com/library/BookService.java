package com.library;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayStatus() {
        System.out.println("BookService is using:");
        bookRepository.printRepositoryStatus();
    }
}
