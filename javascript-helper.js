function JSHelper(){
    
}
/**
 * Select
 */
JSHelper.prototype.Select = function(s, i){
	if(s === undefined || s === null || typeof(s) !== "string"){
		s = "";
	}else{
		s = s.trim();
	}	
	var result = document.querySelectorAll(s);
	this.selector = s;
	this.selected = result;
	this.selectedIndex = i !== undefined ? i: result.length === 0 ? -1 : 0;
	this.hasSelected = (this.selected.length > 0 && this.selectedIndex > -1);
	this.selectedElem =  this.hasSelected ? this.selected[this.selectedIndex] : document;
	return this;
}
/**
 * AddClass & RemoveClass
 */
JSHelper.prototype.removeClass = function(clss){
	this.selected.forEach(function(elem){
		var RTN = "";
		var origClass = elem.getAttribute("class");
		if(origClass === null || origClass === undefined){origClass = "";}
		RTN = " " + origClass + " ";
		RTN = RTN.replace(new RegExp(" " + clss + " ", "g")," ");
		RTN = RTN.trim();
		if(RTN !== ""){
			elem.setAttribute("class", RTN);
		}else{
			elem.removeAttribute("class");
		}
		return RTN;
	});
}
JSHelper.prototype.addClass = function(clss){
	this.selected.forEach(function(elem){
		var origClass = elem.getAttribute("class");
		if(origClass === null || origClass === undefined){origClass = "";}
		origClass = origClass.trim();
		if(origClass.indexOf(clss) == -1){
			var newClass = origClass + " " + clss
			newClass = newClass.trim();
			elem.setAttribute("class", newClass);
		}
		return elem.getAttribute("class");

	});
}
/**
 * Add & remove element from DOM
 */
JSHelper.prototype.Add = function(obj){
	if(obj === undefined){return;}
	if(obj.tag === undefined){return;}
	if(obj.par === undefined && this.hasSelected ){obj.par = this.selectedElem;}
	if(obj.par === undefined && !this.hasSelected ){return;}
	
	var elem = document.createElement(obj.tag);
	var par = obj.par;
	if(obj.id){elem.setAttribute("id", obj.id);}
	if(obj.clss){elem.setAttribute("class", obj.clss);}
	if(obj.type){elem.setAttribute("type", obj.type);}
	if(obj.value){elem.setAttribute("value", obj.value);}
	if(obj.innerHTML){elem.innerHTML = obj.innerHTML;}
	
	par.appendChild(elem);
}
JSHelper.prototype.Remove = function(elem){
	if(typeof(elem) === "string"){this.Select(elem); elem = undefined;}
	if(elem === undefined && this.hasSelected ){elem = this.selectedElem;}
	if(elem === undefined && !this.hasSelected ){return;}
	elem.parentNode.removeChild(elem);
}
/**
 * Phone
 */
function Phone(value){
	if(value !== undefined) this.value = this.convertToPhone(value);
}
Phone.prototype.convertToPhone = function(value){
    if(value === undefined || value === null || value === ""){return null;}
    var original = value;
    value = value.replace(/\s/g,"").replace(/\(/g,"").replace(/\)/g,"").replace(/\./g,"").replace(/-/g,"");
    if(value.length > 3 && value.length < 12){
        var pattern;
        if(value.length > 3 && value.length < 8){
            pattern = "xxx-xxxx";
        }else if(value.length > 7 && value.length < 11){
            pattern = "(xxx) xxx-xxxx";
        }else{
            pattern = "x(xxx) xxx-xxxx";
        }
        for(var i = 0; i < value.length; i++){
            pattern = pattern.replace("x",value.substring(i,i+1));
        }
        pattern = pattern.replace(/x/g,"");
        return pattern;
    }else{
        return original;
    }
};
Phone.prototype.Validate = function(){
    return /^[0-9]?[ |\.]?[\(]?[0-9]{3}[\)]?[ |\-|\.]?[0-9]{3}[-|\.]?[0-9]{4}$/.test(this.value)
}
JSHelper.prototype.Phone = function(value){
    return new Phone(value);
}
JSHelper.prototype.AddPhones = function(className){
    className = (className === undefined || className === null || className === "") ? "currency" : className;
	var phones = document.getElementsByClassName(className);
	for(var i = 0; i < phones.length; i++){
		phone = phones[i];
		phone.addEventListener("change", function(e){
			var target = e.srcElement || e.target;
			var value = target.value;
			var result = new Phone().convertToPhone(value);
			target.value = result === 0 ? "" : result;
		});
    }
}
/**
 * Currency
 */
function Currency(value){
    if(value !== undefined)	this.value = covertToCurrency(value);
}
Currency.prototype.convertToFloat = function(value){
	var RTN = parseFloat(value.replace(/[,|$]/g,""));
	return isNaN(RTN) ? 0.00: RTN;
}
Currency.prototype.covertToCurrency = function(value){
	var RTN = "" + convertToFloat(value);
	RTN = RTN.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
	return RTN.indexOf(".") == -1 ? RTN + ".00" : RTN;
}
Currency.prototype.Validate = function(value){
	return /(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+)?(\.[0-9]{1,2})?$/.test(value);
}
JSHelper.prototype.Currency = function(Value){
    return new Currency(value);
}
JSHelper.prototype.AddCurrencies = function(className){
    className = (className === undefined || className === null || className === "") ? "currency" : className;
	var currencies = document.getElementsByClassName(className);
	for(var i = 0; i < currencies.length; i++){
		//default Value
		currencies[i].value = (currencies[i].value === "" || currencies[i].value === null || currencies[i].value === undefined) ? "0.00" : currencies[i].value;
		//On Focus
		currencies[i].addEventListener("focus", function(e){
			var target = e.srcElement || e.target;
			var val = target.value;
			var RTN = new Currency().convertToFloat(val);
			target.value = RTN === 0 ? "" : RTN;
		});
		//On Blur
		currencies[i].addEventListener("blur", function(e){
			var target = e.srcElement || e.target;
			var val = target.value;
			target.value = new Currency().covertToCurrency(val);
		});
	}
}
/**
 * TimeStamp
 */
JSHelper.prototype.TimeStamp =  function(date, fstr, utc) {
    date = (date === "" || date === null || date === undefined) ? new Date () : date;
    fstr = (fstr === "" || fstr === null || fstr === undefined) ? "%Y%m%d_%H%M%S" : fstr;
    utc = (utc === "" || utc === null || utc === undefined) ? true : utc;
    utc = utc ? 'getUTC' : 'get';
    return fstr.replace (/%[YmdHMS]/g, function (m) {
      switch (m) {
        case '%Y': return date[utc + 'FullYear'] (); // no leading zeros required
        case '%m': m = 1 + date[utc + 'Month'] (); break;
        case '%d': m = date[utc + 'Date'] (); break;
        case '%H': m = date[utc + 'Hours'] (); break;
        case '%M': m = date[utc + 'Minutes'] (); break;
        case '%S': m = date[utc + 'Seconds'] (); break;
        default: return m.slice (1); // unknown code, remove %
      }
      // add leading zero if required
      return ('0' + m).slice (-2);
    });
}
/**
 * Switch
 */
function Switch(){
	this.collection = new Array();
}
Switch.prototype.Add = function(condition, callback){
	this.collection.push({_condition:  condition, _callback: callback});
}
Switch.prototype.DoIf = function(condition){
	for(var i = 0; i < this.collection.length; i++){
		if(this.collection[i]._condition === condition) return this.collection[i].callback();
	}
	return null;
}
JSHelper.prototype.Switch = function(){
    return new Switch();
}
/**
 * Instance and optional Facade
 */
var JSH = new JSHelper();
var $ = JSH.Select.bind(JSH);