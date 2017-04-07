export function objectIsEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object
}

export function toastSuccess(message) {
    Materialize.toast('<i class="material-icons">done</i>&nbsp;&nbsp;' + message, 4000, 'green accent-3');
}

export function toastError(message) {
    Materialize.toast('<i class="material-icons">error_outline</i>&nbsp;&nbsp;' + message, 4000, 'red accent-2');
}

export function getErrors(validationErrors) {
    var errors = {};
    Object.keys(validationErrors).forEach(function(index) {
        if (validationErrors[index].length) {
            errors[index] = validationErrors[index][0];
        }
    });
    return errors;
}

export function replaceEmptyWithNull(object) {
    var newObject = {};
    Object.keys(object).forEach(function(index) {
        newObject[index] = object[index] ? object[index] : null;
    });
    return newObject;
}
