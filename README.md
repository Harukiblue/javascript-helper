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
<p id="p1" class="class" name="paragraph">Bacon ipsum dolor amet pig landjaeger sausage, bacon meatloaf beef filet mignon brisket buffalo kielbasa tail. Bacon buffalo fatback ham hock capicola rump tail. Chicken sirloin frankfurter, jerky shankle meatball chuck brisket corned beef doner alcatra. Turducken corned beef rump sirloin boudin chuck meatball. Shank ground round short loin ball tip.</p>
<p id="p2" class="class" name="paragraph">Shankle leberkas tenderloin fatback chuck bresaola pig shoulder ground round ham drumstick spare ribs. Shankle chislic flank fatback, tongue meatloaf ground round sirloin. Pancetta jerky brisket, tri-tip beef ribs pork belly t-bone porchetta picanha. Rump tail brisket shoulder salami, burgdoggen tongue.</p>
<p id="p3" class="class" name="paragraph">Bacon short loin tenderloin kevin bresaola boudin porchetta prosciutto. Short ribs drumstick shankle jerky pancetta ground round chislic chicken picanha cupim. Flank jowl ham spare ribs hamburger, beef ribs pork chop turkey. Pork chop chuck hamburger pork ribeye, meatloaf frankfurter ham hock. Venison boudin beef ribs, turkey cow ham hock tail. Shank turducken filet mignon, capicola sausage doner beef ribs swine.</p>
<p id="p4" class="class" name="paragraph">Strip steak kielbasa porchetta tri-tip, tail ribeye pork chop. Sausage cow boudin venison, capicola alcatra jerky pastrami chicken cupim. Pancetta ground round kielbasa salami, leberkas porchetta jowl ham meatloaf pork t-bone picanha. Spare ribs jowl ham hock bacon sirloin shank andouille burgdoggen biltong pig pancetta tenderloin prosciutto flank. Boudin chislic pork chop, pancetta turkey fatback chicken turducken swine. Drumstick beef ribs shank salami corned beef hamburger pork belly cow tail. Shankle hamburger bacon pork loin brisket.</p>
<p id="p5" class="class" name="paragraph">Boudin short ribs buffalo doner brisket strip steak. Pork chop chicken meatloaf burgdoggen pork belly tri-tip, shankle corned beef leberkas pancetta salami ham hock short ribs. Sausage t-bone pastrami chicken. Burgdoggen corned beef ham hock brisket, buffalo kielbasa tenderloin rump jowl landjaeger short loin meatloaf picanha swine.</p>
<p id="p6" class="class" name="paragraph">Chislic short loin shank drumstick shankle porchetta ground round sirloin tongue. Filet mignon kevin shoulder, tri-tip ground round ball tip leberkas chuck buffalo flank doner shank ham sausage. Pancetta doner pork belly bresaola. Tail picanha salami burgdoggen pancetta, porchetta chicken pig.</p>
<p id="p7" class="class" name="paragraph">Pastrami picanha kevin, andouille venison pork belly sausage chuck tenderloin capicola boudin swine. Capicola sausage jerky doner, hamburger leberkas ground round pork loin meatloaf shank. Jerky pork beef ham hock short loin drumstick cupim. Pancetta tenderloin prosciutto, jowl biltong boudin shoulder turducken pork turkey pig. Short ribs corned beef bresaola biltong pork belly pork chop. Pastrami chicken t-bone landjaeger, prosciutto boudin tri-tip picanha meatball short loin. Turkey boudin meatball fatback tenderloin pork chop pork beef ribs chislic salami short ribs shank.</p>
<p id="p8" class="class" name="paragraph">Cupim pancetta burgdoggen, t-bone salami jowl pork belly cow rump ball tip shankle. Shankle salami andouille rump. Porchetta leberkas strip steak, picanha prosciutto chuck bacon corned beef tongue. Pork belly brisket burgdoggen, jowl strip steak beef ribs boudin porchetta tongue tenderloin venison andouille chuck corned beef kevin.</p>
<p id="p9" class="class" name="paragraph">Landjaeger beef ribs chicken alcatra t-bone salami. Fatback bacon tail kielbasa. Rump pork chop ham hock, turducken swine beef leberkas. Pancetta strip steak jerky picanha, bresaola short ribs sirloin beef ribs cupim.</p>
<p id="p10" class="class" name="paragraph">Pork belly sirloin capicola, ground round ribeye swine kielbasa beef turducken chuck jerky flank ham hock rump leberkas. Pastrami beef sausage cow, jerky landjaeger shoulder tail porchetta biltong. Porchetta boudin short ribs pork chop. Chislic shankle sirloin venison. Pig pork picanha, t-bone salami meatloaf pork chop. Leberkas picanha beef ribs chuck short loin ham brisket beef filet mignon salami cupim ribeye sausage kevin alcatra.</p>
```
JavaScript
```javascript
// Traditional Vanilla JS: Tag selector
    document.getElementsByTagName("P")[0];
    document.getElementsByTagName("P")[9];
//JSHelper: tag selector
    $("p").elem;
    $("p").selected[9];

// Traditional Vanilla JS: Class Selector
    document.getElementsByClassName("class")[0];
    document.getElementsByClassName("class")[9];
// JSHelper: Tag Selector
    $(".class").elem;
    $(".class").selected[9];

// Traditional Vanilla JS: ID Selector
    document.getElementById("p1");
// JSHelper: ID Selector
    $("#p1").elem;

// Traditional Vanilla JS: Name Selector
    document.getElementsByName("paragraph")[0];
    document.getElementsByName("paragraph")[9];
// JSHelper: Name Selector",
    $("[name=paragraph]").elem;
    $("[name=paragraph]").selected[9];

// JSHelper: Selecting by object
    $(document.getElementById("id")).elem;
```
## AddClass & RemoveClass
HTML
```html
<p id="p1" class="class" name="paragraph">Bacon ipsum dolor amet pig landjaeger sausage, bacon meatloaf beef filet mignon brisket buffalo kielbasa tail. Bacon buffalo fatback ham hock capicola rump tail. Chicken sirloin frankfurter, jerky shankle meatball chuck brisket corned beef doner alcatra. Turducken corned beef rump sirloin boudin chuck meatball. Shank ground round short loin ball tip.</p>
<p id="p2" class="class" name="paragraph">Shankle leberkas tenderloin fatback chuck bresaola pig shoulder ground round ham drumstick spare ribs. Shankle chislic flank fatback, tongue meatloaf ground round sirloin. Pancetta jerky brisket, tri-tip beef ribs pork belly t-bone porchetta picanha. Rump tail brisket shoulder salami, burgdoggen tongue.</p>
<p id="p3" class="class" name="paragraph">Bacon short loin tenderloin kevin bresaola boudin porchetta prosciutto. Short ribs drumstick shankle jerky pancetta ground round chislic chicken picanha cupim. Flank jowl ham spare ribs hamburger, beef ribs pork chop turkey. Pork chop chuck hamburger pork ribeye, meatloaf frankfurter ham hock. Venison boudin beef ribs, turkey cow ham hock tail. Shank turducken filet mignon, capicola sausage doner beef ribs swine.</p>
<p id="p4" class="class" name="paragraph">Strip steak kielbasa porchetta tri-tip, tail ribeye pork chop. Sausage cow boudin venison, capicola alcatra jerky pastrami chicken cupim. Pancetta ground round kielbasa salami, leberkas porchetta jowl ham meatloaf pork t-bone picanha. Spare ribs jowl ham hock bacon sirloin shank andouille burgdoggen biltong pig pancetta tenderloin prosciutto flank. Boudin chislic pork chop, pancetta turkey fatback chicken turducken swine. Drumstick beef ribs shank salami corned beef hamburger pork belly cow tail. Shankle hamburger bacon pork loin brisket.</p>
```
JavaScript
```javascript
// Traditional Vanilla JS: Add class
    var p1 = document.getElementById("p1");
    p1.setAttribute("class", p1.getAttribute("class") + " new-class");
// JSHelper: Add class
    $("#p2").AddClass("new-class");

// Traditional Vanilla JS: Remove class
    var p3 = document.getElementById("p3");
    p3.setAttribute("class", p3.getAttribute("class").replace("class",""));
// JSHelper: Remove class
    $("#p4").RemoveClass("class");
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
// Traditional Vanilla JS: append a new paragraph tag to container
    var newElem = document.createElement("P");
    newElem.setAttribute("id", "new-elem-1");
    newElem.setAttribute("class","new-elem-1");
    newElem.setAttribute("type","new-elem-1");
    newElem.setAttribute("value","new element 1");
    newElem.innerHTML = "new element 1";
    var par = document.getElementById("create-elem-container");
    par.appendChild(newElem);
// JSHelper: append a new paragraph tag to container",
    $("#create-elem-container").Add({
        tag: "P",
        id: "new-elem-2",
        clss: "new-elem-2",
        type: "new-elem-2",
        value: "new element 2",
        innerHTML: "new element 2",
    })


// Traditional Vanilla JS: remove elem from DOm
    var r1 = document.getElementById("remove-1");
    r1.parentNode.removeChild(r1);
// JSHelper: Remove element from the DOM",
    $("#remove-2").Remove()
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
    $("3213213211").Phone()
// JSHelper: 321-321-3211"
    $("321-321-3211").Phone();
// JSHelper: BAD INPUT"
    $("BAD INPUT").Phone();
// JSHelper: Register elements with "phone" class as a phone field
    $(".phone").RegisterPhoneFields().selected;
);
```
** Currency
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
);

```
## Timestamp
HTML
```html

```
JavaScript
```javascript
console.log("\n***Timestamp***");
console.log(
    "JSHelper null:",
    $().Timestamp(),
    "\nJSHelper Year:",
    $("%Y").Timestamp(),
    "\nJSHelper Month #:",
    $("%m").Timestamp(),
    "\nJSHelper Month name:",
    $("%N").Timestamp(),
    "\nJSHelper Day:",
    $("%d").Timestamp(),
    "\nJSHelper Hour:",
    $("%H").Timestamp(),
    "\nJSHelper Minute:",
    $("%M").Timestamp(),
    "\nJSHelper Seconds:",
    $("%S").Timestamp(),
);

```
## Switch
HTML
```html

```
JavaScript
```javascript
console.log("\n***Switch***");
var switchOutput1 = "";
switch(Math.floor(Math.random()*4)+1){
    case 1: 
        switchOutput1 = "one"; 
    break;
    case 2: 
        switchOutput1 = "two"; 
    break;
    case 3: 
        switchOutput1 = "three"; 
    break;
    case 4: 
        switchOutput1 = "four"; 
    break;
}
console.log(
    "traditional Vanilla JS Random switch:",
    switchOutput1
);
switchOutput2 = "";
var scenario = $().Switch();
scenario.Add(1, function(){switchOutput2 = "one";});
scenario.Add(2, function(){switchOutput2 = "two";});
scenario.Add(3, function(){switchOutput2 = "three";});
scenario.Add(4, function(){switchOutput2 = "four";});
scenario.DoIf(1);
console.log(
    "JSHelper Do if condition is 1:",
    switchOutput2,
);
scenario.DoRandom();
console.log(
    "JSHelper Do random case:",
    switchOutput2,
);
scenario.DoAll();
console.log(
    "JSHelper Do all cases:",
    switchOutput2,
);
scenario.RemoveIf(4);
console.log(
    "JSHelper RemoveIf condition is 4:",
    scenario.collection,
);
scenario.RemoveAt(1);
console.log(
    "JSHelper RemoveAt index 1:",
    scenario.collection,
);

```
## ObjectArray
HTML
```html

```
JavaScript
```javascript
console.log("\n***ObjectArray***");
var beforeObjArr1 = [{index:0,key:"d"},{index:1,key:"c"},{index:2,key:"a"},{index:3,key:"b"}];
var afterObjArr1 = [{index:0,key:"d"},{index:1,key:"c"},{index:2,key:"a"},{index:3,key:"b"}];
afterObjArr1.sort(function(a,b){
    if(a.key < b.key)return -1;
    if(a.key > b.key)return 1;
    return 0;
});
console.log(
    "traditional Vanilla JS sort object array:",
    "\nbefore", beforeObjArr1, "after", afterObjArr1
);
var baseObjArr = [{index:0,key:"d"},{index:1,key:"c"},{index:2,key:"a"},{index:3,key:"b"}];
console.log(
    "JSHelper sort object array:",
    "\nbefore", baseObjArr, "after", $().ObjectArray(baseObjArr).Sort("key")
);

```
## Replace
HTML
```html

```
JavaScript
```javascript
console.log("\n***Replace***");
console.log(
    "traditional Vanilla remove all digis from '1a,2b,3c,4d,5e,6f,7g,8h,9i with Replace:",
    "1a,2b,3c,4d,5e,6f,7g,8h,9i".replace(new RegExp("\\d","g"),"")
);
console.log(
    "JSHelper remove all digis from '1a,2b,3c,4d,5e,6f,7g,8h,9i with Replace:",
    $("1a,2b,3c,4d,5e,6f,7g,8h,9i").Replace("\\d","")
);

```
## Redirect
HTML
```html

```
JavaScript
```javascript
console.log("\n***Redirect***\nClick on redirect button to view Redirect demo");
var elem = $("#redirect-url").elem;
elem.value = elem.value + $().Timestamp()
$("#redirect-btn").AddEvent("click",function(e){
    $(elem.value).Redirect();
});

```
## Shuffle
HTML
```html

```
JavaScript
```javascript
console.log("\n***Shuffle***");
console.log(
    "JSHelper shuffle array [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']:",
    $([1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]).Shuffle()
);

```
## RandomInt
HTML
```html

```
JavaScript
```javascript
console.log("\n***RandomInt***");
console.log(
    "JSHelper random integer from 0 to 1:",
    $().RandomInt(),
    "\nJSHelper random integer from 0 to 100:",
    $(100).RandomInt(),
    "\nJSHelper random integer from 1 to 10:",
    $(1,10).RandomInt()
);

```
## RandomDecimal
HTML
```html

```
JavaScript
```javascript
console.log("\n***RandomDecimal***");
console.log(
    "JSHelper random decimal from 0 to 1:",
    $().RandomDecimal(),
    "\nJSHelper random decimal from 0 to 100:",
    $(100).RandomDecimal(),
    "\nJSHelper random decimal from 1 to 10:",
    $(1,10).RandomDecimal()
);

```
## QueryString
HTML
```html

```
JavaScript
```javascript
console.log("\n***QueryString***\nClick on 'Set Querystring' button to view QueryString demo");
$("#redirect-btn-2").AddEvent("click",function(e){
    $($("#redirect-url-2").elem.value).QueryString();
});
console.log(
    "JSHelper get the qs1 query string value:",
    $("qs1").QueryString()
)

```
## AddEvent
HTML
```html

```
JavaScript
```javascript
console.log("\n***AddEvent***");
$("#event-btn").AddEvent("click", function(e){
    alert("you have clicked on the Event Listener Demo button");
});
console.log(
    "JSHelper click on 'Event Listener Demo' to view the event listener demo:",
);

```
## IsEmpty
HTML
```html

```
JavaScript
```javascript
console.log("\n***IsEmpty***");
console.log(
    "JSHelper is {} empty?:",
    $({}).IsEmpty(),
    "\nJSHelper is {key:'value''} empty?:",
    $({key:"value"}).IsEmpty(),
    "\nJSHelper is [] empty?:",
    $([]).IsEmpty(),
    "\nJSHelper is [1] empty?:",
    $([1]).IsEmpty(),
    "\nJSHelper is '' empty?:",
    $("").IsEmpty(),
    "\nJSHelper is 'a' empty?:",
    $("a").IsEmpty(),
    "\nJSHelper is undefined empty?:",
    $(undefined).IsEmpty(),
    "\nJSHelper is true null empty?:",
    $().IsEmpty(),
    "\nJSHelper is null empty?:",
    $(null).IsEmpty()
);

```
## Cookie
HTML
```html

```
JavaScript
```javascript
console.log("\n***Cookie***");
$().Cookie().Create("test","this is a test");
console.log(
    "JSHelper create and read cookie test:",
    $().Cookie().Read("test")
);
$().Cookie().Update("test","this is an updated test");
console.log(
    "JSHelper update and read cookie test:",
    $().Cookie().Read("test")
);
$().Cookie().Delete("test");
console.log(
    "JSHelper delete and read cookie test:",
    $().Cookie().Read("test")
);

```
## Copy
HTML
```html

```
JavaScript
```javascript
console.log("\n***Copy***");
$("#copy-btn").AddEvent("click",function(e){
    $("#copy-text").Copy();
    alert("The text has been added to your clipboard.")
});
console.log(
    "JSHelper click the Copy button to copy the text in the field:"
);

```
## DetectBrowser
HTML
```html

```
JavaScript
```javascript
console.log("\n***DetectBrowser***");
console.log(
    "JSHelper list the type of browser:",
    $().DetectBrowser()
);
```
