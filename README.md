# javascript-helper
This library contains several commonly used objects<br/>
* Select - select an element(s)
* Clear - deselect 
* AddClass - add a class to an element
* RemoveClass - remove a class from an element
* Add - add element to the DOM
* Remove - remove an element to the DOM
* Phone - returns a Phone object. Can be used to validate a phone number and format a phone number, as well as add common event listeners for a phone field
* Currency - returns a Currency object. Can be used to validate a currency number and format a currency number, as well as add common event listeners for a currency field
* Timestamp - returns a timestamp. Can be customized.
* Switch - returns a Switch object, which can be used as an Object Oriented alternative to the built in switch statement.
* ObjectArray - returns an ObjectArray object, which can be used to easily sort by object key arrays populated with objects.
* Replace - use RegExp to replace a pattern in a string
* Redirect - redirect the page to a given URL.
* Shuffle - randomly suffle an array.
* RandomInt - returns a random integer between 2 given numbers
* RandomDec - returns a random decimal between 2 given numbers
* QueryString - return a query string from a url
* AddEvent - add an event listener, cross browser compatible
* IsEmpty - checks if parameter is empty, works with string and objects.
* Cookie - Allows you to (CRUD: create, read, update, and delete) cookies
* Copy - Copy the contents of an element to the clipboard.
* DetectBrowser - determins what browser of user
***
## Select
HTML
```html
<p id="p1" class="class" name="paragraph">This is paragraph 1.</p>
<p id="p2" class="class" name="paragraph">This is paragraph 2.</p>
```
JavaScript
```javascript
//JSHelper: tag selector
    $("p").elem;                        // select paragraph 1 by tag
    $("p").selected[1];                 // select paragraph 2 by tag
// JSHelper: class selector
    $(".class").elem;                   // select paragraph 1 by class
    $(".class").selected[1];            // select paragraph 2 by class
// JSHelper: id selector
    $("#p1").elem;
// JSHelper: name selector",
    $("[name=paragraph]").elem;         // select paragraph 1 by name
    $("[name=paragraph]").selected[1];  // select paragraph 2 by name
// JSHelper: Selecting by object
    $(document.getElementById("id")).elem;
```
## AddClass & RemoveClass
HTML
```html
<p id="p1" class="class" name="paragraph">This is paragraph 1.</p>
<p id="p2" class="class" name="paragraph">This is paragraph 2.</p>
```
JavaScript
```javascript
// JSHelper: Add class
    $("#p1").AddClass("new-class");
// JSHelper: Remove class
    $("#p2").RemoveClass("class");
```
## Add & Remove
HTML
```html
<section id="create-elem-container">
    <p id="remove-1">Remove this paragraph tag: 1</p>
    <p id="remove-2">Remove this paragraph tag: 2</p>
</section>
```
JavaScript
```javascript
// JSHelper: append a new paragraph tag to container
    $("#create-elem-container").Add({
        tag: "P",
        id: "new-elem-2",
        clss: "new-elem-2",
        type: "new-elem-2",
        value: "new element 2",
        innerHTML: "new element 2",
    });
// JSHelper: Remove element from the DOM
    $("#remove-2").Remove();
```
## Phone
HTML
```html
<input type="text" class="phone" id="phone-field-1" placeholder="enter phne number">
<input type="text" class="phone" id="phone-field-2" placeholder="enter phne number">
```
JavaScript
```javascript
// JSHelper: 3213213211"
    $("3213213211").Phone();
// JSHelper: 321-321-3211"
    $("321-321-3211").Phone();
// JSHelper: BAD INPUT"
    $("BAD INPUT").Phone();
// JSHelper: Register elements with "phone" class as a phone field
    $(".phone").RegisterPhoneFields().selected;
```
## Currency
HTML
```html
<input type="text" class="currency" id="currency-field-1" placeholder="enter currency">
<input type="text" class="currency" id="currency-field-2" placeholder="enter currency">
```
JavaScript
```javascript
// JSHelper: 1234
    $("1234").Currency();
// JSHelper: 1.23
    $("1.23").Currency();
// JSHelper: BAD INPUT
    $("BAD INPUT").Currency();
// JSHelper: Register elements with "currency" class as a currency field
    $(".currency").RegisterCurrencyFields().selected;
```
## Timestamp
JavaScript
```javascript
// "JSHelper null:
    $().Timestamp();
// JSHelper Year:
    $("%Y").Timestamp();
// JSHelper Month #: 
    $("%m").Timestamp();
// JSHelper Month name:
    $("%N").Timestamp();
// JSHelper Day:
    $("%d").Timestamp();
// JSHelper Hour:
    $("%H").Timestamp();
// JSHelper Minute:
    $("%M").Timestamp();
// JSHelper Seconds:
    $("%S").Timestamp();
```
## Switch
JavaScript
```javascript
// JSHelper Alternative object oriented switch
    output = "";
    var scenario = $().Switch();
    scenario.Add(1, function(){output = "one";});
    scenario.Add(2, function(){output = "two";});
    scenario.Add(3, function(){output = "three";});
    scenario.Add(4, function(){output = "four";});
    scenario.DoIf(1);       // do if condition is true
    console.log(output);
    scenario.DoRandom();    // do a random case
    console.log(output);
    scenario.DoAll();       // do every case
    console.log(output);
    scenario.RemoveIf(4);   // remove if case is true
    console.log(output);
    scenario.RemoveAt(1);   // remove at index
    console.log(output);
```
## ObjectArray
JavaScript
```javascript
// JSHelper: sort object array
    var objArr = [{index:0,key:"d"},{index:1,key:"c"},{index:2,key:"a"},{index:3,key:"b"}];
    var sortedObjArr = $().ObjectArray(objArr).Sort("key");
```
## Replace
JavaScript
```javascript
// JSHelper remove all digis from '1a,2b,3c,4d,5e,6f,7g,8h,9i with Replace
    $("1a,2b,3c,4d,5e,6f,7g,8h,9i").Replace("\\d","");
);
```
## Redirect
HTML
```html
<button id="redirect-btn">Redirect to google</button>
```
JavaScript
```javascript
// JSHelper: Redirect
$("#redirect-btn").AddEvent("click",function(e){
    $("http://www.google.com").Redirect();
});
```
## Shuffle
JavaScript
```javascript
// JSHelper shuffle array [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
    var shuffled = $([1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]).Shuffle(),
```
## RandomInt
JavaScript
```javascript
// JSHelper random integer from 0 to 1
    $().RandomInt();
// JSHelper random integer from 0 to 100
    $(100).RandomInt();
// JSHelper random integer from 1 to 10
    $(1,10).RandomInt();
```
## RandomDecimal
JavaScript
```javascript
// JSHelper random decimal from 0 to 1
    $().RandomDecimal();
// nJSHelper random decimal from 0 to 100
    $(100).RandomDecimal();
// nJSHelper random decimal from 1 to 10
    $(1,10).RandomDecimal();
```
## QueryString
JavaScript
```javascript
// JSHelper: get querystring value for qs1
$("qs1").QueryString();
```
## AddEvent
HTML
```html
<button id="event-btn">Click me</button>
```
JavaScript
```javascript
// JSHelper: add an event listener to a button click event
$("#event-btn").AddEvent("click", function(e){
    alert("you have clicked on the Event Listener Demo button");
});
```
## IsEmpty
JavaScript
```javascript
// JSHelper is {} empty?
    $({}).IsEmpty();
// JSHelper is {key:'value''} empty?
    $({key:"value"}).IsEmpty();
// JSHelper is [] empty?
    $([]).IsEmpty();
// JSHelper is [1] empty?
    $([1]).IsEmpty();
// JSHelper is '' empty?
    $("").IsEmpty();
// JSHelper is 'a' empty?
    $("a").IsEmpty();
// JSHelper is undefined empty?
    $(undefined).IsEmpty();
// JSHelper is true null empty?
    $().IsEmpty();
// JSHelper is null empty?
    $(null).IsEmpty();
```
## Cookie
JavaScript
```javascript
// JSHelper: create cookie
    $().Cookie().Create("test","this is a test");
// JSHelper: read cookie
    $().Cookie().Read("test");
// JSHelper: update cookie
    $().Cookie().Update("test","this is an updated test");
// JSHelper: delete cookie
    $().Cookie().Delete("test");
```
## Copy
HTML
```html
<input id="field1" value="the initial value">
<button id="copy-btn">Copy</button>
```
JavaScript
```javascript
$("#copy-btn").AddEvent("click",function(e){
    $("#field1").Copy();
    alert("The text has been added to your clipboard.");
});
```
## DetectBrowser
JavaScript
```javascript
// JSHelper list the type of browser
    $().DetectBrowser();
```
