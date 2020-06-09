/**
 * Select Example
 */
console.log("***Select***")
console.log(
    "traditional Vanilla JS: Tag Selector",
    document.getElementsByTagName("P")[0],
    document.getElementsByTagName("P")[9]
);
console.log(
    "JSHelper: Tag Selector",
    $("p").elem,
    $("p").selected[9]
);

console.log(
    "traditional Vanilla JS: Class Selector",
    document.getElementsByClassName("class")[0],
    document.getElementsByClassName("class")[9]
);
console.log(
    "JSHelper: Tag Selector",
    $(".class").elem,
    $(".class").selected[9]
);

console.log(
    "traditional Vanilla JS: ID Selector",
    document.getElementById("p1")
);
console.log(
    "JSHelper: ID Selector",
    $("#p1").elem
);

console.log(
    "traditional Vanilla JS: Name Selector",
    document.getElementsByName("paragraph")[0],
    document.getElementsByName("paragraph")[9]
);
console.log(
    "JSHelper: Name Selector",
    $("[name=paragraph]").elem,
    $("[name=paragraph]").selected[9]
);

console.log(
    "JSHelper: Selecting by object",
    $(document.getElementById("id")).elem
);

/**
 * AddClass & RemoveClass
 */
console.log("\n***AddClass & RemoveClass***")
var p1 = document.getElementById("p1");
p1.setAttribute("class", p1.getAttribute("class") + " new-class");
console.log(
    "traditional Vanilla JS: Add class",
    p1
);
console.log(
    "JSHelper: Add class",
    $("#p2").AddClass("new-class").elem
);
var p3 = document.getElementById("p3");
p3.setAttribute("class", p3.getAttribute("class").replace("class",""));
console.log(
    "traditional Vanilla JS: Remove class",
    p3
);
console.log(
    "JSHelper: Remove class",
    $("#p4").RemoveClass("class").elem
);

/**
 * Add & Remove
 */
console.log("\n***Add & Remove: element to/from DOM***");
var newElem = document.createElement("P");
newElem.setAttribute("id", "new-elem-1");
newElem.setAttribute("class","new-elem-1");
newElem.setAttribute("type","new-elem-1");
newElem.setAttribute("value","new element 1");
newElem.innerHTML = "new element 1";
var par = document.getElementById("section-2");
par.appendChild(newElem);
console.log(
    "traditional Vanilla JS: Add element to DOM",
    newElem
);
console.log(
    "JSHelper: Add element to the DOM",
    $("#section-2").Add({
        tag: "P",
        id: "new-elem-2",
        clss: "new-elem-2",
        type: "new-elem-2",
        value: "new element 2",
        innerHTML: "new element 2",
    })
);
var r1 = document.getElementById("remove-1");
r1.parentNode.removeChild(r1);
console.log(
    "traditional Vanilla JS: Remove element from DOM",
     r1.parentNode === null
);

console.log(
    "JSHelper: Remove element from the DOM",
    $("#remove-2").Remove()
);

/**
 * Phone
 */
console.log("\n***Phone***");
console.log(
    "JSHelper: 3213213211",
    $("3213213211").Phone(),
    "\nJSHelper: 321-321-3211",
    $("321-321-3211").Phone(),
    "\nJSHelper: BAD INPUT",
    $("BAD INPUT").Phone(),
    "\n",$(".phone").RegisterPhoneFields().selected
);

/**
 * Currency
 */
console.log("\n***Currency***");
console.log(
    "JSHelper: 1234",
    $("1234").Currency(),
    "\nJSHelper: 1.23",
    $("1.23").Currency(),
    "\nJSHelper: BAD INPUT",
    $("BAD INPUT").Currency(),
    "\n",$(".currency").RegisterCurrencyFields().selected
);

/**
 * Timestamp
 */
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
