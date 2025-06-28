package com.example;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.verify;

public class Exercise7_VoidException {
    @Test
    public void testVoidMethodWithException() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        doThrow(new RuntimeException()).when(mockApi).deleteAll();
        MyService service = new MyService(mockApi);
        try {
            service.deleteAllData();
        } catch (RuntimeException e) {
            // expected
        }
        verify(mockApi).deleteAll();
    }
}