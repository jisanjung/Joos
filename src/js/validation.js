// constructor
export var Validation = function() {
    
};

// method - validate regular expression
Validation.prototype.isValid = function(id, regex) {
    var inputType = $(id);
    var regExp = regex;
    var error = id + "Error";

    inputType.on("blur", function() {
        if (!regExp.test(inputType.val())) {
            $(this).css("border", "1px solid red");
            $(error).show();
        } else {
            $(this).css("border", "1px solid #ccc");
            $(error).hide();
        }
    });
    inputType.on("focus", function() {
        if (regExp.test(inputType.val())) {
            $(this).css("border", "1px solid #ccc");
            $(error).hide();
        }
    });
};