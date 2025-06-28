package com.example;

public interface ExternalApi {
    String getData();
    void sendData(String data);
    void clearCache();
    void stepOne();
    void stepTwo();
    void deleteAll();
}