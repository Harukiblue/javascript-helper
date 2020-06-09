/**
 * Select Example
 */
console.log(
    "traditional Vanilla JS: Tag Selector",
    document.getElementsByTagName("P")[0],
    document.getElementsByTagName("P")[10]
);
console.log(
    "JSHelper: Tag Selector",
    $("p").elem,
    $("p").selected[10]
);

console.log(
    "traditional Vanilla JS: Class Selector",
    document.getElementsByClassName("class")[0],
    document.getElementsByClassName("class")[10]
);
console.log(
    "JSHelper: Tag Selector",
    $(".class").elem,
    $(".class").selected[10]
);

console.log(
    "traditional Vanilla JS: ID Selector",
    document.getElementById("p1")
);
console.log(
    "JSHelper: ID Selector",
    $("#id").elem
);

console.log(
    "traditional Vanilla JS: Name Selector",
    document.getElementsByName("paragraph")[0],
    document.getElementsByName("paragraph")[10]
);
console.log(
    "JSHelper: Name Selector",
    $("[name=paragraph]").elem,
    $("[name=paragraph]").selected[10]
);

console.log(
    "JSHelper: Selecting by object",
    $(document.getElementById("id")).elem
);

/**
 * AddClass & RemoveClass
 */



