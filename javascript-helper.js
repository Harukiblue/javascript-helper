function JSHelper(LogOn){
    this.LogOn = LogOn === undefined ? false : LogOn;
}
/**
 * Select
 */
JSHelper.prototype.Select = function(s, i){
    this.params = Array.prototype.slice.call(arguments, 0);
	if(s === undefined || s === null || (typeof(s) !== "string" && typeof(2) !== "object")){
		return this;
	}else if(typeof(s) === "object"){
        this.selector = s;
        this.selected = s;
        this.selectedIndex = 0;
        this.hasSelected = true;
        this.elem =  s;
	}else if(typeof(s) === "string"){
		s = s.trim();
        try {
            var result = document.querySelectorAll(s);
            if(result !== undefined && result !== null){
                this.selector = s;
                this.selected = [].slice.call(result);
                this.selectedIndex = i !== undefined ? i: result.length === 0 ? -1 : 0;
                this.hasSelected = (this.selected.length > 0 && this.selectedIndex > -1);
                this.elem =  this.hasSelected ? this.selected[this.selectedIndex] : document;
            }
        } catch (error) {
            if(this.LogOn) console.log(error);
        }
    }	
	return this;
}
/**
 * Clear
 */
JSHelper.prototype.Clear = function(){
    this.params = new Array();
    return this;
}
/**
 * AddClass & RemoveClass
 */
JSHelper.prototype.RemoveClass = function(clss){
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
    return this;
}
JSHelper.prototype.AddClass = function(clss){
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
    return this;
}
/**
 * Add & Remove: element to/from DOM
 */
JSHelper.prototype.Add = function(obj){
	if(obj === undefined){return;}
	if(obj.tag === undefined){return;}
	if(obj.par === undefined && this.hasSelected ){obj.par = this.elem;}
	if(obj.par === undefined && !this.hasSelected ){return;}
	
	var elem = document.createElement(obj.tag);
	var par = obj.par;
	if(obj.id){elem.setAttribute("id", obj.id);}
	if(obj.clss){elem.setAttribute("class", obj.clss);}
	if(obj.type){elem.setAttribute("type", obj.type);}
	if(obj.value){elem.setAttribute("value", obj.value);}
	if(obj.innerHTML){elem.innerHTML = obj.innerHTML;}
	
    par.appendChild(elem);
    return elem;
}
JSHelper.prototype.Remove = function(elem){
	if(typeof(elem) === "string"){this.Select(elem); elem = undefined;}
	if(elem === undefined && this.hasSelected ){elem = this.elem;}
	if(elem === undefined && !this.hasSelected ){return;}
    elem.parentNode.removeChild(elem);
    return elem.parentNode === null;
}
/**
 * Phone
 */
function Phone(value){
    if(value !== undefined) this.value = this.convertToPhone(value);
    this.isValid = this.Validate(this.value);
    this.value = this.isValid ? this.value : value;
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
    if(value === undefined && this.params[0] !== undefined) value = this.params[0]; 
    return new Phone(value);
}
JSHelper.prototype.RegisterPhoneFields = function(){
    var ctx = this;
    this.selected.forEach(function(elem){
        ctx.Select(elem).AddEvent("change", function(e){
            var target = e.srcElement || e.target;
            var value = target.value;
            var result = new Phone().convertToPhone(value);
            target.value = result === 0 ? "" : result;
        });
    });
    return this;
}
/**
 * Currency
 */
function Currency(value){
    if(value !== undefined)	this.value = this.covertToCurrency(value);
    this.isValid = this.Validate(this.value);
    this.value = this.isValid ? this.value : value;
}
Currency.prototype.convertToFloat = function(value){
	var result = parseFloat(value.replace(/[,|$]/g,""));
	return isNaN(result) ? "": result;
}
Currency.prototype.covertToCurrency = function(value){
    var result = "" + this.convertToFloat(value);
    if(result === "" ) return value;
	result = result.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
	return result.indexOf(".") == -1 ? result + ".00" : result;
}
Currency.prototype.Validate = function(value){
	return /(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+)?(\.[0-9]{1,2})?$/.test(value);
}
JSHelper.prototype.Currency = function(value){
    if(value === undefined && this.params[0] !== undefined) value = this.params[0]; 
    return new Currency(value);
}
JSHelper.prototype.RegisterCurrencyFields = function(){   
    var ctx = this;
    this.selected.forEach(function(elem){
		elem.value = (elem.value === "" || elem.value === null || elem.value === undefined) ? "0.00" : elem.value;
        ctx.Select(elem).AddEvent("focus", function(e){
			var target = e.srcElement || e.target;
			var val = target.value;
			var RTN = new Currency().convertToFloat(val);
			target.value = RTN === 0 ? "" : RTN;
        });
        ctx.Select(elem).AddEvent("blur", function(e){
			var target = e.srcElement || e.target;
			var val = target.value;
			target.value = new Currency().covertToCurrency(val);
        });
    });
    return this;
}
/**
 * TimeStamp
 */
JSHelper.prototype.Timestamp =  function(fstr, date, utc) {
    if(fstr === undefined && this.params[0] !== undefined) fstr = this.params[0]; 
    if(date === undefined && this.params[1] !== undefined) date = this.params[1]; 
    if(utc === undefined && this.params[2] !== undefined) utc = this.params[2]; 
    date = (date === "" || date === null || date === undefined) ? new Date () : date;
    fstr = (fstr === "" || fstr === null || fstr === undefined) ? "%Y%m%d_%H%M%S" : fstr;
    utc = (utc === "" || utc === null || utc === undefined) ? true : utc;
    utc = utc ? 'getUTC' : 'get';
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    return fstr.replace (/%[YmNdHMS]/g, function (m) {
        if(m === '%N') return monthNames[1 + date[utc + 'Month'] ()];
        switch (m) {
            case '%Y': return date[utc + 'FullYear'] ();
            case '%m': m = 1 + date[utc + 'Month'] (); break;
            case '%d': m = date[utc + 'Date'] (); break;
            case '%H': m = date[utc + 'Hours'] (); break;
            case '%M': m = date[utc + 'Minutes'] (); break;
            case '%S': m = date[utc + 'Seconds'] (); break;
            default: return m.slice (1); 
        }
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
	this.collection.push({condition:  condition, callback: callback});
}
Switch.prototype.RemoveIf = function(condition){
	for(var i = 0; i < this.collection.length; i++){
        if(this.collection[i].condition === condition){
            this.collection.splice(i,1);
            return this;
        }
    }
    return this;
}
Switch.prototype.RemoveAt = function(index){
    this.collection.splice(index,1);
    return this;
}
Switch.prototype.DoIf = function(condition){
	for(var i = 0; i < this.collection.length; i++){
		if(this.collection[i].condition === condition) return this.collection[i].callback();
	}
	return null;
}
Switch.prototype.DoRandom = function(){
    var index = Math.floor(Math.random()*this.collection.length);
    return this.collection[index].callback();
}
Switch.prototype.DoAll = function(){
    var results = new Array();
	for(var i = 0; i < this.collection.length; i++){
		results.push(this.collection[i].callback());
	}
	return results;
}
JSHelper.prototype.Switch = function(){
    return new Switch();
}
/**
 * Object Array
 */
function ObjectArray(arr){
    if(arr === undefined && this.params[0] !== undefined) arr = this.params[0]; 
	this.array = arr === undefined ? new Array() : this.Clone(arr);
}
ObjectArray.prototype.Clone = function(arr){
    var result = new Array();
    for(var i = 0; i < arr.length; i++){
        result.push(arr[i]);
    }
    return result;
}
ObjectArray.prototype.Sort = function(key){
	key = key === undefined ? Object.keys(this.array)[0] : key;
	this.array = this.array.sort(function(a, b){
		if(a[key] < b[key]) return -1;
		if(a[key] > b[key]) return 1;
		return 0;
	});
	return this.array;
}
JSHelper.prototype.ObjectArray = function(arr){
    return new ObjectArray(arr);
}
/**
 * Replace
 */
JSHelper.prototype.Replace = function(pattern, value, options){
    if(pattern === undefined) return null;
    if(value === undefined) return null;
    options = options === undefined ? "g" : options;
    text = this.params[0]; 
	return text.replace(new RegExp(pattern, options), value);
}
/**
 * Redirect
 */
JSHelper.prototype.Redirect = function(url){
    if(url === undefined && this.params[0] !== undefined) url = this.params[0]; 
    if(url === undefined) return null;
    window.location = url;
}
/**
 * Shuffle
 */
JSHelper.prototype.Shuffle = function(arr){
    if(arr === undefined && this.params[0] !== undefined) arr = this.params[0]; 
	var currentIndex = arr.length, temporaryValue, randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = arr[currentIndex];
		arr[currentIndex] = arr[randomIndex];
		arr[randomIndex] = temporaryValue;
	}
	return arr;
};
/**
 * RandomInt
 */
JSHelper.prototype.RandomInt = function(max, min){
    if(max === undefined && this.params[0] !== undefined) max = this.params[0]; 
    if(min === undefined && this.params[1] !== undefined) min = this.params[1]; 
    max = max === undefined ? 1 : max;
    min = min === undefined ? 0 : min;
    if(max < min){
        var tmax = max;
        max = min;
        min = tmax;
    }
    return Math.floor(Math.random() * ((max - min) + 1)) + min; 
}
/**
 * RandomDecimal
 */
JSHelper.prototype.RandomDecimal = function(max, min){
    if(max === undefined && this.params[0] !== undefined) max = this.params[0]; 
    if(min === undefined && this.params[1] !== undefined) min = this.params[1]; 
    max = max === undefined ? 1 : max;
    min = min === undefined ? 0 : min;
    if(max < min){
        var tmax = max;
        max = min;
        min = tmax;
    }
    return Math.random() * (max - min) + min; 
}
/**
 * Query String
 */
JSHelper.prototype.QueryString = function(name, url) {
    if(name === undefined && this.params[0] !== undefined) name = this.params[0]; 
    if(url === undefined && this.params[1] !== undefined) url = this.params[1]; 
    url = url === undefined ? window.location.href : url;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
/**
 * AddEvent
 */
JSHelper.prototype.AddEvent = function(evnt, callback){
    this.selected.forEach(function(elem){
        if(elem === null || elem === undefined){return;}
        if (elem.attachEvent){
            return elem.attachEvent('on'+evnt, callback);
        }
        return elem.addEventListener(evnt, callback, false);
    });
}
/**
 * IsEmpty
 */
JSHelper.prototype.IsEmpty = function(value){
    if(value === undefined && this.params.length > 0) value = this.params[0]; 
    if(value === null || value === undefined) return true;
    return (value == "" || (typeof(value) === "object" && Object.keys(value).length == 0) || value === []);
}
/**
 * Cookie
 */
function Cookie(){

}
Cookie.prototype.Create = function(name,value,days){
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
Cookie.prototype.Read = function(name){
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
Cookie.prototype.Update = function(name,value,days){
	this.Create(name,value,days);
}
Cookie.prototype.Delete = function(name){
	this.Create(name,"",-1);
}
JSHelper.prototype.Cookie = function(){
    return new Cookie();
}
/**
 * Copy
 */
JSHelper.prototype.Copy = function(){
	var selectText = function(elem) {
		if (document.selection) {
			var range = document.body.createTextRange();
			range.moveToElementText(elem);
			range.select();
		} else if (window.getSelection) {
			window.getSelection().removeAllRanges()
			var range = document.createRange();
			range.selectNode(elem);
			window.getSelection().addRange(range);
		}
	};
	
	selectText(this.elem);
	try {
		var successful = document.execCommand('copy');
	} catch (err) {
	}
	window.getSelection().removeAllRanges();
}
/**
 * DetectBrowser
 */
JSHelper.prototype.DetectBrowser = function(){
    result = {isIE: false};
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    
    if (msie > 0) {
    result.version = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    result.isIE = true;
      return result;
    }
  
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      var rv = ua.indexOf('rv:');
      result.version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      result.isIE = true;
      return result;
    }
  
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
    result.version = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    result.isIE = true;
      return result;
    }
    return result;
  }
/**
 * Instance and optional Facade and shorthand
 */
var JSH = new JSHelper();
var $ = JSH.Select.bind(JSH);