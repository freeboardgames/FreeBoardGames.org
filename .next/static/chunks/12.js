(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/@material-ui/icons/Feedback.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/Feedback.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"
}), 'Feedback');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Home.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Home.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
}), 'Home');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/MoreVert.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/MoreVert.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreVert');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Replay.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Replay.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"
}), 'Replay');

exports.default = _default;

/***/ }),

/***/ "./node_modules/mobile-detect/mobile-detect.js":
/*!*****************************************************!*\
  !*** ./node_modules/mobile-detect/mobile-detect.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS GENERATED - DO NOT EDIT!
/*!mobile-detect v1.4.4 2019-09-21*/
/*global module:false, define:false*/
/*jshint latedef:false*/
/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
(function (define, undefined) {
define(function () {
    'use strict';

    var impl = {};

    impl.mobileDetectRules = {
    "phones": {
        "iPhone": "\\biPhone\\b|\\biPod\\b",
        "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
        "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
        "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
        "Dell": "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
        "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
        "Samsung": "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
        "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
        "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
        "Asus": "Asus.*Galaxy|PadFone.*Mobile",
        "NokiaLumia": "Lumia [0-9]{3,4}",
        "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
        "Palm": "PalmSource|Palm",
        "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
        "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
        "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
        "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
        "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
        "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
        "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
        "Alcatel": "Alcatel",
        "Nintendo": "Nintendo (3DS|Switch)",
        "Amoi": "Amoi",
        "INQ": "INQ",
        "OnePlus": "ONEPLUS",
        "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
    },
    "tablets": {
        "iPad": "iPad|iPad.*Mobile",
        "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)",
        "GoogleTablet": "Android.*Pixel C",
        "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
        "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk\/[0-9.]+ like Chrome\/[0-9.]+ (?!Mobile)",
        "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
        "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
        "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
        "BlackBerryTablet": "PlayBook|RIM Tablet",
        "HTCtablet": "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
        "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
        "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
        "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
        "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
        "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
        "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
        "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
        "LenovoTablet": "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
        "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
        "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
        "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
        "ArnovaTablet": "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
        "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
        "IRUTablet": "M702pro",
        "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
        "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
        "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
        "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
        "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
        "NokiaLumiaTablet": "Lumia 2520",
        "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
        "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
        "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
        "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
        "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
        "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
        "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
        "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
        "FlyTablet": "IQ310|Fly Vision",
        "bqTablet": "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
        "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
        "NecTablet": "\\bN-06D|\\bN-08D",
        "PantechTablet": "Pantech.*P4100",
        "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
        "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
        "ZyncTablet": "z1000|Z99 2G|z930|z990|z909|Z919|z900",
        "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
        "NabiTablet": "Android.*\\bNabi",
        "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
        "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
        "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
        "PlaystationTablet": "Playstation.*(Portable|Vita)",
        "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
        "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
        "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
        "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
        "GalapadTablet": "Android.*\\bG1\\b(?!\\))",
        "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
        "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
        "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
        "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
        "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
        "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
        "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
        "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
        "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
        "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
        "DPSTablet": "DPS Dream 9|DPS Dual 7",
        "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
        "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
        "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
        "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
        "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
        "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
        "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
        "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
        "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
        "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
        "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
        "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
        "iMobileTablet": "i-mobile i-note",
        "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
        "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
        "AMPETablet": "Android.* A78 ",
        "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
        "TecnoTablet": "TECNO P9|TECNO DP8D",
        "JXDTablet": "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
        "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
        "FX2Tablet": "FX2 PAD7|FX2 PAD10",
        "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
        "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
        "VerizonTablet": "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
        "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
        "CaptivaTablet": "CAPTIVA PAD",
        "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
        "TeclastTablet": "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
        "OndaTablet": "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
        "JaytechTablet": "TPC-PA762",
        "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
        "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
        "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
        "LavaTablet": "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
        "AocTablet": "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
        "MpmanTablet": "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
        "CelkonTablet": "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
        "WolderTablet": "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
        "MediacomTablet": "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
        "MiTablet": "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
        "NibiruTablet": "Nibiru M1|Nibiru Jupiter One",
        "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
        "LeaderTablet": "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
        "UbislateTablet": "UbiSlate[\\s]?7C",
        "PocketBookTablet": "Pocketbook",
        "KocasoTablet": "\\b(TB-1207)\\b",
        "HisenseTablet": "\\b(F5281|E2371)\\b",
        "Hudl": "Hudl HT7S3|Hudl 2",
        "TelstraTablet": "T-Hub2",
        "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
    },
    "oss": {
        "AndroidOS": "Android",
        "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
        "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
        "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
        "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
        "WindowsPhoneOS": "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
        "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
        "iPadOS": "CPU OS 13",
        "MeeGoOS": "MeeGo",
        "MaemoOS": "Maemo",
        "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
        "webOS": "webOS|hpwOS",
        "badaOS": "\\bBada\\b",
        "BREWOS": "BREW"
    },
    "uas": {
        "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
        "Dolfin": "\\bDolfin\\b",
        "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+$|Coast\/[0-9.]+",
        "Skyfire": "Skyfire",
        "Edge": "Mobile Safari\/[.0-9]* Edge",
        "IE": "IEMobile|MSIEMobile",
        "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
        "Bolt": "bolt",
        "TeaShark": "teashark",
        "Blazer": "Blazer",
        "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
        "WeChat": "\\bMicroMessenger\\b",
        "UCBrowser": "UC.*Browser|UCWEB",
        "baiduboxapp": "baiduboxapp",
        "baidubrowser": "baidubrowser",
        "DiigoBrowser": "DiigoBrowser",
        "Mercury": "\\bMercury\\b",
        "ObigoBrowser": "Obigo",
        "NetFront": "NF-Browser",
        "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
        "PaleMoon": "Android.*PaleMoon|Mobile.*PaleMoon"
    },
    "props": {
        "Mobile": "Mobile\/[VER]",
        "Build": "Build\/[VER]",
        "Version": "Version\/[VER]",
        "VendorID": "VendorID\/[VER]",
        "iPad": "iPad.*CPU[a-z ]+[VER]",
        "iPhone": "iPhone.*CPU[a-z ]+[VER]",
        "iPod": "iPod.*CPU[a-z ]+[VER]",
        "Kindle": "Kindle\/[VER]",
        "Chrome": [
            "Chrome\/[VER]",
            "CriOS\/[VER]",
            "CrMo\/[VER]"
        ],
        "Coast": [
            "Coast\/[VER]"
        ],
        "Dolfin": "Dolfin\/[VER]",
        "Firefox": [
            "Firefox\/[VER]",
            "FxiOS\/[VER]"
        ],
        "Fennec": "Fennec\/[VER]",
        "Edge": "Edge\/[VER]",
        "IE": [
            "IEMobile\/[VER];",
            "IEMobile [VER]",
            "MSIE [VER];",
            "Trident\/[0-9.]+;.*rv:[VER]"
        ],
        "NetFront": "NetFront\/[VER]",
        "NokiaBrowser": "NokiaBrowser\/[VER]",
        "Opera": [
            " OPR\/[VER]",
            "Opera Mini\/[VER]",
            "Version\/[VER]"
        ],
        "Opera Mini": "Opera Mini\/[VER]",
        "Opera Mobi": "Version\/[VER]",
        "UCBrowser": [
            "UCWEB[VER]",
            "UC.*Browser\/[VER]"
        ],
        "MQQBrowser": "MQQBrowser\/[VER]",
        "MicroMessenger": "MicroMessenger\/[VER]",
        "baiduboxapp": "baiduboxapp\/[VER]",
        "baidubrowser": "baidubrowser\/[VER]",
        "SamsungBrowser": "SamsungBrowser\/[VER]",
        "Iron": "Iron\/[VER]",
        "Safari": [
            "Version\/[VER]",
            "Safari\/[VER]"
        ],
        "Skyfire": "Skyfire\/[VER]",
        "Tizen": "Tizen\/[VER]",
        "Webkit": "webkit[ \/][VER]",
        "PaleMoon": "PaleMoon\/[VER]",
        "Gecko": "Gecko\/[VER]",
        "Trident": "Trident\/[VER]",
        "Presto": "Presto\/[VER]",
        "Goanna": "Goanna\/[VER]",
        "iOS": " \\bi?OS\\b [VER][ ;]{1}",
        "Android": "Android [VER]",
        "BlackBerry": [
            "BlackBerry[\\w]+\/[VER]",
            "BlackBerry.*Version\/[VER]",
            "Version\/[VER]"
        ],
        "BREW": "BREW [VER]",
        "Java": "Java\/[VER]",
        "Windows Phone OS": [
            "Windows Phone OS [VER]",
            "Windows Phone [VER]"
        ],
        "Windows Phone": "Windows Phone [VER]",
        "Windows CE": "Windows CE\/[VER]",
        "Windows NT": "Windows NT [VER]",
        "Symbian": [
            "SymbianOS\/[VER]",
            "Symbian\/[VER]"
        ],
        "webOS": [
            "webOS\/[VER]",
            "hpwOS\/[VER];"
        ]
    },
    "utils": {
        "Bot": "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
        "MobileBot": "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker\/M1A1-R2D2",
        "DesktopMode": "WPDesktop",
        "TV": "SonyDTV|HbbTV",
        "WebKit": "(webkit)[ \/]([\\w.]+)",
        "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
        "Watch": "SM-V700"
    }
};

    // following patterns come from http://detectmobilebrowsers.com/
    impl.detectMobileBrowsers = {
        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        tabletPattern: /android|ipad|playbook|silk/i
    };

    var hasOwnProp = Object.prototype.hasOwnProperty,
        isArray;

    impl.FALLBACK_PHONE = 'UnknownPhone';
    impl.FALLBACK_TABLET = 'UnknownTablet';
    impl.FALLBACK_MOBILE = 'UnknownMobile';

    isArray = ('isArray' in Array) ?
        Array.isArray : function (value) { return Object.prototype.toString.call(value) === '[object Array]'; };

    function equalIC(a, b) {
        return a != null && b != null && a.toLowerCase() === b.toLowerCase();
    }

    function containsIC(array, value) {
        var valueLC, i, len = array.length;
        if (!len || !value) {
            return false;
        }
        valueLC = value.toLowerCase();
        for (i = 0; i < len; ++i) {
            if (valueLC === array[i].toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    function convertPropsToRegExp(object) {
        for (var key in object) {
            if (hasOwnProp.call(object, key)) {
                object[key] = new RegExp(object[key], 'i');
            }
        }
    }

    function prepareUserAgent(userAgent) {
        return (userAgent || '').substr(0, 500); // mitigate vulnerable to ReDoS
    }

    (function init() {
        var key, values, value, i, len, verPos, mobileDetectRules = impl.mobileDetectRules;
        for (key in mobileDetectRules.props) {
            if (hasOwnProp.call(mobileDetectRules.props, key)) {
                values = mobileDetectRules.props[key];
                if (!isArray(values)) {
                    values = [values];
                }
                len = values.length;
                for (i = 0; i < len; ++i) {
                    value = values[i];
                    verPos = value.indexOf('[VER]');
                    if (verPos >= 0) {
                        value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
                    }
                    values[i] = new RegExp(value, 'i');
                }
                mobileDetectRules.props[key] = values;
            }
        }
        convertPropsToRegExp(mobileDetectRules.oss);
        convertPropsToRegExp(mobileDetectRules.phones);
        convertPropsToRegExp(mobileDetectRules.tablets);
        convertPropsToRegExp(mobileDetectRules.uas);
        convertPropsToRegExp(mobileDetectRules.utils);

        // copy some patterns to oss0 which are tested first (see issue#15)
        mobileDetectRules.oss0 = {
            WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
            WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
        };
    }());

    /**
     * Test userAgent string against a set of rules and find the first matched key.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {String|null} the matched key if found, otherwise <tt>null</tt>
     * @private
     */
    impl.findMatch = function(rules, userAgent) {
        for (var key in rules) {
            if (hasOwnProp.call(rules, key)) {
                if (rules[key].test(userAgent)) {
                    return key;
                }
            }
        }
        return null;
    };

    /**
     * Test userAgent string against a set of rules and return an array of matched keys.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {Array} an array of matched keys, may be empty when there is no match, but not <tt>null</tt>
     * @private
     */
    impl.findMatches = function(rules, userAgent) {
        var result = [];
        for (var key in rules) {
            if (hasOwnProp.call(rules, key)) {
                if (rules[key].test(userAgent)) {
                    result.push(key);
                }
            }
        }
        return result;
    };

    /**
     * Check the version of the given property in the User-Agent.
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {String} version or <tt>null</tt> if version not found
     * @private
     */
    impl.getVersionStr = function (propertyName, userAgent) {
        var props = impl.mobileDetectRules.props, patterns, i, len, match;
        if (hasOwnProp.call(props, propertyName)) {
            patterns = props[propertyName];
            len = patterns.length;
            for (i = 0; i < len; ++i) {
                match = patterns[i].exec(userAgent);
                if (match !== null) {
                    return match[1];
                }
            }
        }
        return null;
    };

    /**
     * Check the version of the given property in the User-Agent.
     * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {Number} version or <tt>NaN</tt> if version not found
     * @private
     */
    impl.getVersion = function (propertyName, userAgent) {
        var version = impl.getVersionStr(propertyName, userAgent);
        return version ? impl.prepareVersionNo(version) : NaN;
    };

    /**
     * Prepare the version number.
     *
     * @param {String} version
     * @return {Number} the version number as a floating number
     * @private
     */
    impl.prepareVersionNo = function (version) {
        var numbers;

        numbers = version.split(/[a-z._ \/\-]/i);
        if (numbers.length === 1) {
            version = numbers[0];
        }
        if (numbers.length > 1) {
            version = numbers[0] + '.';
            numbers.shift();
            version += numbers.join('');
        }
        return Number(version);
    };

    impl.isMobileFallback = function (userAgent) {
        return impl.detectMobileBrowsers.fullPattern.test(userAgent) ||
            impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0,4));
    };

    impl.isTabletFallback = function (userAgent) {
        return impl.detectMobileBrowsers.tabletPattern.test(userAgent);
    };

    impl.prepareDetectionCache = function (cache, userAgent, maxPhoneWidth) {
        if (cache.mobile !== undefined) {
            return;
        }
        var phone, tablet, phoneSized;

        // first check for stronger tablet rules, then phone (see issue#5)
        tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent);
        if (tablet) {
            cache.mobile = cache.tablet = tablet;
            cache.phone = null;
            return; // unambiguously identified as tablet
        }

        phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent);
        if (phone) {
            cache.mobile = cache.phone = phone;
            cache.tablet = null;
            return; // unambiguously identified as phone
        }

        // our rules haven't found a match -> try more general fallback rules
        if (impl.isMobileFallback(userAgent)) {
            phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);
            if (phoneSized === undefined) {
                cache.mobile = impl.FALLBACK_MOBILE;
                cache.tablet = cache.phone = null;
            } else if (phoneSized) {
                cache.mobile = cache.phone = impl.FALLBACK_PHONE;
                cache.tablet = null;
            } else {
                cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
                cache.phone = null;
            }
        } else if (impl.isTabletFallback(userAgent)) {
            cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
            cache.phone = null;
        } else {
            // not mobile at all!
            cache.mobile = cache.tablet = cache.phone = null;
        }
    };

    // t is a reference to a MobileDetect instance
    impl.mobileGrade = function (t) {
        // impl note:
        // To keep in sync w/ Mobile_Detect.php easily, the following code is tightly aligned to the PHP version.
        // When changes are made in Mobile_Detect.php, copy this method and replace:
        //     $this-> / t.
        //     self::MOBILE_GRADE_(.) / '$1'
        //     , self::VERSION_TYPE_FLOAT / (nothing)
        //     isIOS() / os('iOS')
        //     [reg] / (nothing)   <-- jsdelivr complaining about unescaped unicode character U+00AE
        var $isMobile = t.mobile() !== null;

        if (
            // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
            t.os('iOS') && t.version('iPad')>=4.3 ||
            t.os('iOS') && t.version('iPhone')>=3.1 ||
            t.os('iOS') && t.version('iPod')>=3.1 ||

            // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
            // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
            // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
            // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
            ( t.version('Android')>2.1 && t.is('Webkit') ) ||

            // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
            t.version('Windows Phone OS')>=7.0 ||

            // Blackberry 7 - Tested on BlackBerry Torch 9810
            // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
            t.is('BlackBerry') && t.version('BlackBerry')>=6.0 ||
            // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
            t.match('Playbook.*Tablet') ||

            // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
            ( t.version('webOS')>=1.4 && t.match('Palm|Pre|Pixi') ) ||
            // Palm WebOS 3.0  - Tested on HP TouchPad
            t.match('hp.*TouchPad') ||

            // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
            ( t.is('Firefox') && t.version('Firefox')>=12 ) ||

            // Chrome for Android - Tested on Android 4.0, 4.1 device
            ( t.is('Chrome') && t.is('AndroidOS') && t.version('Android')>=4.0 ) ||

            // Skyfire 4.1 - Tested on Android 2.3 device
            ( t.is('Skyfire') && t.version('Skyfire')>=4.1 && t.is('AndroidOS') && t.version('Android')>=2.3 ) ||

            // Opera Mobile 11.5-12: Tested on Android 2.3
            ( t.is('Opera') && t.version('Opera Mobi')>11 && t.is('AndroidOS') ) ||

            // Meego 1.2 - Tested on Nokia 950 and N9
            t.is('MeeGoOS') ||

            // Tizen (pre-release) - Tested on early hardware
            t.is('Tizen') ||

            // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
            // @todo: more tests here!
            t.is('Dolfin') && t.version('Bada')>=2.0 ||

            // UC Browser - Tested on Android 2.3 device
            ( (t.is('UC Browser') || t.is('Dolfin')) && t.version('Android')>=2.3 ) ||

            // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
            ( t.match('Kindle Fire') ||
                t.is('Kindle') && t.version('Kindle')>=3.0 ) ||

            // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
            t.is('AndroidOS') && t.is('NookTablet') ||

            // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
            t.version('Chrome')>=11 && !$isMobile ||

            // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
            t.version('Safari')>=5.0 && !$isMobile ||

            // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
            t.version('Firefox')>=4.0 && !$isMobile ||

            // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
            t.version('MSIE')>=7.0 && !$isMobile ||

            // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
            // @reference: http://my.opera.com/community/openweb/idopera/
            t.version('Opera')>=10 && !$isMobile

            ){
            return 'A';
        }

        if (
            t.os('iOS') && t.version('iPad')<4.3 ||
            t.os('iOS') && t.version('iPhone')<3.1 ||
            t.os('iOS') && t.version('iPod')<3.1 ||

            // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
            t.is('Blackberry') && t.version('BlackBerry')>=5 && t.version('BlackBerry')<6 ||

            //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
            ( t.version('Opera Mini')>=5.0 && t.version('Opera Mini')<=6.5 &&
                (t.version('Android')>=2.3 || t.is('iOS')) ) ||

            // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
            t.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') ||

            // @todo: report this (tested on Nokia N71)
            t.version('Opera Mobi')>=11 && t.is('SymbianOS')
            ){
            return 'B';
        }

        if (
        // Blackberry 4.x - Tested on the Curve 8330
            t.version('BlackBerry')<5.0 ||
            // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
            t.match('MSIEMobile|Windows CE.*Mobile') || t.version('Windows Mobile')<=5.2

            ){
            return 'C';
        }

        //All older smartphone platforms and featurephones - Any device that doesn't support media queries
        //will receive the basic, C grade experience.
        return 'C';
    };

    impl.detectOS = function (ua) {
        return impl.findMatch(impl.mobileDetectRules.oss0, ua) ||
            impl.findMatch(impl.mobileDetectRules.oss, ua);
    };

    impl.getDeviceSmallerSide = function () {
        return window.screen.width < window.screen.height ?
            window.screen.width :
            window.screen.height;
    };

    /**
     * Constructor for MobileDetect object.
     * <br>
     * Such an object will keep a reference to the given user-agent string and cache most of the detect queries.<br>
     * <div style="background-color: #d9edf7; border: 1px solid #bce8f1; color: #3a87ad; padding: 14px; border-radius: 2px; margin-top: 20px">
     *     <strong>Find information how to download and install:</strong>
     *     <a href="https://github.com/hgoebl/mobile-detect.js/">github.com/hgoebl/mobile-detect.js/</a>
     * </div>
     *
     * @example <pre>
     *     var md = new MobileDetect(window.navigator.userAgent);
     *     if (md.mobile()) {
     *         location.href = (md.mobileGrade() === 'A') ? '/mobile/' : '/lynx/';
     *     }
     * </pre>
     *
     * @param {string} userAgent typically taken from window.navigator.userAgent or http_header['User-Agent']
     * @param {number} [maxPhoneWidth=600] <strong>only for browsers</strong> specify a value for the maximum
     *        width of smallest device side (in logical "CSS" pixels) until a device detected as mobile will be handled
     *        as phone.
     *        This is only used in cases where the device cannot be classified as phone or tablet.<br>
     *        See <a href="http://developer.android.com/guide/practices/screens_support.html">Declaring Tablet Layouts
     *        for Android</a>.<br>
     *        If you provide a value < 0, then this "fuzzy" check is disabled.
     * @constructor
     * @global
     */
    function MobileDetect(userAgent, maxPhoneWidth) {
        this.ua = prepareUserAgent(userAgent);
        this._cache = {};
        //600dp is typical 7" tablet minimum width
        this.maxPhoneWidth = maxPhoneWidth || 600;
    }

    MobileDetect.prototype = {
        constructor: MobileDetect,

        /**
         * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
         * <br>
         * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
         * <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>UnknownMobile</code> here.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
         * @function MobileDetect#mobile
         */
        mobile: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.mobile;
        },

        /**
         * Returns the detected phone type/family string or <tt>null</tt>.
         * <br>
         * The returned tablet (family or producer) is one of following keys:<br>
         * <br><tt>iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
         * NokiaLumia, Micromax, Palm, Vertu, Pantech, Fly, Wiko, iMobile, SimValley,
         * Wolfgang, Alcatel, Nintendo, Amoi, INQ, OnePlus, GenericPhone</tt><br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
         * will return <code>UnknownMobile</code>.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key of the phone family or producer, e.g. "iPhone"
         * @function MobileDetect#phone
         */
        phone: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.phone;
        },

        /**
         * Returns the detected tablet type/family string or <tt>null</tt>.
         * <br>
         * The returned tablet (family or producer) is one of following keys:<br>
         * <br><tt>iPad, NexusTablet, GoogleTablet, SamsungTablet, Kindle, SurfaceTablet,
         * HPTablet, AsusTablet, BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet,
         * AcerTablet, ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet,
         * LenovoTablet, DellTablet, YarvikTablet, MedionTablet, ArnovaTablet,
         * IntensoTablet, IRUTablet, MegafonTablet, EbodaTablet, AllViewTablet,
         * ArchosTablet, AinolTablet, NokiaLumiaTablet, SonyTablet, PhilipsTablet,
         * CubeTablet, CobyTablet, MIDTablet, MSITablet, SMiTTablet, RockChipTablet,
         * FlyTablet, bqTablet, HuaweiTablet, NecTablet, PantechTablet, BronchoTablet,
         * VersusTablet, ZyncTablet, PositivoTablet, NabiTablet, KoboTablet, DanewTablet,
         * TexetTablet, PlaystationTablet, TrekstorTablet, PyleAudioTablet, AdvanTablet,
         * DanyTechTablet, GalapadTablet, MicromaxTablet, KarbonnTablet, AllFineTablet,
         * PROSCANTablet, YONESTablet, ChangJiaTablet, GUTablet, PointOfViewTablet,
         * OvermaxTablet, HCLTablet, DPSTablet, VistureTablet, CrestaTablet,
         * MediatekTablet, ConcordeTablet, GoCleverTablet, ModecomTablet, VoninoTablet,
         * ECSTablet, StorexTablet, VodafoneTablet, EssentielBTablet, RossMoorTablet,
         * iMobileTablet, TolinoTablet, AudioSonicTablet, AMPETablet, SkkTablet,
         * TecnoTablet, JXDTablet, iJoyTablet, FX2Tablet, XoroTablet, ViewsonicTablet,
         * VerizonTablet, OdysTablet, CaptivaTablet, IconbitTablet, TeclastTablet,
         * OndaTablet, JaytechTablet, BlaupunktTablet, DigmaTablet, EvolioTablet,
         * LavaTablet, AocTablet, MpmanTablet, CelkonTablet, WolderTablet, MediacomTablet,
         * MiTablet, NibiruTablet, NexoTablet, LeaderTablet, UbislateTablet,
         * PocketBookTablet, KocasoTablet, HisenseTablet, Hudl, TelstraTablet,
         * GenericTablet</tt><br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
         * will return <code>UnknownMobile</code>.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
         * @function MobileDetect#tablet
         */
        tablet: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.tablet;
        },

        /**
         * Returns the (first) detected user-agent string or <tt>null</tt>.
         * <br>
         * The returned user-agent is one of following keys:<br>
         * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
         * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Mercury,
         * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
         * <br>
         * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
         * cases where a mobile device pretends to be more than one particular browser. You can get the
         * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
         * providing one of the defined keys as first argument to {@link MobileDetect#is}.
         *
         * @returns {String} the key for the detected user-agent or <tt>null</tt>
         * @function MobileDetect#userAgent
         */
        userAgent: function () {
            if (this._cache.userAgent === undefined) {
                this._cache.userAgent = impl.findMatch(impl.mobileDetectRules.uas, this.ua);
            }
            return this._cache.userAgent;
        },

        /**
         * Returns all detected user-agent strings.
         * <br>
         * The array is empty or contains one or more of following keys:<br>
         * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
         * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Mercury,
         * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
         * <br>
         * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
         * cases where a mobile device pretends to be more than one particular browser. You can get the
         * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
         * providing one of the defined keys as first argument to {@link MobileDetect#is}.
         *
         * @returns {Array} the array of detected user-agent keys or <tt>[]</tt>
         * @function MobileDetect#userAgents
         */
        userAgents: function () {
            if (this._cache.userAgents === undefined) {
                this._cache.userAgents = impl.findMatches(impl.mobileDetectRules.uas, this.ua);
            }
            return this._cache.userAgents;
        },

        /**
         * Returns the detected operating system string or <tt>null</tt>.
         * <br>
         * The operating system is one of following keys:<br>
         * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
         * iOS, iPadOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
         *
         * @returns {String} the key for the detected operating system.
         * @function MobileDetect#os
         */
        os: function () {
            if (this._cache.os === undefined) {
                this._cache.os = impl.detectOS(this.ua);
            }
            return this._cache.os;
        },

        /**
         * Get the version (as Number) of the given property in the User-Agent.
         * <br>
         * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
         *
         * @param {String} key a key defining a thing which has a version.<br>
         *        You can use one of following keys:<br>
         * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
         * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
         * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
         * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
         * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
         * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
         *
         * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
         *          Be careful when comparing this value with '==' operator!
         * @function MobileDetect#version
         */
        version: function (key) {
            return impl.getVersion(key, this.ua);
        },

        /**
         * Get the version (as String) of the given property in the User-Agent.
         * <br>
         *
         * @param {String} key a key defining a thing which has a version.<br>
         *        You can use one of following keys:<br>
         * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
         * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
         * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
         * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
         * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
         * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
         *
         * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
         *
         * @function MobileDetect#versionStr
         */
        versionStr: function (key) {
            return impl.getVersionStr(key, this.ua);
        },

        /**
         * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
         *
         * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
         *        tablet family.<br>
         *        For a complete list of possible values, see {@link MobileDetect#userAgent},
         *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
         *        Additionally you have following keys:<br>
         * <br><tt>Bot, MobileBot, DesktopMode, TV, WebKit, Console, Watch</tt><br>
         *
         * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
         *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
         * @function MobileDetect#is
         */
        is: function (key) {
            return containsIC(this.userAgents(), key) ||
                   equalIC(key, this.os()) ||
                   equalIC(key, this.phone()) ||
                   equalIC(key, this.tablet()) ||
                   containsIC(impl.findMatches(impl.mobileDetectRules.utils, this.ua), key);
        },

        /**
         * Do a quick test against navigator::userAgent.
         *
         * @param {String|RegExp} pattern the pattern, either as String or RegExp
         *                        (a string will be converted to a case-insensitive RegExp).
         * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
         * @function MobileDetect#match
         */
        match: function (pattern) {
            if (!(pattern instanceof RegExp)) {
                pattern = new RegExp(pattern, 'i');
            }
            return pattern.test(this.ua);
        },

        /**
         * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
         * <br>
         * Obviously this method makes sense in browser environments only (not for Node.js)!
         * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
         *        The argument is optional and if not present or falsy, the value of the constructor is taken.
         * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
         *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
         *          Will always return <code>undefined</code> server-side.
         */
        isPhoneSized: function (maxPhoneWidth) {
            return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
        },

        /**
         * Returns the mobile grade ('A', 'B', 'C').
         *
         * @returns {String} one of the mobile grades ('A', 'B', 'C').
         * @function MobileDetect#mobileGrade
         */
        mobileGrade: function () {
            if (this._cache.grade === undefined) {
                this._cache.grade = impl.mobileGrade(this);
            }
            return this._cache.grade;
        }
    };

    // environment-dependent
    if (typeof window !== 'undefined' && window.screen) {
        MobileDetect.isPhoneSized = function (maxPhoneWidth) {
            return maxPhoneWidth < 0 ? undefined : impl.getDeviceSmallerSide() <= maxPhoneWidth;
        };
    } else {
        MobileDetect.isPhoneSized = function () {};
    }

    // should not be replaced by a completely new object - just overwrite existing methods
    MobileDetect._impl = impl;
    
    MobileDetect.version = '1.4.4 2019-09-21';

    return MobileDetect;
}); // end of call of define()
})((function (undefined) {
    if ( true && module.exports) {
        return function (factory) { module.exports = factory(); };
    } else if (true) {
        return __webpack_require__(/*! !webpack amd define */ "./node_modules/next/node_modules/webpack/buildin/amd-define.js");
    } else {}
})());

/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/react-ga/dist/esm/components/OutboundLink.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/components/OutboundLink.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OutboundLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_console_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var NEWTAB = '_blank';
var MIDDLECLICK = 1;

var OutboundLink =
/*#__PURE__*/
function (_Component) {
  _inherits(OutboundLink, _Component);

  function OutboundLink() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OutboundLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OutboundLink)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      var _this$props = _this.props,
          target = _this$props.target,
          eventLabel = _this$props.eventLabel,
          to = _this$props.to,
          onClick = _this$props.onClick,
          trackerNames = _this$props.trackerNames;
      var eventMeta = {
        label: eventLabel
      };
      var sameTarget = target !== NEWTAB;
      var normalClick = !(event.ctrlKey || event.shiftKey || event.metaKey || event.button === MIDDLECLICK);

      if (sameTarget && normalClick) {
        event.preventDefault();
        OutboundLink.trackLink(eventMeta, function () {
          window.location.href = to;
        }, trackerNames);
      } else {
        OutboundLink.trackLink(eventMeta, function () {}, trackerNames);
      }

      if (onClick) {
        onClick(event);
      }
    });

    return _this;
  }

  _createClass(OutboundLink, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          href = _this$props2.to,
          oldProps = _objectWithoutProperties(_this$props2, ["to"]);

      var props = _objectSpread({}, oldProps, {
        href: href,
        onClick: this.handleClick
      });

      if (this.props.target === NEWTAB) {
        props.rel = 'noopener noreferrer';
      }

      delete props.eventLabel;
      delete props.trackerNames;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('a', props);
    }
  }]);

  return OutboundLink;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(OutboundLink, "trackLink", function () {
  Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_2__["default"])('ga tracking not enabled');
});

_defineProperty(OutboundLink, "propTypes", {
  eventLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  trackerNames: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)
});

_defineProperty(OutboundLink, "defaultProps", {
  target: null,
  to: null,
  onClick: null,
  trackerNames: null
});



/***/ }),

/***/ "./node_modules/react-ga/dist/esm/core.js":
/*!************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/core.js ***!
  \************************************************/
/*! exports provided: initialize, ga, set, send, pageview, modalview, timing, event, exception, plugin, outboundLink, testModeAPI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ga", function() { return ga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalview", function() { return modalview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timing", function() { return timing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exception", function() { return exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outboundLink", function() { return outboundLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testModeAPI", function() { return testModeAPI; });
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/format */ "./node_modules/react-ga/dist/esm/utils/format.js");
/* harmony import */ var _utils_removeLeadingSlash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/removeLeadingSlash */ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js");
/* harmony import */ var _utils_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/trim */ "./node_modules/react-ga/dist/esm/utils/trim.js");
/* harmony import */ var _utils_loadGA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/loadGA */ "./node_modules/react-ga/dist/esm/utils/loadGA.js");
/* harmony import */ var _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");
/* harmony import */ var _utils_console_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/console/log */ "./node_modules/react-ga/dist/esm/utils/console/log.js");
/* harmony import */ var _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/testModeAPI */ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * React Google Analytics Module
 *
 * @package react-ga
 * @author  Adam Lofting <adam@mozillafoundation.org>
 *          Atul Varma <atul@mozillafoundation.org>
 */

/**
 * Utilities
 */








var _isNotBrowser = typeof window === 'undefined' || typeof document === 'undefined';

var _debug = false;
var _titleCase = true;
var _testMode = false;
var _alwaysSendToDefaultTracker = true;

var internalGa = function internalGa() {
  var _window;

  if (_testMode) return _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"].ga.apply(_utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"], arguments);
  if (_isNotBrowser) return false;
  if (!window.ga) return Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually');
  return (_window = window).ga.apply(_window, arguments);
};

function _format(s) {
  return Object(_utils_format__WEBPACK_IMPORTED_MODULE_0__["default"])(s, _titleCase);
}

function _gaCommand(trackerNames) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var command = args[0];

  if (typeof internalGa === 'function') {
    if (typeof command !== 'string') {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('ga command must be a string');
      return;
    }

    if (_alwaysSendToDefaultTracker || !Array.isArray(trackerNames)) internalGa.apply(void 0, args);

    if (Array.isArray(trackerNames)) {
      trackerNames.forEach(function (name) {
        internalGa.apply(void 0, _toConsumableArray(["".concat(name, ".").concat(command)].concat(args.slice(1))));
      });
    }
  }
}

function _initialize(gaTrackingID, options) {
  if (!gaTrackingID) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('gaTrackingID is required in initialize()');
    return;
  }

  if (options) {
    if (options.debug && options.debug === true) {
      _debug = true;
    }

    if (options.titleCase === false) {
      _titleCase = false;
    }

    if (options.useExistingGa) {
      return;
    }
  }

  if (options && options.gaOptions) {
    internalGa('create', gaTrackingID, options.gaOptions);
  } else {
    internalGa('create', gaTrackingID, 'auto');
  }
}

function initialize(configsOrTrackingId, options) {
  if (options && options.testMode === true) {
    _testMode = true;
  } else {
    if (_isNotBrowser) {
      return false;
    }

    if (!options || options.standardImplementation !== true) Object(_utils_loadGA__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
  }

  _alwaysSendToDefaultTracker = options && typeof options.alwaysSendToDefaultTracker === 'boolean' ? options.alwaysSendToDefaultTracker : true;

  if (Array.isArray(configsOrTrackingId)) {
    configsOrTrackingId.forEach(function (config) {
      if (_typeof(config) !== 'object') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('All configs must be an object');
        return;
      }

      _initialize(config.trackingId, config);
    });
  } else {
    _initialize(configsOrTrackingId, options);
  }

  return true;
}
/**
 * ga:
 * Returns the original GA object.
 */

function ga() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length > 0) {
    internalGa.apply(void 0, args);

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'arguments\');');
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with arguments: ".concat(JSON.stringify(args)));
    }
  }

  return window.ga;
}
/**
 * set:
 * GA tracker set method
 * @param {Object} fieldsObject - a field/value pair or a group of field/value pairs on the tracker
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function set(fieldsObject, trackerNames) {
  if (!fieldsObject) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`fieldsObject` is required in .set()');
    return;
  }

  if (_typeof(fieldsObject) !== 'object') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `fieldsObject` arg to be an Object');
    return;
  }

  if (Object.keys(fieldsObject).length === 0) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('empty `fieldsObject` given to .set()');
  }

  _gaCommand(trackerNames, 'set', fieldsObject);

  if (_debug) {
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'set\', fieldsObject);');
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with fieldsObject: ".concat(JSON.stringify(fieldsObject)));
  }
}
/**
 * send:
 * Clone of the low level `ga.send` method
 * WARNING: No validations will be applied to this
 * @param  {Object} fieldObject - field object for tracking different analytics
 * @param  {Array} trackerNames - trackers to send the command to
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function send(fieldObject, trackerNames) {
  _gaCommand(trackerNames, 'send', fieldObject);

  if (_debug) {
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'send\', fieldObject);');
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with fieldObject: ".concat(JSON.stringify(fieldObject)));
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with trackers: ".concat(JSON.stringify(trackerNames)));
  }
}
/**
 * pageview:
 * Basic GA pageview tracking
 * @param  {String} path - the current page page e.g. '/about'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 * @param {String} title - (optional) the page title e. g. 'My Website'
 */

function pageview(rawPath, trackerNames, title) {
  if (!rawPath) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('path is required in .pageview()');
    return;
  }

  var path = Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawPath);

  if (path === '') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('path cannot be an empty string in .pageview()');
    return;
  }

  var extraFields = {};

  if (title) {
    extraFields.title = title;
  }

  if (typeof ga === 'function') {
    _gaCommand(trackerNames, 'send', _objectSpread({
      hitType: 'pageview',
      page: path
    }, extraFields));

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'send\', \'pageview\', path);');
      var extraLog = '';

      if (title) {
        extraLog = " and title: ".concat(title);
      }

      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with path: ".concat(path).concat(extraLog));
    }
  }
}
/**
 * modalview:
 * a proxy to basic GA pageview tracking to consistently track
 * modal views that are an equivalent UX to a traditional pageview
 * @param  {String} modalName e.g. 'add-or-edit-club'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function modalview(rawModalName, trackerNames) {
  if (!rawModalName) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('modalName is required in .modalview(modalName)');
    return;
  }

  var modalName = Object(_utils_removeLeadingSlash__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawModalName));

  if (modalName === '') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('modalName cannot be an empty string or a single / in .modalview()');
    return;
  }

  if (typeof ga === 'function') {
    var path = "/modal/".concat(modalName);

    _gaCommand(trackerNames, 'send', 'pageview', path);

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'send\', \'pageview\', path);');
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with path: ".concat(path));
    }
  }
}
/**
 * timing:
 * GA timing
 * @param args.category {String} required
 * @param args.variable {String} required
 * @param args.value  {Int}  required
 * @param args.label  {String} required
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function timing() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref.category,
      variable = _ref.variable,
      value = _ref.value,
      label = _ref.label;

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    if (!category || !variable || !value || typeof value !== 'number') {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.category, args.variable ' + 'AND args.value are required in timing() ' + 'AND args.value has to be a number');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'timing',
      timingCategory: _format(category),
      timingVar: _format(variable),
      timingValue: value
    };

    if (label) {
      fieldObject.timingLabel = _format(label);
    }

    send(fieldObject, trackerNames);
  }
}
/**
 * event:
 * GA event tracking
 * @param args.category {String} required
 * @param args.action {String} required
 * @param args.label {String} optional
 * @param args.value {Int} optional
 * @param args.nonInteraction {boolean} optional
 * @param args.transport {string} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function event() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref2.category,
      action = _ref2.action,
      label = _ref2.label,
      value = _ref2.value,
      nonInteraction = _ref2.nonInteraction,
      transport = _ref2.transport,
      args = _objectWithoutProperties(_ref2, ["category", "action", "label", "value", "nonInteraction", "transport"]);

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    // Simple Validation
    if (!category || !action) {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.category AND args.action are required in event()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: _format(category),
      eventAction: _format(action)
    }; // Optional Fields

    if (label) {
      fieldObject.eventLabel = _format(label);
    }

    if (typeof value !== 'undefined') {
      if (typeof value !== 'number') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `args.value` arg to be a Number.');
      } else {
        fieldObject.eventValue = value;
      }
    }

    if (typeof nonInteraction !== 'undefined') {
      if (typeof nonInteraction !== 'boolean') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.nonInteraction` must be a boolean.');
      } else {
        fieldObject.nonInteraction = nonInteraction;
      }
    }

    if (typeof transport !== 'undefined') {
      if (typeof transport !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.transport` must be a string.');
      } else {
        if (['beacon', 'xhr', 'image'].indexOf(transport) === -1) {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.transport` must be either one of these values: `beacon`, `xhr` or `image`');
        }

        fieldObject.transport = transport;
      }
    }

    Object.keys(args).filter(function (key) {
      return key.substr(0, 'dimension'.length) === 'dimension';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    });
    Object.keys(args).filter(function (key) {
      return key.substr(0, 'metric'.length) === 'metric';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    }); // Send to GA

    send(fieldObject, trackerNames);
  }
}
/**
 * exception:
 * GA exception tracking
 * @param args.description {String} optional
 * @param args.fatal {boolean} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function exception(_ref3, trackerNames) {
  var description = _ref3.description,
      fatal = _ref3.fatal;

  if (typeof ga === 'function') {
    // Required Fields
    var fieldObject = {
      hitType: 'exception'
    }; // Optional Fields

    if (description) {
      fieldObject.exDescription = _format(description);
    }

    if (typeof fatal !== 'undefined') {
      if (typeof fatal !== 'boolean') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.fatal` must be a boolean.');
      } else {
        fieldObject.exFatal = fatal;
      }
    } // Send to GA


    send(fieldObject, trackerNames);
  }
}
var plugin = {
  /**
   * require:
   * GA requires a plugin
   * @param name {String} e.g. 'ecommerce' or 'myplugin'
   * @param options {Object} optional e.g {path: '/log', debug: true}
   * @param trackerName {String} optional e.g 'trackerName'
   */
  require: function require(rawName, options, trackerName) {
    if (typeof ga === 'function') {
      // Required Fields
      if (!rawName) {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`name` is required in .require()');
        return;
      }

      var name = Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawName);

      if (name === '') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`name` cannot be an empty string in .require()');
        return;
      }

      var requireString = trackerName ? "".concat(trackerName, ".require") : 'require'; // Optional Fields

      if (options) {
        if (_typeof(options) !== 'object') {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `options` arg to be an Object');
          return;
        }

        if (Object.keys(options).length === 0) {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Empty `options` given to .require()');
        }

        ga(requireString, name, options);

        if (_debug) {
          Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('require', '".concat(name, "', ").concat(JSON.stringify(options)));
        }
      } else {
        ga(requireString, name);

        if (_debug) {
          Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('require', '".concat(name, "');"));
        }
      }
    }
  },

  /**
   * execute:
   * GA execute action for plugin
   * Takes variable number of arguments
   * @param pluginName {String} e.g. 'ecommerce' or 'myplugin'
   * @param action {String} e.g. 'addItem' or 'myCustomAction'
   * @param actionType {String} optional e.g. 'detail'
   * @param payload {Object} optional e.g { id: '1x5e', name : 'My product to track' }
   */
  execute: function execute(pluginName, action) {
    var payload;
    var actionType;

    if ((arguments.length <= 2 ? 0 : arguments.length - 2) === 1) {
      payload = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      actionType = arguments.length <= 2 ? undefined : arguments[2];
      payload = arguments.length <= 3 ? undefined : arguments[3];
    }

    if (typeof ga === 'function') {
      if (typeof pluginName !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `pluginName` arg to be a String.');
      } else if (typeof action !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `action` arg to be a String.');
      } else {
        var command = "".concat(pluginName, ":").concat(action);
        payload = payload || null;

        if (actionType && payload) {
          ga(command, actionType, payload);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("actionType: \"".concat(actionType, "\" with payload: ").concat(JSON.stringify(payload)));
          }
        } else if (payload) {
          ga(command, payload);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with payload: ".concat(JSON.stringify(payload)));
          }
        } else {
          ga(command);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
          }
        }
      }
    }
  }
};
/**
 * outboundLink:
 * GA outboundLink tracking
 * @param args.label {String} e.g. url, or 'Create an Account'
 * @param {function} hitCallback - Called after processing a hit.
 */

function outboundLink(args, hitCallback, trackerNames) {
  if (typeof hitCallback !== 'function') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('hitCallback function is required');
    return;
  }

  if (typeof ga === 'function') {
    // Simple Validation
    if (!args || !args.label) {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.label is required in outboundLink()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: 'Outbound',
      eventAction: 'Click',
      eventLabel: _format(args.label)
    };
    var safetyCallbackCalled = false;

    var safetyCallback = function safetyCallback() {
      // This prevents a delayed response from GA
      // causing hitCallback from being fired twice
      safetyCallbackCalled = true;
      hitCallback();
    }; // Using a timeout to ensure the execution of critical application code
    // in the case when the GA server might be down
    // or an ad blocker prevents sending the data
    // register safety net timeout:


    var t = setTimeout(safetyCallback, 250);

    var clearableCallbackForGA = function clearableCallbackForGA() {
      clearTimeout(t);

      if (!safetyCallbackCalled) {
        hitCallback();
      }
    };

    fieldObject.hitCallback = clearableCallbackForGA; // Send to GA

    send(fieldObject, trackerNames);
  } else {
    // if ga is not defined, return the callback so the application
    // continues to work as expected
    setTimeout(hitCallback, 0);
  }
}
var testModeAPI = _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"];
/* harmony default export */ __webpack_exports__["default"] = ({
  initialize: initialize,
  ga: ga,
  set: set,
  send: send,
  pageview: pageview,
  modalview: modalview,
  timing: timing,
  event: event,
  exception: exception,
  plugin: plugin,
  outboundLink: outboundLink,
  testModeAPI: _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/index.js ***!
  \*************************************************/
/*! exports provided: initialize, ga, set, send, pageview, modalview, timing, event, exception, plugin, outboundLink, testModeAPI, OutboundLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ga", function() { return ga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalview", function() { return modalview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timing", function() { return timing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exception", function() { return exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outboundLink", function() { return outboundLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testModeAPI", function() { return testModeAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundLink", function() { return OutboundLink; });
/* harmony import */ var _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/OutboundLink */ "./node_modules/react-ga/dist/esm/components/OutboundLink.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./node_modules/react-ga/dist/esm/core.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialize = _core__WEBPACK_IMPORTED_MODULE_1__["initialize"];
var ga = _core__WEBPACK_IMPORTED_MODULE_1__["ga"];
var set = _core__WEBPACK_IMPORTED_MODULE_1__["set"];
var send = _core__WEBPACK_IMPORTED_MODULE_1__["send"];
var pageview = _core__WEBPACK_IMPORTED_MODULE_1__["pageview"];
var modalview = _core__WEBPACK_IMPORTED_MODULE_1__["modalview"];
var timing = _core__WEBPACK_IMPORTED_MODULE_1__["timing"];
var event = _core__WEBPACK_IMPORTED_MODULE_1__["event"];
var exception = _core__WEBPACK_IMPORTED_MODULE_1__["exception"];
var plugin = _core__WEBPACK_IMPORTED_MODULE_1__["plugin"];
var outboundLink = _core__WEBPACK_IMPORTED_MODULE_1__["outboundLink"];
var testModeAPI = _core__WEBPACK_IMPORTED_MODULE_1__["testModeAPI"];
_components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__["default"].origTrackLink = _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__["default"].trackLink;
_components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__["default"].trackLink = _core__WEBPACK_IMPORTED_MODULE_1__["outboundLink"];
var OutboundLink = _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_objectSpread({}, _core__WEBPACK_IMPORTED_MODULE_1__, {
  OutboundLink: OutboundLink
}));

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/console/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/console/log.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
function log(s) {
  console.info('[react-ga]', s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/console/warn.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/console/warn.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warn; });
function warn(s) {
  console.warn('[react-ga]', s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/format.js":
/*!********************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/format.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
/* harmony import */ var _mightBeEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mightBeEmail */ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js");
/* harmony import */ var _toTitleCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toTitleCase */ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js");
/* harmony import */ var _console_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");



var redacted = 'REDACTED (Potential Email Address)';
function format(s, titleCase) {
  if (Object(_mightBeEmail__WEBPACK_IMPORTED_MODULE_0__["default"])(s)) {
    Object(_console_warn__WEBPACK_IMPORTED_MODULE_2__["default"])('This arg looks like an email address, redacting.');
    return redacted;
  }

  if (titleCase) {
    return Object(_toTitleCase__WEBPACK_IMPORTED_MODULE_1__["default"])(s);
  }

  return s;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/loadGA.js":
/*!********************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/loadGA.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  var gaAddress = 'https://www.google-analytics.com/analytics.js';

  if (options && options.gaAddress) {
    gaAddress = options.gaAddress;
  } else if (options && options.debug) {
    gaAddress = 'https://www.google-analytics.com/analytics_debug.js';
  } // https://developers.google.com/analytics/devguides/collection/analyticsjs/

  /* eslint-disable */


  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', gaAddress, 'ga');
  /* eslint-enable */

});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/mightBeEmail.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mightBeEmail; });
// See if s could be an email address. We don't want to send personal data like email.
// https://support.google.com/analytics/answer/2795983?hl=en
function mightBeEmail(s) {
  // There's no point trying to validate rfc822 fully, just look for ...@...
  return typeof s === 'string' && s.indexOf('@') !== -1;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeLeadingSlash; });
function removeLeadingSlash(string) {
  if (string.substring(0, 1) === '/') {
    return string.substring(1);
  }

  return string;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/testModeAPI.js ***!
  \*************************************************************/
/*! exports provided: gaCalls, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaCalls", function() { return gaCalls; });
var gaCalls = [];
/* harmony default export */ __webpack_exports__["default"] = ({
  calls: gaCalls,
  ga: function ga() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    gaCalls.push([].concat(args));
  },
  resetCalls: function resetCalls() {
    gaCalls.length = 0;
  }
});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/toTitleCase.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toTitleCase; });
/* harmony import */ var _trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trim */ "./node_modules/react-ga/dist/esm/utils/trim.js");
/**
 * To Title Case 2.1 - http://individed.com/code/to-title-case/
 * Copyright 2008-2013 David Gouch. Licensed under the MIT License.
 * https://github.com/gouch/to-title-case
 */

var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
function toTitleCase(string) {
  return Object(_trim__WEBPACK_IMPORTED_MODULE_0__["default"])(string).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' && (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/trim.js":
/*!******************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/trim.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trim; });
// GA strings need to have leading/trailing whitespace trimmed, and not all
// browsers have String.prototoype.trim().
function trim(s) {
  return s.replace(/^\s+|\s+$/g, '');
}

/***/ }),

/***/ "./src/components/App/Game/GameDarkSublayout.tsx":
/*!*******************************************************!*\
  !*** ./src/components/App/Game/GameDarkSublayout.tsx ***!
  \*******************************************************/
/*! exports provided: GameDarkSublayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDarkSublayout", function() { return GameDarkSublayout; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../media/fbg_logo_white_48.png */ "./src/components/App/media/fbg_logo_white_48.png");
/* harmony import */ var _media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_icons_Feedback__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Feedback */ "./node_modules/@material-ui/icons/Feedback.js");
/* harmony import */ var _material_ui_icons_Feedback__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Feedback__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var games__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! games */ "./src/games/index.ts");
/* harmony import */ var components_DesktopMobileView__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/DesktopMobileView */ "./src/components/DesktopMobileView.tsx");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function cov_r7p0jshdj() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/App/Game/GameDarkSublayout.tsx";
  var hash = "dc0537ab6fd883677a44d9a264477658c0cf8a3d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/App/Game/GameDarkSublayout.tsx",
    statementMap: {
      "0": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 17
        }
      },
      "1": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 106
        }
      },
      "2": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 50
        }
      },
      "3": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 65
        }
      },
      "4": {
        start: {
          line: 44,
          column: 26
        },
        end: {
          line: 44,
          column: 63
        }
      },
      "5": {
        start: {
          line: 45,
          column: 21
        },
        end: {
          line: 45,
          column: 65
        }
      },
      "6": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 65,
          column: 5
        }
      },
      "7": {
        start: {
          line: 48,
          column: 6
        },
        end: {
          line: 54,
          column: 7
        }
      },
      "8": {
        start: {
          line: 49,
          column: 8
        },
        end: {
          line: 53,
          column: 10
        }
      },
      "9": {
        start: {
          line: 56,
          column: 6
        },
        end: {
          line: 64,
          column: 8
        }
      },
      "10": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 87,
          column: 5
        }
      },
      "11": {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 73,
          column: 8
        }
      },
      "12": {
        start: {
          line: 75,
          column: 6
        },
        end: {
          line: 86,
          column: 8
        }
      },
      "13": {
        start: {
          line: 89,
          column: 4
        },
        end: {
          line: 131,
          column: 6
        }
      },
      "14": {
        start: {
          line: 134,
          column: 4
        },
        end: {
          line: 145,
          column: 5
        }
      },
      "15": {
        start: {
          line: 135,
          column: 6
        },
        end: {
          line: 144,
          column: 8
        }
      },
      "16": {
        start: {
          line: 148,
          column: 20
        },
        end: {
          line: 153,
          column: 3
        }
      },
      "17": {
        start: {
          line: 149,
          column: 4
        },
        end: {
          line: 151,
          column: 13
        }
      },
      "18": {
        start: {
          line: 150,
          column: 6
        },
        end: {
          line: 150,
          column: 41
        }
      },
      "19": {
        start: {
          line: 152,
          column: 4
        },
        end: {
          line: 152,
          column: 54
        }
      },
      "20": {
        start: {
          line: 155,
          column: 21
        },
        end: {
          line: 157,
          column: 3
        }
      },
      "21": {
        start: {
          line: 156,
          column: 4
        },
        end: {
          line: 156,
          column: 57
        }
      },
      "22": {
        start: {
          line: 159,
          column: 22
        },
        end: {
          line: 161,
          column: 3
        }
      },
      "23": {
        start: {
          line: 160,
          column: 4
        },
        end: {
          line: 160,
          column: 42
        }
      },
      "24": {
        start: {
          line: 163,
          column: 17
        },
        end: {
          line: 167,
          column: 3
        }
      },
      "25": {
        start: {
          line: 163,
          column: 46
        },
        end: {
          line: 167,
          column: 3
        }
      },
      "26": {
        start: {
          line: 165,
          column: 4
        },
        end: {
          line: 165,
          column: 29
        }
      },
      "27": {
        start: {
          line: 166,
          column: 4
        },
        end: {
          line: 166,
          column: 18
        }
      },
      "28": {
        start: {
          line: 169,
          column: 25
        },
        end: {
          line: 186,
          column: 3
        }
      },
      "29": {
        start: {
          line: 170,
          column: 4
        },
        end: {
          line: 172,
          column: 5
        }
      },
      "30": {
        start: {
          line: 171,
          column: 6
        },
        end: {
          line: 171,
          column: 13
        }
      },
      "31": {
        start: {
          line: 173,
          column: 29
        },
        end: {
          line: 173,
          column: 39
        }
      },
      "32": {
        start: {
          line: 174,
          column: 22
        },
        end: {
          line: 180,
          column: 6
        }
      },
      "33": {
        start: {
          line: 175,
          column: 6
        },
        end: {
          line: 179,
          column: 8
        }
      },
      "34": {
        start: {
          line: 181,
          column: 4
        },
        end: {
          line: 185,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        },
        loc: {
          start: {
            line: 33,
            column: 46
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 33
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 39,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        loc: {
          start: {
            line: 39,
            column: 25
          },
          end: {
            line: 41,
            column: 3
          }
        },
        line: 39
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 43,
            column: 3
          }
        },
        loc: {
          start: {
            line: 43,
            column: 11
          },
          end: {
            line: 132,
            column: 3
          }
        },
        line: 43
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 133,
            column: 2
          },
          end: {
            line: 133,
            column: 3
          }
        },
        loc: {
          start: {
            line: 133,
            column: 26
          },
          end: {
            line: 146,
            column: 3
          }
        },
        line: 133
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 148,
            column: 20
          },
          end: {
            line: 148,
            column: 21
          }
        },
        loc: {
          start: {
            line: 148,
            column: 26
          },
          end: {
            line: 153,
            column: 3
          }
        },
        line: 148
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 149,
            column: 15
          },
          end: {
            line: 149,
            column: 16
          }
        },
        loc: {
          start: {
            line: 149,
            column: 21
          },
          end: {
            line: 151,
            column: 5
          }
        },
        line: 149
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 155,
            column: 21
          },
          end: {
            line: 155,
            column: 22
          }
        },
        loc: {
          start: {
            line: 155,
            column: 37
          },
          end: {
            line: 157,
            column: 3
          }
        },
        line: 155
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 159,
            column: 22
          },
          end: {
            line: 159,
            column: 23
          }
        },
        loc: {
          start: {
            line: 159,
            column: 28
          },
          end: {
            line: 161,
            column: 3
          }
        },
        line: 159
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 163,
            column: 17
          },
          end: {
            line: 163,
            column: 18
          }
        },
        loc: {
          start: {
            line: 163,
            column: 46
          },
          end: {
            line: 167,
            column: 3
          }
        },
        line: 163
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 163,
            column: 46
          },
          end: {
            line: 163,
            column: 47
          }
        },
        loc: {
          start: {
            line: 163,
            column: 52
          },
          end: {
            line: 167,
            column: 3
          }
        },
        line: 163
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 169,
            column: 25
          },
          end: {
            line: 169,
            column: 26
          }
        },
        loc: {
          start: {
            line: 169,
            column: 31
          },
          end: {
            line: 186,
            column: 3
          }
        },
        line: 169
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 174,
            column: 56
          },
          end: {
            line: 174,
            column: 57
          }
        },
        loc: {
          start: {
            line: 174,
            column: 90
          },
          end: {
            line: 180,
            column: 5
          }
        },
        line: 174
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 65,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 65,
            column: 5
          }
        }, {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 65,
            column: 5
          }
        }],
        line: 47
      },
      "1": {
        loc: {
          start: {
            line: 48,
            column: 6
          },
          end: {
            line: 54,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 48,
            column: 6
          },
          end: {
            line: 54,
            column: 7
          }
        }, {
          start: {
            line: 48,
            column: 6
          },
          end: {
            line: 54,
            column: 7
          }
        }],
        line: 48
      },
      "2": {
        loc: {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        }, {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        }],
        line: 68
      },
      "3": {
        loc: {
          start: {
            line: 101,
            column: 24
          },
          end: {
            line: 101,
            column: 72
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 101,
            column: 54
          },
          end: {
            line: 101,
            column: 62
          }
        }, {
          start: {
            line: 101,
            column: 65
          },
          end: {
            line: 101,
            column: 72
          }
        }],
        line: 101
      },
      "4": {
        loc: {
          start: {
            line: 121,
            column: 22
          },
          end: {
            line: 121,
            column: 70
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 121,
            column: 52
          },
          end: {
            line: 121,
            column: 60
          }
        }, {
          start: {
            line: 121,
            column: 63
          },
          end: {
            line: 121,
            column: 70
          }
        }],
        line: 121
      },
      "5": {
        loc: {
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 145,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 145,
            column: 5
          }
        }, {
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 145,
            column: 5
          }
        }],
        line: 134
      },
      "6": {
        loc: {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 172,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 172,
            column: 5
          }
        }, {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 172,
            column: 5
          }
        }],
        line: 170
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "dc0537ab6fd883677a44d9a264477658c0cf8a3d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_r7p0jshdj = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_r7p0jshdj();

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var GameDarkSublayout = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(GameDarkSublayout, _React$Component);

  var _super = _createSuper(GameDarkSublayout);

  function GameDarkSublayout(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GameDarkSublayout);

    cov_r7p0jshdj().f[0]++;
    cov_r7p0jshdj().s[0]++;
    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_toggleFeedback", (cov_r7p0jshdj().s[16]++, function () {
      cov_r7p0jshdj().f[4]++;
      cov_r7p0jshdj().s[17]++;
      setTimeout(function () {
        cov_r7p0jshdj().f[5]++;
        cov_r7p0jshdj().s[18]++;

        _this.setState({
          feedback: false
        });
      }, 5000);
      cov_r7p0jshdj().s[19]++;

      _this.setState({
        feedback: !_this.state.feedback
      });
    }));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_openOptionsMenu", (cov_r7p0jshdj().s[20]++, function (event) {
      cov_r7p0jshdj().f[6]++;
      cov_r7p0jshdj().s[21]++;

      _this.setState({
        menuAnchorEl: event.currentTarget
      });
    }));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_closeOptionsMenu", (cov_r7p0jshdj().s[22]++, function () {
      cov_r7p0jshdj().f[7]++;
      cov_r7p0jshdj().s[23]++;

      _this.setState({
        menuAnchorEl: null
      });
    }));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_wrapOnClick", (cov_r7p0jshdj().s[24]++, function (onClickFunc) {
      cov_r7p0jshdj().f[8]++;
      cov_r7p0jshdj().s[25]++;
      return function () {
        cov_r7p0jshdj().f[9]++;
        cov_r7p0jshdj().s[26]++;

        // close menu, call onClickFunc
        _this._closeOptionsMenu();

        cov_r7p0jshdj().s[27]++;
        onClickFunc();
      };
    }));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_getOptionsMenuItems", (cov_r7p0jshdj().s[28]++, function () {
      cov_r7p0jshdj().f[10]++;
      cov_r7p0jshdj().s[29]++;

      if (!_this.props.optionsMenuItems) {
        cov_r7p0jshdj().b[6][0]++;
        cov_r7p0jshdj().s[30]++;
        return;
      } else {
        cov_r7p0jshdj().b[6][1]++;
      }

      var _ref = (cov_r7p0jshdj().s[31]++, _this.state),
          menuAnchorEl = _ref.menuAnchorEl;

      var menuItems = (cov_r7p0jshdj().s[32]++, _this.props.optionsMenuItems().map(function (option, index) {
        cov_r7p0jshdj().f[11]++;
        cov_r7p0jshdj().s[33]++;
        return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
          key: "option-".concat(index),
          onClick: _this._wrapOnClick(option.onClick)
        }, option.text);
      }));
      cov_r7p0jshdj().s[34]++;
      return __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "simple-menu",
        anchorEl: menuAnchorEl,
        open: Boolean(menuAnchorEl),
        onClose: _this._closeOptionsMenu
      }, menuItems);
    }));

    cov_r7p0jshdj().s[1]++;
    _this.state = {
      feedback: null,
      menuAnchorEl: null,
      prevBgColor: document.body.style.backgroundColor
    };
    cov_r7p0jshdj().s[2]++;
    document.body.style.backgroundColor = 'black';
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GameDarkSublayout, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cov_r7p0jshdj().f[1]++;
      cov_r7p0jshdj().s[3]++;
      document.body.style.backgroundColor = this.state.prevBgColor;
    }
  }, {
    key: "render",
    value: function render() {
      cov_r7p0jshdj().f[2]++;
      var isProdChannel = (cov_r7p0jshdj().s[4]++, false);
      var gameName = (cov_r7p0jshdj().s[5]++, games__WEBPACK_IMPORTED_MODULE_16__["GAMES_MAP"][this.props.gameArgs.gameCode].name);
      var fbgTopLeftText;
      cov_r7p0jshdj().s[6]++;

      if (isProdChannel) {
        cov_r7p0jshdj().b[0][0]++;
        cov_r7p0jshdj().s[7]++;

        if (gameName) {
          cov_r7p0jshdj().b[1][0]++;
          cov_r7p0jshdj().s[8]++;
          fbgTopLeftText = __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
            variant: "h6",
            gutterBottom: true,
            style: {
              "float": 'left',
              paddingTop: '9px',
              color: 'white'
            }
          }, gameName);
        } else {
          cov_r7p0jshdj().b[1][1]++;
        }
      } else {
        cov_r7p0jshdj().b[0][1]++;
        cov_r7p0jshdj().s[9]++;
        fbgTopLeftText = __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "h6",
          gutterBottom: true,
          style: {
            "float": 'left',
            marginTop: '10px',
            backgroundColor: 'red',
            color: 'white'
          }
        }, "\xA0", gameName, "\xA0");
      }

      var feedbackButtonOrText;
      cov_r7p0jshdj().s[10]++;

      if (this.state.feedback) {
        cov_r7p0jshdj().b[2][0]++;
        cov_r7p0jshdj().s[11]++;
        feedbackButtonOrText = __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "h6",
          gutterBottom: true,
          style: {
            "float": 'right',
            paddingTop: '10px',
            color: 'white'
          }
        }, "Desktop View is Experimental.");
      } else {
        cov_r7p0jshdj().b[2][1]++;
        cov_r7p0jshdj().s[12]++;
        feedbackButtonOrText = __jsx(components_DesktopMobileView__WEBPACK_IMPORTED_MODULE_17__["DesktopView"], {
          thresholdWidth: 680
        }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onClick: this._toggleFeedback,
          "aria-label": "Desktop View is Experimental.",
          variant: "outlined",
          style: {
            "float": 'right',
            paddingTop: '14px'
          }
        }, __jsx(_material_ui_icons_Feedback__WEBPACK_IMPORTED_MODULE_15___default.a, {
          style: {
            color: 'white'
          }
        })));
      }

      cov_r7p0jshdj().s[13]++;
      return __jsx("div", null, __jsx("div", {
        style: {
          position: 'fixed',
          top: '0',
          width: '100%',
          zIndex: 1
        }
      }, __jsx("div", {
        style: {
          maxWidth: this.props.allowWiderScreen ? (cov_r7p0jshdj().b[3][0]++, '1000px') : (cov_r7p0jshdj().b[3][1]++, '500px'),
          marginLeft: 'auto',
          marginRight: 'auto'
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/"
      }, __jsx("a", {
        style: {
          "float": 'left',
          textDecoration: 'none'
        }
      }, __jsx("img", {
        src: _media_fbg_logo_white_48_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        alt: "FreeBoardGames.org",
        style: {
          "float": 'left',
          paddingRight: '16px'
        }
      }), fbgTopLeftText)), this._getOptionsMenuButton(), this._getOptionsMenuItems(), feedbackButtonOrText)), __jsx("div", {
        style: {
          position: 'fixed',
          width: '100%',
          maxWidth: this.props.allowWiderScreen ? (cov_r7p0jshdj().b[4][0]++, '1000px') : (cov_r7p0jshdj().b[4][1]++, '500px'),
          color: 'white',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      }, this.props.children));
    }
  }, {
    key: "_getOptionsMenuButton",
    value: function _getOptionsMenuButton() {
      cov_r7p0jshdj().f[3]++;
      cov_r7p0jshdj().s[14]++;

      if (this.props.optionsMenuItems) {
        cov_r7p0jshdj().b[5][0]++;
        cov_r7p0jshdj().s[15]++;
        return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onClick: this._openOptionsMenu,
          "aria-label": "Open options",
          variant: "outlined",
          style: {
            margin: '8px',
            "float": 'right'
          }
        }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_12___default.a, {
          style: {
            color: 'white'
          }
        }));
      } else {
        cov_r7p0jshdj().b[5][1]++;
      }
    }
  }]);

  return GameDarkSublayout;
}((react__WEBPACK_IMPORTED_MODULE_7___default.a.Component));

/***/ }),

/***/ "./src/components/App/Game/GameLayout.tsx":
/*!************************************************!*\
  !*** ./src/components/App/Game/GameLayout.tsx ***!
  \************************************************/
/*! exports provided: GameLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLayout", function() { return GameLayout; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _GameOver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameOver */ "./src/components/App/Game/GameOver.tsx");
/* harmony import */ var _GameDarkSublayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GameDarkSublayout */ "./src/components/App/Game/GameDarkSublayout.tsx");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function cov_s9mdjdutx() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/App/Game/GameLayout.tsx";
  var hash = "065c0c3ca450449a1b4b2075817619bcc2f35a6c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/App/Game/GameLayout.tsx",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 36,
          column: 5
        }
      },
      "1": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 25,
          column: 8
        }
      },
      "2": {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 35,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        loc: {
          start: {
            line: 17,
            column: 11
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 17
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        }, {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        }],
        line: 18
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "065c0c3ca450449a1b4b2075817619bcc2f35a6c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_s9mdjdutx = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_s9mdjdutx();

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var GameLayout = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(GameLayout, _React$Component);

  var _super = _createSuper(GameLayout);

  function GameLayout() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GameLayout);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GameLayout, [{
    key: "render",
    value: function render() {
      cov_s9mdjdutx().f[0]++;
      cov_s9mdjdutx().s[0]++;

      if (this.props.gameOver) {
        cov_s9mdjdutx().b[0][0]++;
        cov_s9mdjdutx().s[1]++;
        return __jsx(_GameOver__WEBPACK_IMPORTED_MODULE_6__["GameOver"], {
          result: this.props.gameOver,
          gameArgs: this.props.gameArgs,
          extraCardContent: this.props.extraCardContent
        });
      } else {
        cov_s9mdjdutx().b[0][1]++;
        cov_s9mdjdutx().s[2]++;
        return __jsx(_GameDarkSublayout__WEBPACK_IMPORTED_MODULE_7__["GameDarkSublayout"], {
          optionsMenuItems: this.props.optionsMenuItems,
          allowWiderScreen: this.props.allowWiderScreen,
          gameArgs: this.props.gameArgs
        }, this.props.children);
      }
    }
  }]);

  return GameLayout;
}((react__WEBPACK_IMPORTED_MODULE_5___default.a.Component));

/***/ }),

/***/ "./src/components/App/Game/GameOver.tsx":
/*!**********************************************!*\
  !*** ./src/components/App/Game/GameOver.tsx ***!
  \**********************************************/
/*! exports provided: GameOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOver", function() { return GameOver; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _GameModePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GameModePicker */ "./src/components/App/Game/GameModePicker.tsx");
/* harmony import */ var _GamesList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../GamesList */ "./src/components/App/GamesList.tsx");
/* harmony import */ var _FreeBoardGamesBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../FreeBoardGamesBar */ "./src/components/App/FreeBoardGamesBar.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Replay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Replay */ "./node_modules/@material-ui/icons/Replay.js");
/* harmony import */ var _material_ui_icons_Replay__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Replay__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _MessagePage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../MessagePage */ "./src/components/App/MessagePage.tsx");
/* harmony import */ var _Lobby_LobbyService__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Lobby/LobbyService */ "./src/components/App/Lobby/LobbyService.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function cov_17lf02dutf() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/App/Game/GameOver.tsx";
  var hash = "557fa5317d84991a365db8ca70b9fd8efabba6e4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/App/Game/GameOver.tsx",
    statementMap: {
      "0": {
        start: {
          line: 25,
          column: 10
        },
        end: {
          line: 25,
          column: 28
        }
      },
      "1": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 30,
          column: 5
        }
      },
      "2": {
        start: {
          line: 28,
          column: 19
        },
        end: {
          line: 28,
          column: 58
        }
      },
      "3": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 29,
          column: 22
        }
      },
      "4": {
        start: {
          line: 32,
          column: 29
        },
        end: {
          line: 32,
          column: 56
        }
      },
      "5": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 46,
          column: 5
        }
      },
      "6": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 45,
          column: 8
        }
      },
      "7": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 51,
          column: 7
        }
      },
      "8": {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 61,
          column: 6
        }
      },
      "9": {
        start: {
          line: 63,
          column: 25
        },
        end: {
          line: 71,
          column: 3
        }
      },
      "10": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 66,
          column: 5
        }
      },
      "11": {
        start: {
          line: 65,
          column: 6
        },
        end: {
          line: 65,
          column: 18
        }
      },
      "12": {
        start: {
          line: 68,
          column: 6
        },
        end: {
          line: 68,
          column: 115
        }
      },
      "13": {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 70,
          column: 27
        }
      },
      "14": {
        start: {
          line: 73,
          column: 21
        },
        end: {
          line: 88,
          column: 3
        }
      },
      "15": {
        start: {
          line: 74,
          column: 17
        },
        end: {
          line: 74,
          column: 36
        }
      },
      "16": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 79,
          column: 7
        }
      },
      "17": {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 87,
          column: 5
        }
      },
      "18": {
        start: {
          line: 82,
          column: 6
        },
        end: {
          line: 82,
          column: 44
        }
      },
      "19": {
        start: {
          line: 84,
          column: 6
        },
        end: {
          line: 84,
          column: 39
        }
      },
      "20": {
        start: {
          line: 85,
          column: 25
        },
        end: {
          line: 85,
          column: 116
        }
      },
      "21": {
        start: {
          line: 86,
          column: 6
        },
        end: {
          line: 86,
          column: 65
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        loc: {
          start: {
            line: 26,
            column: 11
          },
          end: {
            line: 62,
            column: 3
          }
        },
        line: 26
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 63,
            column: 25
          },
          end: {
            line: 63,
            column: 26
          }
        },
        loc: {
          start: {
            line: 63,
            column: 31
          },
          end: {
            line: 71,
            column: 3
          }
        },
        line: 63
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 73,
            column: 21
          },
          end: {
            line: 73,
            column: 22
          }
        },
        loc: {
          start: {
            line: 73,
            column: 33
          },
          end: {
            line: 88,
            column: 3
          }
        },
        line: 73
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 30,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 30,
            column: 5
          }
        }, {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 30,
            column: 5
          }
        }],
        line: 27
      },
      "1": {
        loc: {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        }, {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        }],
        line: 33
      },
      "2": {
        loc: {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        }, {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        }],
        line: 64
      },
      "3": {
        loc: {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        }, {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        }],
        line: 81
      },
      "4": {
        loc: {
          start: {
            line: 81,
            column: 8
          },
          end: {
            line: 81,
            column: 71
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 81,
            column: 8
          },
          end: {
            line: 81,
            column: 33
          }
        }, {
          start: {
            line: 81,
            column: 37
          },
          end: {
            line: 81,
            column: 71
          }
        }],
        line: 81
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "557fa5317d84991a365db8ca70b9fd8efabba6e4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_17lf02dutf = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_17lf02dutf();

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var GameOver = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GameOver, _React$Component);

  var _super = _createSuper(GameOver);

  function GameOver() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GameOver);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", (cov_17lf02dutf().s[0]++, {
      loading: false
    }));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "_getExtraCardContent", (cov_17lf02dutf().s[9]++, function () {
      cov_17lf02dutf().f[1]++;
      cov_17lf02dutf().s[10]++;

      if (!_this.props.extraCardContent) {
        cov_17lf02dutf().b[2][0]++;
        cov_17lf02dutf().s[11]++;
        return null;
      } else {
        cov_17lf02dutf().b[2][1]++;
      }

      var otherPlayerCard = (cov_17lf02dutf().s[12]++, __jsx("div", {
        style: {
          paddingBottom: '12px',
          maxWidth: '500px',
          margin: 'auto'
        }
      }, _this.props.extraCardContent));
      cov_17lf02dutf().s[13]++;
      return otherPlayerCard;
    }));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "_playAgainHandle", (cov_17lf02dutf().s[14]++, function _callee() {
      var args, nextRoomId;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cov_17lf02dutf().f[2]++;
              args = (cov_17lf02dutf().s[15]++, _this.props.gameArgs);
              cov_17lf02dutf().s[16]++;
              react_ga__WEBPACK_IMPORTED_MODULE_15__["default"].event({
                category: 'GameOver',
                action: 'Clicked play again',
                label: args.gameCode
              });
              cov_17lf02dutf().s[17]++;

              if (!((cov_17lf02dutf().b[4][0]++, args.mode === _GameModePicker__WEBPACK_IMPORTED_MODULE_9__["GameMode"].AI) || (cov_17lf02dutf().b[4][1]++, args.mode === _GameModePicker__WEBPACK_IMPORTED_MODULE_9__["GameMode"].LocalFriend))) {
                _context.next = 11;
                break;
              }

              cov_17lf02dutf().b[3][0]++;
              cov_17lf02dutf().s[18]++;
              next_router__WEBPACK_IMPORTED_MODULE_18___default.a.push(window.location.pathname);
              _context.next = 20;
              break;

            case 11:
              cov_17lf02dutf().b[3][1]++;
              cov_17lf02dutf().s[19]++;

              _this.setState({
                loading: true
              });

              cov_17lf02dutf().s[20]++;
              _context.next = 17;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_Lobby_LobbyService__WEBPACK_IMPORTED_MODULE_17__["LobbyService"].getPlayAgainNextRoom(args.gameCode, args.matchCode, args.players.length));

            case 17:
              nextRoomId = _context.sent;
              cov_17lf02dutf().s[21]++;
              next_router__WEBPACK_IMPORTED_MODULE_18___default.a.push("/room/".concat(args.gameCode, "/").concat(nextRoomId));

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }));

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GameOver, [{
    key: "render",
    value: function render() {
      cov_17lf02dutf().f[0]++;
      cov_17lf02dutf().s[1]++;

      if (this.state.loading) {
        cov_17lf02dutf().b[0][0]++;
        var Page = (cov_17lf02dutf().s[2]++, Object(_MessagePage__WEBPACK_IMPORTED_MODULE_16__["default"])('loading', 'Loading...'));
        cov_17lf02dutf().s[3]++;
        return __jsx(Page, null);
      } else {
        cov_17lf02dutf().b[0][1]++;
      }

      var playAgain;
      var extraCardContent = (cov_17lf02dutf().s[4]++, this._getExtraCardContent());
      cov_17lf02dutf().s[5]++;

      if (this.props.gameArgs) {
        cov_17lf02dutf().b[1][0]++;
        cov_17lf02dutf().s[6]++;
        playAgain = __jsx("div", {
          style: {
            textAlign: 'center'
          }
        }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
          onClick: this._playAgainHandle,
          variant: "outlined",
          style: {
            marginRight: 'auto',
            marginLeft: 'auto',
            marginBottom: '24px'
          }
        }, __jsx(_material_ui_icons_Replay__WEBPACK_IMPORTED_MODULE_14___default.a, {
          style: {
            marginRight: '8px'
          }
        }), "Play Again"));
      } else {
        cov_17lf02dutf().b[1][1]++;
      }

      cov_17lf02dutf().s[7]++;
      react_ga__WEBPACK_IMPORTED_MODULE_15__["default"].event({
        category: 'Game',
        label: this.props.gameArgs.gameCode,
        action: 'Game over'
      });
      cov_17lf02dutf().s[8]++;
      return __jsx(_FreeBoardGamesBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        FEATURE_FLAG_readyForDesktopView: true
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "h6",
        gutterBottom: true,
        align: "center",
        style: {
          marginTop: '16px'
        }
      }, "Game Over, ", this.props.result, "!"), playAgain, extraCardContent, __jsx(_GamesList__WEBPACK_IMPORTED_MODULE_10__["GamesList"], null));
    }
  }]);

  return GameOver;
}((react__WEBPACK_IMPORTED_MODULE_8___default.a.Component));

/***/ }),

/***/ "./src/components/App/GamesList.tsx":
/*!******************************************!*\
  !*** ./src/components/App/GamesList.tsx ***!
  \******************************************/
/*! exports provided: GamesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesList", function() { return GamesList; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var games__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! games */ "./src/games/index.ts");
/* harmony import */ var _Game_GameCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Game/GameCard */ "./src/components/App/Game/GameCard.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function cov_gqg19tpc3() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/App/GamesList.tsx";
  var hash = "d8225ab27af96b136cd0e547bab6686df7f20c72";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/App/GamesList.tsx",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 22
        },
        end: {
          line: 15,
          column: 6
        }
      },
      "1": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 14,
          column: 13
        }
      },
      "2": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 23,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 8,
            column: 3
          }
        },
        loc: {
          start: {
            line: 8,
            column: 18
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 37
          },
          end: {
            line: 9,
            column: 38
          }
        },
        loc: {
          start: {
            line: 10,
            column: 6
          },
          end: {
            line: 14,
            column: 13
          }
        },
        line: 10
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d8225ab27af96b136cd0e547bab6686df7f20c72"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_gqg19tpc3 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_gqg19tpc3();

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var GamesList = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(GamesList, _React$Component);

  var _super = _createSuper(GamesList);

  function GamesList() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GamesList);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GamesList, [{
    key: "render",
    value: function render() {
      cov_gqg19tpc3().f[0]++;
      var gamesList = (cov_gqg19tpc3().s[0]++, games__WEBPACK_IMPORTED_MODULE_6__["GAMES_LIST"].map(function (game) {
        cov_gqg19tpc3().f[1]++;
        cov_gqg19tpc3().s[1]++;
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/play/[gameCode]",
          as: "/play/".concat(game.code),
          key: game.code
        }, __jsx("a", {
          style: {
            textDecoration: 'none',
            flex: 1,
            minWidth: '300px',
            maxWidth: '380px',
            margin: '8px'
          }
        }, __jsx(_Game_GameCard__WEBPACK_IMPORTED_MODULE_7__["GameCard"], {
          game: game,
          isLink: true
        })));
      }));
      cov_gqg19tpc3().s[2]++;
      return __jsx("div", {
        style: {
          marginBottom: '16px'
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
        component: "h2",
        variant: "h6",
        style: {
          marginBottom: '16px',
          marginLeft: '6px'
        }
      }, "Games"), __jsx("div", {
        style: {
          margin: '0 4px',
          display: 'flex',
          flexWrap: 'wrap'
        }
      }, gamesList));
    }
  }]);

  return GamesList;
}((react__WEBPACK_IMPORTED_MODULE_5___default.a.Component));

/***/ }),

/***/ "./src/components/App/MessagePage.tsx":
/*!********************************************!*\
  !*** ./src/components/App/MessagePage.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MessagePageClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessagePageClass */ "./src/components/App/MessagePageClass.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function cov_1pdcu8e572() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/App/MessagePage.tsx";
  var hash = "85d261dfe45136253ee1519c39345121c5c964bb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/App/MessagePage.tsx",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 23
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 7,
          column: 4
        }
      },
      "2": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 62
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 23
          },
          end: {
            line: 4,
            column: 24
          }
        },
        loc: {
          start: {
            line: 4,
            column: 71
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 5,
            column: 9
          },
          end: {
            line: 5,
            column: 10
          }
        },
        loc: {
          start: {
            line: 5,
            column: 15
          },
          end: {
            line: 7,
            column: 3
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "85d261dfe45136253ee1519c39345121c5c964bb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1pdcu8e572 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1pdcu8e572();


cov_1pdcu8e572().s[0]++;

var getMessagePage = function getMessagePage(type, message) {
  cov_1pdcu8e572().f[0]++;
  cov_1pdcu8e572().s[1]++;
  return function () {
    cov_1pdcu8e572().f[1]++;
    cov_1pdcu8e572().s[2]++;
    return __jsx(_MessagePageClass__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: type,
      message: message
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getMessagePage);

/***/ }),

/***/ "./src/components/App/MessagePageClass.tsx":
/*!*************************************************!*\
  !*** ./src/components/App/MessagePageClass.tsx ***!
  \*************************************************/
/*! exports provided: MessagePage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _FreeBoardGamesBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FreeBoardGamesBar */ "./src/components/App/FreeBoardGamesBar.tsx");
/* harmony import */ var _media_SvgError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./media/SvgError */ "./src/components/App/media/SvgError.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function cov_1y46eufq54() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/App/MessagePageClass.tsx";
  var hash = "8e571e562b46c16beb7ae6d0cedc91229204127d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/App/MessagePageClass.tsx",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 22
        },
        end: {
          line: 22,
          column: 26
        }
      },
      "1": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 17
        }
      },
      "2": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 28,
          column: 6
        }
      },
      "3": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 31,
          column: 5
        }
      },
      "4": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 79
        }
      },
      "5": {
        start: {
          line: 34,
          column: 13
        },
        end: {
          line: 46,
          column: 3
        }
      },
      "6": {
        start: {
          line: 34,
          column: 30
        },
        end: {
          line: 46,
          column: 3
        }
      },
      "7": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 45,
          column: 5
        }
      },
      "8": {
        start: {
          line: 36,
          column: 22
        },
        end: {
          line: 36,
          column: 48
        }
      },
      "9": {
        start: {
          line: 37,
          column: 25
        },
        end: {
          line: 37,
          column: 39
        }
      },
      "10": {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 41,
          column: 9
        }
      },
      "11": {
        start: {
          line: 42,
          column: 6
        },
        end: {
          line: 44,
          column: 7
        }
      },
      "12": {
        start: {
          line: 43,
          column: 8
        },
        end: {
          line: 43,
          column: 81
        }
      },
      "13": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 52,
          column: 5
        }
      },
      "14": {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 50,
          column: 50
        }
      },
      "15": {
        start: {
          line: 51,
          column: 6
        },
        end: {
          line: 51,
          column: 28
        }
      },
      "16": {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 62,
          column: 5
        }
      },
      "17": {
        start: {
          line: 59,
          column: 6
        },
        end: {
          line: 59,
          column: 54
        }
      },
      "18": {
        start: {
          line: 61,
          column: 6
        },
        end: {
          line: 61,
          column: 34
        }
      },
      "19": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 75,
          column: 5
        }
      },
      "20": {
        start: {
          line: 64,
          column: 25
        },
        end: {
          line: 64,
          column: 34
        }
      },
      "21": {
        start: {
          line: 65,
          column: 6
        },
        end: {
          line: 74,
          column: 8
        }
      },
      "22": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 89,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 36
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 23
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 34,
            column: 13
          },
          end: {
            line: 34,
            column: 14
          }
        },
        loc: {
          start: {
            line: 34,
            column: 30
          },
          end: {
            line: 46,
            column: 3
          }
        },
        line: 34
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 34,
            column: 30
          },
          end: {
            line: 34,
            column: 31
          }
        },
        loc: {
          start: {
            line: 34,
            column: 36
          },
          end: {
            line: 46,
            column: 3
          }
        },
        line: 34
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 48,
            column: 3
          }
        },
        loc: {
          start: {
            line: 48,
            column: 25
          },
          end: {
            line: 53,
            column: 3
          }
        },
        line: 48
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 55,
            column: 3
          }
        },
        loc: {
          start: {
            line: 55,
            column: 11
          },
          end: {
            line: 90,
            column: 3
          }
        },
        line: 55
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        }, {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        }],
        line: 29
      },
      "1": {
        loc: {
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 29,
            column: 63
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 29,
            column: 37
          }
        }, {
          start: {
            line: 29,
            column: 41
          },
          end: {
            line: 29,
            column: 63
          }
        }],
        line: 29
      },
      "2": {
        loc: {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        }, {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        }],
        line: 35
      },
      "3": {
        loc: {
          start: {
            line: 42,
            column: 6
          },
          end: {
            line: 44,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 42,
            column: 6
          },
          end: {
            line: 44,
            column: 7
          }
        }, {
          start: {
            line: 42,
            column: 6
          },
          end: {
            line: 44,
            column: 7
          }
        }],
        line: 42
      },
      "4": {
        loc: {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        }, {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        }],
        line: 49
      },
      "5": {
        loc: {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 62,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 62,
            column: 5
          }
        }, {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 62,
            column: 5
          }
        }],
        line: 58
      },
      "6": {
        loc: {
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        }, {
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        }],
        line: 63
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8e571e562b46c16beb7ae6d0cedc91229204127d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1y46eufq54 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1y46eufq54();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var MessagePage = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MessagePage, _React$Component);

  var _super = _createSuper(MessagePage);

  function MessagePage(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MessagePage);

    cov_1y46eufq54().f[0]++;
    cov_1y46eufq54().s[1]++;
    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "requestID", (cov_1y46eufq54().s[0]++, null));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_animate", (cov_1y46eufq54().s[5]++, function (now) {
      cov_1y46eufq54().f[1]++;
      cov_1y46eufq54().s[6]++;
      return function () {
        cov_1y46eufq54().f[2]++;
        cov_1y46eufq54().s[7]++;

        if (_this.requestID) {
          cov_1y46eufq54().b[2][0]++;
          var elapsed = (cov_1y46eufq54().s[8]++, now - _this.state.startTime);
          var linkHidden = (cov_1y46eufq54().s[9]++, elapsed < 5000);
          cov_1y46eufq54().s[10]++;

          _this.setState(_objectSpread({}, _this.state, {
            linkHidden: linkHidden
          }));

          cov_1y46eufq54().s[11]++;

          if (linkHidden) {
            cov_1y46eufq54().b[3][0]++;
            cov_1y46eufq54().s[12]++;
            _this.requestID = window.requestAnimationFrame(_this._animate(Date.now()));
          } else {
            cov_1y46eufq54().b[3][1]++;
          }
        } else {
          cov_1y46eufq54().b[2][1]++;
        }
      };
    }));

    cov_1y46eufq54().s[2]++;
    _this.state = {
      linkHidden: props.type !== 'error',
      startTime: Date.now()
    };
    cov_1y46eufq54().s[3]++;

    if ((cov_1y46eufq54().b[1][0]++, true) && (cov_1y46eufq54().b[1][1]++, props.type !== 'error')) {
      cov_1y46eufq54().b[0][0]++;
      cov_1y46eufq54().s[4]++;
      _this.requestID = window.requestAnimationFrame(_this._animate(Date.now()));
    } else {
      cov_1y46eufq54().b[0][1]++;
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MessagePage, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cov_1y46eufq54().f[3]++;
      cov_1y46eufq54().s[13]++;

      if (this.requestID) {
        cov_1y46eufq54().b[4][0]++;
        cov_1y46eufq54().s[14]++;
        window.cancelAnimationFrame(this.requestID);
        cov_1y46eufq54().s[15]++;
        this.requestID = null;
      } else {
        cov_1y46eufq54().b[4][1]++;
      }
    }
  }, {
    key: "render",
    value: function render() {
      cov_1y46eufq54().f[4]++;
      var icon;
      var linkHome;
      cov_1y46eufq54().s[16]++;

      if (this.props.type === 'error') {
        cov_1y46eufq54().b[5][0]++;
        cov_1y46eufq54().s[17]++;
        icon = __jsx(_media_SvgError__WEBPACK_IMPORTED_MODULE_12__["default"], {
          style: {
            height: '128px'
          }
        });
      } else {
        cov_1y46eufq54().b[5][1]++;
        cov_1y46eufq54().s[18]++;
        icon = __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__["default"], null);
      }

      cov_1y46eufq54().s[19]++;

      if (!this.state.linkHidden) {
        cov_1y46eufq54().b[6][0]++;
        var goHomeText = (cov_1y46eufq54().s[20]++, 'Go Home');
        cov_1y46eufq54().s[21]++;
        linkHome = __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
          href: "/"
        }, __jsx("a", {
          style: {
            textDecoration: 'none'
          }
        }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "outlined",
          style: {
            margin: '8px'
          }
        }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_9___default.a, {
          style: {
            marginRight: '8px'
          }
        }), goHomeText)));
      } else {
        cov_1y46eufq54().b[6][1]++;
      }

      cov_1y46eufq54().s[22]++;
      return __jsx(_FreeBoardGamesBar__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx("div", {
        style: {
          paddingTop: '16px',
          textAlign: 'center'
        }
      }, icon, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
        variant: "h6",
        gutterBottom: true,
        style: {
          paddingTop: '16px'
        }
      }, this.props.message, __jsx("br", null), __jsx("br", null), linkHome, this.props.actionComponent)));
    }
  }]);

  return MessagePage;
}((react__WEBPACK_IMPORTED_MODULE_7___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (MessagePage);

/***/ }),

/***/ "./src/components/App/media/SvgError.tsx":
/*!***********************************************!*\
  !*** ./src/components/App/media/SvgError.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function cov_12fnlg8tgm() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/App/media/SvgError.tsx";
  var hash = "a583da3972de338c0a9ff67f967832e75c2fac12";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/App/media/SvgError.tsx",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 17
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "1": {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 8,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 2,
            column: 17
          },
          end: {
            line: 2,
            column: 18
          }
        },
        loc: {
          start: {
            line: 3,
            column: 2
          },
          end: {
            line: 8,
            column: 8
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a583da3972de338c0a9ff67f967832e75c2fac12"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_12fnlg8tgm = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_12fnlg8tgm();

cov_12fnlg8tgm().s[0]++;

var SvgError = function SvgError(props) {
  cov_12fnlg8tgm().f[0]++;
  cov_12fnlg8tgm().s[1]++;
  return __jsx("svg", {
    viewBox: "0 0 1 1",
    style: props.style
  }, __jsx("g", null, __jsx("line", {
    x1: "0.2",
    y1: "0.2",
    x2: "0.8",
    y2: "0.8",
    stroke: "black",
    strokeWidth: "0.05"
  }), __jsx("line", {
    x1: "0.8",
    y1: "0.2",
    x2: "0.2",
    y2: "0.8",
    stroke: "black",
    strokeWidth: "0.05"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgError);

/***/ }),

/***/ "./src/components/DesktopMobileView.tsx":
/*!**********************************************!*\
  !*** ./src/components/DesktopMobileView.tsx ***!
  \**********************************************/
/*! exports provided: DesktopView, MobileView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopView", function() { return DesktopView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileView", function() { return MobileView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks/useWindowDimensions */ "./src/hooks/useWindowDimensions.ts");
/* harmony import */ var mobile_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobile-detect */ "./node_modules/mobile-detect/mobile-detect.js");
/* harmony import */ var mobile_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobile_detect__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function cov_1jre50uwcf() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/components/DesktopMobileView.tsx";
  var hash = "0f0b32a919beacee3d27852a9b0e92630e49b411";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/components/DesktopMobileView.tsx",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 32
        },
        end: {
          line: 11,
          column: 35
        }
      },
      "1": {
        start: {
          line: 14,
          column: 26
        },
        end: {
          line: 14,
          column: 106
        }
      },
      "2": {
        start: {
          line: 15,
          column: 14
        },
        end: {
          line: 15,
          column: 41
        }
      },
      "3": {
        start: {
          line: 16,
          column: 20
        },
        end: {
          line: 16,
          column: 49
        }
      },
      "4": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 25,
          column: 3
        }
      },
      "5": {
        start: {
          line: 20,
          column: 15
        },
        end: {
          line: 20,
          column: 48
        }
      },
      "6": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 51
        }
      },
      "7": {
        start: {
          line: 23,
          column: 27
        },
        end: {
          line: 23,
          column: 74
        }
      },
      "8": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 45
        }
      },
      "9": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 24
        }
      },
      "10": {
        start: {
          line: 29,
          column: 27
        },
        end: {
          line: 35,
          column: 1
        }
      },
      "11": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 34,
          column: 3
        }
      },
      "12": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 61
        }
      },
      "13": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 16
        }
      },
      "14": {
        start: {
          line: 37,
          column: 26
        },
        end: {
          line: 43,
          column: 1
        }
      },
      "15": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 42,
          column: 3
        }
      },
      "16": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 61
        }
      },
      "17": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "isMobile",
        decl: {
          start: {
            line: 13,
            column: 9
          },
          end: {
            line: 13,
            column: 17
          }
        },
        loc: {
          start: {
            line: 13,
            column: 49
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 29,
            column: 27
          },
          end: {
            line: 29,
            column: 28
          }
        },
        loc: {
          start: {
            line: 29,
            column: 62
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 29
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 37,
            column: 26
          },
          end: {
            line: 37,
            column: 27
          }
        },
        loc: {
          start: {
            line: 37,
            column: 61
          },
          end: {
            line: 43,
            column: 1
          }
        },
        line: 37
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 26
          },
          end: {
            line: 14,
            column: 106
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 14,
            column: 26
          },
          end: {
            line: 14,
            column: 57
          }
        }, {
          start: {
            line: 14,
            column: 61
          },
          end: {
            line: 14,
            column: 106
          }
        }],
        line: 14
      },
      "1": {
        loc: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        }, {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        }],
        line: 18
      },
      "2": {
        loc: {
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 18,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 18,
            column: 7
          },
          end: {
            line: 18,
            column: 17
          }
        }, {
          start: {
            line: 18,
            column: 21
          },
          end: {
            line: 18,
            column: 36
          }
        }, {
          start: {
            line: 18,
            column: 41
          },
          end: {
            line: 18,
            column: 56
          }
        }],
        line: 18
      },
      "3": {
        loc: {
          start: {
            line: 21,
            column: 21
          },
          end: {
            line: 21,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 21,
            column: 21
          },
          end: {
            line: 21,
            column: 34
          }
        }, {
          start: {
            line: 21,
            column: 38
          },
          end: {
            line: 21,
            column: 50
          }
        }],
        line: 21
      },
      "4": {
        loc: {
          start: {
            line: 23,
            column: 27
          },
          end: {
            line: 23,
            column: 74
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 23,
            column: 27
          },
          end: {
            line: 23,
            column: 47
          }
        }, {
          start: {
            line: 23,
            column: 51
          },
          end: {
            line: 23,
            column: 74
          }
        }],
        line: 23
      },
      "5": {
        loc: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        }, {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        }],
        line: 30
      },
      "6": {
        loc: {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 42,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 42,
            column: 3
          }
        }, {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 42,
            column: 3
          }
        }],
        line: 38
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0f0b32a919beacee3d27852a9b0e92630e49b411"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1jre50uwcf = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1jre50uwcf();



var DEFAULT_THRESHOLD_WIDTH = (cov_1jre50uwcf().s[0]++, 550);

function isMobile(props) {
  var _document;

  cov_1jre50uwcf().f[0]++;
  var hasJssSSRStyles = (cov_1jre50uwcf().s[1]++, (cov_1jre50uwcf().b[0][0]++, typeof document !== 'undefined') && (cov_1jre50uwcf().b[0][1]++, !!((_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('#jss-server-side'))));
  var width = (cov_1jre50uwcf().s[2]++, Object(hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_1__["default"])().width);
  var isBrowser = (cov_1jre50uwcf().s[3]++, true);
  var isMobileResult;
  cov_1jre50uwcf().s[4]++;

  if (((cov_1jre50uwcf().b[2][0]++, !isBrowser) || (cov_1jre50uwcf().b[2][1]++, hasJssSSRStyles)) && (cov_1jre50uwcf().b[2][2]++, props.userAgent)) {
    cov_1jre50uwcf().b[1][0]++;
    // keep the isDesktop() return uniform if JSS styles exist
    var md = (cov_1jre50uwcf().s[5]++, new mobile_detect__WEBPACK_IMPORTED_MODULE_2___default.a(props.userAgent));
    cov_1jre50uwcf().s[6]++;
    isMobileResult = (cov_1jre50uwcf().b[3][0]++, !!md.mobile()) && (cov_1jre50uwcf().b[3][1]++, !md.tablet());
  } else {
    cov_1jre50uwcf().b[1][1]++;
    var thresholdWidth = (cov_1jre50uwcf().s[7]++, (cov_1jre50uwcf().b[4][0]++, props.thresholdWidth) || (cov_1jre50uwcf().b[4][1]++, DEFAULT_THRESHOLD_WIDTH));
    cov_1jre50uwcf().s[8]++;
    isMobileResult = width <= thresholdWidth;
  }

  cov_1jre50uwcf().s[9]++;
  return isMobileResult;
}

cov_1jre50uwcf().s[10]++;
var DesktopView = function DesktopView(props) {
  cov_1jre50uwcf().f[1]++;
  cov_1jre50uwcf().s[11]++;

  if (!isMobile(props)) {
    cov_1jre50uwcf().b[5][0]++;
    cov_1jre50uwcf().s[12]++;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.children);
  } else {
    cov_1jre50uwcf().b[5][1]++;
    cov_1jre50uwcf().s[13]++;
    return null;
  }
};
cov_1jre50uwcf().s[14]++;
var MobileView = function MobileView(props) {
  cov_1jre50uwcf().f[2]++;
  cov_1jre50uwcf().s[15]++;

  if (isMobile(props)) {
    cov_1jre50uwcf().b[6][0]++;
    cov_1jre50uwcf().s[16]++;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.children);
  } else {
    cov_1jre50uwcf().b[6][1]++;
    cov_1jre50uwcf().s[17]++;
    return null;
  }
};

/***/ }),

/***/ "./src/games/common/gameMode.ts":
/*!**************************************!*\
  !*** ./src/games/common/gameMode.ts ***!
  \**************************************/
/*! exports provided: isLocalGame, isOnlineGame, isAIGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLocalGame", function() { return isLocalGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnlineGame", function() { return isOnlineGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAIGame", function() { return isAIGame; });
/* harmony import */ var components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/App/Game/GameModePicker */ "./src/components/App/Game/GameModePicker.tsx");
function cov_2msw7xr2jk() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/common/gameMode.ts";
  var hash = "e1e58a91b90a0a839b501f1e740063c5286345a2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/common/gameMode.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 60
        }
      },
      "1": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 61
        }
      },
      "2": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 51
        }
      }
    },
    fnMap: {
      "0": {
        name: "isLocalGame",
        decl: {
          start: {
            line: 4,
            column: 16
          },
          end: {
            line: 4,
            column: 27
          }
        },
        loc: {
          start: {
            line: 4,
            column: 49
          },
          end: {
            line: 6,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "isOnlineGame",
        decl: {
          start: {
            line: 8,
            column: 16
          },
          end: {
            line: 8,
            column: 28
          }
        },
        loc: {
          start: {
            line: 8,
            column: 50
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 8
      },
      "2": {
        name: "isAIGame",
        decl: {
          start: {
            line: 12,
            column: 16
          },
          end: {
            line: 12,
            column: 24
          }
        },
        loc: {
          start: {
            line: 12,
            column: 46
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 9
          },
          end: {
            line: 5,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 5,
            column: 9
          },
          end: {
            line: 5,
            column: 17
          }
        }, {
          start: {
            line: 5,
            column: 21
          },
          end: {
            line: 5,
            column: 59
          }
        }],
        line: 5
      },
      "1": {
        loc: {
          start: {
            line: 9,
            column: 9
          },
          end: {
            line: 9,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 9,
            column: 9
          },
          end: {
            line: 9,
            column: 17
          }
        }, {
          start: {
            line: 9,
            column: 21
          },
          end: {
            line: 9,
            column: 60
          }
        }],
        line: 9
      },
      "2": {
        loc: {
          start: {
            line: 13,
            column: 9
          },
          end: {
            line: 13,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 13,
            column: 9
          },
          end: {
            line: 13,
            column: 17
          }
        }, {
          start: {
            line: 13,
            column: 21
          },
          end: {
            line: 13,
            column: 50
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e1e58a91b90a0a839b501f1e740063c5286345a2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_2msw7xr2jk = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_2msw7xr2jk();

function isLocalGame(gameArgs) {
  cov_2msw7xr2jk().f[0]++;
  cov_2msw7xr2jk().s[0]++;
  return (cov_2msw7xr2jk().b[0][0]++, gameArgs) && (cov_2msw7xr2jk().b[0][1]++, gameArgs.mode === components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].LocalFriend);
}
function isOnlineGame(gameArgs) {
  cov_2msw7xr2jk().f[1]++;
  cov_2msw7xr2jk().s[1]++;
  return (cov_2msw7xr2jk().b[1][0]++, gameArgs) && (cov_2msw7xr2jk().b[1][1]++, gameArgs.mode === components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].OnlineFriend);
}
function isAIGame(gameArgs) {
  cov_2msw7xr2jk().f[2]++;
  cov_2msw7xr2jk().s[2]++;
  return (cov_2msw7xr2jk().b[2][0]++, gameArgs) && (cov_2msw7xr2jk().b[2][1]++, gameArgs.mode === components_App_Game_GameModePicker__WEBPACK_IMPORTED_MODULE_0__["GameMode"].AI);
}

/***/ }),

/***/ "./src/games/tictactoe/Shapes.tsx":
/*!****************************************!*\
  !*** ./src/games/tictactoe/Shapes.tsx ***!
  \****************************************/
/*! exports provided: Cross, Circle, Lines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cross", function() { return Cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lines", function() { return Lines; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function cov_exwqpr3ri() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/tictactoe/Shapes.tsx";
  var hash = "68ab56445e4ca26c6de3fd3770507b28b6e1717d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/tictactoe/Shapes.tsx",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 22
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 18
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "2": {
        start: {
          line: 17,
          column: 21
        },
        end: {
          line: 39,
          column: 1
        }
      },
      "3": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 38,
          column: 4
        }
      },
      "4": {
        start: {
          line: 41,
          column: 22
        },
        end: {
          line: 53,
          column: 1
        }
      },
      "5": {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 52,
          column: 4
        }
      },
      "6": {
        start: {
          line: 55,
          column: 21
        },
        end: {
          line: 61,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 21
          },
          end: {
            line: 17,
            column: 22
          }
        },
        loc: {
          start: {
            line: 17,
            column: 45
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 17
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 41,
            column: 22
          },
          end: {
            line: 41,
            column: 23
          }
        },
        loc: {
          start: {
            line: 41,
            column: 46
          },
          end: {
            line: 53,
            column: 1
          }
        },
        line: 41
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "68ab56445e4ca26c6de3fd3770507b28b6e1717d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_exwqpr3ri = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_exwqpr3ri();

var boldLineStyle = (cov_exwqpr3ri().s[0]++, {
  strokeWidth: 0.1
});
var lineStyle = (cov_exwqpr3ri().s[1]++, {
  stroke: 'white',
  strokeWidth: 0.025
});
cov_exwqpr3ri().s[2]++;
var Cross = function Cross(props) {
  cov_exwqpr3ri().f[0]++;
  cov_exwqpr3ri().s[3]++;
  return __jsx("g", {
    className: "cross",
    key: "cross".concat(props.x, ",").concat(props.y)
  }, __jsx("line", {
    x1: props.x + 0.25,
    y1: props.y + 0.25,
    x2: props.x + 0.75,
    y2: props.y + 0.75,
    stroke: "red",
    style: boldLineStyle
  }), ",", __jsx("line", {
    x1: props.x + 0.75,
    y1: props.y + 0.25,
    x2: props.x + 0.25,
    y2: props.y + 0.75,
    stroke: "red",
    style: boldLineStyle
  }));
};
cov_exwqpr3ri().s[4]++;
var Circle = function Circle(props) {
  cov_exwqpr3ri().f[1]++;
  cov_exwqpr3ri().s[5]++;
  return __jsx("circle", {
    key: "circle".concat(props.x, ",").concat(props.y),
    cx: props.x + 0.5,
    cy: props.y + 0.5,
    r: ".25",
    fill: "none",
    stroke: "lime",
    style: boldLineStyle
  });
};
var Lines = (cov_exwqpr3ri().s[6]++, [__jsx("line", {
  key: "line1",
  x1: "1",
  y1: "0",
  x2: "1",
  y2: "3",
  style: lineStyle
}), __jsx("line", {
  key: "line2",
  x1: "2",
  y1: "0",
  x2: "2",
  y2: "3",
  style: lineStyle
}), __jsx("line", {
  key: "line3",
  x1: "0",
  y1: "1",
  x2: "3",
  y2: "1",
  style: lineStyle
}), __jsx("line", {
  key: "line4",
  x1: "0",
  y1: "2",
  x2: "3",
  y2: "2",
  style: lineStyle
}), __jsx("line", {
  key: "line5",
  x1: "0",
  y1: "1",
  x2: "3",
  y2: "1",
  style: lineStyle
})]);

/***/ }),

/***/ "./src/games/tictactoe/board.tsx":
/*!***************************************!*\
  !*** ./src/games/tictactoe/board.tsx ***!
  \***************************************/
/*! exports provided: Board, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/App/Game/GameLayout */ "./src/components/App/Game/GameLayout.tsx");
/* harmony import */ var _Shapes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Shapes */ "./src/games/tictactoe/Shapes.tsx");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _common_gameMode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/gameMode */ "./src/games/common/gameMode.ts");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7__["createElement"];

function cov_1s7v5p8fxw() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/tictactoe/board.tsx";
  var hash = "6248977e4405892a162210fe1984fe48a19d69b7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/tictactoe/board.tsx",
    statementMap: {
      "0": {
        start: {
          line: 27,
          column: 12
        },
        end: {
          line: 31,
          column: 3
        }
      },
      "1": {
        start: {
          line: 27,
          column: 28
        },
        end: {
          line: 31,
          column: 3
        }
      },
      "2": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 30,
          column: 5
        }
      },
      "3": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 29,
          column: 37
        }
      },
      "4": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 66
        }
      },
      "5": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 52,
          column: 5
        }
      },
      "6": {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 43,
          column: 7
        }
      },
      "7": {
        start: {
          line: 40,
          column: 8
        },
        end: {
          line: 40,
          column: 27
        }
      },
      "8": {
        start: {
          line: 42,
          column: 8
        },
        end: {
          line: 42,
          column: 41
        }
      },
      "9": {
        start: {
          line: 46,
          column: 6
        },
        end: {
          line: 51,
          column: 7
        }
      },
      "10": {
        start: {
          line: 48,
          column: 10
        },
        end: {
          line: 48,
          column: 30
        }
      },
      "11": {
        start: {
          line: 50,
          column: 10
        },
        end: {
          line: 50,
          column: 32
        }
      },
      "12": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 77,
          column: 5
        }
      },
      "13": {
        start: {
          line: 58,
          column: 6
        },
        end: {
          line: 66,
          column: 7
        }
      },
      "14": {
        start: {
          line: 59,
          column: 8
        },
        end: {
          line: 63,
          column: 9
        }
      },
      "15": {
        start: {
          line: 60,
          column: 10
        },
        end: {
          line: 60,
          column: 27
        }
      },
      "16": {
        start: {
          line: 62,
          column: 10
        },
        end: {
          line: 62,
          column: 28
        }
      },
      "17": {
        start: {
          line: 65,
          column: 8
        },
        end: {
          line: 65,
          column: 22
        }
      },
      "18": {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 76,
          column: 7
        }
      },
      "19": {
        start: {
          line: 71,
          column: 10
        },
        end: {
          line: 71,
          column: 27
        }
      },
      "20": {
        start: {
          line: 73,
          column: 10
        },
        end: {
          line: 73,
          column: 29
        }
      },
      "21": {
        start: {
          line: 75,
          column: 10
        },
        end: {
          line: 75,
          column: 24
        }
      },
      "22": {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 89,
          column: 5
        }
      },
      "23": {
        start: {
          line: 82,
          column: 6
        },
        end: {
          line: 88,
          column: 8
        }
      },
      "24": {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 90,
          column: 86
        }
      },
      "25": {
        start: {
          line: 94,
          column: 18
        },
        end: {
          line: 94,
          column: 20
        }
      },
      "26": {
        start: {
          line: 95,
          column: 4
        },
        end: {
          line: 109,
          column: 5
        }
      },
      "27": {
        start: {
          line: 95,
          column: 17
        },
        end: {
          line: 95,
          column: 18
        }
      },
      "28": {
        start: {
          line: 96,
          column: 6
        },
        end: {
          line: 108,
          column: 7
        }
      },
      "29": {
        start: {
          line: 96,
          column: 19
        },
        end: {
          line: 96,
          column: 20
        }
      },
      "30": {
        start: {
          line: 97,
          column: 19
        },
        end: {
          line: 97,
          column: 28
        }
      },
      "31": {
        start: {
          line: 98,
          column: 8
        },
        end: {
          line: 98,
          column: 116
        }
      },
      "32": {
        start: {
          line: 100,
          column: 8
        },
        end: {
          line: 104,
          column: 9
        }
      },
      "33": {
        start: {
          line: 101,
          column: 10
        },
        end: {
          line: 101,
          column: 61
        }
      },
      "34": {
        start: {
          line: 102,
          column: 15
        },
        end: {
          line: 104,
          column: 9
        }
      },
      "35": {
        start: {
          line: 103,
          column: 10
        },
        end: {
          line: 103,
          column: 63
        }
      },
      "36": {
        start: {
          line: 105,
          column: 8
        },
        end: {
          line: 107,
          column: 9
        }
      },
      "37": {
        start: {
          line: 106,
          column: 10
        },
        end: {
          line: 106,
          column: 30
        }
      },
      "38": {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 110,
          column: 17
        }
      },
      "39": {
        start: {
          line: 113,
          column: 4
        },
        end: {
          line: 123,
          column: 6
        }
      },
      "40": {
        start: {
          line: 127,
          column: 4
        },
        end: {
          line: 134,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 27,
            column: 12
          },
          end: {
            line: 27,
            column: 13
          }
        },
        loc: {
          start: {
            line: 27,
            column: 28
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 27
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 27,
            column: 28
          },
          end: {
            line: 27,
            column: 29
          }
        },
        loc: {
          start: {
            line: 27,
            column: 34
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 27
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        },
        loc: {
          start: {
            line: 33,
            column: 23
          },
          end: {
            line: 35,
            column: 3
          }
        },
        line: 33
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 37,
            column: 3
          }
        },
        loc: {
          start: {
            line: 37,
            column: 15
          },
          end: {
            line: 53,
            column: 3
          }
        },
        line: 37
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 55,
            column: 3
          }
        },
        loc: {
          start: {
            line: 55,
            column: 17
          },
          end: {
            line: 78,
            column: 3
          }
        },
        line: 55
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 80,
            column: 2
          },
          end: {
            line: 80,
            column: 3
          }
        },
        loc: {
          start: {
            line: 80,
            column: 11
          },
          end: {
            line: 91,
            column: 3
          }
        },
        line: 80
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 93,
            column: 2
          },
          end: {
            line: 93,
            column: 3
          }
        },
        loc: {
          start: {
            line: 93,
            column: 14
          },
          end: {
            line: 111,
            column: 3
          }
        },
        line: 93
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 112,
            column: 2
          },
          end: {
            line: 112,
            column: 3
          }
        },
        loc: {
          start: {
            line: 112,
            column: 14
          },
          end: {
            line: 124,
            column: 3
          }
        },
        line: 112
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 126,
            column: 2
          },
          end: {
            line: 126,
            column: 3
          }
        },
        loc: {
          start: {
            line: 126,
            column: 22
          },
          end: {
            line: 135,
            column: 3
          }
        },
        line: 126
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 30,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 30,
            column: 5
          }
        }, {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 30,
            column: 5
          }
        }],
        line: 28
      },
      "1": {
        loc: {
          start: {
            line: 34,
            column: 11
          },
          end: {
            line: 34,
            column: 65
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 34,
            column: 11
          },
          end: {
            line: 34,
            column: 30
          }
        }, {
          start: {
            line: 34,
            column: 34
          },
          end: {
            line: 34,
            column: 65
          }
        }],
        line: 34
      },
      "2": {
        loc: {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        }, {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        }],
        line: 38
      },
      "3": {
        loc: {
          start: {
            line: 38,
            column: 8
          },
          end: {
            line: 38,
            column: 74
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 38,
            column: 8
          },
          end: {
            line: 38,
            column: 41
          }
        }, {
          start: {
            line: 38,
            column: 45
          },
          end: {
            line: 38,
            column: 74
          }
        }],
        line: 38
      },
      "4": {
        loc: {
          start: {
            line: 39,
            column: 6
          },
          end: {
            line: 43,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 39,
            column: 6
          },
          end: {
            line: 43,
            column: 7
          }
        }, {
          start: {
            line: 39,
            column: 6
          },
          end: {
            line: 43,
            column: 7
          }
        }],
        line: 39
      },
      "5": {
        loc: {
          start: {
            line: 46,
            column: 6
          },
          end: {
            line: 51,
            column: 7
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 47,
            column: 8
          },
          end: {
            line: 48,
            column: 30
          }
        }, {
          start: {
            line: 49,
            column: 8
          },
          end: {
            line: 50,
            column: 32
          }
        }],
        line: 46
      },
      "6": {
        loc: {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 77,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 77,
            column: 5
          }
        }, {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 77,
            column: 5
          }
        }],
        line: 56
      },
      "7": {
        loc: {
          start: {
            line: 56,
            column: 8
          },
          end: {
            line: 56,
            column: 74
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 56,
            column: 8
          },
          end: {
            line: 56,
            column: 41
          }
        }, {
          start: {
            line: 56,
            column: 45
          },
          end: {
            line: 56,
            column: 74
          }
        }],
        line: 56
      },
      "8": {
        loc: {
          start: {
            line: 58,
            column: 6
          },
          end: {
            line: 66,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 58,
            column: 6
          },
          end: {
            line: 66,
            column: 7
          }
        }, {
          start: {
            line: 58,
            column: 6
          },
          end: {
            line: 66,
            column: 7
          }
        }],
        line: 58
      },
      "9": {
        loc: {
          start: {
            line: 59,
            column: 8
          },
          end: {
            line: 63,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 59,
            column: 8
          },
          end: {
            line: 63,
            column: 9
          }
        }, {
          start: {
            line: 59,
            column: 8
          },
          end: {
            line: 63,
            column: 9
          }
        }],
        line: 59
      },
      "10": {
        loc: {
          start: {
            line: 69,
            column: 6
          },
          end: {
            line: 76,
            column: 7
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 70,
            column: 8
          },
          end: {
            line: 71,
            column: 27
          }
        }, {
          start: {
            line: 72,
            column: 8
          },
          end: {
            line: 73,
            column: 29
          }
        }, {
          start: {
            line: 74,
            column: 8
          },
          end: {
            line: 75,
            column: 24
          }
        }],
        line: 69
      },
      "11": {
        loc: {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 89,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 89,
            column: 5
          }
        }, {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 89,
            column: 5
          }
        }],
        line: 81
      },
      "12": {
        loc: {
          start: {
            line: 100,
            column: 8
          },
          end: {
            line: 104,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 100,
            column: 8
          },
          end: {
            line: 104,
            column: 9
          }
        }, {
          start: {
            line: 100,
            column: 8
          },
          end: {
            line: 104,
            column: 9
          }
        }],
        line: 100
      },
      "13": {
        loc: {
          start: {
            line: 102,
            column: 15
          },
          end: {
            line: 104,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 102,
            column: 15
          },
          end: {
            line: 104,
            column: 9
          }
        }, {
          start: {
            line: 102,
            column: 15
          },
          end: {
            line: 104,
            column: 9
          }
        }],
        line: 102
      },
      "14": {
        loc: {
          start: {
            line: 105,
            column: 8
          },
          end: {
            line: 107,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 105,
            column: 8
          },
          end: {
            line: 107,
            column: 9
          }
        }, {
          start: {
            line: 105,
            column: 8
          },
          end: {
            line: 107,
            column: 9
          }
        }],
        line: 105
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6248977e4405892a162210fe1984fe48a19d69b7"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1s7v5p8fxw = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1s7v5p8fxw();

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright 2017 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */





var Board = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Board, _React$Component);

  var _super = _createSuper(Board);

  function Board() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Board);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onClick", (cov_1s7v5p8fxw().s[0]++, function (id) {
      cov_1s7v5p8fxw().f[0]++;
      cov_1s7v5p8fxw().s[1]++;
      return function () {
        cov_1s7v5p8fxw().f[1]++;
        cov_1s7v5p8fxw().s[2]++;

        if (_this.isActive(id)) {
          cov_1s7v5p8fxw().b[0][0]++;
          cov_1s7v5p8fxw().s[3]++;

          _this.props.moves.clickCell(id);
        } else {
          cov_1s7v5p8fxw().b[0][1]++;
        }
      };
    }));

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Board, [{
    key: "isActive",
    value: function isActive(id) {
      cov_1s7v5p8fxw().f[2]++;
      cov_1s7v5p8fxw().s[4]++;
      return (cov_1s7v5p8fxw().b[1][0]++, this.props.isActive) && (cov_1s7v5p8fxw().b[1][1]++, this.props.G.cells[id] === null);
    }
  }, {
    key: "_getStatus",
    value: function _getStatus() {
      cov_1s7v5p8fxw().f[3]++;
      cov_1s7v5p8fxw().s[5]++;

      if ((cov_1s7v5p8fxw().b[3][0]++, Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_11__["isOnlineGame"])(this.props.gameArgs)) || (cov_1s7v5p8fxw().b[3][1]++, Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_11__["isAIGame"])(this.props.gameArgs))) {
        cov_1s7v5p8fxw().b[2][0]++;
        cov_1s7v5p8fxw().s[6]++;

        if (this.props.ctx.currentPlayer === this.props.playerID) {
          cov_1s7v5p8fxw().b[4][0]++;
          cov_1s7v5p8fxw().s[7]++;
          return 'YOUR TURN';
        } else {
          cov_1s7v5p8fxw().b[4][1]++;
          cov_1s7v5p8fxw().s[8]++;
          return 'Waiting for opponent...';
        }
      } else {
        cov_1s7v5p8fxw().b[2][1]++;
        cov_1s7v5p8fxw().s[9]++;

        // Local or AI game
        switch (this.props.ctx.currentPlayer) {
          case '0':
            cov_1s7v5p8fxw().b[5][0]++;
            cov_1s7v5p8fxw().s[10]++;
            return "Red's turn";

          case '1':
            cov_1s7v5p8fxw().b[5][1]++;
            cov_1s7v5p8fxw().s[11]++;
            return "Green's turn";
        }
      }
    }
  }, {
    key: "_getGameOver",
    value: function _getGameOver() {
      cov_1s7v5p8fxw().f[4]++;
      cov_1s7v5p8fxw().s[12]++;

      if ((cov_1s7v5p8fxw().b[7][0]++, Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_11__["isOnlineGame"])(this.props.gameArgs)) || (cov_1s7v5p8fxw().b[7][1]++, Object(_common_gameMode__WEBPACK_IMPORTED_MODULE_11__["isAIGame"])(this.props.gameArgs))) {
        cov_1s7v5p8fxw().b[6][0]++;
        cov_1s7v5p8fxw().s[13]++;

        // Online game
        if (this.props.ctx.gameover.winner !== undefined) {
          cov_1s7v5p8fxw().b[8][0]++;
          cov_1s7v5p8fxw().s[14]++;

          if (this.props.ctx.gameover.winner === this.props.playerID) {
            cov_1s7v5p8fxw().b[9][0]++;
            cov_1s7v5p8fxw().s[15]++;
            return 'you won';
          } else {
            cov_1s7v5p8fxw().b[9][1]++;
            cov_1s7v5p8fxw().s[16]++;
            return 'you lost';
          }
        } else {
          cov_1s7v5p8fxw().b[8][1]++;
          cov_1s7v5p8fxw().s[17]++;
          return 'draw';
        }
      } else {
        cov_1s7v5p8fxw().b[6][1]++;
        cov_1s7v5p8fxw().s[18]++;

        // Local game
        switch (this.props.ctx.gameover.winner) {
          case '0':
            cov_1s7v5p8fxw().b[10][0]++;
            cov_1s7v5p8fxw().s[19]++;
            return 'red won';

          case '1':
            cov_1s7v5p8fxw().b[10][1]++;
            cov_1s7v5p8fxw().s[20]++;
            return 'green won';

          case undefined:
            cov_1s7v5p8fxw().b[10][2]++;
            cov_1s7v5p8fxw().s[21]++;
            return 'draw';
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      cov_1s7v5p8fxw().f[5]++;
      cov_1s7v5p8fxw().s[22]++;

      if (this.props.ctx.gameover) {
        cov_1s7v5p8fxw().b[11][0]++;
        cov_1s7v5p8fxw().s[23]++;
        return __jsx(components_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_8__["GameLayout"], {
          gameOver: this._getGameOver(),
          extraCardContent: this._getGameOverBoard(),
          gameArgs: this.props.gameArgs
        });
      } else {
        cov_1s7v5p8fxw().b[11][1]++;
      }

      cov_1s7v5p8fxw().s[24]++;
      return __jsx(components_App_Game_GameLayout__WEBPACK_IMPORTED_MODULE_8__["GameLayout"], {
        gameArgs: this.props.gameArgs
      }, this._getBoard());
    }
  }, {
    key: "_getCells",
    value: function _getCells() {
      cov_1s7v5p8fxw().f[6]++;
      var cells = (cov_1s7v5p8fxw().s[25]++, []);
      cov_1s7v5p8fxw().s[26]++;

      for (var i = (cov_1s7v5p8fxw().s[27]++, 0); i < 3; i++) {
        cov_1s7v5p8fxw().s[28]++;

        for (var j = (cov_1s7v5p8fxw().s[29]++, 0); j < 3; j++) {
          var id = (cov_1s7v5p8fxw().s[30]++, 3 * i + j);
          cov_1s7v5p8fxw().s[31]++;
          cells.push(__jsx("rect", {
            key: "".concat(id),
            x: i,
            y: j,
            width: "1",
            height: "1",
            fill: "black",
            onClick: this.onClick(id)
          }));
          var overlay = void 0;
          cov_1s7v5p8fxw().s[32]++;

          if (this.props.G.cells[id] === '0') {
            cov_1s7v5p8fxw().b[12][0]++;
            cov_1s7v5p8fxw().s[33]++;
            overlay = __jsx(_Shapes__WEBPACK_IMPORTED_MODULE_9__["Cross"], {
              x: i,
              y: j,
              key: "cross".concat(id)
            });
          } else {
            cov_1s7v5p8fxw().b[12][1]++;
            cov_1s7v5p8fxw().s[34]++;

            if (this.props.G.cells[id] === '1') {
              cov_1s7v5p8fxw().b[13][0]++;
              cov_1s7v5p8fxw().s[35]++;
              overlay = __jsx(_Shapes__WEBPACK_IMPORTED_MODULE_9__["Circle"], {
                x: i,
                y: j,
                key: "circle".concat(id)
              });
            } else {
              cov_1s7v5p8fxw().b[13][1]++;
            }
          }

          cov_1s7v5p8fxw().s[36]++;

          if (overlay) {
            cov_1s7v5p8fxw().b[14][0]++;
            cov_1s7v5p8fxw().s[37]++;
            cells.push(overlay);
          } else {
            cov_1s7v5p8fxw().b[14][1]++;
          }
        }
      }

      cov_1s7v5p8fxw().s[38]++;
      return cells;
    }
  }, {
    key: "_getBoard",
    value: function _getBoard() {
      cov_1s7v5p8fxw().f[7]++;
      cov_1s7v5p8fxw().s[39]++;
      return __jsx("div", null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h5",
        style: {
          textAlign: 'center',
          color: 'white',
          marginBottom: '16px'
        }
      }, this._getStatus()), __jsx("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 3 3"
      }, this._getCells(), _Shapes__WEBPACK_IMPORTED_MODULE_9__["Lines"]));
    }
  }, {
    key: "_getGameOverBoard",
    value: function _getGameOverBoard() {
      cov_1s7v5p8fxw().f[8]++;
      cov_1s7v5p8fxw().s[40]++;
      return __jsx("div", {
        style: {
          textAlign: 'center'
        }
      }, __jsx("svg", {
        width: "50%",
        height: "50%",
        viewBox: "0 0 3 3"
      }, this._getCells(), _Shapes__WEBPACK_IMPORTED_MODULE_9__["Lines"]));
    }
  }]);

  return Board;
}((react__WEBPACK_IMPORTED_MODULE_7__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./src/games/tictactoe/config.ts":
/*!***************************************!*\
  !*** ./src/games/tictactoe/config.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/games/tictactoe/game.ts");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/games/tictactoe/board.tsx");
function cov_hl3g3d016() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/tictactoe/config.ts";
  var hash = "08d55210496ae94dde9d66d209ea64f74742d75e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/tictactoe/config.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 28
        },
        end: {
          line: 9,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "08d55210496ae94dde9d66d209ea64f74742d75e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_hl3g3d016 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_hl3g3d016();


var config = (cov_hl3g3d016().s[0]++, {
  bgioGame: _game__WEBPACK_IMPORTED_MODULE_0__["TictactoeGame"],
  bgioBoard: _board__WEBPACK_IMPORTED_MODULE_1__["Board"],
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/games/tictactoe/game.ts":
/*!*************************************!*\
  !*** ./src/games/tictactoe/game.ts ***!
  \*************************************/
/*! exports provided: isVictory, TictactoeGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVictory", function() { return isVictory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TictactoeGame", function() { return TictactoeGame; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");



function cov_ag825iyr0() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/games/tictactoe/game.ts";
  var hash = "3a4fe3724de0637f4e339bca9e03fb432803e409";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/games/tictactoe/game.ts",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 20
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "1": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 33,
          column: 3
        }
      },
      "2": {
        start: {
          line: 22,
          column: 19
        },
        end: {
          line: 22,
          column: 32
        }
      },
      "3": {
        start: {
          line: 23,
          column: 17
        },
        end: {
          line: 23,
          column: 23
        }
      },
      "4": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "5": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 28,
          column: 7
        }
      },
      "6": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 26,
          column: 22
        }
      },
      "7": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 27,
          column: 14
        }
      },
      "8": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 32,
          column: 5
        }
      },
      "9": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 18
        }
      },
      "10": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 35,
          column: 15
        }
      },
      "11": {
        start: {
          line: 38,
          column: 29
        },
        end: {
          line: 68,
          column: 1
        }
      },
      "12": {
        start: {
          line: 41,
          column: 16
        },
        end: {
          line: 43,
          column: 3
        }
      },
      "13": {
        start: {
          line: 47,
          column: 20
        },
        end: {
          line: 47,
          column: 32
        }
      },
      "14": {
        start: {
          line: 49,
          column: 6
        },
        end: {
          line: 52,
          column: 7
        }
      },
      "15": {
        start: {
          line: 50,
          column: 8
        },
        end: {
          line: 50,
          column: 38
        }
      },
      "16": {
        start: {
          line: 51,
          column: 8
        },
        end: {
          line: 51,
          column: 31
        }
      },
      "17": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 63,
          column: 5
        }
      },
      "18": {
        start: {
          line: 62,
          column: 6
        },
        end: {
          line: 62,
          column: 43
        }
      },
      "19": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 66,
          column: 5
        }
      },
      "20": {
        start: {
          line: 64,
          column: 35
        },
        end: {
          line: 64,
          column: 45
        }
      },
      "21": {
        start: {
          line: 65,
          column: 6
        },
        end: {
          line: 65,
          column: 28
        }
      }
    },
    fnMap: {
      "0": {
        name: "isVictory",
        decl: {
          start: {
            line: 9,
            column: 16
          },
          end: {
            line: 9,
            column: 25
          }
        },
        loc: {
          start: {
            line: 9,
            column: 43
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 41,
            column: 9
          },
          end: {
            line: 41,
            column: 10
          }
        },
        loc: {
          start: {
            line: 41,
            column: 16
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 41
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        },
        loc: {
          start: {
            line: 46,
            column: 44
          },
          end: {
            line: 53,
            column: 5
          }
        },
        line: 46
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 60,
            column: 9
          },
          end: {
            line: 60,
            column: 10
          }
        },
        loc: {
          start: {
            line: 60,
            column: 21
          },
          end: {
            line: 67,
            column: 3
          }
        },
        line: 60
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 64,
            column: 23
          },
          end: {
            line: 64,
            column: 24
          }
        },
        loc: {
          start: {
            line: 64,
            column: 35
          },
          end: {
            line: 64,
            column: 45
          }
        },
        line: 64
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 25,
            column: 6
          },
          end: {
            line: 28,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 6
          },
          end: {
            line: 28,
            column: 7
          }
        }, {
          start: {
            line: 25,
            column: 6
          },
          end: {
            line: 28,
            column: 7
          }
        }],
        line: 25
      },
      "1": {
        loc: {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        }, {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        }],
        line: 30
      },
      "2": {
        loc: {
          start: {
            line: 49,
            column: 6
          },
          end: {
            line: 52,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 49,
            column: 6
          },
          end: {
            line: 52,
            column: 7
          }
        }, {
          start: {
            line: 49,
            column: 6
          },
          end: {
            line: 52,
            column: 7
          }
        }],
        line: 49
      },
      "3": {
        loc: {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 63,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 63,
            column: 5
          }
        }, {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 63,
            column: 5
          }
        }],
        line: 61
      },
      "4": {
        loc: {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        }, {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        }],
        line: 64
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3a4fe3724de0637f4e339bca9e03fb432803e409"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_ag825iyr0 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_ag825iyr0();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
function isVictory(cells) {
  cov_ag825iyr0().f[0]++;
  var positions = (cov_ag825iyr0().s[0]++, [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]);
  cov_ag825iyr0().s[1]++;

  for (var _i = 0, _positions = positions; _i < _positions.length; _i++) {
    var pos = _positions[_i];
    var symbol = (cov_ag825iyr0().s[2]++, cells[pos[0]]);
    var winner = (cov_ag825iyr0().s[3]++, symbol);
    cov_ag825iyr0().s[4]++;

    var _iterator = _createForOfIteratorHelper(pos),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var i = _step.value;
        cov_ag825iyr0().s[5]++;

        if (cells[i] !== symbol) {
          cov_ag825iyr0().b[0][0]++;
          cov_ag825iyr0().s[6]++;
          winner = null;
          cov_ag825iyr0().s[7]++;
          break;
        } else {
          cov_ag825iyr0().b[0][1]++;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    cov_ag825iyr0().s[8]++;

    if (winner != null) {
      cov_ag825iyr0().b[1][0]++;
      cov_ag825iyr0().s[9]++;
      return true;
    } else {
      cov_ag825iyr0().b[1][1]++;
    }
  }

  cov_ag825iyr0().s[10]++;
  return false;
}
var TictactoeGame = (cov_ag825iyr0().s[11]++, {
  name: 'tictactoe',
  setup: function setup() {
    cov_ag825iyr0().f[1]++;
    cov_ag825iyr0().s[12]++;
    return {
      cells: Array(9).fill(null)
    };
  },
  moves: {
    clickCell: function clickCell(G, ctx, id) {
      cov_ag825iyr0().f[2]++;
      var cells = (cov_ag825iyr0().s[13]++, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(G.cells));
      cov_ag825iyr0().s[14]++;

      if (cells[id] === null) {
        cov_ag825iyr0().b[2][0]++;
        cov_ag825iyr0().s[15]++;
        cells[id] = ctx.currentPlayer;
        cov_ag825iyr0().s[16]++;
        return _objectSpread({}, G, {
          cells: cells
        });
      } else {
        cov_ag825iyr0().b[2][1]++;
      }
    }
  },
  turn: {
    moveLimit: 1
  },
  endIf: function endIf(G, ctx) {
    cov_ag825iyr0().f[3]++;
    cov_ag825iyr0().s[17]++;

    if (isVictory(G.cells)) {
      cov_ag825iyr0().b[3][0]++;
      cov_ag825iyr0().s[18]++;
      return {
        winner: ctx.currentPlayer
      };
    } else {
      cov_ag825iyr0().b[3][1]++;
    }

    cov_ag825iyr0().s[19]++;

    if (G.cells.filter(function (c) {
      cov_ag825iyr0().f[4]++;
      cov_ag825iyr0().s[20]++;
      return c === null;
    }).length === 0) {
      cov_ag825iyr0().b[4][0]++;
      cov_ag825iyr0().s[21]++;
      return {
        draw: true
      };
    } else {
      cov_ag825iyr0().b[4][1]++;
    }
  }
});

/***/ }),

/***/ "./src/hooks/useWindowDimensions.ts":
/*!******************************************!*\
  !*** ./src/hooks/useWindowDimensions.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWindowDimensions; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function cov_2gr5onh2wh() {
  var path = "/home/j/Documents/FreeBoardGames.org/src/hooks/useWindowDimensions.ts";
  var hash = "4f114065dc7cb63bff1107bea751cd3943287ae8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/j/Documents/FreeBoardGames.org/src/hooks/useWindowDimensions.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 20
        },
        end: {
          line: 6,
          column: 49
        }
      },
      "1": {
        start: {
          line: 9,
          column: 18
        },
        end: {
          line: 9,
          column: 54
        }
      },
      "2": {
        start: {
          line: 10,
          column: 19
        },
        end: {
          line: 10,
          column: 56
        }
      },
      "3": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 14,
          column: 6
        }
      },
      "4": {
        start: {
          line: 17,
          column: 50
        },
        end: {
          line: 17,
          column: 81
        }
      },
      "5": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 27,
          column: 18
        }
      },
      "6": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "7": {
        start: {
          line: 21,
          column: 27
        },
        end: {
          line: 23,
          column: 7
        }
      },
      "8": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 51
        }
      },
      "9": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 54
        }
      },
      "10": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 70
        }
      },
      "11": {
        start: {
          line: 25,
          column: 19
        },
        end: {
          line: 25,
          column: 69
        }
      },
      "12": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "useWindowDimensions",
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 43
          }
        },
        loc: {
          start: {
            line: 5,
            column: 46
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "getWindowDimensions",
        decl: {
          start: {
            line: 8,
            column: 11
          },
          end: {
            line: 8,
            column: 30
          }
        },
        loc: {
          start: {
            line: 8,
            column: 33
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 8
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 12
          },
          end: {
            line: 19,
            column: 13
          }
        },
        loc: {
          start: {
            line: 19,
            column: 18
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 19
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 28
          }
        },
        loc: {
          start: {
            line: 21,
            column: 33
          },
          end: {
            line: 23,
            column: 7
          }
        },
        line: 21
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 25,
            column: 13
          },
          end: {
            line: 25,
            column: 14
          }
        },
        loc: {
          start: {
            line: 25,
            column: 19
          },
          end: {
            line: 25,
            column: 69
          }
        },
        line: 25
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 18
          },
          end: {
            line: 9,
            column: 54
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 9,
            column: 30
          },
          end: {
            line: 9,
            column: 47
          }
        }, {
          start: {
            line: 9,
            column: 50
          },
          end: {
            line: 9,
            column: 54
          }
        }],
        line: 9
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 19
          },
          end: {
            line: 10,
            column: 56
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 10,
            column: 31
          },
          end: {
            line: 10,
            column: 49
          }
        }, {
          start: {
            line: 10,
            column: 52
          },
          end: {
            line: 10,
            column: 56
          }
        }],
        line: 10
      },
      "2": {
        loc: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        }, {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        }],
        line: 20
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4f114065dc7cb63bff1107bea751cd3943287ae8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_2gr5onh2wh = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_2gr5onh2wh();
// https://stackoverflow.com/a/59185109

function useWindowDimensions() {
  cov_2gr5onh2wh().f[0]++;
  var hasWindow = (cov_2gr5onh2wh().s[0]++, true);

  function getWindowDimensions() {
    cov_2gr5onh2wh().f[1]++;
    var width = (cov_2gr5onh2wh().s[1]++, hasWindow ? (cov_2gr5onh2wh().b[0][0]++, window.innerWidth) : (cov_2gr5onh2wh().b[0][1]++, null));
    var height = (cov_2gr5onh2wh().s[2]++, hasWindow ? (cov_2gr5onh2wh().b[1][0]++, window.innerHeight) : (cov_2gr5onh2wh().b[1][1]++, null));
    cov_2gr5onh2wh().s[3]++;
    return {
      width: width,
      height: height
    };
  }

  var _ref = (cov_2gr5onh2wh().s[4]++, Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getWindowDimensions())),
      _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
      windowDimensions = _ref2[0],
      setWindowDimensions = _ref2[1];

  cov_2gr5onh2wh().s[5]++;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    cov_2gr5onh2wh().f[2]++;
    cov_2gr5onh2wh().s[6]++;

    if (hasWindow) {
      cov_2gr5onh2wh().b[2][0]++;
      cov_2gr5onh2wh().s[7]++;

      var handleResize = function handleResize() {
        cov_2gr5onh2wh().f[3]++;
        cov_2gr5onh2wh().s[8]++;
        setWindowDimensions(getWindowDimensions());
      };

      cov_2gr5onh2wh().s[9]++;
      window.addEventListener('resize', handleResize);
      cov_2gr5onh2wh().s[10]++;
      return function () {
        cov_2gr5onh2wh().f[4]++;
        cov_2gr5onh2wh().s[11]++;
        return window.removeEventListener('resize', handleResize);
      };
    } else {
      cov_2gr5onh2wh().b[2][1]++;
    }
  }, [hasWindow]);
  cov_2gr5onh2wh().s[12]++;
  return windowDimensions;
}

/***/ })

}]);
//# sourceMappingURL=12.js.map