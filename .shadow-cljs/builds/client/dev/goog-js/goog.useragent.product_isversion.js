["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/useragent/product_isversion.js"],"~:js","goog.provide(\"goog.userAgent.product.isVersion\");\ngoog.require(\"goog.labs.userAgent.platform\");\ngoog.require(\"goog.string\");\ngoog.require(\"goog.userAgent\");\ngoog.require(\"goog.userAgent.product\");\n/**\n @private\n @return {string}\n */\ngoog.userAgent.product.determineVersion_ = function() {\n  if (goog.userAgent.product.FIREFOX) {\n    return goog.userAgent.product.getFirstRegExpGroup_(/Firefox\\/([0-9.]+)/);\n  }\n  if (goog.userAgent.product.IE || goog.userAgent.product.EDGE || goog.userAgent.product.OPERA) {\n    return goog.userAgent.VERSION;\n  }\n  if (goog.userAgent.product.CHROME) {\n    if (goog.labs.userAgent.platform.isIos()) {\n      return goog.userAgent.product.getFirstRegExpGroup_(/CriOS\\/([0-9.]+)/);\n    }\n    return goog.userAgent.product.getFirstRegExpGroup_(/Chrome\\/([0-9.]+)/);\n  }\n  if (goog.userAgent.product.SAFARI && !goog.labs.userAgent.platform.isIos()) {\n    return goog.userAgent.product.getFirstRegExpGroup_(/Version\\/([0-9.]+)/);\n  }\n  if (goog.userAgent.product.IPHONE || goog.userAgent.product.IPAD) {\n    var arr = goog.userAgent.product.execRegExp_(/Version\\/(\\S+).*Mobile\\/(\\S+)/);\n    if (arr) {\n      return arr[1] + \".\" + arr[2];\n    }\n  } else {\n    if (goog.userAgent.product.ANDROID) {\n      var version = goog.userAgent.product.getFirstRegExpGroup_(/Android\\s+([0-9.]+)/);\n      if (version) {\n        return version;\n      }\n      return goog.userAgent.product.getFirstRegExpGroup_(/Version\\/([0-9.]+)/);\n    }\n  }\n  return \"\";\n};\n/**\n @private\n @param {!RegExp} re\n @return {string}\n */\ngoog.userAgent.product.getFirstRegExpGroup_ = function(re) {\n  var arr = goog.userAgent.product.execRegExp_(re);\n  return arr ? arr[1] : \"\";\n};\n/**\n @private\n @param {!RegExp} re\n @return {?IArrayLike<string>}\n */\ngoog.userAgent.product.execRegExp_ = function(re) {\n  return re.exec(goog.userAgent.getUserAgentString());\n};\n/** @type {string} */ goog.userAgent.product.VERSION = goog.userAgent.product.determineVersion_();\n/**\n @param {(string|number)} version\n @return {boolean}\n */\ngoog.userAgent.product.isVersion = function(version) {\n  return goog.string.compareVersions(goog.userAgent.product.VERSION, version) >= 0;\n};\n","~:source","// Copyright 2009 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Functions for understanding the version of the browser.\n * This is pulled out of product.js to ensure that only builds that need\n * this functionality actually get it, without having to rely on the compiler\n * to strip out unneeded pieces.\n *\n * TODO(nnaze): Move to more appropriate filename/namespace.\n *\n */\n\n\ngoog.provide('goog.userAgent.product.isVersion');\n\n\ngoog.require('goog.labs.userAgent.platform');\ngoog.require('goog.string');\ngoog.require('goog.userAgent');\ngoog.require('goog.userAgent.product');\n\n\n/**\n * @return {string} The string that describes the version number of the user\n *     agent product.  This is a string rather than a number because it may\n *     contain 'b', 'a', and so on.\n * @private\n */\ngoog.userAgent.product.determineVersion_ = function() {\n  // All browsers have different ways to detect the version and they all have\n  // different naming schemes.\n\n  if (goog.userAgent.product.FIREFOX) {\n    // Firefox/2.0.0.1 or Firefox/3.5.3\n    return goog.userAgent.product.getFirstRegExpGroup_(/Firefox\\/([0-9.]+)/);\n  }\n\n  if (goog.userAgent.product.IE || goog.userAgent.product.EDGE ||\n      goog.userAgent.product.OPERA) {\n    return goog.userAgent.VERSION;\n  }\n\n  if (goog.userAgent.product.CHROME) {\n    if (goog.labs.userAgent.platform.isIos()) {\n      // CriOS/56.0.2924.79\n      return goog.userAgent.product.getFirstRegExpGroup_(/CriOS\\/([0-9.]+)/);\n    }\n    // Chrome/4.0.223.1\n    return goog.userAgent.product.getFirstRegExpGroup_(/Chrome\\/([0-9.]+)/);\n  }\n\n  // This replicates legacy logic, which considered Safari and iOS to be\n  // different products.\n  if (goog.userAgent.product.SAFARI && !goog.labs.userAgent.platform.isIos()) {\n    // Version/5.0.3\n    //\n    // NOTE: Before version 3, Safari did not report a product version number.\n    // The product version number for these browsers will be the empty string.\n    // They may be differentiated by WebKit version number in goog.userAgent.\n    return goog.userAgent.product.getFirstRegExpGroup_(/Version\\/([0-9.]+)/);\n  }\n\n  if (goog.userAgent.product.IPHONE || goog.userAgent.product.IPAD) {\n    // Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1\n    // (KHTML, like Gecko) Version/3.0 Mobile/3A100a Safari/419.3\n    // Version is the browser version, Mobile is the build number. We combine\n    // the version string with the build number: 3.0.3A100a for the example.\n    var arr =\n        goog.userAgent.product.execRegExp_(/Version\\/(\\S+).*Mobile\\/(\\S+)/);\n    if (arr) {\n      return arr[1] + '.' + arr[2];\n    }\n  } else if (goog.userAgent.product.ANDROID) {\n    // Mozilla/5.0 (Linux; U; Android 0.5; en-us) AppleWebKit/522+\n    // (KHTML, like Gecko) Safari/419.3\n    //\n    // Mozilla/5.0 (Linux; U; Android 1.0; en-us; dream) AppleWebKit/525.10+\n    // (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2\n    //\n    // Prefer Version number if present, else make do with the OS number\n    var version =\n        goog.userAgent.product.getFirstRegExpGroup_(/Android\\s+([0-9.]+)/);\n    if (version) {\n      return version;\n    }\n\n    return goog.userAgent.product.getFirstRegExpGroup_(/Version\\/([0-9.]+)/);\n  }\n\n  return '';\n};\n\n\n/**\n * Return the first group of the given regex.\n * @param {!RegExp} re Regular expression with at least one group.\n * @return {string} Contents of the first group or an empty string if no match.\n * @private\n */\ngoog.userAgent.product.getFirstRegExpGroup_ = function(re) {\n  var arr = goog.userAgent.product.execRegExp_(re);\n  return arr ? arr[1] : '';\n};\n\n\n/**\n * Run regexp's exec() on the userAgent string.\n * @param {!RegExp} re Regular expression.\n * @return {?IArrayLike<string>} A result array, or null for no match.\n * @private\n */\ngoog.userAgent.product.execRegExp_ = function(re) {\n  return re.exec(goog.userAgent.getUserAgentString());\n};\n\n\n/**\n * The version of the user agent. This is a string because it might contain\n * 'b' (as in beta) as well as multiple dots.\n * @type {string}\n */\ngoog.userAgent.product.VERSION = goog.userAgent.product.determineVersion_();\n\n\n/**\n * Whether the user agent product version is higher or the same as the given\n * version.\n *\n * @param {string|number} version The version to check.\n * @return {boolean} Whether the user agent product version is higher or the\n *     same as the given version.\n */\ngoog.userAgent.product.isVersion = function(version) {\n  return goog.string.compareVersions(goog.userAgent.product.VERSION, version) >=\n      0;\n};\n","~:compiled-at",1578683642366,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.useragent.product_isversion.js\",\n\"lineCount\":67,\n\"mappings\":\"AAyBAA,IAAAC,QAAA,CAAa,kCAAb,CAAA;AAGAD,IAAAE,QAAA,CAAa,8BAAb,CAAA;AACAF,IAAAE,QAAA,CAAa,aAAb,CAAA;AACAF,IAAAE,QAAA,CAAa,gBAAb,CAAA;AACAF,IAAAE,QAAA,CAAa,wBAAb,CAAA;AASA;;;;AAAAF,IAAAG,UAAAC,QAAAC,kBAAA,GAA2CC,QAAQ,EAAG;AAIpD,MAAIN,IAAAG,UAAAC,QAAAG,QAAJ;AAEE,WAAOP,IAAAG,UAAAC,QAAAI,qBAAA,CAA4C,oBAA5C,CAAP;AAFF;AAKA,MAAIR,IAAAG,UAAAC,QAAAK,GAAJ,IAAiCT,IAAAG,UAAAC,QAAAM,KAAjC,IACIV,IAAAG,UAAAC,QAAAO,MADJ;AAEE,WAAOX,IAAAG,UAAAS,QAAP;AAFF;AAKA,MAAIZ,IAAAG,UAAAC,QAAAS,OAAJ,CAAmC;AACjC,QAAIb,IAAAc,KAAAX,UAAAY,SAAAC,MAAA,EAAJ;AAEE,aAAOhB,IAAAG,UAAAC,QAAAI,qBAAA,CAA4C,kBAA5C,CAAP;AAFF;AAKA,WAAOR,IAAAG,UAAAC,QAAAI,qBAAA,CAA4C,mBAA5C,CAAP;AANiC;AAWnC,MAAIR,IAAAG,UAAAC,QAAAa,OAAJ,IAAqC,CAACjB,IAAAc,KAAAX,UAAAY,SAAAC,MAAA,EAAtC;AAME,WAAOhB,IAAAG,UAAAC,QAAAI,qBAAA,CAA4C,oBAA5C,CAAP;AANF;AASA,MAAIR,IAAAG,UAAAC,QAAAc,OAAJ,IAAqClB,IAAAG,UAAAC,QAAAe,KAArC,CAAkE;AAKhE,QAAIC,MACApB,IAAAG,UAAAC,QAAAiB,YAAA,CAAmC,+BAAnC,CADJ;AAEA,QAAID,GAAJ;AACE,aAAOA,GAAA,CAAI,CAAJ,CAAP,GAAgB,GAAhB,GAAsBA,GAAA,CAAI,CAAJ,CAAtB;AADF;AAPgE,GAAlE;AAUO,QAAIpB,IAAAG,UAAAC,QAAAkB,QAAJ,CAAoC;AAQzC,UAAIC,UACAvB,IAAAG,UAAAC,QAAAI,qBAAA,CAA4C,qBAA5C,CADJ;AAEA,UAAIe,OAAJ;AACE,eAAOA,OAAP;AADF;AAIA,aAAOvB,IAAAG,UAAAC,QAAAI,qBAAA,CAA4C,oBAA5C,CAAP;AAdyC;AAV3C;AA2BA,SAAO,EAAP;AA7DoD,CAAtD;AAuEA;;;;;AAAAR,IAAAG,UAAAC,QAAAI,qBAAA,GAA8CgB,QAAQ,CAACC,EAAD,CAAK;AACzD,MAAIL,MAAMpB,IAAAG,UAAAC,QAAAiB,YAAA,CAAmCI,EAAnC,CAAV;AACA,SAAOL,GAAA,GAAMA,GAAA,CAAI,CAAJ,CAAN,GAAe,EAAtB;AAFyD,CAA3D;AAYA;;;;;AAAApB,IAAAG,UAAAC,QAAAiB,YAAA,GAAqCK,QAAQ,CAACD,EAAD,CAAK;AAChD,SAAOA,EAAAE,KAAA,CAAQ3B,IAAAG,UAAAyB,mBAAA,EAAR,CAAP;AADgD,CAAlD;AAUA,sBAAA5B,IAAAG,UAAAC,QAAAQ,QAAA,GAAiCZ,IAAAG,UAAAC,QAAAC,kBAAA,EAAjC;AAWA;;;;AAAAL,IAAAG,UAAAC,QAAAyB,UAAA,GAAmCC,QAAQ,CAACP,OAAD,CAAU;AACnD,SAAOvB,IAAA+B,OAAAC,gBAAA,CAA4BhC,IAAAG,UAAAC,QAAAQ,QAA5B,EAA4DW,OAA5D,CAAP,IACI,CADJ;AADmD,CAArD;;\",\n\"sources\":[\"goog/useragent/product_isversion.js\"],\n\"sourcesContent\":[\"// Copyright 2009 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Functions for understanding the version of the browser.\\n * This is pulled out of product.js to ensure that only builds that need\\n * this functionality actually get it, without having to rely on the compiler\\n * to strip out unneeded pieces.\\n *\\n * TODO(nnaze): Move to more appropriate filename/namespace.\\n *\\n */\\n\\n\\ngoog.provide('goog.userAgent.product.isVersion');\\n\\n\\ngoog.require('goog.labs.userAgent.platform');\\ngoog.require('goog.string');\\ngoog.require('goog.userAgent');\\ngoog.require('goog.userAgent.product');\\n\\n\\n/**\\n * @return {string} The string that describes the version number of the user\\n *     agent product.  This is a string rather than a number because it may\\n *     contain 'b', 'a', and so on.\\n * @private\\n */\\ngoog.userAgent.product.determineVersion_ = function() {\\n  // All browsers have different ways to detect the version and they all have\\n  // different naming schemes.\\n\\n  if (goog.userAgent.product.FIREFOX) {\\n    // Firefox/2.0.0.1 or Firefox/3.5.3\\n    return goog.userAgent.product.getFirstRegExpGroup_(/Firefox\\\\/([0-9.]+)/);\\n  }\\n\\n  if (goog.userAgent.product.IE || goog.userAgent.product.EDGE ||\\n      goog.userAgent.product.OPERA) {\\n    return goog.userAgent.VERSION;\\n  }\\n\\n  if (goog.userAgent.product.CHROME) {\\n    if (goog.labs.userAgent.platform.isIos()) {\\n      // CriOS/56.0.2924.79\\n      return goog.userAgent.product.getFirstRegExpGroup_(/CriOS\\\\/([0-9.]+)/);\\n    }\\n    // Chrome/4.0.223.1\\n    return goog.userAgent.product.getFirstRegExpGroup_(/Chrome\\\\/([0-9.]+)/);\\n  }\\n\\n  // This replicates legacy logic, which considered Safari and iOS to be\\n  // different products.\\n  if (goog.userAgent.product.SAFARI && !goog.labs.userAgent.platform.isIos()) {\\n    // Version/5.0.3\\n    //\\n    // NOTE: Before version 3, Safari did not report a product version number.\\n    // The product version number for these browsers will be the empty string.\\n    // They may be differentiated by WebKit version number in goog.userAgent.\\n    return goog.userAgent.product.getFirstRegExpGroup_(/Version\\\\/([0-9.]+)/);\\n  }\\n\\n  if (goog.userAgent.product.IPHONE || goog.userAgent.product.IPAD) {\\n    // Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1\\n    // (KHTML, like Gecko) Version/3.0 Mobile/3A100a Safari/419.3\\n    // Version is the browser version, Mobile is the build number. We combine\\n    // the version string with the build number: 3.0.3A100a for the example.\\n    var arr =\\n        goog.userAgent.product.execRegExp_(/Version\\\\/(\\\\S+).*Mobile\\\\/(\\\\S+)/);\\n    if (arr) {\\n      return arr[1] + '.' + arr[2];\\n    }\\n  } else if (goog.userAgent.product.ANDROID) {\\n    // Mozilla/5.0 (Linux; U; Android 0.5; en-us) AppleWebKit/522+\\n    // (KHTML, like Gecko) Safari/419.3\\n    //\\n    // Mozilla/5.0 (Linux; U; Android 1.0; en-us; dream) AppleWebKit/525.10+\\n    // (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2\\n    //\\n    // Prefer Version number if present, else make do with the OS number\\n    var version =\\n        goog.userAgent.product.getFirstRegExpGroup_(/Android\\\\s+([0-9.]+)/);\\n    if (version) {\\n      return version;\\n    }\\n\\n    return goog.userAgent.product.getFirstRegExpGroup_(/Version\\\\/([0-9.]+)/);\\n  }\\n\\n  return '';\\n};\\n\\n\\n/**\\n * Return the first group of the given regex.\\n * @param {!RegExp} re Regular expression with at least one group.\\n * @return {string} Contents of the first group or an empty string if no match.\\n * @private\\n */\\ngoog.userAgent.product.getFirstRegExpGroup_ = function(re) {\\n  var arr = goog.userAgent.product.execRegExp_(re);\\n  return arr ? arr[1] : '';\\n};\\n\\n\\n/**\\n * Run regexp's exec() on the userAgent string.\\n * @param {!RegExp} re Regular expression.\\n * @return {?IArrayLike<string>} A result array, or null for no match.\\n * @private\\n */\\ngoog.userAgent.product.execRegExp_ = function(re) {\\n  return re.exec(goog.userAgent.getUserAgentString());\\n};\\n\\n\\n/**\\n * The version of the user agent. This is a string because it might contain\\n * 'b' (as in beta) as well as multiple dots.\\n * @type {string}\\n */\\ngoog.userAgent.product.VERSION = goog.userAgent.product.determineVersion_();\\n\\n\\n/**\\n * Whether the user agent product version is higher or the same as the given\\n * version.\\n *\\n * @param {string|number} version The version to check.\\n * @return {boolean} Whether the user agent product version is higher or the\\n *     same as the given version.\\n */\\ngoog.userAgent.product.isVersion = function(version) {\\n  return goog.string.compareVersions(goog.userAgent.product.VERSION, version) >=\\n      0;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"userAgent\",\"product\",\"determineVersion_\",\"goog.userAgent.product.determineVersion_\",\"FIREFOX\",\"getFirstRegExpGroup_\",\"IE\",\"EDGE\",\"OPERA\",\"VERSION\",\"CHROME\",\"labs\",\"platform\",\"isIos\",\"SAFARI\",\"IPHONE\",\"IPAD\",\"arr\",\"execRegExp_\",\"ANDROID\",\"version\",\"goog.userAgent.product.getFirstRegExpGroup_\",\"re\",\"goog.userAgent.product.execRegExp_\",\"exec\",\"getUserAgentString\",\"isVersion\",\"goog.userAgent.product.isVersion\",\"string\",\"compareVersions\"]\n}\n"]