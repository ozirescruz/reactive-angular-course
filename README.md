
## The Reactive Angular Course

This repository contains the code of the [Reactive Angular Course](https://angular-university.io/course/reactive-angular-course).

This course repository is updated to Angular v10, and there is a  package-lock.json file available, for avoiding semantic versioning installation issues.

![Reactive Angular Course](https://angular-university.s3-us-west-1.amazonaws.com/course-images/reactive-angular-course.jpg)


This Course in a Nutshell

This course is a catalog of commonly used design patterns (and some anti-patterns) that every Angular developer should know. The goal of the course is to teach you how to comfortably design and develop applications in Angular in Reactive style using just plain RxJs, and nothing more.

This course comes with a running Github repository with the the finished code, as well as starting points for different sections of the course in case that you want to code along, which we recommend as its the best way to learn.

This course answers the common question: how far can we go in Angular while using only plain RxJs and nothing more, without introducing any state management library?

It turns out that the simple set of techniques taught in this course are very well suited for a wide range of applications, especially in-house built enterprise applications.

In this course, you will learn exactly how to use RxJs to design and develop both the service and the view layers of your application, and you will understand both the advantages and the pitfalls of the reactive approach.

These simplified state management techniques are adequate and sufficient for a large range of applications, and we believe that you should consider them first before thinking of adopting a full-blown state management solution.

How far can you go with these techniques? That's what you will find out in this course.

Course Overview

We are going to start our course by taking a small Angular application that is written in imperative style, and we are going to talk about some of the problems of that approach. Then, we are going to refactor the application and explain step-by-step how to implement it in reactive style instead.

We will explain in detail every RxJs operator that we come across in this course, the first time that we need each operator.

We are going to start with a fully stateless solution first, but later we are going to improve the user experience by applying some simple RxJs-only state management techniques. We are going to use these patterns in order to handle some of the data of the application, as well as the user authentication profile.

The key element needed to implement lightweight state management is RxJs behavior subjects so we will cover those in detail in the course. We will also provide step-by-step reactive style solutions for common UI functionality like loading indicators or error messages.

Table of Contents

This course covers the following topics:

    Review of an application written in imperative style
    Refactoring into stateless reactive style, understanding the benefits
    Smart vs Presentational Components
    Stateless Observable Services
    The shareReplay Operator
    Stateless UI updates (without state management)
    Introduction to RxJs Subjects and BehaviorSubject
    Decoupled component communication using shared observable services
    Using Observables to have components interact at different levels of the component tree
    Error Handling and error messages in reactive style
    Loading Indicators in reactive style
    Improving user experience with lightweight RxJs stores
    Optimistic UI updates
    Managing User Authentication state with plain RxJs
    Local vs Global Services
    Master Detail with cached master table in reactive style
    The Single Data Observable Pattern: Avoiding nested ng-component tags
    Refactoring a reactive application to OnPush change detection
    Conclusion and key takeaways

What Will You Learn In this Course?

At the end of the course, you will feel comfortable designing and developing Angular applications in reactive style, by leveraging plain RxJs-only techniques. You will know how to apply simplified reactive state management techniques to different common use cases, and you will understand the advantages and the limitations of this approach.

You will be familiar with a series of commonly needed reactive design patterns, and you will also be familiar with a series of common pitfalls to avoid.
