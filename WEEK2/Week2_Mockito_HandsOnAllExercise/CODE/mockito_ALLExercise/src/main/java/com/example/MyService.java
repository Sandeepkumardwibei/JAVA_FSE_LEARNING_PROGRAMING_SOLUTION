package com.example;

public class MyService {
    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }

    public void sendData(String data) {
        api.sendData(data);
    }

    public void clearData() {
        api.clearCache();
    }

    public void stepOne() {
        api.stepOne();
    }

    public void stepTwo() {
        api.stepTwo();
    }

    public void deleteAllData() {
        api.deleteAll();
    }
}