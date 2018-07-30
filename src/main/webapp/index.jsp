<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
    <head>
        <title>Spring 4 & Angular JS</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js"></script>
    
    </head>
    
    <body>
        <div ng-app="app">

            <h1>Hello World</h1>

            <ul>
                <li><a ui-sref="home">Home</a></li>
                <li><a ui-sref="about">About</a></li>
            </ul>

            <div ui-view></div>

        </div>

        <!-- Angular -->
        <script type="text/javascript" src="<c:url value='app/app.module.js'/>"></script>
        <script type="text/javascript" src="<c:url value='app/app.route.js'/>"></script>
        <script type="text/javascript" src="<c:url value='app/component/home/home.js'/>"></script>
        <script type="text/javascript" src="<c:url value='app/component/about/about.js'/>"></script>
    </body>
</html>
