package com.example;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.verify;

public class Exercise4_HandlingVoidMethods {
    @Test
    public void testVoidMethod() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        doNothing().when(mockApi).clearCache();
        MyService service = new MyService(mockApi);
        service.clearData();
        verify(mockApi).clearCache();
    }
}