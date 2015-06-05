(function() {

	var Task = function(data){
	    var self = $dd.model({
	        name: '',
	        complete: false
	    }).on_fill(function(_data){
	        if(_data.name){
	            var _name = _data.name.toLowerCase();
	            _data.name = _name.charAt(0).toUpperCase() + _name.slice(1);
	        }

	    });
	
	    return self.fill(data);
	};	

    $dd.ioc.register('model.Task',function(){
        return Task;
    });
}());
