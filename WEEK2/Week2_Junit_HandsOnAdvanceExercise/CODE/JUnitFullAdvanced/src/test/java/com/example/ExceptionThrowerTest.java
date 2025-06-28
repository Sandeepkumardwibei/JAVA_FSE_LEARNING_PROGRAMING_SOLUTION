package com.example;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class ExceptionThrowerTest {
    @Test
    public void testExceptionThrown() {
        ExceptionThrower thrower = new ExceptionThrower();
        assertThrows(Exception.class, () -> thrower.throwException(true));
    }

    @Test
    public void testNoException() {
        ExceptionThrower thrower = new ExceptionThrower();
        assertDoesNotThrow(() -> thrower.throwException(false));
    }
}
