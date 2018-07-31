<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
    <head>
        <title>Spring 4 & Angular JS</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.0.0/angular-material.css">
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.js"></script>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-animate.js"></script>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-aria.js"></script>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-messages.js"></script>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angular_material/1.0.0/angular-material.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js"></script>

        <style>
            
            .page-container {
                margin: 0 auto;
                padding: 12px;
                max-width: 80%; 
            }
            
        </style>

    </head>

    <body>
        <div ng-app="app" ng-cloak>
            
            <div>
                <h2 class="md-toolbar-tools">Spring 4 & Angular JS</h2>
                <menu></menu>
            </div>

            <md-content class="page-container" ui-view></md-content>

        </div>

        <!-- Angular -->
        <script type="text/javascript" src="<c:url value='app/app.module.js'/>"></script>
        <script type="text/javascript" src="<c:url value='app/app.route.js'/>"></script>
        <script type="text/javascript" src="<c:url value='app/directive/menu/menu.directive.js'/>"</script>
        <script type="text/javascript" src="<c:url value='app/component/home/home.js'/>"></script>
        <script type="text/javascript" src="<c:url value='app/component/about/about.js'/>"></script>
        
    </body>
</html>
