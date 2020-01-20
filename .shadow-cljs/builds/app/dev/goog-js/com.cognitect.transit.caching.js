["^ ","~:resource-id",["~:shadow.build.classpath/resource","com/cognitect/transit/caching.js"],"~:js","goog.provide(\"com.cognitect.transit.caching\");\ngoog.require(\"com.cognitect.transit.delimiters\");\ngoog.scope(function() {\n  var caching = com.cognitect.transit.caching, d = com.cognitect.transit.delimiters;\n  /** @const @type {number} */ caching.MIN_SIZE_CACHEABLE = 3;\n  /** @const @type {number} */ caching.BASE_CHAR_IDX = 48;\n  /** @const @type {number} */ caching.CACHE_CODE_DIGITS = 44;\n  /** @const @type {number} */ caching.MAX_CACHE_ENTRIES = caching.CACHE_CODE_DIGITS * caching.CACHE_CODE_DIGITS;\n  /** @const @type {number} */ caching.MAX_CACHE_SIZE = 4096;\n  caching.isCacheable = function(string, asMapKey) {\n    if (string.length > caching.MIN_SIZE_CACHEABLE) {\n      if (asMapKey) {\n        return true;\n      } else {\n        var c0 = string.charAt(0), c1 = string.charAt(1);\n        if (c0 === d.ESC) {\n          return c1 === \":\" || c1 === \"$\" || c1 === \"#\";\n        } else {\n          return false;\n        }\n      }\n    } else {\n      return false;\n    }\n  };\n  caching.idxToCode = function(idx) {\n    var hi = Math.floor(idx / caching.CACHE_CODE_DIGITS), lo = idx % caching.CACHE_CODE_DIGITS, loc = String.fromCharCode(lo + caching.BASE_CHAR_IDX);\n    if (hi === 0) {\n      return d.SUB + loc;\n    } else {\n      return d.SUB + String.fromCharCode(hi + caching.BASE_CHAR_IDX) + loc;\n    }\n  };\n  /** @constructor */ caching.WriteCache = function() {\n    this.idx = 0;\n    this.gen = 0;\n    this.cacheSize = 0;\n    this.cache = {};\n  };\n  caching.WriteCache.prototype.write = function(string, asMapKey) {\n    if (caching.isCacheable(string, asMapKey)) {\n      if (this.cacheSize === caching.MAX_CACHE_SIZE) {\n        this.clear();\n        this.gen = 0;\n        this.cache = {};\n      } else {\n        if (this.idx === caching.MAX_CACHE_ENTRIES) {\n          this.clear();\n        }\n      }\n      var entry = this.cache[string];\n      if (entry == null) {\n        this.cache[string] = [caching.idxToCode(this.idx), this.gen];\n        this.idx++;\n        return string;\n      } else {\n        if (entry[1] != this.gen) {\n          entry[1] = this.gen;\n          entry[0] = caching.idxToCode(this.idx);\n          this.idx++;\n          return string;\n        } else {\n          return entry[0];\n        }\n      }\n    } else {\n      return string;\n    }\n  };\n  caching.WriteCache.prototype.clear = function Transit$WriteCache() {\n    this.idx = 0;\n    this.gen++;\n  };\n  caching.writeCache = function() {\n    return new caching.WriteCache;\n  };\n  caching.isCacheCode = function(string) {\n    return string.charAt(0) === d.SUB && string.charAt(1) !== \" \";\n  };\n  caching.codeToIdx = function(code) {\n    if (code.length === 2) {\n      return code.charCodeAt(1) - caching.BASE_CHAR_IDX;\n    } else {\n      var hi = (code.charCodeAt(1) - caching.BASE_CHAR_IDX) * caching.CACHE_CODE_DIGITS, lo = code.charCodeAt(2) - caching.BASE_CHAR_IDX;\n      return hi + lo;\n    }\n  };\n  /** @constructor */ caching.ReadCache = function Transit$ReadCache() {\n    this.idx = 0;\n    this.cache = [];\n  };\n  caching.ReadCache.prototype.write = function(obj, asMapKey) {\n    if (this.idx == caching.MAX_CACHE_ENTRIES) {\n      this.idx = 0;\n    }\n    this.cache[this.idx] = obj;\n    this.idx++;\n    return obj;\n  };\n  caching.ReadCache.prototype.read = function(string, asMapKey) {\n    return this.cache[caching.codeToIdx(string)];\n  };\n  caching.ReadCache.prototype.clear = function() {\n    this.idx = 0;\n  };\n  caching.readCache = function() {\n    return new caching.ReadCache;\n  };\n});\n","~:source","// Copyright 2014 Cognitect. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\ngoog.provide(\"com.cognitect.transit.caching\");\ngoog.require(\"com.cognitect.transit.delimiters\");\n\ngoog.scope(function() {\n\nvar caching = com.cognitect.transit.caching,\n    d       = com.cognitect.transit.delimiters;\n\n/**\n * @const\n * @type {number}\n */\ncaching.MIN_SIZE_CACHEABLE = 3;\n\n/**\n * @const\n * @type {number}\n */\ncaching.BASE_CHAR_IDX = 48;\n\n/**\n * @const\n * @type {number}\n */\ncaching.CACHE_CODE_DIGITS = 44;\n\n/**\n * @const\n * @type {number}\n */\ncaching.MAX_CACHE_ENTRIES = caching.CACHE_CODE_DIGITS*caching.CACHE_CODE_DIGITS;\n\n/**\n * @const\n * @type {number}\n */\ncaching.MAX_CACHE_SIZE = 4096;\n\ncaching.isCacheable = function(string, asMapKey) {\n    if(string.length > caching.MIN_SIZE_CACHEABLE) {\n        if(asMapKey) {\n            return true;\n        } else {\n            var c0 = string.charAt(0),\n                c1 = string.charAt(1);\n            if(c0 === d.ESC) {\n                return c1 === \":\" || c1 === \"$\" || c1 === \"#\";\n            } else {\n                return false;\n            }\n        }\n    } else {\n        return false;\n    }\n};\n\n// =============================================================================\n// WriteCache\n\ncaching.idxToCode = function(idx) {\n    var hi  = Math.floor(idx / caching.CACHE_CODE_DIGITS),\n        lo  = idx % caching.CACHE_CODE_DIGITS,\n        loc = String.fromCharCode(lo + caching.BASE_CHAR_IDX)\n    if(hi === 0) {\n        return d.SUB + loc;\n    } else {\n        return d.SUB + String.fromCharCode(hi + caching.BASE_CHAR_IDX) + loc;\n    }\n};\n\n/**\n * @constructor\n */\ncaching.WriteCache = function() {\n    this.idx = 0;\n    this.gen = 0;\n    this.cacheSize = 0;\n    this.cache = {};\n};\n\ncaching.WriteCache.prototype.write = function(string, asMapKey) {\n    if(caching.isCacheable(string, asMapKey)) {\n        if(this.cacheSize === caching.MAX_CACHE_SIZE) {\n            this.clear();\n            this.gen = 0;\n            this.cache = {};\n        } else if(this.idx === caching.MAX_CACHE_ENTRIES) {\n            this.clear();\n        }\n        var entry = this.cache[string];\n        if(entry == null) {\n            this.cache[string] = [caching.idxToCode(this.idx), this.gen];\n            this.idx++;\n            return string;\n        } else if(entry[1] != this.gen) {\n            entry[1] = this.gen;\n            entry[0] = caching.idxToCode(this.idx);\n            this.idx++;\n            return string;\n        } else {\n            return entry[0];\n        }\n    } else {\n        return string;\n    }\n};\n\ncaching.WriteCache.prototype.clear = function Transit$WriteCache() {\n    this.idx = 0;\n    this.gen++;\n};\n\ncaching.writeCache = function() {\n    return new caching.WriteCache();\n};\n\n// =============================================================================\n// ReadCache\n\ncaching.isCacheCode = function(string) {\n    return (string.charAt(0) === d.SUB) && (string.charAt(1) !== \" \");\n};\n\ncaching.codeToIdx = function(code) {\n    if(code.length === 2) {\n        return code.charCodeAt(1) - caching.BASE_CHAR_IDX;        \n    } else {\n        var hi = (code.charCodeAt(1) - caching.BASE_CHAR_IDX) * caching.CACHE_CODE_DIGITS,\n            lo = (code.charCodeAt(2) - caching.BASE_CHAR_IDX);\n        return hi + lo; \n    }\n};\n\n/**\n * @constructor\n */\ncaching.ReadCache = function Transit$ReadCache() {\n    this.idx = 0;\n    this.cache = [];\n};\n\ncaching.ReadCache.prototype.write = function(obj, asMapKey) {\n    if(this.idx == caching.MAX_CACHE_ENTRIES) {\n        this.idx = 0;\n    }\n    this.cache[this.idx] = obj;\n    this.idx++;\n    return obj;\n};\n\ncaching.ReadCache.prototype.read = function(string, asMapKey) {\n    return this.cache[caching.codeToIdx(string)];\n};\n\ncaching.ReadCache.prototype.clear = function() {\n    this.idx = 0;\n};\n\ncaching.readCache = function() {\n    return new caching.ReadCache();\n};\n\n});    \n","~:compiled-at",1578749429889,"~:source-map-json","{\n\"version\":3,\n\"file\":\"com.cognitect.transit.caching.js\",\n\"lineCount\":110,\n\"mappings\":\"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\",\n\"sources\":[\"com/cognitect/transit/caching.js\"],\n\"sourcesContent\":[\"// Copyright 2014 Cognitect. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\ngoog.provide(\\\"com.cognitect.transit.caching\\\");\\ngoog.require(\\\"com.cognitect.transit.delimiters\\\");\\n\\ngoog.scope(function() {\\n\\nvar caching = com.cognitect.transit.caching,\\n    d       = com.cognitect.transit.delimiters;\\n\\n/**\\n * @const\\n * @type {number}\\n */\\ncaching.MIN_SIZE_CACHEABLE = 3;\\n\\n/**\\n * @const\\n * @type {number}\\n */\\ncaching.BASE_CHAR_IDX = 48;\\n\\n/**\\n * @const\\n * @type {number}\\n */\\ncaching.CACHE_CODE_DIGITS = 44;\\n\\n/**\\n * @const\\n * @type {number}\\n */\\ncaching.MAX_CACHE_ENTRIES = caching.CACHE_CODE_DIGITS*caching.CACHE_CODE_DIGITS;\\n\\n/**\\n * @const\\n * @type {number}\\n */\\ncaching.MAX_CACHE_SIZE = 4096;\\n\\ncaching.isCacheable = function(string, asMapKey) {\\n    if(string.length > caching.MIN_SIZE_CACHEABLE) {\\n        if(asMapKey) {\\n            return true;\\n        } else {\\n            var c0 = string.charAt(0),\\n                c1 = string.charAt(1);\\n            if(c0 === d.ESC) {\\n                return c1 === \\\":\\\" || c1 === \\\"$\\\" || c1 === \\\"#\\\";\\n            } else {\\n                return false;\\n            }\\n        }\\n    } else {\\n        return false;\\n    }\\n};\\n\\n// =============================================================================\\n// WriteCache\\n\\ncaching.idxToCode = function(idx) {\\n    var hi  = Math.floor(idx / caching.CACHE_CODE_DIGITS),\\n        lo  = idx % caching.CACHE_CODE_DIGITS,\\n        loc = String.fromCharCode(lo + caching.BASE_CHAR_IDX)\\n    if(hi === 0) {\\n        return d.SUB + loc;\\n    } else {\\n        return d.SUB + String.fromCharCode(hi + caching.BASE_CHAR_IDX) + loc;\\n    }\\n};\\n\\n/**\\n * @constructor\\n */\\ncaching.WriteCache = function() {\\n    this.idx = 0;\\n    this.gen = 0;\\n    this.cacheSize = 0;\\n    this.cache = {};\\n};\\n\\ncaching.WriteCache.prototype.write = function(string, asMapKey) {\\n    if(caching.isCacheable(string, asMapKey)) {\\n        if(this.cacheSize === caching.MAX_CACHE_SIZE) {\\n            this.clear();\\n            this.gen = 0;\\n            this.cache = {};\\n        } else if(this.idx === caching.MAX_CACHE_ENTRIES) {\\n            this.clear();\\n        }\\n        var entry = this.cache[string];\\n        if(entry == null) {\\n            this.cache[string] = [caching.idxToCode(this.idx), this.gen];\\n            this.idx++;\\n            return string;\\n        } else if(entry[1] != this.gen) {\\n            entry[1] = this.gen;\\n            entry[0] = caching.idxToCode(this.idx);\\n            this.idx++;\\n            return string;\\n        } else {\\n            return entry[0];\\n        }\\n    } else {\\n        return string;\\n    }\\n};\\n\\ncaching.WriteCache.prototype.clear = function Transit$WriteCache() {\\n    this.idx = 0;\\n    this.gen++;\\n};\\n\\ncaching.writeCache = function() {\\n    return new caching.WriteCache();\\n};\\n\\n// =============================================================================\\n// ReadCache\\n\\ncaching.isCacheCode = function(string) {\\n    return (string.charAt(0) === d.SUB) && (string.charAt(1) !== \\\" \\\");\\n};\\n\\ncaching.codeToIdx = function(code) {\\n    if(code.length === 2) {\\n        return code.charCodeAt(1) - caching.BASE_CHAR_IDX;        \\n    } else {\\n        var hi = (code.charCodeAt(1) - caching.BASE_CHAR_IDX) * caching.CACHE_CODE_DIGITS,\\n            lo = (code.charCodeAt(2) - caching.BASE_CHAR_IDX);\\n        return hi + lo; \\n    }\\n};\\n\\n/**\\n * @constructor\\n */\\ncaching.ReadCache = function Transit$ReadCache() {\\n    this.idx = 0;\\n    this.cache = [];\\n};\\n\\ncaching.ReadCache.prototype.write = function(obj, asMapKey) {\\n    if(this.idx == caching.MAX_CACHE_ENTRIES) {\\n        this.idx = 0;\\n    }\\n    this.cache[this.idx] = obj;\\n    this.idx++;\\n    return obj;\\n};\\n\\ncaching.ReadCache.prototype.read = function(string, asMapKey) {\\n    return this.cache[caching.codeToIdx(string)];\\n};\\n\\ncaching.ReadCache.prototype.clear = function() {\\n    this.idx = 0;\\n};\\n\\ncaching.readCache = function() {\\n    return new caching.ReadCache();\\n};\\n\\n});    \\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"scope\",\"caching\",\"com\",\"cognitect\",\"transit\",\"d\",\"delimiters\",\"MIN_SIZE_CACHEABLE\",\"BASE_CHAR_IDX\",\"CACHE_CODE_DIGITS\",\"MAX_CACHE_ENTRIES\",\"MAX_CACHE_SIZE\",\"isCacheable\",\"caching.isCacheable\",\"string\",\"asMapKey\",\"length\",\"c0\",\"charAt\",\"c1\",\"ESC\",\"idxToCode\",\"caching.idxToCode\",\"idx\",\"hi\",\"Math\",\"floor\",\"lo\",\"loc\",\"String\",\"fromCharCode\",\"SUB\",\"WriteCache\",\"caching.WriteCache\",\"gen\",\"cacheSize\",\"cache\",\"prototype\",\"write\",\"caching.WriteCache.prototype.write\",\"clear\",\"entry\",\"caching.WriteCache.prototype.clear\",\"Transit$WriteCache\",\"writeCache\",\"caching.writeCache\",\"isCacheCode\",\"caching.isCacheCode\",\"codeToIdx\",\"caching.codeToIdx\",\"code\",\"charCodeAt\",\"ReadCache\",\"caching.ReadCache\",\"Transit$ReadCache\",\"caching.ReadCache.prototype.write\",\"obj\",\"read\",\"caching.ReadCache.prototype.read\",\"caching.ReadCache.prototype.clear\",\"readCache\",\"caching.readCache\"]\n}\n"]