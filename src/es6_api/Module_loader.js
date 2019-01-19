// Dynamic loading – ‘System’ is default loader
System.import("./Module_export1").then(function(m) {
    alert("2π = " + m.sum(m.pi, m.pi));
});

// Create execution sandboxes – new Loaders
var loader = new Loader({
    global: fixup(window) // replace ‘console.log’
});
loader.eval("console.log(\"hello world!\");");

// Directly manipulate module cache
System.get("jquery");
System.set("jquery", Module({$: $})); // WARNING: not yet finalized

// Using Module Loader
// In order to use this, you'll need to tell Babel to use the system module formatter. Also be sure to check out System.js