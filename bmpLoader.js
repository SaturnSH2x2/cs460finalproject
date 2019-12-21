var fData

bmpLoader = function(fRef) { 
    fData = null;
    
    reader = new FileReader();
    reader.onload = function(e) {
        fData = e.target.result;
    }
    reader.readAsText(fRef);
}