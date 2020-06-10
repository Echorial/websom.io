//Relative Module
//Relative User
//Relative Login
//Relative Connection
//Relative Module
//Relative Order
//Relative Product
//Relative Cart
//Relative ShippingClass
//Relative ShippingZone
WebsomDocs = function (server) {var _c_this = this;
	this.server = null;

	this.baseConfig = null;

	this.containers = [];

	this.bridges = [];

	this.registeredCollections = [];

	this.registeredPermissions = [];

	this.registeredBuckets = [];

	this.name = "";

	this.id = "";

	this.root = "";

	this.version = "";

	this.author = "";

	this.license = "";

	this.repo = "";

		_c_this.server = server;
		_c_this.registerWithServer();
}

/*i async*/WebsomDocs.prototype.start = async function () {var _c_this = this; var _c_root_method_arguments = arguments;
}

WebsomDocs.prototype.permissions = function () {var _c_this = this; var _c_root_method_arguments = arguments;
}

WebsomDocs.prototype.collections = function () {var _c_this = this; var _c_root_method_arguments = arguments;
}

WebsomDocs.prototype.registerWithServer = function () {var _c_this = this; var _c_root_method_arguments = arguments;
}

WebsomDocs.prototype.clientData = function (req, send) {var _c_this = this; var _c_root_method_arguments = arguments;
		return false;}

WebsomDocs.prototype.spawn = function (config) {var _c_this = this; var _c_root_method_arguments = arguments;
		_c_this.baseConfig = config;
		_c_this.name = config["name"];
		_c_this.id = config["id"];}

WebsomDocs.prototype.stop = function () {var _c_this = this; var _c_root_method_arguments = arguments;
}

WebsomDocs.prototype.configure = function () {var _c_this = this; var _c_root_method_arguments = arguments;
}

/*i async*/WebsomDocs.prototype.registerCollection = async function (collection) {var _c_this = this; var _c_root_method_arguments = arguments;
/*async*/
		_c_this.registeredCollections.push(collection);
		if (_c_this.server.config.dev) {
/*async*/
			if (collection.appliedSchema != null) {
/*async*/
				(await collection.appliedSchema.register/* async call */());
				}
			}}

WebsomDocs.prototype.registerPermission = function () {var _c_this = this; var _c_root_method_arguments = arguments;
	if (arguments.length == 1 && ((arguments[0] instanceof Websom.Permission) || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var permission = arguments[0];
		_c_this.registeredPermissions.push(permission);
	}
else 	if (arguments.length == 1 && (typeof arguments[0] == 'string' || typeof arguments[0] == 'undefined' || arguments[0] === null)) {
		var permission = arguments[0];
		var perm = new Websom.Permission(permission);
		_c_this.registeredPermissions.push(perm);
		return perm;
	}
}

WebsomDocs.prototype.registerBucket = function (name) {var _c_this = this; var _c_root_method_arguments = arguments;
		var bucket = new Websom.Bucket(_c_this.server, name, _c_this.name);
		_c_this.registeredBuckets.push(bucket);
		_c_this.server.registerBucket(bucket);
		return bucket;}

WebsomDocs.prototype.setupData = function () {var _c_this = this; var _c_root_method_arguments = arguments;
}

WebsomDocs.prototype.setupBridge = function () {var _c_this = this; var _c_root_method_arguments = arguments;
}

WebsomDocs.prototype.pullFromGlobalScope = function (name) {var _c_this = this; var _c_root_method_arguments = arguments;
		
			return global[name];
		}

WebsomDocs.prototype.setupBridges = function () {var _c_this = this; var _c_root_method_arguments = arguments;
		var bridges = [];
		return bridges;}

//Relative Carbon
//Relative Context
//Relative Error
//Relative FileSystem
//Relative Buffer
//Relative File
//Relative Stat
//Relative primitive
//Relative object
//Relative array
//Relative bool
//Relative byte
//Relative char
//Relative Console
//Relative everything
//Relative Exception
//Relative float
//Relative function
//Relative int
//Relative uint
//Relative uint8
//Relative int8
//Relative uint16
//Relative int16
//Relative uint32
//Relative int32
//Relative uint64
//Relative int64
//Relative map
//Relative null
//Relative empty
//Relative void
//Relative string
//Relative Math

module.exports = WebsomDocs;