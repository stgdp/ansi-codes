require( "mocha" )
const assert = require( "assert" )
const codes = require( "./" )

describe( "ansi-codes", function() {
    it( "should be the correct foreground color code", function() {
        assert.equal( codes.fg.black, "\u001b[30m" )
        assert.equal( codes.fg.red, "\u001b[31m" )
        assert.equal( codes.fg.green, "\u001b[32m" )
        assert.equal( codes.fg.yellow, "\u001b[33m" )
        assert.equal( codes.fg.blue, "\u001b[34m" )
        assert.equal( codes.fg.magenta, "\u001b[35m" )
        assert.equal( codes.fg.cyan, "\u001b[36m" )
        assert.equal( codes.fg.white, "\u001b[37m" )
    } )

    it( "should be the correct bright foreground color code", function() {
        assert.equal( codes.fg.bright.black, "\u001b[90m" )
        assert.equal( codes.fg.bright.red, "\u001b[91m" )
        assert.equal( codes.fg.bright.green, "\u001b[92m" )
        assert.equal( codes.fg.bright.yellow, "\u001b[93m" )
        assert.equal( codes.fg.bright.blue, "\u001b[94m" )
        assert.equal( codes.fg.bright.magenta, "\u001b[95m" )
        assert.equal( codes.fg.bright.cyan, "\u001b[96m" )
        assert.equal( codes.fg.bright.white, "\u001b[97m" )
    } )

    it( "should be the correct background color code", function() {
        assert.equal( codes.bg.black, "\u001b[40m" )
        assert.equal( codes.bg.red, "\u001b[41m" )
        assert.equal( codes.bg.green, "\u001b[42m" )
        assert.equal( codes.bg.yellow, "\u001b[43m" )
        assert.equal( codes.bg.blue, "\u001b[44m" )
        assert.equal( codes.bg.magenta, "\u001b[45m" )
        assert.equal( codes.bg.cyan, "\u001b[46m" )
        assert.equal( codes.bg.white, "\u001b[47m" )
    } )

    it( "should be the correct bright background color code", function() {
        assert.equal( codes.bg.bright.black, "\u001b[100m" )
        assert.equal( codes.bg.bright.red, "\u001b[101m" )
        assert.equal( codes.bg.bright.green, "\u001b[102m" )
        assert.equal( codes.bg.bright.yellow, "\u001b[103m" )
        assert.equal( codes.bg.bright.blue, "\u001b[104m" )
        assert.equal( codes.bg.bright.magenta, "\u001b[105m" )
        assert.equal( codes.bg.bright.cyan, "\u001b[106m" )
        assert.equal( codes.bg.bright.white, "\u001b[107m" )
    } )

    it( "should be the correct reset code", function() {
        assert.equal( codes.reset.all, "\u001b[0m" )
        assert.equal( codes.reset.fg, "\u001b[39m" )
        assert.equal( codes.reset.bg, "\u001b[49m" )
    } )
} )
