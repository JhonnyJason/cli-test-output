// Generated by CoffeeScript 2.7.0
//#############################################################################
//region debug
var extractMeowed, getHelpText, getOptions, log, olog, throwErrorOnUsageFail;

import {
  createLogFunctions
} from "thingy-debug";

({log, olog} = createLogFunctions("cliargumentsmodule"));

import meow from 'meow';

//#############################################################
//region internal functions
getHelpText = function() {
  log("getHelpText");
  return `Usage
    $ 
    
Options
    optional:
        
Examples
    $  -c
    ...`;
};

getOptions = function() {
  log("getOptions");
  return {
    importMeta: import.meta,
    flags: {
      option: { //optionsname
        type: "boolean", // or string
        alias: "o"
      }
    }
  };
};

//#############################################################
extractMeowed = function(meowed) {
  var option;
  log("extractMeowed");
  option = false; // default
  if (meowed.input[0]) {
    option = meowed.input[0];
  }
  if (meowed.flags.option) {
    option = true;
  }
  return {option};
};

throwErrorOnUsageFail = function(extract) {
  log("throwErrorOnUsageFail");
  if (!extract.option) {
    throw new Error("Usag error: no option has been defined!");
  }
};

//endregion

//#############################################################
export var extractArguments = function() {
  var extract, meowed;
  log("extractArguments");
  meowed = meow(getHelpText(), getOptions());
  extract = extractMeowed(meowed);
  throwErrorOnUsageFail(extract);
  return extract;
};
