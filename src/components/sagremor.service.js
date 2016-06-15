angular.module('sagremorApp')
    .factory('sagremorService', [
    '$uibModal',
    'sagremorParams',
    'benoicFactory',
    'carleonFactory',
    function($uibModal, sagremorParams, benoicFactory, carleonFactory) {
		var sagremorFactory = {};
		
		sagremorFactory.monitor = function (element) {
			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'components/monitor/monitor.modal.html',
				controller: 'MonitorModalCtrl',
				controllerAs: 'MonitorModalCtrl',
				size: 'sm',
				resolve: {
					element: function () {
						return element;
					}
				}
			});
		};
        
        sagremorFactory.addToDashboard = function (element, allProfiles) {
            // add tag
            var promise = null;
            var tag = "SGMR$D$0$0";
			if (allProfiles) {
				if (!!element.device) {
                    promise = benoicFactory.addTag(element.device, element.type, element.name, tag);
				} else {
                    promise = carleonFactory.elementAddTag(element.uid, element.name, tag);
				}
			} else {
			}
            promise.then(function (result) {
                if (!element.options.tags) {
                    element.options.tags = [];
                }
                element.options.tags.push(tag);
            }, function (error) {
                console.log(error);
            });
            return true;
        };
        
        sagremorFactory.removeFromDashboard = function (element) {
            var dashboardWidgets = sagremorParams.dashboardWidgets;
            if (dashboardWidgets !== undefined) {
                _.remove(dashboardWidgets, function(widget) {
                    return (widget.type === element.type && widget.element.device === element.device && widget.element.name === element.name);
                });
            }
            sagremorParams.dashboardWidgets = dashboardWidgets;
            return true;
        };
		
		sagremorFactory.editSwitcher = function (switcher) {
			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'components/switch/switch.modal.html',
				controller: 'SwitchesModalCtrl',
				controllerAs: 'SwitchesModalCtrl',
				size: 'sm',
				resolve: {
					switcher: function () {
						return switcher;
					}
				}
			});
		};
		
		sagremorFactory.editSensor = function (sensor) {
			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'components/sensor/sensor.modal.html',
				controller: 'SensorsModalCtrl',
				controllerAs: 'SensorsModalCtrl',
				size: 'sm',
				resolve: {
					sensor: function () {
						return sensor;
					}
				}
			});
		};
		
		sagremorFactory.editHeater = function (heater) {
			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'components/heater/heater.modal.html',
				controller: 'HeatersModalCtrl',
				controllerAs: 'HeatersModalCtrl',
				size: 'sm',
				resolve: {
					heater: function () {
						return heater;
					}
				}
			});
		};
		
		sagremorFactory.editDimmer = function (dimmer) {
			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'components/dimmer/dimmer.modal.html',
				controller: 'DimmersModalCtrl',
				controllerAs: 'DimmersModalCtrl',
				size: 'sm',
				resolve: {
					dimmer: function () {
						return dimmer;
					}
				}
			});
		};
		
		sagremorFactory.editScript = function (script) {
			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'components/script/script.modal.html',
				controller: 'ScriptModalCtrl',
				controllerAs: 'ScriptModalCtrl',
				size: 'sm',
				resolve: {
					script: function () {
						return script;
					}
				}
			});
		};
    
		return sagremorFactory;
	}
]);
