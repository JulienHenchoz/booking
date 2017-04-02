export function objectIsEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object
}

export function toastSuccess(message) {
    Materialize.toast('<i class="material-icons">done</i>&nbsp;&nbsp;' + message, 4000, 'green accent-3');
}

export function toastError(message) {
    Materialize.toast('<i class="material-icons">error_outline</i>&nbsp;&nbsp;' + message, 4000, 'red accent-2');
}
