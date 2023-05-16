package com.example.BITSheJianDianPing.datamodel;

public class RatingOfDishes {
    private Double taste;
    private Double environment;
    private Double serve;

    public Double getTaste() {
        return taste;
    }

    public void setTaste(Double taste) {
        this.taste = taste;
    }

    public Double getEnvironment() {
        return environment;
    }

    public void setEnvironment(Double environment) {
        this.environment = environment;
    }

    public Double getServe() {
        return serve;
    }

    public void setServe(Double serve) {
        this.serve = serve;
    }

    public void printf()
    {
        System.out.println("taste:"+taste);
        System.out.println("environment:"+environment);
        System.out.println("serve:"+serve);
    }
}
