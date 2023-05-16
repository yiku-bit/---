package com.example.BITSheJianDianPing.datamodel;

public class WriteComment {
    private Address address;
    private RatingOfDishes rating;
    private Comment comment;

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public RatingOfDishes getRating() {
        return rating;
    }

    public void setRating(RatingOfDishes rating) {
        this.rating = rating;
    }

    public Comment getComment() {
        return comment;
    }

    public void setComment(Comment comment) {
        this.comment = comment;
    }

    public void printf()
    {
        address.printf();
        rating.printf();
        comment.printf();
    }
}
