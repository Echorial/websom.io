<?php
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
class WebsomDocs {
public $server;

public $baseConfig;

public $containers;

public $bridges;

public $registeredCollections;

public $registeredPermissions;

public $registeredBuckets;

public $name;

public $id;

public $root;

public $version;

public $author;

public $license;

public $repo;

function __construct($server) {
$this->server = null;
$this->baseConfig = null;
$this->containers = [];
$this->bridges = [];
$this->registeredCollections = [];
$this->registeredPermissions = [];
$this->registeredBuckets = [];
$this->name = "";
$this->id = "";
$this->root = "";
$this->version = "";
$this->author = "";
$this->license = "";
$this->repo = "";

$this->server = $server;
$this->registerWithServer();
}
function start() {
}

function permissions() {
}

function collections() {
}

function registerWithServer() {
}

function clientData($req, $send) {
return false;}

function spawn($config) {
$this->baseConfig = $config;
$this->name = $config["name"];
$this->id = $config["id"];}

function stop() {
}

function configure() {
}

function registerCollection($collection) {
array_push($this->registeredCollections, $collection);
if ($this->server->config->dev) {
if ($collection->appliedSchema != null) {
$collection->appliedSchema->register();}}}

function registerPermission(...$arguments) {
if (count($arguments) == 1 and ((_c_lib_run::getClass($arguments[0]) == 'Websom_Permission') or gettype($arguments[0]) == 'NULL')) {
$permission = $arguments[0];
array_push($this->registeredPermissions, $permission);
}
else if (count($arguments) == 1 and (gettype($arguments[0]) == 'string' or gettype($arguments[0]) == 'NULL')) {
$permission = $arguments[0];
$perm = new Websom_Permission($permission);
array_push($this->registeredPermissions, $perm);
return $perm;
}
}

function registerBucket($name) {
$bucket = new Websom_Bucket($this->server, $name, $this->name);
array_push($this->registeredBuckets, $bucket);
$this->server->registerBucket($bucket);
return $bucket;}

function setupData() {
}

function setupBridge() {
}

function pullFromGlobalScope($name) {
}

function &setupBridges() {
$bridges = [];
return $bridges;}


}//Relative Carbon
//Relative Context
//Relative Error
//Relative FileSystem
//Relative Buffer
//Relative File
//Relative Stat
//Relative primitive
//Relative object
//Relative Math
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

?>
<?php return 'WebsomDocs'; ?>