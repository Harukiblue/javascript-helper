/**
 * Select Example
 */
console.log("***Select")
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
console.log("***AddClass & RemoveClass")
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
console.log("***Add & Remove: element to/from DOM");
var newElem = document.createElement("P");
newElem.setAttribute("id", "new-elem-1");
newElem.setAttribute("class","new-elem-1");
newElem.setAttribute("type","new-elem-1");
newElem.setAttribute("value","new element 1");
newElem.innerHTML = "new element 1";
var par = document.getElementsByTagName("BODY")[0];
par.appendChild(newElem);
console.log(
    "traditional Vanilla JS: Add element to DOM",
    newElem
);
console.log(
    "JSHelper: Add element to the DOM",
    $("body").Add({
        tag: "P",
        id: "new-elem-2",
        clss: "new-elem-2",
        type: "new-elem-2",
        value: "new element 2",
        innerHTML: "new element 2",
    })
);
var p9 = document.getElementById("p9");
p9.parentNode.removeChild(p9);
console.log(
    "traditional Vanilla JS: Remove element from DOM",
     p9.parentNode === null
);

console.log(
    "JSHelper: Remove element from the DOM",
    $("#p10").Remove()
);

/**
 * Phone
 */
console.log("***Phone");
console.log(
    "JSHelper: 3213213211",
    $("3213213211").Phone(),
    "JSHelper: 321-321-3211",
    $("321-321-3211").Phone(),
    "JSHelper: BAD INPUT",
    $("BAD INPUT").Phone()
);
