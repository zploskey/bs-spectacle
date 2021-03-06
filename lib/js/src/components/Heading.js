// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Spectacle = require("spectacle");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var BaseProps$BsSpectacle = require("../BaseProps.js");

function make(italic, bold, caps, margin, padding, textColor, textSize, textAlign, textFont, bgColor, bgImage, bgSize, bgPosition, bgRepeat, bgDarken, overflow, height, size, fit, lineHeight, children) {
  var tmp = { };
  if (size !== undefined) {
    tmp.size = Js_primitive.valFromOption(size);
  }
  if (fit !== undefined) {
    tmp.fit = Js_primitive.valFromOption(fit);
  }
  if (lineHeight !== undefined) {
    tmp.lineHeight = Js_primitive.valFromOption(lineHeight);
  }
  return ReasonReact.wrapJsForReason(Spectacle.Heading, BaseProps$BsSpectacle.extendProps(italic, bold, caps, margin, padding, textColor, textSize, textAlign, textFont, bgColor, bgImage, bgSize, bgPosition, bgRepeat, bgDarken, overflow, height, tmp), children);
}

exports.make = make;
/* spectacle Not a pure module */
