package com.example;

import org.junit.jupiter.api.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class OrderedTests {

    @Test
    @Order(1)
    void testA() {
        System.out.println("Running test A");
    }

    @Test
    @Order(2)
    void testB() {
        System.out.println("Running test B");
    }

    @Test
    @Order(3)
    void testC() {
        System.out.println("Running test C");
    }
}
