# Directives
 <h2> There are 3 types of Directives </h2>
 - component 
 - structural
 - attribute

 1. component is a type of directive
  - class of its own
  it has its own template
  - every angular app must have atleast 1 directive(component)
  - Please refer to components tutorial to learn in depth

 2. Structural Directive
 - (*) symbol 
 - These directives alter the structure of the template
 - ngFor,ngIf and ngSwitch
 - for loop in ant other language - js,java, this idea is same
   you iterate over a set of dat and do some operations
 - ngIf we can do a conditional expression
    -if else -you would have written in any other language
    - else statement using template variable 
 - ngswitch
    - switch case statements to evaluate some expressions
        - true or false -> corresponding output       
 
 3. Attribute Directives
    There are mainly 2 attribute directives
    ngClass and ngStyle
    



# NgClass
-ngClass is a directive which is used to set the class name for DOM elements
- [ngclass] =""
- common mistake -case sensitive of ngClass
                 - string quotes

- Examples 
        - simple using static class name
        - dynamic - from the component
        - array classes - to pass more than 1 class we use array [clsName,clsName2]
        - ngClass with Expression to true and false
<img src = "src/assets/images/ngClass.png">
<img src = "src/assets/images/ngClass-1.png">
<img src = "src/assets/images/ngClass-2.png">

        
# NgStyle
- ngStyle is used for setting the style attributes of DOM elements
- we can set one or more properties
- common mistake = [ngStyle] case sensitivity
<img src = "src/assets/images/ngStyle-0.png">
<img src = "src/assets/images/ngStyle-1.png">
<img src = "src/assets/images/ngStyle-2.png">




# NgFor
- Similar to For loops that we use in other programming languages
- Don't worry about {{ }} -data binding 
- Provides local Variables in the array data
- Index - gets the current index of the current element in iteration ,its very important whenever DOM manipulation
- First - returns true if the current element is the first element in iteration
- last  - returns true if the current element is the last element in iteration
- Even  - gets the even number
- odd   - gets the odd number in iterations
<img src = "src/assets/images/ngFor.png">
<br>

# NgSwitch
- ngSwitch
    - build-in directive
    - starts with *ngSwitchCase
    - it is used to compare more than one expression at one time unlike ngIf which usually resolve to true or false/boolean values
    - We can have multiple checks in ngSwitch
    - *ngSwitchCase - Where we will mention about the check condition/expression
    - *ngSwitchDefault - what it should do when no condition is matching 
     can be read the value dynamically
    - Example - we can pass any value - can be integer/string etc.
    - where we make mistakes
    - missing out on *
    - for the string values - put the "'Strings'"
    - when using switch -> [ngSwitch] - look out on the case sensitivity
    <img src = "src/assets/images/ngSwitch-0.png">
    <br>
    <img src = "src/assets/images/ngSwitch-1.png">
    <br>
    <img src = "src/assets/images/ngSwitch-2.png">


# NgIf - else
- *ngIf -expression check
    - to show or hide the elements
- *ngIf ="expression" else templateVariableName -> #templateVariableName
- whenever we want to use template variable reference - we SHOULD use <ng-template>
- For eg
 <div *ngIf = "showValue; else showMessage">Show Value</div>
 <ng-template #showMessage> Showing else msg </ng-template>
 <ng-template #thenBlock>Showing then msg</ng-template>
    <img src = "src/assets/images/ngIf-0.png">
    <img src = "src/assets/images/ngIf-1.png">
    <img src = "src/assets/images/ngIf-2.png">
    <img src = "src/assets/images/ngIf-3.png">




