ScratchSensors = {
    update: function (name, value)
    {
        if(typeof(Storage)!=="undefined") {
            path = localStorage.scratchSensorsPath;
        } else {
            path = window.scratchSensorsPath;
        }

        if (!path){
            path = "/usr/bin/ScratchGenericSensor";
        }

        var evt = document.createEvent("CustomEvent");

        evt.initCustomEvent(
            "execute",
            true,
            true,
            {
                'command':'/usr/bin/python',
                'args': path + " " + name + " " + value
            }
        );
        return document.dispatchEvent(evt);
    },

    setup : function(path)
    {
        if(typeof(Storage)!=="undefined") {
            localStorage.scratchSensorsPath = path;
        } else {
            window.scratchSensorsPath = path;
        }
    }
};
