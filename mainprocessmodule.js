// Generated by CoffeeScript 2.7.0
//#############################################################################
//region debug
var log, olog;

import {
  createLogFunctions
} from "thingy-debug";

({log, olog} = createLogFunctions("mainprocessmodule"));

import * as cfg from "./configmodule.js";

//#############################################################################
export var execute = function() {
  log("execute");
};
