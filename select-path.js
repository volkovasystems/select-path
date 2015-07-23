var selectPath = function selectPath( windowsPath, nixPath ){
    if( ( /^Windows/ ).test( require( "os" ).type( ) ) ){
        return windowsPath;

    }else{
        return nixPath;
    }
};

module.exports = selectPath;
