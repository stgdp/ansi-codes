const escape = require( "./lib/escape" )
const reset = require( "./lib/reset" )
const color = require( "./lib/color" )

let codes = {
    escape: {
        ...escape
    },
    reset: {
        ...reset,
    },
    ...color,
}

function get_codes( ref ) {
    let items = {}

    for ( let item in ref ) {

        if ( item != "escape" ) {

            if ( typeof ref[item] === "object" ) {
                items[item] = get_codes( ref[item] )
            } else {
                items[item] = escape.prefix + ref[item] + escape.suffix
            }

        } else {
            items[item] = ref[item]
        }

    }

    return items
}

module.exports = get_codes( codes )
module.exports.codes = codes
