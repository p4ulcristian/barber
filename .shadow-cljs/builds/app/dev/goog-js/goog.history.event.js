["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/history/event.js"],"~:js","goog.provide(\"goog.history.Event\");\ngoog.require(\"goog.events.Event\");\ngoog.require(\"goog.history.EventType\");\n/**\n @final\n @constructor\n @extends {goog.events.Event}\n @param {string} token\n @param {boolean} isNavigation\n */\ngoog.history.Event = function(token, isNavigation) {\n  goog.events.Event.call(this, goog.history.EventType.NAVIGATE);\n  /** @type {string} */ this.token = token;\n  /** @type {boolean} */ this.isNavigation = isNavigation;\n};\ngoog.inherits(goog.history.Event, goog.events.Event);\n","~:source","// Copyright 2010 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview The event object dispatched when the history changes.\n *\n */\n\n\ngoog.provide('goog.history.Event');\n\ngoog.require('goog.events.Event');\ngoog.require('goog.history.EventType');\n\n\n\n/**\n * Event object dispatched after the history state has changed.\n * @param {string} token The string identifying the new history state.\n * @param {boolean} isNavigation True if the event was triggered by a browser\n *     action, such as forward or back, clicking on a link, editing the URL, or\n *     calling {@code window.history.(go|back|forward)}.\n *     False if the token has been changed by a `setToken` or\n *     `replaceToken` call.\n * @constructor\n * @extends {goog.events.Event}\n * @final\n */\ngoog.history.Event = function(token, isNavigation) {\n  goog.events.Event.call(this, goog.history.EventType.NAVIGATE);\n\n  /**\n   * The current history state.\n   * @type {string}\n   */\n  this.token = token;\n\n  /**\n   * Whether the event was triggered by browser navigation.\n   * @type {boolean}\n   */\n  this.isNavigation = isNavigation;\n};\ngoog.inherits(goog.history.Event, goog.events.Event);\n","~:compiled-at",1578749429912,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.history.event.js\",\n\"lineCount\":17,\n\"mappings\":\"AAoBAA,IAAAC,QAAA,CAAa,oBAAb,CAAA;AAEAD,IAAAE,QAAA,CAAa,mBAAb,CAAA;AACAF,IAAAE,QAAA,CAAa,wBAAb,CAAA;AAgBA;;;;;;;AAAAF,IAAAG,QAAAC,MAAA,GAAqBC,QAAQ,CAACC,KAAD,EAAQC,YAAR,CAAsB;AACjDP,MAAAQ,OAAAJ,MAAAK,KAAA,CAAuB,IAAvB,EAA6BT,IAAAG,QAAAO,UAAAC,SAA7B,CAAA;AAMA,wBAAA,IAAAL,MAAA,GAAaA,KAAb;AAMA,yBAAA,IAAAC,aAAA,GAAoBA,YAApB;AAbiD,CAAnD;AAeAP,IAAAY,SAAA,CAAcZ,IAAAG,QAAAC,MAAd,EAAkCJ,IAAAQ,OAAAJ,MAAlC,CAAA;;\",\n\"sources\":[\"goog/history/event.js\"],\n\"sourcesContent\":[\"// Copyright 2010 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview The event object dispatched when the history changes.\\n *\\n */\\n\\n\\ngoog.provide('goog.history.Event');\\n\\ngoog.require('goog.events.Event');\\ngoog.require('goog.history.EventType');\\n\\n\\n\\n/**\\n * Event object dispatched after the history state has changed.\\n * @param {string} token The string identifying the new history state.\\n * @param {boolean} isNavigation True if the event was triggered by a browser\\n *     action, such as forward or back, clicking on a link, editing the URL, or\\n *     calling {@code window.history.(go|back|forward)}.\\n *     False if the token has been changed by a `setToken` or\\n *     `replaceToken` call.\\n * @constructor\\n * @extends {goog.events.Event}\\n * @final\\n */\\ngoog.history.Event = function(token, isNavigation) {\\n  goog.events.Event.call(this, goog.history.EventType.NAVIGATE);\\n\\n  /**\\n   * The current history state.\\n   * @type {string}\\n   */\\n  this.token = token;\\n\\n  /**\\n   * Whether the event was triggered by browser navigation.\\n   * @type {boolean}\\n   */\\n  this.isNavigation = isNavigation;\\n};\\ngoog.inherits(goog.history.Event, goog.events.Event);\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"history\",\"Event\",\"goog.history.Event\",\"token\",\"isNavigation\",\"events\",\"call\",\"EventType\",\"NAVIGATE\",\"inherits\"]\n}\n"]