(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.qr.js"],{

/***/ "./node_modules/qr.js/lib/8BitByte.js":
/*!********************************************!*\
  !*** ./node_modules/qr.js/lib/8BitByte.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mode = __webpack_require__(/*! ./mode */ "./node_modules/qr.js/lib/mode.js");

function QR8bitByte(data) {
	this.mode = mode.MODE_8BIT_BYTE;
	this.data = data;
}

QR8bitByte.prototype = {

	getLength : function(buffer) {
		return this.data.length;
	},
	
	write : function(buffer) {
		for (var i = 0; i < this.data.length; i++) {
			// not JIS ...
			buffer.put(this.data.charCodeAt(i), 8);
		}
	}
};

module.exports = QR8bitByte;



/***/ }),

/***/ "./node_modules/qr.js/lib/BitBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/qr.js/lib/BitBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function QRBitBuffer() {
	this.buffer = new Array();
	this.length = 0;
}

QRBitBuffer.prototype = {

	get : function(index) {
		var bufIndex = Math.floor(index / 8);
		return ( (this.buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
	},
	
	put : function(num, length) {
		for (var i = 0; i < length; i++) {
			this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
		}
	},
	
	getLengthInBits : function() {
		return this.length;
	},
	
	putBit : function(bit) {
	
		var bufIndex = Math.floor(this.length / 8);
		if (this.buffer.length <= bufIndex) {
			this.buffer.push(0);
		}
	
		if (bit) {
			this.buffer[bufIndex] |= (0x80 >>> (this.length % 8) );
		}
	
		this.length++;
	}
};

module.exports = QRBitBuffer;


/***/ }),

/***/ "./node_modules/qr.js/lib/ErrorCorrectLevel.js":
/*!*****************************************************!*\
  !*** ./node_modules/qr.js/lib/ErrorCorrectLevel.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	L : 1,
	M : 0,
	Q : 3,
	H : 2
};



/***/ }),

/***/ "./node_modules/qr.js/lib/Polynomial.js":
/*!**********************************************!*\
  !*** ./node_modules/qr.js/lib/Polynomial.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var math = __webpack_require__(/*! ./math */ "./node_modules/qr.js/lib/math.js");

function QRPolynomial(num, shift) {

	if (num.length == undefined) {
		throw new Error(num.length + "/" + shift);
	}

	var offset = 0;

	while (offset < num.length && num[offset] == 0) {
		offset++;
	}

	this.num = new Array(num.length - offset + shift);
	for (var i = 0; i < num.length - offset; i++) {
		this.num[i] = num[i + offset];
	}
}

QRPolynomial.prototype = {

	get : function(index) {
		return this.num[index];
	},
	
	getLength : function() {
		return this.num.length;
	},
	
	multiply : function(e) {
	
		var num = new Array(this.getLength() + e.getLength() - 1);
	
		for (var i = 0; i < this.getLength(); i++) {
			for (var j = 0; j < e.getLength(); j++) {
				num[i + j] ^= math.gexp(math.glog(this.get(i) ) + math.glog(e.get(j) ) );
			}
		}
	
		return new QRPolynomial(num, 0);
	},
	
	mod : function(e) {
	
		if (this.getLength() - e.getLength() < 0) {
			return this;
		}
	
		var ratio = math.glog(this.get(0) ) - math.glog(e.get(0) );
	
		var num = new Array(this.getLength() );
		
		for (var i = 0; i < this.getLength(); i++) {
			num[i] = this.get(i);
		}
		
		for (var i = 0; i < e.getLength(); i++) {
			num[i] ^= math.gexp(math.glog(e.get(i) ) + ratio);
		}
	
		// recursive call
		return new QRPolynomial(num, 0).mod(e);
	}
};

module.exports = QRPolynomial;


/***/ }),

/***/ "./node_modules/qr.js/lib/QRCode.js":
/*!******************************************!*\
  !*** ./node_modules/qr.js/lib/QRCode.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BitByte = __webpack_require__(/*! ./8BitByte */ "./node_modules/qr.js/lib/8BitByte.js");
var RSBlock = __webpack_require__(/*! ./RSBlock */ "./node_modules/qr.js/lib/RSBlock.js");
var BitBuffer = __webpack_require__(/*! ./BitBuffer */ "./node_modules/qr.js/lib/BitBuffer.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/qr.js/lib/util.js");
var Polynomial = __webpack_require__(/*! ./Polynomial */ "./node_modules/qr.js/lib/Polynomial.js");

function QRCode(typeNumber, errorCorrectLevel) {
	this.typeNumber = typeNumber;
	this.errorCorrectLevel = errorCorrectLevel;
	this.modules = null;
	this.moduleCount = 0;
	this.dataCache = null;
	this.dataList = [];
}

// for client side minification
var proto = QRCode.prototype;

proto.addData = function(data) {
	var newData = new BitByte(data);
	this.dataList.push(newData);
	this.dataCache = null;
};

proto.isDark = function(row, col) {
	if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
		throw new Error(row + "," + col);
	}
	return this.modules[row][col];
};

proto.getModuleCount = function() {
	return this.moduleCount;
};

proto.make = function() {
	// Calculate automatically typeNumber if provided is < 1
	if (this.typeNumber < 1 ){
		var typeNumber = 1;
		for (typeNumber = 1; typeNumber < 40; typeNumber++) {
			var rsBlocks = RSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);

			var buffer = new BitBuffer();
			var totalDataCount = 0;
			for (var i = 0; i < rsBlocks.length; i++) {
				totalDataCount += rsBlocks[i].dataCount;
			}

			for (var i = 0; i < this.dataList.length; i++) {
				var data = this.dataList[i];
				buffer.put(data.mode, 4);
				buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber) );
				data.write(buffer);
			}
			if (buffer.getLengthInBits() <= totalDataCount * 8)
				break;
		}
		this.typeNumber = typeNumber;
	}
	this.makeImpl(false, this.getBestMaskPattern() );
};

proto.makeImpl = function(test, maskPattern) {
	
	this.moduleCount = this.typeNumber * 4 + 17;
	this.modules = new Array(this.moduleCount);
	
	for (var row = 0; row < this.moduleCount; row++) {
		
		this.modules[row] = new Array(this.moduleCount);
		
		for (var col = 0; col < this.moduleCount; col++) {
			this.modules[row][col] = null;//(col + row) % 3;
		}
	}

	this.setupPositionProbePattern(0, 0);
	this.setupPositionProbePattern(this.moduleCount - 7, 0);
	this.setupPositionProbePattern(0, this.moduleCount - 7);
	this.setupPositionAdjustPattern();
	this.setupTimingPattern();
	this.setupTypeInfo(test, maskPattern);
	
	if (this.typeNumber >= 7) {
		this.setupTypeNumber(test);
	}

	if (this.dataCache == null) {
		this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
	}

	this.mapData(this.dataCache, maskPattern);
};

proto.setupPositionProbePattern = function(row, col)  {
	
	for (var r = -1; r <= 7; r++) {
		
		if (row + r <= -1 || this.moduleCount <= row + r) continue;
		
		for (var c = -1; c <= 7; c++) {
			
			if (col + c <= -1 || this.moduleCount <= col + c) continue;
			
			if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
					|| (0 <= c && c <= 6 && (r == 0 || r == 6) )
					|| (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
				this.modules[row + r][col + c] = true;
			} else {
				this.modules[row + r][col + c] = false;
			}
		}		
	}		
};

proto.getBestMaskPattern = function() {

	var minLostPoint = 0;
	var pattern = 0;

	for (var i = 0; i < 8; i++) {
		
		this.makeImpl(true, i);

		var lostPoint = util.getLostPoint(this);

		if (i == 0 || minLostPoint >  lostPoint) {
			minLostPoint = lostPoint;
			pattern = i;
		}
	}

	return pattern;
};

proto.createMovieClip = function(target_mc, instance_name, depth) {

	var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
	var cs = 1;

	this.make();

	for (var row = 0; row < this.modules.length; row++) {
		
		var y = row * cs;
		
		for (var col = 0; col < this.modules[row].length; col++) {

			var x = col * cs;
			var dark = this.modules[row][col];
		
			if (dark) {
				qr_mc.beginFill(0, 100);
				qr_mc.moveTo(x, y);
				qr_mc.lineTo(x + cs, y);
				qr_mc.lineTo(x + cs, y + cs);
				qr_mc.lineTo(x, y + cs);
				qr_mc.endFill();
			}
		}
	}
	
	return qr_mc;
};

proto.setupTimingPattern = function() {
	
	for (var r = 8; r < this.moduleCount - 8; r++) {
		if (this.modules[r][6] != null) {
			continue;
		}
		this.modules[r][6] = (r % 2 == 0);
	}

	for (var c = 8; c < this.moduleCount - 8; c++) {
		if (this.modules[6][c] != null) {
			continue;
		}
		this.modules[6][c] = (c % 2 == 0);
	}
};

proto.setupPositionAdjustPattern = function() {

	var pos = util.getPatternPosition(this.typeNumber);
	
	for (var i = 0; i < pos.length; i++) {
	
		for (var j = 0; j < pos.length; j++) {
		
			var row = pos[i];
			var col = pos[j];
			
			if (this.modules[row][col] != null) {
				continue;
			}
			
			for (var r = -2; r <= 2; r++) {
			
				for (var c = -2; c <= 2; c++) {
				
					if (r == -2 || r == 2 || c == -2 || c == 2
							|| (r == 0 && c == 0) ) {
						this.modules[row + r][col + c] = true;
					} else {
						this.modules[row + r][col + c] = false;
					}
				}
			}
		}
	}
};

proto.setupTypeNumber = function(test) {

	var bits = util.getBCHTypeNumber(this.typeNumber);

	for (var i = 0; i < 18; i++) {
		var mod = (!test && ( (bits >> i) & 1) == 1);
		this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
	}

	for (var i = 0; i < 18; i++) {
		var mod = (!test && ( (bits >> i) & 1) == 1);
		this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
	}
};

proto.setupTypeInfo = function(test, maskPattern) {

	var data = (this.errorCorrectLevel << 3) | maskPattern;
	var bits = util.getBCHTypeInfo(data);

	// vertical		
	for (var i = 0; i < 15; i++) {

		var mod = (!test && ( (bits >> i) & 1) == 1);

		if (i < 6) {
			this.modules[i][8] = mod;
		} else if (i < 8) {
			this.modules[i + 1][8] = mod;
		} else {
			this.modules[this.moduleCount - 15 + i][8] = mod;
		}
	}

	// horizontal
	for (var i = 0; i < 15; i++) {

		var mod = (!test && ( (bits >> i) & 1) == 1);
		
		if (i < 8) {
			this.modules[8][this.moduleCount - i - 1] = mod;
		} else if (i < 9) {
			this.modules[8][15 - i - 1 + 1] = mod;
		} else {
			this.modules[8][15 - i - 1] = mod;
		}
	}

	// fixed module
	this.modules[this.moduleCount - 8][8] = (!test);
};

proto.mapData = function(data, maskPattern) {
	
	var inc = -1;
	var row = this.moduleCount - 1;
	var bitIndex = 7;
	var byteIndex = 0;
	
	for (var col = this.moduleCount - 1; col > 0; col -= 2) {

		if (col == 6) col--;

		while (true) {

			for (var c = 0; c < 2; c++) {
				
				if (this.modules[row][col - c] == null) {
					
					var dark = false;

					if (byteIndex < data.length) {
						dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
					}

					var mask = util.getMask(maskPattern, row, col - c);

					if (mask) {
						dark = !dark;
					}
					
					this.modules[row][col - c] = dark;
					bitIndex--;

					if (bitIndex == -1) {
						byteIndex++;
						bitIndex = 7;
					}
				}
			}
							
			row += inc;

			if (row < 0 || this.moduleCount <= row) {
				row -= inc;
				inc = -inc;
				break;
			}
		}
	}
};

QRCode.PAD0 = 0xEC;
QRCode.PAD1 = 0x11;

QRCode.createData = function(typeNumber, errorCorrectLevel, dataList) {
	
	var rsBlocks = RSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
	
	var buffer = new BitBuffer();
	
	for (var i = 0; i < dataList.length; i++) {
		var data = dataList[i];
		buffer.put(data.mode, 4);
		buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber) );
		data.write(buffer);
	}

	// calc num max data.
	var totalDataCount = 0;
	for (var i = 0; i < rsBlocks.length; i++) {
		totalDataCount += rsBlocks[i].dataCount;
	}

	if (buffer.getLengthInBits() > totalDataCount * 8) {
		throw new Error("code length overflow. ("
			+ buffer.getLengthInBits()
			+ ">"
			+  totalDataCount * 8
			+ ")");
	}

	// end code
	if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
		buffer.put(0, 4);
	}

	// padding
	while (buffer.getLengthInBits() % 8 != 0) {
		buffer.putBit(false);
	}

	// padding
	while (true) {
		
		if (buffer.getLengthInBits() >= totalDataCount * 8) {
			break;
		}
		buffer.put(QRCode.PAD0, 8);
		
		if (buffer.getLengthInBits() >= totalDataCount * 8) {
			break;
		}
		buffer.put(QRCode.PAD1, 8);
	}

	return QRCode.createBytes(buffer, rsBlocks);
};

QRCode.createBytes = function(buffer, rsBlocks) {

	var offset = 0;
	
	var maxDcCount = 0;
	var maxEcCount = 0;
	
	var dcdata = new Array(rsBlocks.length);
	var ecdata = new Array(rsBlocks.length);
	
	for (var r = 0; r < rsBlocks.length; r++) {

		var dcCount = rsBlocks[r].dataCount;
		var ecCount = rsBlocks[r].totalCount - dcCount;

		maxDcCount = Math.max(maxDcCount, dcCount);
		maxEcCount = Math.max(maxEcCount, ecCount);
		
		dcdata[r] = new Array(dcCount);
		
		for (var i = 0; i < dcdata[r].length; i++) {
			dcdata[r][i] = 0xff & buffer.buffer[i + offset];
		}
		offset += dcCount;
		
		var rsPoly = util.getErrorCorrectPolynomial(ecCount);
		var rawPoly = new Polynomial(dcdata[r], rsPoly.getLength() - 1);

		var modPoly = rawPoly.mod(rsPoly);
		ecdata[r] = new Array(rsPoly.getLength() - 1);
		for (var i = 0; i < ecdata[r].length; i++) {
            var modIndex = i + modPoly.getLength() - ecdata[r].length;
			ecdata[r][i] = (modIndex >= 0)? modPoly.get(modIndex) : 0;
		}

	}
	
	var totalCodeCount = 0;
	for (var i = 0; i < rsBlocks.length; i++) {
		totalCodeCount += rsBlocks[i].totalCount;
	}

	var data = new Array(totalCodeCount);
	var index = 0;

	for (var i = 0; i < maxDcCount; i++) {
		for (var r = 0; r < rsBlocks.length; r++) {
			if (i < dcdata[r].length) {
				data[index++] = dcdata[r][i];
			}
		}
	}

	for (var i = 0; i < maxEcCount; i++) {
		for (var r = 0; r < rsBlocks.length; r++) {
			if (i < ecdata[r].length) {
				data[index++] = ecdata[r][i];
			}
		}
	}

	return data;
};

module.exports = QRCode;



/***/ }),

/***/ "./node_modules/qr.js/lib/RSBlock.js":
/*!*******************************************!*\
  !*** ./node_modules/qr.js/lib/RSBlock.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// ErrorCorrectLevel
var ECL = __webpack_require__(/*! ./ErrorCorrectLevel */ "./node_modules/qr.js/lib/ErrorCorrectLevel.js");

function QRRSBlock(totalCount, dataCount) {
	this.totalCount = totalCount;
	this.dataCount  = dataCount;
}

QRRSBlock.RS_BLOCK_TABLE = [

	// L
	// M
	// Q
	// H

	// 1
	[1, 26, 19],
	[1, 26, 16],
	[1, 26, 13],
	[1, 26, 9],
	
	// 2
	[1, 44, 34],
	[1, 44, 28],
	[1, 44, 22],
	[1, 44, 16],

	// 3
	[1, 70, 55],
	[1, 70, 44],
	[2, 35, 17],
	[2, 35, 13],

	// 4		
	[1, 100, 80],
	[2, 50, 32],
	[2, 50, 24],
	[4, 25, 9],
	
	// 5
	[1, 134, 108],
	[2, 67, 43],
	[2, 33, 15, 2, 34, 16],
	[2, 33, 11, 2, 34, 12],
	
	// 6
	[2, 86, 68],
	[4, 43, 27],
	[4, 43, 19],
	[4, 43, 15],
	
	// 7		
	[2, 98, 78],
	[4, 49, 31],
	[2, 32, 14, 4, 33, 15],
	[4, 39, 13, 1, 40, 14],
	
	// 8
	[2, 121, 97],
	[2, 60, 38, 2, 61, 39],
	[4, 40, 18, 2, 41, 19],
	[4, 40, 14, 2, 41, 15],
	
	// 9
	[2, 146, 116],
	[3, 58, 36, 2, 59, 37],
	[4, 36, 16, 4, 37, 17],
	[4, 36, 12, 4, 37, 13],
	
	// 10		
	[2, 86, 68, 2, 87, 69],
	[4, 69, 43, 1, 70, 44],
	[6, 43, 19, 2, 44, 20],
	[6, 43, 15, 2, 44, 16],

	// 11
	[4, 101, 81],
	[1, 80, 50, 4, 81, 51],
	[4, 50, 22, 4, 51, 23],
	[3, 36, 12, 8, 37, 13],

	// 12
	[2, 116, 92, 2, 117, 93],
	[6, 58, 36, 2, 59, 37],
	[4, 46, 20, 6, 47, 21],
	[7, 42, 14, 4, 43, 15],

	// 13
	[4, 133, 107],
	[8, 59, 37, 1, 60, 38],
	[8, 44, 20, 4, 45, 21],
	[12, 33, 11, 4, 34, 12],

	// 14
	[3, 145, 115, 1, 146, 116],
	[4, 64, 40, 5, 65, 41],
	[11, 36, 16, 5, 37, 17],
	[11, 36, 12, 5, 37, 13],

	// 15
	[5, 109, 87, 1, 110, 88],
	[5, 65, 41, 5, 66, 42],
	[5, 54, 24, 7, 55, 25],
	[11, 36, 12],

	// 16
	[5, 122, 98, 1, 123, 99],
	[7, 73, 45, 3, 74, 46],
	[15, 43, 19, 2, 44, 20],
	[3, 45, 15, 13, 46, 16],

	// 17
	[1, 135, 107, 5, 136, 108],
	[10, 74, 46, 1, 75, 47],
	[1, 50, 22, 15, 51, 23],
	[2, 42, 14, 17, 43, 15],

	// 18
	[5, 150, 120, 1, 151, 121],
	[9, 69, 43, 4, 70, 44],
	[17, 50, 22, 1, 51, 23],
	[2, 42, 14, 19, 43, 15],

	// 19
	[3, 141, 113, 4, 142, 114],
	[3, 70, 44, 11, 71, 45],
	[17, 47, 21, 4, 48, 22],
	[9, 39, 13, 16, 40, 14],

	// 20
	[3, 135, 107, 5, 136, 108],
	[3, 67, 41, 13, 68, 42],
	[15, 54, 24, 5, 55, 25],
	[15, 43, 15, 10, 44, 16],

	// 21
	[4, 144, 116, 4, 145, 117],
	[17, 68, 42],
	[17, 50, 22, 6, 51, 23],
	[19, 46, 16, 6, 47, 17],

	// 22
	[2, 139, 111, 7, 140, 112],
	[17, 74, 46],
	[7, 54, 24, 16, 55, 25],
	[34, 37, 13],

	// 23
	[4, 151, 121, 5, 152, 122],
	[4, 75, 47, 14, 76, 48],
	[11, 54, 24, 14, 55, 25],
	[16, 45, 15, 14, 46, 16],

	// 24
	[6, 147, 117, 4, 148, 118],
	[6, 73, 45, 14, 74, 46],
	[11, 54, 24, 16, 55, 25],
	[30, 46, 16, 2, 47, 17],

	// 25
	[8, 132, 106, 4, 133, 107],
	[8, 75, 47, 13, 76, 48],
	[7, 54, 24, 22, 55, 25],
	[22, 45, 15, 13, 46, 16],

	// 26
	[10, 142, 114, 2, 143, 115],
	[19, 74, 46, 4, 75, 47],
	[28, 50, 22, 6, 51, 23],
	[33, 46, 16, 4, 47, 17],

	// 27
	[8, 152, 122, 4, 153, 123],
	[22, 73, 45, 3, 74, 46],
	[8, 53, 23, 26, 54, 24],
	[12, 45, 15, 28, 46, 16],

	// 28
	[3, 147, 117, 10, 148, 118],
	[3, 73, 45, 23, 74, 46],
	[4, 54, 24, 31, 55, 25],
	[11, 45, 15, 31, 46, 16],

	// 29
	[7, 146, 116, 7, 147, 117],
	[21, 73, 45, 7, 74, 46],
	[1, 53, 23, 37, 54, 24],
	[19, 45, 15, 26, 46, 16],

	// 30
	[5, 145, 115, 10, 146, 116],
	[19, 75, 47, 10, 76, 48],
	[15, 54, 24, 25, 55, 25],
	[23, 45, 15, 25, 46, 16],

	// 31
	[13, 145, 115, 3, 146, 116],
	[2, 74, 46, 29, 75, 47],
	[42, 54, 24, 1, 55, 25],
	[23, 45, 15, 28, 46, 16],

	// 32
	[17, 145, 115],
	[10, 74, 46, 23, 75, 47],
	[10, 54, 24, 35, 55, 25],
	[19, 45, 15, 35, 46, 16],

	// 33
	[17, 145, 115, 1, 146, 116],
	[14, 74, 46, 21, 75, 47],
	[29, 54, 24, 19, 55, 25],
	[11, 45, 15, 46, 46, 16],

	// 34
	[13, 145, 115, 6, 146, 116],
	[14, 74, 46, 23, 75, 47],
	[44, 54, 24, 7, 55, 25],
	[59, 46, 16, 1, 47, 17],

	// 35
	[12, 151, 121, 7, 152, 122],
	[12, 75, 47, 26, 76, 48],
	[39, 54, 24, 14, 55, 25],
	[22, 45, 15, 41, 46, 16],

	// 36
	[6, 151, 121, 14, 152, 122],
	[6, 75, 47, 34, 76, 48],
	[46, 54, 24, 10, 55, 25],
	[2, 45, 15, 64, 46, 16],

	// 37
	[17, 152, 122, 4, 153, 123],
	[29, 74, 46, 14, 75, 47],
	[49, 54, 24, 10, 55, 25],
	[24, 45, 15, 46, 46, 16],

	// 38
	[4, 152, 122, 18, 153, 123],
	[13, 74, 46, 32, 75, 47],
	[48, 54, 24, 14, 55, 25],
	[42, 45, 15, 32, 46, 16],

	// 39
	[20, 147, 117, 4, 148, 118],
	[40, 75, 47, 7, 76, 48],
	[43, 54, 24, 22, 55, 25],
	[10, 45, 15, 67, 46, 16],

	// 40
	[19, 148, 118, 6, 149, 119],
	[18, 75, 47, 31, 76, 48],
	[34, 54, 24, 34, 55, 25],
	[20, 45, 15, 61, 46, 16]
];

QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
	
	var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
	
	if (rsBlock == undefined) {
		throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
	}

	var length = rsBlock.length / 3;
	
	var list = new Array();
	
	for (var i = 0; i < length; i++) {

		var count = rsBlock[i * 3 + 0];
		var totalCount = rsBlock[i * 3 + 1];
		var dataCount  = rsBlock[i * 3 + 2];

		for (var j = 0; j < count; j++) {
			list.push(new QRRSBlock(totalCount, dataCount) );	
		}
	}
	
	return list;
}

QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {

	switch(errorCorrectLevel) {
	case ECL.L :
		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
	case ECL.M :
		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
	case ECL.Q :
		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
	case ECL.H :
		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
	default :
		return undefined;
	}
}

module.exports = QRRSBlock;


/***/ }),

/***/ "./node_modules/qr.js/lib/math.js":
/*!****************************************!*\
  !*** ./node_modules/qr.js/lib/math.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var QRMath = {

	glog : function(n) {
	
		if (n < 1) {
			throw new Error("glog(" + n + ")");
		}
		
		return QRMath.LOG_TABLE[n];
	},
	
	gexp : function(n) {
	
		while (n < 0) {
			n += 255;
		}
	
		while (n >= 256) {
			n -= 255;
		}
	
		return QRMath.EXP_TABLE[n];
	},
	
	EXP_TABLE : new Array(256),
	
	LOG_TABLE : new Array(256)

};
	
for (var i = 0; i < 8; i++) {
	QRMath.EXP_TABLE[i] = 1 << i;
}
for (var i = 8; i < 256; i++) {
	QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4]
		^ QRMath.EXP_TABLE[i - 5]
		^ QRMath.EXP_TABLE[i - 6]
		^ QRMath.EXP_TABLE[i - 8];
}
for (var i = 0; i < 255; i++) {
	QRMath.LOG_TABLE[QRMath.EXP_TABLE[i] ] = i;
}

module.exports = QRMath;


/***/ }),

/***/ "./node_modules/qr.js/lib/mode.js":
/*!****************************************!*\
  !*** ./node_modules/qr.js/lib/mode.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	MODE_NUMBER :		1 << 0,
	MODE_ALPHA_NUM : 	1 << 1,
	MODE_8BIT_BYTE : 	1 << 2,
	MODE_KANJI :		1 << 3
};


/***/ }),

/***/ "./node_modules/qr.js/lib/util.js":
/*!****************************************!*\
  !*** ./node_modules/qr.js/lib/util.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(/*! ./mode */ "./node_modules/qr.js/lib/mode.js");
var Polynomial = __webpack_require__(/*! ./Polynomial */ "./node_modules/qr.js/lib/Polynomial.js");
var math = __webpack_require__(/*! ./math */ "./node_modules/qr.js/lib/math.js");

var QRMaskPattern = {
	PATTERN000 : 0,
	PATTERN001 : 1,
	PATTERN010 : 2,
	PATTERN011 : 3,
	PATTERN100 : 4,
	PATTERN101 : 5,
	PATTERN110 : 6,
	PATTERN111 : 7
};

var QRUtil = {

    PATTERN_POSITION_TABLE : [
	    [],
	    [6, 18],
	    [6, 22],
	    [6, 26],
	    [6, 30],
	    [6, 34],
	    [6, 22, 38],
	    [6, 24, 42],
	    [6, 26, 46],
	    [6, 28, 50],
	    [6, 30, 54],		
	    [6, 32, 58],
	    [6, 34, 62],
	    [6, 26, 46, 66],
	    [6, 26, 48, 70],
	    [6, 26, 50, 74],
	    [6, 30, 54, 78],
	    [6, 30, 56, 82],
	    [6, 30, 58, 86],
	    [6, 34, 62, 90],
	    [6, 28, 50, 72, 94],
	    [6, 26, 50, 74, 98],
	    [6, 30, 54, 78, 102],
	    [6, 28, 54, 80, 106],
	    [6, 32, 58, 84, 110],
	    [6, 30, 58, 86, 114],
	    [6, 34, 62, 90, 118],
	    [6, 26, 50, 74, 98, 122],
	    [6, 30, 54, 78, 102, 126],
	    [6, 26, 52, 78, 104, 130],
	    [6, 30, 56, 82, 108, 134],
	    [6, 34, 60, 86, 112, 138],
	    [6, 30, 58, 86, 114, 142],
	    [6, 34, 62, 90, 118, 146],
	    [6, 30, 54, 78, 102, 126, 150],
	    [6, 24, 50, 76, 102, 128, 154],
	    [6, 28, 54, 80, 106, 132, 158],
	    [6, 32, 58, 84, 110, 136, 162],
	    [6, 26, 54, 82, 110, 138, 166],
	    [6, 30, 58, 86, 114, 142, 170]
    ],

    G15 : (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
    G18 : (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
    G15_MASK : (1 << 14) | (1 << 12) | (1 << 10)	| (1 << 4) | (1 << 1),

    getBCHTypeInfo : function(data) {
	    var d = data << 10;
	    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
		    d ^= (QRUtil.G15 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) ) ); 	
	    }
	    return ( (data << 10) | d) ^ QRUtil.G15_MASK;
    },

    getBCHTypeNumber : function(data) {
	    var d = data << 12;
	    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
		    d ^= (QRUtil.G18 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) ) ); 	
	    }
	    return (data << 12) | d;
    },

    getBCHDigit : function(data) {

	    var digit = 0;

	    while (data != 0) {
		    digit++;
		    data >>>= 1;
	    }

	    return digit;
    },

    getPatternPosition : function(typeNumber) {
	    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },

    getMask : function(maskPattern, i, j) {
	    
	    switch (maskPattern) {
		    
	    case QRMaskPattern.PATTERN000 : return (i + j) % 2 == 0;
	    case QRMaskPattern.PATTERN001 : return i % 2 == 0;
	    case QRMaskPattern.PATTERN010 : return j % 3 == 0;
	    case QRMaskPattern.PATTERN011 : return (i + j) % 3 == 0;
	    case QRMaskPattern.PATTERN100 : return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0;
	    case QRMaskPattern.PATTERN101 : return (i * j) % 2 + (i * j) % 3 == 0;
	    case QRMaskPattern.PATTERN110 : return ( (i * j) % 2 + (i * j) % 3) % 2 == 0;
	    case QRMaskPattern.PATTERN111 : return ( (i * j) % 3 + (i + j) % 2) % 2 == 0;

	    default :
		    throw new Error("bad maskPattern:" + maskPattern);
	    }
    },

    getErrorCorrectPolynomial : function(errorCorrectLength) {

	    var a = new Polynomial([1], 0);

	    for (var i = 0; i < errorCorrectLength; i++) {
		    a = a.multiply(new Polynomial([1, math.gexp(i)], 0) );
	    }

	    return a;
    },

    getLengthInBits : function(mode, type) {

	    if (1 <= type && type < 10) {

		    // 1 - 9

		    switch(mode) {
		    case Mode.MODE_NUMBER 	: return 10;
		    case Mode.MODE_ALPHA_NUM 	: return 9;
		    case Mode.MODE_8BIT_BYTE	: return 8;
		    case Mode.MODE_KANJI  	: return 8;
		    default :
			    throw new Error("mode:" + mode);
		    }

	    } else if (type < 27) {

		    // 10 - 26

		    switch(mode) {
		    case Mode.MODE_NUMBER 	: return 12;
		    case Mode.MODE_ALPHA_NUM 	: return 11;
		    case Mode.MODE_8BIT_BYTE	: return 16;
		    case Mode.MODE_KANJI  	: return 10;
		    default :
			    throw new Error("mode:" + mode);
		    }

	    } else if (type < 41) {

		    // 27 - 40

		    switch(mode) {
		    case Mode.MODE_NUMBER 	: return 14;
		    case Mode.MODE_ALPHA_NUM	: return 13;
		    case Mode.MODE_8BIT_BYTE	: return 16;
		    case Mode.MODE_KANJI  	: return 12;
		    default :
			    throw new Error("mode:" + mode);
		    }

	    } else {
		    throw new Error("type:" + type);
	    }
    },

    getLostPoint : function(qrCode) {
	    
	    var moduleCount = qrCode.getModuleCount();
	    
	    var lostPoint = 0;
	    
	    // LEVEL1
	    
	    for (var row = 0; row < moduleCount; row++) {

		    for (var col = 0; col < moduleCount; col++) {

			    var sameCount = 0;
			    var dark = qrCode.isDark(row, col);

				for (var r = -1; r <= 1; r++) {

				    if (row + r < 0 || moduleCount <= row + r) {
					    continue;
				    }

				    for (var c = -1; c <= 1; c++) {

					    if (col + c < 0 || moduleCount <= col + c) {
						    continue;
					    }

					    if (r == 0 && c == 0) {
						    continue;
					    }

					    if (dark == qrCode.isDark(row + r, col + c) ) {
						    sameCount++;
					    }
				    }
			    }

			    if (sameCount > 5) {
				    lostPoint += (3 + sameCount - 5);
			    }
		    }
	    }

	    // LEVEL2

	    for (var row = 0; row < moduleCount - 1; row++) {
		    for (var col = 0; col < moduleCount - 1; col++) {
			    var count = 0;
			    if (qrCode.isDark(row,     col    ) ) count++;
			    if (qrCode.isDark(row + 1, col    ) ) count++;
			    if (qrCode.isDark(row,     col + 1) ) count++;
			    if (qrCode.isDark(row + 1, col + 1) ) count++;
			    if (count == 0 || count == 4) {
				    lostPoint += 3;
			    }
		    }
	    }

	    // LEVEL3

	    for (var row = 0; row < moduleCount; row++) {
		    for (var col = 0; col < moduleCount - 6; col++) {
			    if (qrCode.isDark(row, col)
					    && !qrCode.isDark(row, col + 1)
					    &&  qrCode.isDark(row, col + 2)
					    &&  qrCode.isDark(row, col + 3)
					    &&  qrCode.isDark(row, col + 4)
					    && !qrCode.isDark(row, col + 5)
					    &&  qrCode.isDark(row, col + 6) ) {
				    lostPoint += 40;
			    }
		    }
	    }

	    for (var col = 0; col < moduleCount; col++) {
		    for (var row = 0; row < moduleCount - 6; row++) {
			    if (qrCode.isDark(row, col)
					    && !qrCode.isDark(row + 1, col)
					    &&  qrCode.isDark(row + 2, col)
					    &&  qrCode.isDark(row + 3, col)
					    &&  qrCode.isDark(row + 4, col)
					    && !qrCode.isDark(row + 5, col)
					    &&  qrCode.isDark(row + 6, col) ) {
				    lostPoint += 40;
			    }
		    }
	    }

	    // LEVEL4
	    
	    var darkCount = 0;

	    for (var col = 0; col < moduleCount; col++) {
		    for (var row = 0; row < moduleCount; row++) {
			    if (qrCode.isDark(row, col) ) {
				    darkCount++;
			    }
		    }
	    }
	    
	    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
	    lostPoint += ratio * 10;

	    return lostPoint;		
    }
};

module.exports = QRUtil;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXIuanMvbGliLzhCaXRCeXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xci5qcy9saWIvQml0QnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xci5qcy9saWIvRXJyb3JDb3JyZWN0TGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FyLmpzL2xpYi9Qb2x5bm9taWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xci5qcy9saWIvUVJDb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xci5qcy9saWIvUlNCbG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXIuanMvbGliL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FyLmpzL2xpYi9tb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xci5qcy9saWIvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxXQUFXLG1CQUFPLENBQUMsZ0RBQVE7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTEEsV0FBVyxtQkFB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNwYkE7QUFDQSxVQUFVLG1CQUFPLENBQUMsMEVBQXFCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGdCQUFnQixZQUFZOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFdBQVc7QUFDNUIsb0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzFTQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEEsV0FBVyxtQkFBTyxDQUFDLGdEQUFRO0FBQzNCLGlCQUFpQixtQkFBTyxDQUFDLDREQUFjO0FBQ3ZDLFdBQVcsbUJBQU8sQ0FBQyxnREFBUTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzRjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLHNGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTs7QUFFTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07O0FBRU47O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0JBQXNCLG1CQUFtQjs7QUFFekMsdUJBQXVCLG1CQUFtQjs7QUFFMUM7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTs7QUFFNUI7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixRQUFROztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzQkFBc0IsdUJBQXVCO0FBQzdDLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsc0JBQXNCLG1CQUFtQjtBQUN6Qyx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLG1CQUFtQjtBQUN6Qyx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsc0JBQXNCLG1CQUFtQjtBQUN6Qyx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQjtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiYzc1NzBlNTc5OTkyYTA5OTNiMmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbW9kZSA9IHJlcXVpcmUoJy4vbW9kZScpO1xuXG5mdW5jdGlvbiBRUjhiaXRCeXRlKGRhdGEpIHtcblx0dGhpcy5tb2RlID0gbW9kZS5NT0RFXzhCSVRfQllURTtcblx0dGhpcy5kYXRhID0gZGF0YTtcbn1cblxuUVI4Yml0Qnl0ZS5wcm90b3R5cGUgPSB7XG5cblx0Z2V0TGVuZ3RoIDogZnVuY3Rpb24oYnVmZmVyKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XG5cdH0sXG5cdFxuXHR3cml0ZSA6IGZ1bmN0aW9uKGJ1ZmZlcikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQvLyBub3QgSklTIC4uLlxuXHRcdFx0YnVmZmVyLnB1dCh0aGlzLmRhdGEuY2hhckNvZGVBdChpKSwgOCk7XG5cdFx0fVxuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFFSOGJpdEJ5dGU7XG5cbiIsImZ1bmN0aW9uIFFSQml0QnVmZmVyKCkge1xuXHR0aGlzLmJ1ZmZlciA9IG5ldyBBcnJheSgpO1xuXHR0aGlzLmxlbmd0aCA9IDA7XG59XG5cblFSQml0QnVmZmVyLnByb3RvdHlwZSA9IHtcblxuXHRnZXQgOiBmdW5jdGlvbihpbmRleCkge1xuXHRcdHZhciBidWZJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyA4KTtcblx0XHRyZXR1cm4gKCAodGhpcy5idWZmZXJbYnVmSW5kZXhdID4+PiAoNyAtIGluZGV4ICUgOCkgKSAmIDEpID09IDE7XG5cdH0sXG5cdFxuXHRwdXQgOiBmdW5jdGlvbihudW0sIGxlbmd0aCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMucHV0Qml0KCAoIChudW0gPj4+IChsZW5ndGggLSBpIC0gMSkgKSAmIDEpID09IDEpO1xuXHRcdH1cblx0fSxcblx0XG5cdGdldExlbmd0aEluQml0cyA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmxlbmd0aDtcblx0fSxcblx0XG5cdHB1dEJpdCA6IGZ1bmN0aW9uKGJpdCkge1xuXHRcblx0XHR2YXIgYnVmSW5kZXggPSBNYXRoLmZsb29yKHRoaXMubGVuZ3RoIC8gOCk7XG5cdFx0aWYgKHRoaXMuYnVmZmVyLmxlbmd0aCA8PSBidWZJbmRleCkge1xuXHRcdFx0dGhpcy5idWZmZXIucHVzaCgwKTtcblx0XHR9XG5cdFxuXHRcdGlmIChiaXQpIHtcblx0XHRcdHRoaXMuYnVmZmVyW2J1ZkluZGV4XSB8PSAoMHg4MCA+Pj4gKHRoaXMubGVuZ3RoICUgOCkgKTtcblx0XHR9XG5cdFxuXHRcdHRoaXMubGVuZ3RoKys7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUVJCaXRCdWZmZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0TCA6IDEsXG5cdE0gOiAwLFxuXHRRIDogMyxcblx0SCA6IDJcbn07XG5cbiIsInZhciBtYXRoID0gcmVxdWlyZSgnLi9tYXRoJyk7XG5cbmZ1bmN0aW9uIFFSUG9seW5vbWlhbChudW0sIHNoaWZ0KSB7XG5cblx0aWYgKG51bS5sZW5ndGggPT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKG51bS5sZW5ndGggKyBcIi9cIiArIHNoaWZ0KTtcblx0fVxuXG5cdHZhciBvZmZzZXQgPSAwO1xuXG5cdHdoaWxlIChvZmZzZXQgPCBudW0ubGVuZ3RoICYmIG51bVtvZmZzZXRdID09IDApIHtcblx0XHRvZmZzZXQrKztcblx0fVxuXG5cdHRoaXMubnVtID0gbmV3IEFycmF5KG51bS5sZW5ndGggLSBvZmZzZXQgKyBzaGlmdCk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbnVtLmxlbmd0aCAtIG9mZnNldDsgaSsrKSB7XG5cdFx0dGhpcy5udW1baV0gPSBudW1baSArIG9mZnNldF07XG5cdH1cbn1cblxuUVJQb2x5bm9taWFsLnByb3RvdHlwZSA9IHtcblxuXHRnZXQgOiBmdW5jdGlvbihpbmRleCkge1xuXHRcdHJldHVybiB0aGlzLm51bVtpbmRleF07XG5cdH0sXG5cdFxuXHRnZXRMZW5ndGggOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5udW0ubGVuZ3RoO1xuXHR9LFxuXHRcblx0bXVsdGlwbHkgOiBmdW5jdGlvbihlKSB7XG5cdFxuXHRcdHZhciBudW0gPSBuZXcgQXJyYXkodGhpcy5nZXRMZW5ndGgoKSArIGUuZ2V0TGVuZ3RoKCkgLSAxKTtcblx0XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdldExlbmd0aCgpOyBpKyspIHtcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZS5nZXRMZW5ndGgoKTsgaisrKSB7XG5cdFx0XHRcdG51bVtpICsgal0gXj0gbWF0aC5nZXhwKG1hdGguZ2xvZyh0aGlzLmdldChpKSApICsgbWF0aC5nbG9nKGUuZ2V0KGopICkgKTtcblx0XHRcdH1cblx0XHR9XG5cdFxuXHRcdHJldHVybiBuZXcgUVJQb2x5bm9taWFsKG51bSwgMCk7XG5cdH0sXG5cdFxuXHRtb2QgOiBmdW5jdGlvbihlKSB7XG5cdFxuXHRcdGlmICh0aGlzLmdldExlbmd0aCgpIC0gZS5nZXRMZW5ndGgoKSA8IDApIHtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XG5cdFx0dmFyIHJhdGlvID0gbWF0aC5nbG9nKHRoaXMuZ2V0KDApICkgLSBtYXRoLmdsb2coZS5nZXQoMCkgKTtcblx0XG5cdFx0dmFyIG51bSA9IG5ldyBBcnJheSh0aGlzLmdldExlbmd0aCgpICk7XG5cdFx0XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdldExlbmd0aCgpOyBpKyspIHtcblx0XHRcdG51bVtpXSA9IHRoaXMuZ2V0KGkpO1xuXHRcdH1cblx0XHRcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGUuZ2V0TGVuZ3RoKCk7IGkrKykge1xuXHRcdFx0bnVtW2ldIF49IG1hdGguZ2V4cChtYXRoLmdsb2coZS5nZXQoaSkgKSArIHJhdGlvKTtcblx0XHR9XG5cdFxuXHRcdC8vIHJlY3Vyc2l2ZSBjYWxsXG5cdFx0cmV0dXJuIG5ldyBRUlBvbHlub21pYWwobnVtLCAwKS5tb2QoZSk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUVJQb2x5bm9taWFsO1xuIiwidmFyIEJpdEJ5dGUgPSByZXF1aXJlKCcuLzhCaXRCeXRlJyk7XG52YXIgUlNCbG9jayA9IHJlcXVpcmUoJy4vUlNCbG9jaycpO1xudmFyIEJpdEJ1ZmZlciA9IHJlcXVpcmUoJy4vQml0QnVmZmVyJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xudmFyIFBvbHlub21pYWwgPSByZXF1aXJlKCcuL1BvbHlub21pYWwnKTtcblxuZnVuY3Rpb24gUVJDb2RlKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKSB7XG5cdHRoaXMudHlwZU51bWJlciA9IHR5cGVOdW1iZXI7XG5cdHRoaXMuZXJyb3JDb3JyZWN0TGV2ZWwgPSBlcnJvckNvcnJlY3RMZXZlbDtcblx0dGhpcy5tb2R1bGVzID0gbnVsbDtcblx0dGhpcy5tb2R1bGVDb3VudCA9IDA7XG5cdHRoaXMuZGF0YUNhY2hlID0gbnVsbDtcblx0dGhpcy5kYXRhTGlzdCA9IFtdO1xufVxuXG4vLyBmb3IgY2xpZW50IHNpZGUgbWluaWZpY2F0aW9uXG52YXIgcHJvdG8gPSBRUkNvZGUucHJvdG90eXBlO1xuXG5wcm90by5hZGREYXRhID0gZnVuY3Rpb24oZGF0YSkge1xuXHR2YXIgbmV3RGF0YSA9IG5ldyBCaXRCeXRlKGRhdGEpO1xuXHR0aGlzLmRhdGFMaXN0LnB1c2gobmV3RGF0YSk7XG5cdHRoaXMuZGF0YUNhY2hlID0gbnVsbDtcbn07XG5cbnByb3RvLmlzRGFyayA9IGZ1bmN0aW9uKHJvdywgY29sKSB7XG5cdGlmIChyb3cgPCAwIHx8IHRoaXMubW9kdWxlQ291bnQgPD0gcm93IHx8IGNvbCA8IDAgfHwgdGhpcy5tb2R1bGVDb3VudCA8PSBjb2wpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3Iocm93ICsgXCIsXCIgKyBjb2wpO1xuXHR9XG5cdHJldHVybiB0aGlzLm1vZHVsZXNbcm93XVtjb2xdO1xufTtcblxucHJvdG8uZ2V0TW9kdWxlQ291bnQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMubW9kdWxlQ291bnQ7XG59O1xuXG5wcm90by5tYWtlID0gZnVuY3Rpb24oKSB7XG5cdC8vIENhbGN1bGF0ZSBhdXRvbWF0aWNhbGx5IHR5cGVOdW1iZXIgaWYgcHJvdmlkZWQgaXMgPCAxXG5cdGlmICh0aGlzLnR5cGVOdW1iZXIgPCAxICl7XG5cdFx0dmFyIHR5cGVOdW1iZXIgPSAxO1xuXHRcdGZvciAodHlwZU51bWJlciA9IDE7IHR5cGVOdW1iZXIgPCA0MDsgdHlwZU51bWJlcisrKSB7XG5cdFx0XHR2YXIgcnNCbG9ja3MgPSBSU0Jsb2NrLmdldFJTQmxvY2tzKHR5cGVOdW1iZXIsIHRoaXMuZXJyb3JDb3JyZWN0TGV2ZWwpO1xuXG5cdFx0XHR2YXIgYnVmZmVyID0gbmV3IEJpdEJ1ZmZlcigpO1xuXHRcdFx0dmFyIHRvdGFsRGF0YUNvdW50ID0gMDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dG90YWxEYXRhQ291bnQgKz0gcnNCbG9ja3NbaV0uZGF0YUNvdW50O1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YUxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIGRhdGEgPSB0aGlzLmRhdGFMaXN0W2ldO1xuXHRcdFx0XHRidWZmZXIucHV0KGRhdGEubW9kZSwgNCk7XG5cdFx0XHRcdGJ1ZmZlci5wdXQoZGF0YS5nZXRMZW5ndGgoKSwgdXRpbC5nZXRMZW5ndGhJbkJpdHMoZGF0YS5tb2RlLCB0eXBlTnVtYmVyKSApO1xuXHRcdFx0XHRkYXRhLndyaXRlKGJ1ZmZlcik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpIDw9IHRvdGFsRGF0YUNvdW50ICogOClcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHRoaXMudHlwZU51bWJlciA9IHR5cGVOdW1iZXI7XG5cdH1cblx0dGhpcy5tYWtlSW1wbChmYWxzZSwgdGhpcy5nZXRCZXN0TWFza1BhdHRlcm4oKSApO1xufTtcblxucHJvdG8ubWFrZUltcGwgPSBmdW5jdGlvbih0ZXN0LCBtYXNrUGF0dGVybikge1xuXHRcblx0dGhpcy5tb2R1bGVDb3VudCA9IHRoaXMudHlwZU51bWJlciAqIDQgKyAxNztcblx0dGhpcy5tb2R1bGVzID0gbmV3IEFycmF5KHRoaXMubW9kdWxlQ291bnQpO1xuXHRcblx0Zm9yICh2YXIgcm93ID0gMDsgcm93IDwgdGhpcy5tb2R1bGVDb3VudDsgcm93KyspIHtcblx0XHRcblx0XHR0aGlzLm1vZHVsZXNbcm93XSA9IG5ldyBBcnJheSh0aGlzLm1vZHVsZUNvdW50KTtcblx0XHRcblx0XHRmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCB0aGlzLm1vZHVsZUNvdW50OyBjb2wrKykge1xuXHRcdFx0dGhpcy5tb2R1bGVzW3Jvd11bY29sXSA9IG51bGw7Ly8oY29sICsgcm93KSAlIDM7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5zZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKDAsIDApO1xuXHR0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4odGhpcy5tb2R1bGVDb3VudCAtIDcsIDApO1xuXHR0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4oMCwgdGhpcy5tb2R1bGVDb3VudCAtIDcpO1xuXHR0aGlzLnNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuKCk7XG5cdHRoaXMuc2V0dXBUaW1pbmdQYXR0ZXJuKCk7XG5cdHRoaXMuc2V0dXBUeXBlSW5mbyh0ZXN0LCBtYXNrUGF0dGVybik7XG5cdFxuXHRpZiAodGhpcy50eXBlTnVtYmVyID49IDcpIHtcblx0XHR0aGlzLnNldHVwVHlwZU51bWJlcih0ZXN0KTtcblx0fVxuXG5cdGlmICh0aGlzLmRhdGFDYWNoZSA9PSBudWxsKSB7XG5cdFx0dGhpcy5kYXRhQ2FjaGUgPSBRUkNvZGUuY3JlYXRlRGF0YSh0aGlzLnR5cGVOdW1iZXIsIHRoaXMuZXJyb3JDb3JyZWN0TGV2ZWwsIHRoaXMuZGF0YUxpc3QpO1xuXHR9XG5cblx0dGhpcy5tYXBEYXRhKHRoaXMuZGF0YUNhY2hlLCBtYXNrUGF0dGVybik7XG59O1xuXG5wcm90by5zZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuID0gZnVuY3Rpb24ocm93LCBjb2wpICB7XG5cdFxuXHRmb3IgKHZhciByID0gLTE7IHIgPD0gNzsgcisrKSB7XG5cdFx0XG5cdFx0aWYgKHJvdyArIHIgPD0gLTEgfHwgdGhpcy5tb2R1bGVDb3VudCA8PSByb3cgKyByKSBjb250aW51ZTtcblx0XHRcblx0XHRmb3IgKHZhciBjID0gLTE7IGMgPD0gNzsgYysrKSB7XG5cdFx0XHRcblx0XHRcdGlmIChjb2wgKyBjIDw9IC0xIHx8IHRoaXMubW9kdWxlQ291bnQgPD0gY29sICsgYykgY29udGludWU7XG5cdFx0XHRcblx0XHRcdGlmICggKDAgPD0gciAmJiByIDw9IDYgJiYgKGMgPT0gMCB8fCBjID09IDYpIClcblx0XHRcdFx0XHR8fCAoMCA8PSBjICYmIGMgPD0gNiAmJiAociA9PSAwIHx8IHIgPT0gNikgKVxuXHRcdFx0XHRcdHx8ICgyIDw9IHIgJiYgciA8PSA0ICYmIDIgPD0gYyAmJiBjIDw9IDQpICkge1xuXHRcdFx0XHR0aGlzLm1vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVx0XHRcblx0fVx0XHRcbn07XG5cbnByb3RvLmdldEJlc3RNYXNrUGF0dGVybiA9IGZ1bmN0aW9uKCkge1xuXG5cdHZhciBtaW5Mb3N0UG9pbnQgPSAwO1xuXHR2YXIgcGF0dGVybiA9IDA7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcblx0XHRcblx0XHR0aGlzLm1ha2VJbXBsKHRydWUsIGkpO1xuXG5cdFx0dmFyIGxvc3RQb2ludCA9IHV0aWwuZ2V0TG9zdFBvaW50KHRoaXMpO1xuXG5cdFx0aWYgKGkgPT0gMCB8fCBtaW5Mb3N0UG9pbnQgPiAgbG9zdFBvaW50KSB7XG5cdFx0XHRtaW5Mb3N0UG9pbnQgPSBsb3N0UG9pbnQ7XG5cdFx0XHRwYXR0ZXJuID0gaTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcGF0dGVybjtcbn07XG5cbnByb3RvLmNyZWF0ZU1vdmllQ2xpcCA9IGZ1bmN0aW9uKHRhcmdldF9tYywgaW5zdGFuY2VfbmFtZSwgZGVwdGgpIHtcblxuXHR2YXIgcXJfbWMgPSB0YXJnZXRfbWMuY3JlYXRlRW1wdHlNb3ZpZUNsaXAoaW5zdGFuY2VfbmFtZSwgZGVwdGgpO1xuXHR2YXIgY3MgPSAxO1xuXG5cdHRoaXMubWFrZSgpO1xuXG5cdGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHRoaXMubW9kdWxlcy5sZW5ndGg7IHJvdysrKSB7XG5cdFx0XG5cdFx0dmFyIHkgPSByb3cgKiBjcztcblx0XHRcblx0XHRmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCB0aGlzLm1vZHVsZXNbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG5cblx0XHRcdHZhciB4ID0gY29sICogY3M7XG5cdFx0XHR2YXIgZGFyayA9IHRoaXMubW9kdWxlc1tyb3ddW2NvbF07XG5cdFx0XG5cdFx0XHRpZiAoZGFyaykge1xuXHRcdFx0XHRxcl9tYy5iZWdpbkZpbGwoMCwgMTAwKTtcblx0XHRcdFx0cXJfbWMubW92ZVRvKHgsIHkpO1xuXHRcdFx0XHRxcl9tYy5saW5lVG8oeCArIGNzLCB5KTtcblx0XHRcdFx0cXJfbWMubGluZVRvKHggKyBjcywgeSArIGNzKTtcblx0XHRcdFx0cXJfbWMubGluZVRvKHgsIHkgKyBjcyk7XG5cdFx0XHRcdHFyX21jLmVuZEZpbGwoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdHJldHVybiBxcl9tYztcbn07XG5cbnByb3RvLnNldHVwVGltaW5nUGF0dGVybiA9IGZ1bmN0aW9uKCkge1xuXHRcblx0Zm9yICh2YXIgciA9IDg7IHIgPCB0aGlzLm1vZHVsZUNvdW50IC0gODsgcisrKSB7XG5cdFx0aWYgKHRoaXMubW9kdWxlc1tyXVs2XSAhPSBudWxsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0dGhpcy5tb2R1bGVzW3JdWzZdID0gKHIgJSAyID09IDApO1xuXHR9XG5cblx0Zm9yICh2YXIgYyA9IDg7IGMgPCB0aGlzLm1vZHVsZUNvdW50IC0gODsgYysrKSB7XG5cdFx0aWYgKHRoaXMubW9kdWxlc1s2XVtjXSAhPSBudWxsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0dGhpcy5tb2R1bGVzWzZdW2NdID0gKGMgJSAyID09IDApO1xuXHR9XG59O1xuXG5wcm90by5zZXR1cFBvc2l0aW9uQWRqdXN0UGF0dGVybiA9IGZ1bmN0aW9uKCkge1xuXG5cdHZhciBwb3MgPSB1dGlsLmdldFBhdHRlcm5Qb3NpdGlvbih0aGlzLnR5cGVOdW1iZXIpO1xuXHRcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwb3MubGVuZ3RoOyBpKyspIHtcblx0XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBwb3MubGVuZ3RoOyBqKyspIHtcblx0XHRcblx0XHRcdHZhciByb3cgPSBwb3NbaV07XG5cdFx0XHR2YXIgY29sID0gcG9zW2pdO1xuXHRcdFx0XG5cdFx0XHRpZiAodGhpcy5tb2R1bGVzW3Jvd11bY29sXSAhPSBudWxsKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRmb3IgKHZhciByID0gLTI7IHIgPD0gMjsgcisrKSB7XG5cdFx0XHRcblx0XHRcdFx0Zm9yICh2YXIgYyA9IC0yOyBjIDw9IDI7IGMrKykge1xuXHRcdFx0XHRcblx0XHRcdFx0XHRpZiAociA9PSAtMiB8fCByID09IDIgfHwgYyA9PSAtMiB8fCBjID09IDJcblx0XHRcdFx0XHRcdFx0fHwgKHIgPT0gMCAmJiBjID09IDApICkge1xuXHRcdFx0XHRcdFx0dGhpcy5tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gdHJ1ZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5wcm90by5zZXR1cFR5cGVOdW1iZXIgPSBmdW5jdGlvbih0ZXN0KSB7XG5cblx0dmFyIGJpdHMgPSB1dGlsLmdldEJDSFR5cGVOdW1iZXIodGhpcy50eXBlTnVtYmVyKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IDE4OyBpKyspIHtcblx0XHR2YXIgbW9kID0gKCF0ZXN0ICYmICggKGJpdHMgPj4gaSkgJiAxKSA9PSAxKTtcblx0XHR0aGlzLm1vZHVsZXNbTWF0aC5mbG9vcihpIC8gMyldW2kgJSAzICsgdGhpcy5tb2R1bGVDb3VudCAtIDggLSAzXSA9IG1vZDtcblx0fVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMTg7IGkrKykge1xuXHRcdHZhciBtb2QgPSAoIXRlc3QgJiYgKCAoYml0cyA+PiBpKSAmIDEpID09IDEpO1xuXHRcdHRoaXMubW9kdWxlc1tpICUgMyArIHRoaXMubW9kdWxlQ291bnQgLSA4IC0gM11bTWF0aC5mbG9vcihpIC8gMyldID0gbW9kO1xuXHR9XG59O1xuXG5wcm90by5zZXR1cFR5cGVJbmZvID0gZnVuY3Rpb24odGVzdCwgbWFza1BhdHRlcm4pIHtcblxuXHR2YXIgZGF0YSA9ICh0aGlzLmVycm9yQ29ycmVjdExldmVsIDw8IDMpIHwgbWFza1BhdHRlcm47XG5cdHZhciBiaXRzID0gdXRpbC5nZXRCQ0hUeXBlSW5mbyhkYXRhKTtcblxuXHQvLyB2ZXJ0aWNhbFx0XHRcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XG5cblx0XHR2YXIgbW9kID0gKCF0ZXN0ICYmICggKGJpdHMgPj4gaSkgJiAxKSA9PSAxKTtcblxuXHRcdGlmIChpIDwgNikge1xuXHRcdFx0dGhpcy5tb2R1bGVzW2ldWzhdID0gbW9kO1xuXHRcdH0gZWxzZSBpZiAoaSA8IDgpIHtcblx0XHRcdHRoaXMubW9kdWxlc1tpICsgMV1bOF0gPSBtb2Q7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubW9kdWxlc1t0aGlzLm1vZHVsZUNvdW50IC0gMTUgKyBpXVs4XSA9IG1vZDtcblx0XHR9XG5cdH1cblxuXHQvLyBob3Jpem9udGFsXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMTU7IGkrKykge1xuXG5cdFx0dmFyIG1vZCA9ICghdGVzdCAmJiAoIChiaXRzID4+IGkpICYgMSkgPT0gMSk7XG5cdFx0XG5cdFx0aWYgKGkgPCA4KSB7XG5cdFx0XHR0aGlzLm1vZHVsZXNbOF1bdGhpcy5tb2R1bGVDb3VudCAtIGkgLSAxXSA9IG1vZDtcblx0XHR9IGVsc2UgaWYgKGkgPCA5KSB7XG5cdFx0XHR0aGlzLm1vZHVsZXNbOF1bMTUgLSBpIC0gMSArIDFdID0gbW9kO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm1vZHVsZXNbOF1bMTUgLSBpIC0gMV0gPSBtb2Q7XG5cdFx0fVxuXHR9XG5cblx0Ly8gZml4ZWQgbW9kdWxlXG5cdHRoaXMubW9kdWxlc1t0aGlzLm1vZHVsZUNvdW50IC0gOF1bOF0gPSAoIXRlc3QpO1xufTtcblxucHJvdG8ubWFwRGF0YSA9IGZ1bmN0aW9uKGRhdGEsIG1hc2tQYXR0ZXJuKSB7XG5cdFxuXHR2YXIgaW5jID0gLTE7XG5cdHZhciByb3cgPSB0aGlzLm1vZHVsZUNvdW50IC0gMTtcblx0dmFyIGJpdEluZGV4ID0gNztcblx0dmFyIGJ5dGVJbmRleCA9IDA7XG5cdFxuXHRmb3IgKHZhciBjb2wgPSB0aGlzLm1vZHVsZUNvdW50IC0gMTsgY29sID4gMDsgY29sIC09IDIpIHtcblxuXHRcdGlmIChjb2wgPT0gNikgY29sLS07XG5cblx0XHR3aGlsZSAodHJ1ZSkge1xuXG5cdFx0XHRmb3IgKHZhciBjID0gMDsgYyA8IDI7IGMrKykge1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKHRoaXMubW9kdWxlc1tyb3ddW2NvbCAtIGNdID09IG51bGwpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR2YXIgZGFyayA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0aWYgKGJ5dGVJbmRleCA8IGRhdGEubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRkYXJrID0gKCAoIChkYXRhW2J5dGVJbmRleF0gPj4+IGJpdEluZGV4KSAmIDEpID09IDEpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciBtYXNrID0gdXRpbC5nZXRNYXNrKG1hc2tQYXR0ZXJuLCByb3csIGNvbCAtIGMpO1xuXG5cdFx0XHRcdFx0aWYgKG1hc2spIHtcblx0XHRcdFx0XHRcdGRhcmsgPSAhZGFyaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5tb2R1bGVzW3Jvd11bY29sIC0gY10gPSBkYXJrO1xuXHRcdFx0XHRcdGJpdEluZGV4LS07XG5cblx0XHRcdFx0XHRpZiAoYml0SW5kZXggPT0gLTEpIHtcblx0XHRcdFx0XHRcdGJ5dGVJbmRleCsrO1xuXHRcdFx0XHRcdFx0Yml0SW5kZXggPSA3O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdHJvdyArPSBpbmM7XG5cblx0XHRcdGlmIChyb3cgPCAwIHx8IHRoaXMubW9kdWxlQ291bnQgPD0gcm93KSB7XG5cdFx0XHRcdHJvdyAtPSBpbmM7XG5cdFx0XHRcdGluYyA9IC1pbmM7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuUVJDb2RlLlBBRDAgPSAweEVDO1xuUVJDb2RlLlBBRDEgPSAweDExO1xuXG5RUkNvZGUuY3JlYXRlRGF0YSA9IGZ1bmN0aW9uKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsLCBkYXRhTGlzdCkge1xuXHRcblx0dmFyIHJzQmxvY2tzID0gUlNCbG9jay5nZXRSU0Jsb2Nrcyh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCk7XG5cdFxuXHR2YXIgYnVmZmVyID0gbmV3IEJpdEJ1ZmZlcigpO1xuXHRcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhTGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkYXRhID0gZGF0YUxpc3RbaV07XG5cdFx0YnVmZmVyLnB1dChkYXRhLm1vZGUsIDQpO1xuXHRcdGJ1ZmZlci5wdXQoZGF0YS5nZXRMZW5ndGgoKSwgdXRpbC5nZXRMZW5ndGhJbkJpdHMoZGF0YS5tb2RlLCB0eXBlTnVtYmVyKSApO1xuXHRcdGRhdGEud3JpdGUoYnVmZmVyKTtcblx0fVxuXG5cdC8vIGNhbGMgbnVtIG1heCBkYXRhLlxuXHR2YXIgdG90YWxEYXRhQ291bnQgPSAwO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJzQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dG90YWxEYXRhQ291bnQgKz0gcnNCbG9ja3NbaV0uZGF0YUNvdW50O1xuXHR9XG5cblx0aWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSA+IHRvdGFsRGF0YUNvdW50ICogOCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcImNvZGUgbGVuZ3RoIG92ZXJmbG93LiAoXCJcblx0XHRcdCsgYnVmZmVyLmdldExlbmd0aEluQml0cygpXG5cdFx0XHQrIFwiPlwiXG5cdFx0XHQrICB0b3RhbERhdGFDb3VudCAqIDhcblx0XHRcdCsgXCIpXCIpO1xuXHR9XG5cblx0Ly8gZW5kIGNvZGVcblx0aWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSArIDQgPD0gdG90YWxEYXRhQ291bnQgKiA4KSB7XG5cdFx0YnVmZmVyLnB1dCgwLCA0KTtcblx0fVxuXG5cdC8vIHBhZGRpbmdcblx0d2hpbGUgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSAlIDggIT0gMCkge1xuXHRcdGJ1ZmZlci5wdXRCaXQoZmFsc2UpO1xuXHR9XG5cblx0Ly8gcGFkZGluZ1xuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdFxuXHRcdGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPj0gdG90YWxEYXRhQ291bnQgKiA4KSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0YnVmZmVyLnB1dChRUkNvZGUuUEFEMCwgOCk7XG5cdFx0XG5cdFx0aWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSA+PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRidWZmZXIucHV0KFFSQ29kZS5QQUQxLCA4KTtcblx0fVxuXG5cdHJldHVybiBRUkNvZGUuY3JlYXRlQnl0ZXMoYnVmZmVyLCByc0Jsb2Nrcyk7XG59O1xuXG5RUkNvZGUuY3JlYXRlQnl0ZXMgPSBmdW5jdGlvbihidWZmZXIsIHJzQmxvY2tzKSB7XG5cblx0dmFyIG9mZnNldCA9IDA7XG5cdFxuXHR2YXIgbWF4RGNDb3VudCA9IDA7XG5cdHZhciBtYXhFY0NvdW50ID0gMDtcblx0XG5cdHZhciBkY2RhdGEgPSBuZXcgQXJyYXkocnNCbG9ja3MubGVuZ3RoKTtcblx0dmFyIGVjZGF0YSA9IG5ldyBBcnJheShyc0Jsb2Nrcy5sZW5ndGgpO1xuXHRcblx0Zm9yICh2YXIgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xuXG5cdFx0dmFyIGRjQ291bnQgPSByc0Jsb2Nrc1tyXS5kYXRhQ291bnQ7XG5cdFx0dmFyIGVjQ291bnQgPSByc0Jsb2Nrc1tyXS50b3RhbENvdW50IC0gZGNDb3VudDtcblxuXHRcdG1heERjQ291bnQgPSBNYXRoLm1heChtYXhEY0NvdW50LCBkY0NvdW50KTtcblx0XHRtYXhFY0NvdW50ID0gTWF0aC5tYXgobWF4RWNDb3VudCwgZWNDb3VudCk7XG5cdFx0XG5cdFx0ZGNkYXRhW3JdID0gbmV3IEFycmF5KGRjQ291bnQpO1xuXHRcdFxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGNkYXRhW3JdLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRkY2RhdGFbcl1baV0gPSAweGZmICYgYnVmZmVyLmJ1ZmZlcltpICsgb2Zmc2V0XTtcblx0XHR9XG5cdFx0b2Zmc2V0ICs9IGRjQ291bnQ7XG5cdFx0XG5cdFx0dmFyIHJzUG9seSA9IHV0aWwuZ2V0RXJyb3JDb3JyZWN0UG9seW5vbWlhbChlY0NvdW50KTtcblx0XHR2YXIgcmF3UG9seSA9IG5ldyBQb2x5bm9taWFsKGRjZGF0YVtyXSwgcnNQb2x5LmdldExlbmd0aCgpIC0gMSk7XG5cblx0XHR2YXIgbW9kUG9seSA9IHJhd1BvbHkubW9kKHJzUG9seSk7XG5cdFx0ZWNkYXRhW3JdID0gbmV3IEFycmF5KHJzUG9seS5nZXRMZW5ndGgoKSAtIDEpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZWNkYXRhW3JdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbW9kSW5kZXggPSBpICsgbW9kUG9seS5nZXRMZW5ndGgoKSAtIGVjZGF0YVtyXS5sZW5ndGg7XG5cdFx0XHRlY2RhdGFbcl1baV0gPSAobW9kSW5kZXggPj0gMCk/IG1vZFBvbHkuZ2V0KG1vZEluZGV4KSA6IDA7XG5cdFx0fVxuXG5cdH1cblx0XG5cdHZhciB0b3RhbENvZGVDb3VudCA9IDA7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcblx0XHR0b3RhbENvZGVDb3VudCArPSByc0Jsb2Nrc1tpXS50b3RhbENvdW50O1xuXHR9XG5cblx0dmFyIGRhdGEgPSBuZXcgQXJyYXkodG90YWxDb2RlQ291bnQpO1xuXHR2YXIgaW5kZXggPSAwO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbWF4RGNDb3VudDsgaSsrKSB7XG5cdFx0Zm9yICh2YXIgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xuXHRcdFx0aWYgKGkgPCBkY2RhdGFbcl0ubGVuZ3RoKSB7XG5cdFx0XHRcdGRhdGFbaW5kZXgrK10gPSBkY2RhdGFbcl1baV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXhFY0NvdW50OyBpKyspIHtcblx0XHRmb3IgKHZhciByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgcisrKSB7XG5cdFx0XHRpZiAoaSA8IGVjZGF0YVtyXS5sZW5ndGgpIHtcblx0XHRcdFx0ZGF0YVtpbmRleCsrXSA9IGVjZGF0YVtyXVtpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZGF0YTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUVJDb2RlO1xuXG4iLCIvLyBFcnJvckNvcnJlY3RMZXZlbFxudmFyIEVDTCA9IHJlcXVpcmUoJy4vRXJyb3JDb3JyZWN0TGV2ZWwnKTtcblxuZnVuY3Rpb24gUVJSU0Jsb2NrKHRvdGFsQ291bnQsIGRhdGFDb3VudCkge1xuXHR0aGlzLnRvdGFsQ291bnQgPSB0b3RhbENvdW50O1xuXHR0aGlzLmRhdGFDb3VudCAgPSBkYXRhQ291bnQ7XG59XG5cblFSUlNCbG9jay5SU19CTE9DS19UQUJMRSA9IFtcblxuXHQvLyBMXG5cdC8vIE1cblx0Ly8gUVxuXHQvLyBIXG5cblx0Ly8gMVxuXHRbMSwgMjYsIDE5XSxcblx0WzEsIDI2LCAxNl0sXG5cdFsxLCAyNiwgMTNdLFxuXHRbMSwgMjYsIDldLFxuXHRcblx0Ly8gMlxuXHRbMSwgNDQsIDM0XSxcblx0WzEsIDQ0LCAyOF0sXG5cdFsxLCA0NCwgMjJdLFxuXHRbMSwgNDQsIDE2XSxcblxuXHQvLyAzXG5cdFsxLCA3MCwgNTVdLFxuXHRbMSwgNzAsIDQ0XSxcblx0WzIsIDM1LCAxN10sXG5cdFsyLCAzNSwgMTNdLFxuXG5cdC8vIDRcdFx0XG5cdFsxLCAxMDAsIDgwXSxcblx0WzIsIDUwLCAzMl0sXG5cdFsyLCA1MCwgMjRdLFxuXHRbNCwgMjUsIDldLFxuXHRcblx0Ly8gNVxuXHRbMSwgMTM0LCAxMDhdLFxuXHRbMiwgNjcsIDQzXSxcblx0WzIsIDMzLCAxNSwgMiwgMzQsIDE2XSxcblx0WzIsIDMzLCAxMSwgMiwgMzQsIDEyXSxcblx0XG5cdC8vIDZcblx0WzIsIDg2LCA2OF0sXG5cdFs0LCA0MywgMjddLFxuXHRbNCwgNDMsIDE5XSxcblx0WzQsIDQzLCAxNV0sXG5cdFxuXHQvLyA3XHRcdFxuXHRbMiwgOTgsIDc4XSxcblx0WzQsIDQ5LCAzMV0sXG5cdFsyLCAzMiwgMTQsIDQsIDMzLCAxNV0sXG5cdFs0LCAzOSwgMTMsIDEsIDQwLCAxNF0sXG5cdFxuXHQvLyA4XG5cdFsyLCAxMjEsIDk3XSxcblx0WzIsIDYwLCAzOCwgMiwgNjEsIDM5XSxcblx0WzQsIDQwLCAxOCwgMiwgNDEsIDE5XSxcblx0WzQsIDQwLCAxNCwgMiwgNDEsIDE1XSxcblx0XG5cdC8vIDlcblx0WzIsIDE0NiwgMTE2XSxcblx0WzMsIDU4LCAzNiwgMiwgNTksIDM3XSxcblx0WzQsIDM2LCAxNiwgNCwgMzcsIDE3XSxcblx0WzQsIDM2LCAxMiwgNCwgMzcsIDEzXSxcblx0XG5cdC8vIDEwXHRcdFxuXHRbMiwgODYsIDY4LCAyLCA4NywgNjldLFxuXHRbNCwgNjksIDQzLCAxLCA3MCwgNDRdLFxuXHRbNiwgNDMsIDE5LCAyLCA0NCwgMjBdLFxuXHRbNiwgNDMsIDE1LCAyLCA0NCwgMTZdLFxuXG5cdC8vIDExXG5cdFs0LCAxMDEsIDgxXSxcblx0WzEsIDgwLCA1MCwgNCwgODEsIDUxXSxcblx0WzQsIDUwLCAyMiwgNCwgNTEsIDIzXSxcblx0WzMsIDM2LCAxMiwgOCwgMzcsIDEzXSxcblxuXHQvLyAxMlxuXHRbMiwgMTE2LCA5MiwgMiwgMTE3LCA5M10sXG5cdFs2LCA1OCwgMzYsIDIsIDU5LCAzN10sXG5cdFs0LCA0NiwgMjAsIDYsIDQ3LCAyMV0sXG5cdFs3LCA0MiwgMTQsIDQsIDQzLCAxNV0sXG5cblx0Ly8gMTNcblx0WzQsIDEzMywgMTA3XSxcblx0WzgsIDU5LCAzNywgMSwgNjAsIDM4XSxcblx0WzgsIDQ0LCAyMCwgNCwgNDUsIDIxXSxcblx0WzEyLCAzMywgMTEsIDQsIDM0LCAxMl0sXG5cblx0Ly8gMTRcblx0WzMsIDE0NSwgMTE1LCAxLCAxNDYsIDExNl0sXG5cdFs0LCA2NCwgNDAsIDUsIDY1LCA0MV0sXG5cdFsxMSwgMzYsIDE2LCA1LCAzNywgMTddLFxuXHRbMTEsIDM2LCAxMiwgNSwgMzcsIDEzXSxcblxuXHQvLyAxNVxuXHRbNSwgMTA5LCA4NywgMSwgMTEwLCA4OF0sXG5cdFs1LCA2NSwgNDEsIDUsIDY2LCA0Ml0sXG5cdFs1LCA1NCwgMjQsIDcsIDU1LCAyNV0sXG5cdFsxMSwgMzYsIDEyXSxcblxuXHQvLyAxNlxuXHRbNSwgMTIyLCA5OCwgMSwgMTIzLCA5OV0sXG5cdFs3LCA3MywgNDUsIDMsIDc0LCA0Nl0sXG5cdFsxNSwgNDMsIDE5LCAyLCA0NCwgMjBdLFxuXHRbMywgNDUsIDE1LCAxMywgNDYsIDE2XSxcblxuXHQvLyAxN1xuXHRbMSwgMTM1LCAxMDcsIDUsIDEzNiwgMTA4XSxcblx0WzEwLCA3NCwgNDYsIDEsIDc1LCA0N10sXG5cdFsxLCA1MCwgMjIsIDE1LCA1MSwgMjNdLFxuXHRbMiwgNDIsIDE0LCAxNywgNDMsIDE1XSxcblxuXHQvLyAxOFxuXHRbNSwgMTUwLCAxMjAsIDEsIDE1MSwgMTIxXSxcblx0WzksIDY5LCA0MywgNCwgNzAsIDQ0XSxcblx0WzE3LCA1MCwgMjIsIDEsIDUxLCAyM10sXG5cdFsyLCA0MiwgMTQsIDE5LCA0MywgMTVdLFxuXG5cdC8vIDE5XG5cdFszLCAxNDEsIDExMywgNCwgMTQyLCAxMTRdLFxuXHRbMywgNzAsIDQ0LCAxMSwgNzEsIDQ1XSxcblx0WzE3LCA0NywgMjEsIDQsIDQ4LCAyMl0sXG5cdFs5LCAzOSwgMTMsIDE2LCA0MCwgMTRdLFxuXG5cdC8vIDIwXG5cdFszLCAxMzUsIDEwNywgNSwgMTM2LCAxMDhdLFxuXHRbMywgNjcsIDQxLCAxMywgNjgsIDQyXSxcblx0WzE1LCA1NCwgMjQsIDUsIDU1LCAyNV0sXG5cdFsxNSwgNDMsIDE1LCAxMCwgNDQsIDE2XSxcblxuXHQvLyAyMVxuXHRbNCwgMTQ0LCAxMTYsIDQsIDE0NSwgMTE3XSxcblx0WzE3LCA2OCwgNDJdLFxuXHRbMTcsIDUwLCAyMiwgNiwgNTEsIDIzXSxcblx0WzE5LCA0NiwgMTYsIDYsIDQ3LCAxN10sXG5cblx0Ly8gMjJcblx0WzIsIDEzOSwgMTExLCA3LCAxNDAsIDExMl0sXG5cdFsxNywgNzQsIDQ2XSxcblx0WzcsIDU0LCAyNCwgMTYsIDU1LCAyNV0sXG5cdFszNCwgMzcsIDEzXSxcblxuXHQvLyAyM1xuXHRbNCwgMTUxLCAxMjEsIDUsIDE1MiwgMTIyXSxcblx0WzQsIDc1LCA0NywgMTQsIDc2LCA0OF0sXG5cdFsxMSwgNTQsIDI0LCAxNCwgNTUsIDI1XSxcblx0WzE2LCA0NSwgMTUsIDE0LCA0NiwgMTZdLFxuXG5cdC8vIDI0XG5cdFs2LCAxNDcsIDExNywgNCwgMTQ4LCAxMThdLFxuXHRbNiwgNzMsIDQ1LCAxNCwgNzQsIDQ2XSxcblx0WzExLCA1NCwgMjQsIDE2LCA1NSwgMjVdLFxuXHRbMzAsIDQ2LCAxNiwgMiwgNDcsIDE3XSxcblxuXHQvLyAyNVxuXHRbOCwgMTMyLCAxMDYsIDQsIDEzMywgMTA3XSxcblx0WzgsIDc1LCA0NywgMTMsIDc2LCA0OF0sXG5cdFs3LCA1NCwgMjQsIDIyLCA1NSwgMjVdLFxuXHRbMjIsIDQ1LCAxNSwgMTMsIDQ2LCAxNl0sXG5cblx0Ly8gMjZcblx0WzEwLCAxNDIsIDExNCwgMiwgMTQzLCAxMTVdLFxuXHRbMTksIDc0LCA0NiwgNCwgNzUsIDQ3XSxcblx0WzI4LCA1MCwgMjIsIDYsIDUxLCAyM10sXG5cdFszMywgNDYsIDE2LCA0LCA0NywgMTddLFxuXG5cdC8vIDI3XG5cdFs4LCAxNTIsIDEyMiwgNCwgMTUzLCAxMjNdLFxuXHRbMjIsIDczLCA0NSwgMywgNzQsIDQ2XSxcblx0WzgsIDUzLCAyMywgMjYsIDU0LCAyNF0sXG5cdFsxMiwgNDUsIDE1LCAyOCwgNDYsIDE2XSxcblxuXHQvLyAyOFxuXHRbMywgMTQ3LCAxMTcsIDEwLCAxNDgsIDExOF0sXG5cdFszLCA3MywgNDUsIDIzLCA3NCwgNDZdLFxuXHRbNCwgNTQsIDI0LCAzMSwgNTUsIDI1XSxcblx0WzExLCA0NSwgMTUsIDMxLCA0NiwgMTZdLFxuXG5cdC8vIDI5XG5cdFs3LCAxNDYsIDExNiwgNywgMTQ3LCAxMTddLFxuXHRbMjEsIDczLCA0NSwgNywgNzQsIDQ2XSxcblx0WzEsIDUzLCAyMywgMzcsIDU0LCAyNF0sXG5cdFsxOSwgNDUsIDE1LCAyNiwgNDYsIDE2XSxcblxuXHQvLyAzMFxuXHRbNSwgMTQ1LCAxMTUsIDEwLCAxNDYsIDExNl0sXG5cdFsxOSwgNzUsIDQ3LCAxMCwgNzYsIDQ4XSxcblx0WzE1LCA1NCwgMjQsIDI1LCA1NSwgMjVdLFxuXHRbMjMsIDQ1LCAxNSwgMjUsIDQ2LCAxNl0sXG5cblx0Ly8gMzFcblx0WzEzLCAxNDUsIDExNSwgMywgMTQ2LCAxMTZdLFxuXHRbMiwgNzQsIDQ2LCAyOSwgNzUsIDQ3XSxcblx0WzQyLCA1NCwgMjQsIDEsIDU1LCAyNV0sXG5cdFsyMywgNDUsIDE1LCAyOCwgNDYsIDE2XSxcblxuXHQvLyAzMlxuXHRbMTcsIDE0NSwgMTE1XSxcblx0WzEwLCA3NCwgNDYsIDIzLCA3NSwgNDddLFxuXHRbMTAsIDU0LCAyNCwgMzUsIDU1LCAyNV0sXG5cdFsxOSwgNDUsIDE1LCAzNSwgNDYsIDE2XSxcblxuXHQvLyAzM1xuXHRbMTcsIDE0NSwgMTE1LCAxLCAxNDYsIDExNl0sXG5cdFsxNCwgNzQsIDQ2LCAyMSwgNzUsIDQ3XSxcblx0WzI5LCA1NCwgMjQsIDE5LCA1NSwgMjVdLFxuXHRbMTEsIDQ1LCAxNSwgNDYsIDQ2LCAxNl0sXG5cblx0Ly8gMzRcblx0WzEzLCAxNDUsIDExNSwgNiwgMTQ2LCAxMTZdLFxuXHRbMTQsIDc0LCA0NiwgMjMsIDc1LCA0N10sXG5cdFs0NCwgNTQsIDI0LCA3LCA1NSwgMjVdLFxuXHRbNTksIDQ2LCAxNiwgMSwgNDcsIDE3XSxcblxuXHQvLyAzNVxuXHRbMTIsIDE1MSwgMTIxLCA3LCAxNTIsIDEyMl0sXG5cdFsxMiwgNzUsIDQ3LCAyNiwgNzYsIDQ4XSxcblx0WzM5LCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxuXHRbMjIsIDQ1LCAxNSwgNDEsIDQ2LCAxNl0sXG5cblx0Ly8gMzZcblx0WzYsIDE1MSwgMTIxLCAxNCwgMTUyLCAxMjJdLFxuXHRbNiwgNzUsIDQ3LCAzNCwgNzYsIDQ4XSxcblx0WzQ2LCA1NCwgMjQsIDEwLCA1NSwgMjVdLFxuXHRbMiwgNDUsIDE1LCA2NCwgNDYsIDE2XSxcblxuXHQvLyAzN1xuXHRbMTcsIDE1MiwgMTIyLCA0LCAxNTMsIDEyM10sXG5cdFsyOSwgNzQsIDQ2LCAxNCwgNzUsIDQ3XSxcblx0WzQ5LCA1NCwgMjQsIDEwLCA1NSwgMjVdLFxuXHRbMjQsIDQ1LCAxNSwgNDYsIDQ2LCAxNl0sXG5cblx0Ly8gMzhcblx0WzQsIDE1MiwgMTIyLCAxOCwgMTUzLCAxMjNdLFxuXHRbMTMsIDc0LCA0NiwgMzIsIDc1LCA0N10sXG5cdFs0OCwgNTQsIDI0LCAxNCwgNTUsIDI1XSxcblx0WzQyLCA0NSwgMTUsIDMyLCA0NiwgMTZdLFxuXG5cdC8vIDM5XG5cdFsyMCwgMTQ3LCAxMTcsIDQsIDE0OCwgMTE4XSxcblx0WzQwLCA3NSwgNDcsIDcsIDc2LCA0OF0sXG5cdFs0MywgNTQsIDI0LCAyMiwgNTUsIDI1XSxcblx0WzEwLCA0NSwgMTUsIDY3LCA0NiwgMTZdLFxuXG5cdC8vIDQwXG5cdFsxOSwgMTQ4LCAxMTgsIDYsIDE0OSwgMTE5XSxcblx0WzE4LCA3NSwgNDcsIDMxLCA3NiwgNDhdLFxuXHRbMzQsIDU0LCAyNCwgMzQsIDU1LCAyNV0sXG5cdFsyMCwgNDUsIDE1LCA2MSwgNDYsIDE2XVxuXTtcblxuUVJSU0Jsb2NrLmdldFJTQmxvY2tzID0gZnVuY3Rpb24odHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpIHtcblx0XG5cdHZhciByc0Jsb2NrID0gUVJSU0Jsb2NrLmdldFJzQmxvY2tUYWJsZSh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCk7XG5cdFxuXHRpZiAocnNCbG9jayA9PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJiYWQgcnMgYmxvY2sgQCB0eXBlTnVtYmVyOlwiICsgdHlwZU51bWJlciArIFwiL2Vycm9yQ29ycmVjdExldmVsOlwiICsgZXJyb3JDb3JyZWN0TGV2ZWwpO1xuXHR9XG5cblx0dmFyIGxlbmd0aCA9IHJzQmxvY2subGVuZ3RoIC8gMztcblx0XG5cdHZhciBsaXN0ID0gbmV3IEFycmF5KCk7XG5cdFxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cblx0XHR2YXIgY291bnQgPSByc0Jsb2NrW2kgKiAzICsgMF07XG5cdFx0dmFyIHRvdGFsQ291bnQgPSByc0Jsb2NrW2kgKiAzICsgMV07XG5cdFx0dmFyIGRhdGFDb3VudCAgPSByc0Jsb2NrW2kgKiAzICsgMl07XG5cblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcblx0XHRcdGxpc3QucHVzaChuZXcgUVJSU0Jsb2NrKHRvdGFsQ291bnQsIGRhdGFDb3VudCkgKTtcdFxuXHRcdH1cblx0fVxuXHRcblx0cmV0dXJuIGxpc3Q7XG59XG5cblFSUlNCbG9jay5nZXRSc0Jsb2NrVGFibGUgPSBmdW5jdGlvbih0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCkge1xuXG5cdHN3aXRjaChlcnJvckNvcnJlY3RMZXZlbCkge1xuXHRjYXNlIEVDTC5MIDpcblx0XHRyZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMF07XG5cdGNhc2UgRUNMLk0gOlxuXHRcdHJldHVybiBRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAxXTtcblx0Y2FzZSBFQ0wuUSA6XG5cdFx0cmV0dXJuIFFSUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDJdO1xuXHRjYXNlIEVDTC5IIDpcblx0XHRyZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgM107XG5cdGRlZmF1bHQgOlxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRUlJTQmxvY2s7XG4iLCJ2YXIgUVJNYXRoID0ge1xuXG5cdGdsb2cgOiBmdW5jdGlvbihuKSB7XG5cdFxuXHRcdGlmIChuIDwgMSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiZ2xvZyhcIiArIG4gKyBcIilcIik7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBRUk1hdGguTE9HX1RBQkxFW25dO1xuXHR9LFxuXHRcblx0Z2V4cCA6IGZ1bmN0aW9uKG4pIHtcblx0XG5cdFx0d2hpbGUgKG4gPCAwKSB7XG5cdFx0XHRuICs9IDI1NTtcblx0XHR9XG5cdFxuXHRcdHdoaWxlIChuID49IDI1Nikge1xuXHRcdFx0biAtPSAyNTU7XG5cdFx0fVxuXHRcblx0XHRyZXR1cm4gUVJNYXRoLkVYUF9UQUJMRVtuXTtcblx0fSxcblx0XG5cdEVYUF9UQUJMRSA6IG5ldyBBcnJheSgyNTYpLFxuXHRcblx0TE9HX1RBQkxFIDogbmV3IEFycmF5KDI1NilcblxufTtcblx0XG5mb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRRUk1hdGguRVhQX1RBQkxFW2ldID0gMSA8PCBpO1xufVxuZm9yICh2YXIgaSA9IDg7IGkgPCAyNTY7IGkrKykge1xuXHRRUk1hdGguRVhQX1RBQkxFW2ldID0gUVJNYXRoLkVYUF9UQUJMRVtpIC0gNF1cblx0XHReIFFSTWF0aC5FWFBfVEFCTEVbaSAtIDVdXG5cdFx0XiBRUk1hdGguRVhQX1RBQkxFW2kgLSA2XVxuXHRcdF4gUVJNYXRoLkVYUF9UQUJMRVtpIC0gOF07XG59XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NTsgaSsrKSB7XG5cdFFSTWF0aC5MT0dfVEFCTEVbUVJNYXRoLkVYUF9UQUJMRVtpXSBdID0gaTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRUk1hdGg7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0TU9ERV9OVU1CRVIgOlx0XHQxIDw8IDAsXG5cdE1PREVfQUxQSEFfTlVNIDogXHQxIDw8IDEsXG5cdE1PREVfOEJJVF9CWVRFIDogXHQxIDw8IDIsXG5cdE1PREVfS0FOSkkgOlx0XHQxIDw8IDNcbn07XG4iLCJ2YXIgTW9kZSA9IHJlcXVpcmUoJy4vbW9kZScpO1xudmFyIFBvbHlub21pYWwgPSByZXF1aXJlKCcuL1BvbHlub21pYWwnKTtcbnZhciBtYXRoID0gcmVxdWlyZSgnLi9tYXRoJyk7XG5cbnZhciBRUk1hc2tQYXR0ZXJuID0ge1xuXHRQQVRURVJOMDAwIDogMCxcblx0UEFUVEVSTjAwMSA6IDEsXG5cdFBBVFRFUk4wMTAgOiAyLFxuXHRQQVRURVJOMDExIDogMyxcblx0UEFUVEVSTjEwMCA6IDQsXG5cdFBBVFRFUk4xMDEgOiA1LFxuXHRQQVRURVJOMTEwIDogNixcblx0UEFUVEVSTjExMSA6IDdcbn07XG5cbnZhciBRUlV0aWwgPSB7XG5cbiAgICBQQVRURVJOX1BPU0lUSU9OX1RBQkxFIDogW1xuXHQgICAgW10sXG5cdCAgICBbNiwgMThdLFxuXHQgICAgWzYsIDIyXSxcblx0ICAgIFs2LCAyNl0sXG5cdCAgICBbNiwgMzBdLFxuXHQgICAgWzYsIDM0XSxcblx0ICAgIFs2LCAyMiwgMzhdLFxuXHQgICAgWzYsIDI0LCA0Ml0sXG5cdCAgICBbNiwgMjYsIDQ2XSxcblx0ICAgIFs2LCAyOCwgNTBdLFxuXHQgICAgWzYsIDMwLCA1NF0sXHRcdFxuXHQgICAgWzYsIDMyLCA1OF0sXG5cdCAgICBbNiwgMzQsIDYyXSxcblx0ICAgIFs2LCAyNiwgNDYsIDY2XSxcblx0ICAgIFs2LCAyNiwgNDgsIDcwXSxcblx0ICAgIFs2LCAyNiwgNTAsIDc0XSxcblx0ICAgIFs2LCAzMCwgNTQsIDc4XSxcblx0ICAgIFs2LCAzMCwgNTYsIDgyXSxcblx0ICAgIFs2LCAzMCwgNTgsIDg2XSxcblx0ICAgIFs2LCAzNCwgNjIsIDkwXSxcblx0ICAgIFs2LCAyOCwgNTAsIDcyLCA5NF0sXG5cdCAgICBbNiwgMjYsIDUwLCA3NCwgOThdLFxuXHQgICAgWzYsIDMwLCA1NCwgNzgsIDEwMl0sXG5cdCAgICBbNiwgMjgsIDU0LCA4MCwgMTA2XSxcblx0ICAgIFs2LCAzMiwgNTgsIDg0LCAxMTBdLFxuXHQgICAgWzYsIDMwLCA1OCwgODYsIDExNF0sXG5cdCAgICBbNiwgMzQsIDYyLCA5MCwgMTE4XSxcblx0ICAgIFs2LCAyNiwgNTAsIDc0LCA5OCwgMTIyXSxcblx0ICAgIFs2LCAzMCwgNTQsIDc4LCAxMDIsIDEyNl0sXG5cdCAgICBbNiwgMjYsIDUyLCA3OCwgMTA0LCAxMzBdLFxuXHQgICAgWzYsIDMwLCA1NiwgODIsIDEwOCwgMTM0XSxcblx0ICAgIFs2LCAzNCwgNjAsIDg2LCAxMTIsIDEzOF0sXG5cdCAgICBbNiwgMzAsIDU4LCA4NiwgMTE0LCAxNDJdLFxuXHQgICAgWzYsIDM0LCA2MiwgOTAsIDExOCwgMTQ2XSxcblx0ICAgIFs2LCAzMCwgNTQsIDc4LCAxMDIsIDEyNiwgMTUwXSxcblx0ICAgIFs2LCAyNCwgNTAsIDc2LCAxMDIsIDEyOCwgMTU0XSxcblx0ICAgIFs2LCAyOCwgNTQsIDgwLCAxMDYsIDEzMiwgMTU4XSxcblx0ICAgIFs2LCAzMiwgNTgsIDg0LCAxMTAsIDEzNiwgMTYyXSxcblx0ICAgIFs2LCAyNiwgNTQsIDgyLCAxMTAsIDEzOCwgMTY2XSxcblx0ICAgIFs2LCAzMCwgNTgsIDg2LCAxMTQsIDE0MiwgMTcwXVxuICAgIF0sXG5cbiAgICBHMTUgOiAoMSA8PCAxMCkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpIHwgKDEgPDwgNCkgfCAoMSA8PCAyKSB8ICgxIDw8IDEpIHwgKDEgPDwgMCksXG4gICAgRzE4IDogKDEgPDwgMTIpIHwgKDEgPDwgMTEpIHwgKDEgPDwgMTApIHwgKDEgPDwgOSkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpIHwgKDEgPDwgMikgfCAoMSA8PCAwKSxcbiAgICBHMTVfTUFTSyA6ICgxIDw8IDE0KSB8ICgxIDw8IDEyKSB8ICgxIDw8IDEwKVx0fCAoMSA8PCA0KSB8ICgxIDw8IDEpLFxuXG4gICAgZ2V0QkNIVHlwZUluZm8gOiBmdW5jdGlvbihkYXRhKSB7XG5cdCAgICB2YXIgZCA9IGRhdGEgPDwgMTA7XG5cdCAgICB3aGlsZSAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTUpID49IDApIHtcblx0XHQgICAgZCBePSAoUVJVdGlsLkcxNSA8PCAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTUpICkgKTsgXHRcblx0ICAgIH1cblx0ICAgIHJldHVybiAoIChkYXRhIDw8IDEwKSB8IGQpIF4gUVJVdGlsLkcxNV9NQVNLO1xuICAgIH0sXG5cbiAgICBnZXRCQ0hUeXBlTnVtYmVyIDogZnVuY3Rpb24oZGF0YSkge1xuXHQgICAgdmFyIGQgPSBkYXRhIDw8IDEyO1xuXHQgICAgd2hpbGUgKFFSVXRpbC5nZXRCQ0hEaWdpdChkKSAtIFFSVXRpbC5nZXRCQ0hEaWdpdChRUlV0aWwuRzE4KSA+PSAwKSB7XG5cdFx0ICAgIGQgXj0gKFFSVXRpbC5HMTggPDwgKFFSVXRpbC5nZXRCQ0hEaWdpdChkKSAtIFFSVXRpbC5nZXRCQ0hEaWdpdChRUlV0aWwuRzE4KSApICk7IFx0XG5cdCAgICB9XG5cdCAgICByZXR1cm4gKGRhdGEgPDwgMTIpIHwgZDtcbiAgICB9LFxuXG4gICAgZ2V0QkNIRGlnaXQgOiBmdW5jdGlvbihkYXRhKSB7XG5cblx0ICAgIHZhciBkaWdpdCA9IDA7XG5cblx0ICAgIHdoaWxlIChkYXRhICE9IDApIHtcblx0XHQgICAgZGlnaXQrKztcblx0XHQgICAgZGF0YSA+Pj49IDE7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBkaWdpdDtcbiAgICB9LFxuXG4gICAgZ2V0UGF0dGVyblBvc2l0aW9uIDogZnVuY3Rpb24odHlwZU51bWJlcikge1xuXHQgICAgcmV0dXJuIFFSVXRpbC5QQVRURVJOX1BPU0lUSU9OX1RBQkxFW3R5cGVOdW1iZXIgLSAxXTtcbiAgICB9LFxuXG4gICAgZ2V0TWFzayA6IGZ1bmN0aW9uKG1hc2tQYXR0ZXJuLCBpLCBqKSB7XG5cdCAgICBcblx0ICAgIHN3aXRjaCAobWFza1BhdHRlcm4pIHtcblx0XHQgICAgXG5cdCAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAwMCA6IHJldHVybiAoaSArIGopICUgMiA9PSAwO1xuXHQgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMDEgOiByZXR1cm4gaSAlIDIgPT0gMDtcblx0ICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDEwIDogcmV0dXJuIGogJSAzID09IDA7XG5cdCAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAxMSA6IHJldHVybiAoaSArIGopICUgMyA9PSAwO1xuXHQgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMDAgOiByZXR1cm4gKE1hdGguZmxvb3IoaSAvIDIpICsgTWF0aC5mbG9vcihqIC8gMykgKSAlIDIgPT0gMDtcblx0ICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTAxIDogcmV0dXJuIChpICogaikgJSAyICsgKGkgKiBqKSAlIDMgPT0gMDtcblx0ICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTEwIDogcmV0dXJuICggKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMykgJSAyID09IDA7XG5cdCAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjExMSA6IHJldHVybiAoIChpICogaikgJSAzICsgKGkgKyBqKSAlIDIpICUgMiA9PSAwO1xuXG5cdCAgICBkZWZhdWx0IDpcblx0XHQgICAgdGhyb3cgbmV3IEVycm9yKFwiYmFkIG1hc2tQYXR0ZXJuOlwiICsgbWFza1BhdHRlcm4pO1xuXHQgICAgfVxuICAgIH0sXG5cbiAgICBnZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsIDogZnVuY3Rpb24oZXJyb3JDb3JyZWN0TGVuZ3RoKSB7XG5cblx0ICAgIHZhciBhID0gbmV3IFBvbHlub21pYWwoWzFdLCAwKTtcblxuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlcnJvckNvcnJlY3RMZW5ndGg7IGkrKykge1xuXHRcdCAgICBhID0gYS5tdWx0aXBseShuZXcgUG9seW5vbWlhbChbMSwgbWF0aC5nZXhwKGkpXSwgMCkgKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGE7XG4gICAgfSxcblxuICAgIGdldExlbmd0aEluQml0cyA6IGZ1bmN0aW9uKG1vZGUsIHR5cGUpIHtcblxuXHQgICAgaWYgKDEgPD0gdHlwZSAmJiB0eXBlIDwgMTApIHtcblxuXHRcdCAgICAvLyAxIC0gOVxuXG5cdFx0ICAgIHN3aXRjaChtb2RlKSB7XG5cdFx0ICAgIGNhc2UgTW9kZS5NT0RFX05VTUJFUiBcdDogcmV0dXJuIDEwO1xuXHRcdCAgICBjYXNlIE1vZGUuTU9ERV9BTFBIQV9OVU0gXHQ6IHJldHVybiA5O1xuXHRcdCAgICBjYXNlIE1vZGUuTU9ERV84QklUX0JZVEVcdDogcmV0dXJuIDg7XG5cdFx0ICAgIGNhc2UgTW9kZS5NT0RFX0tBTkpJICBcdDogcmV0dXJuIDg7XG5cdFx0ICAgIGRlZmF1bHQgOlxuXHRcdFx0ICAgIHRocm93IG5ldyBFcnJvcihcIm1vZGU6XCIgKyBtb2RlKTtcblx0XHQgICAgfVxuXG5cdCAgICB9IGVsc2UgaWYgKHR5cGUgPCAyNykge1xuXG5cdFx0ICAgIC8vIDEwIC0gMjZcblxuXHRcdCAgICBzd2l0Y2gobW9kZSkge1xuXHRcdCAgICBjYXNlIE1vZGUuTU9ERV9OVU1CRVIgXHQ6IHJldHVybiAxMjtcblx0XHQgICAgY2FzZSBNb2RlLk1PREVfQUxQSEFfTlVNIFx0OiByZXR1cm4gMTE7XG5cdFx0ICAgIGNhc2UgTW9kZS5NT0RFXzhCSVRfQllURVx0OiByZXR1cm4gMTY7XG5cdFx0ICAgIGNhc2UgTW9kZS5NT0RFX0tBTkpJICBcdDogcmV0dXJuIDEwO1xuXHRcdCAgICBkZWZhdWx0IDpcblx0XHRcdCAgICB0aHJvdyBuZXcgRXJyb3IoXCJtb2RlOlwiICsgbW9kZSk7XG5cdFx0ICAgIH1cblxuXHQgICAgfSBlbHNlIGlmICh0eXBlIDwgNDEpIHtcblxuXHRcdCAgICAvLyAyNyAtIDQwXG5cblx0XHQgICAgc3dpdGNoKG1vZGUpIHtcblx0XHQgICAgY2FzZSBNb2RlLk1PREVfTlVNQkVSIFx0OiByZXR1cm4gMTQ7XG5cdFx0ICAgIGNhc2UgTW9kZS5NT0RFX0FMUEhBX05VTVx0OiByZXR1cm4gMTM7XG5cdFx0ICAgIGNhc2UgTW9kZS5NT0RFXzhCSVRfQllURVx0OiByZXR1cm4gMTY7XG5cdFx0ICAgIGNhc2UgTW9kZS5NT0RFX0tBTkpJICBcdDogcmV0dXJuIDEyO1xuXHRcdCAgICBkZWZhdWx0IDpcblx0XHRcdCAgICB0aHJvdyBuZXcgRXJyb3IoXCJtb2RlOlwiICsgbW9kZSk7XG5cdFx0ICAgIH1cblxuXHQgICAgfSBlbHNlIHtcblx0XHQgICAgdGhyb3cgbmV3IEVycm9yKFwidHlwZTpcIiArIHR5cGUpO1xuXHQgICAgfVxuICAgIH0sXG5cbiAgICBnZXRMb3N0UG9pbnQgOiBmdW5jdGlvbihxckNvZGUpIHtcblx0ICAgIFxuXHQgICAgdmFyIG1vZHVsZUNvdW50ID0gcXJDb2RlLmdldE1vZHVsZUNvdW50KCk7XG5cdCAgICBcblx0ICAgIHZhciBsb3N0UG9pbnQgPSAwO1xuXHQgICAgXG5cdCAgICAvLyBMRVZFTDFcblx0ICAgIFxuXHQgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdysrKSB7XG5cblx0XHQgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQ7IGNvbCsrKSB7XG5cblx0XHRcdCAgICB2YXIgc2FtZUNvdW50ID0gMDtcblx0XHRcdCAgICB2YXIgZGFyayA9IHFyQ29kZS5pc0Rhcmsocm93LCBjb2wpO1xuXG5cdFx0XHRcdGZvciAodmFyIHIgPSAtMTsgciA8PSAxOyByKyspIHtcblxuXHRcdFx0XHQgICAgaWYgKHJvdyArIHIgPCAwIHx8IG1vZHVsZUNvdW50IDw9IHJvdyArIHIpIHtcblx0XHRcdFx0XHQgICAgY29udGludWU7XG5cdFx0XHRcdCAgICB9XG5cblx0XHRcdFx0ICAgIGZvciAodmFyIGMgPSAtMTsgYyA8PSAxOyBjKyspIHtcblxuXHRcdFx0XHRcdCAgICBpZiAoY29sICsgYyA8IDAgfHwgbW9kdWxlQ291bnQgPD0gY29sICsgYykge1xuXHRcdFx0XHRcdFx0ICAgIGNvbnRpbnVlO1xuXHRcdFx0XHRcdCAgICB9XG5cblx0XHRcdFx0XHQgICAgaWYgKHIgPT0gMCAmJiBjID09IDApIHtcblx0XHRcdFx0XHRcdCAgICBjb250aW51ZTtcblx0XHRcdFx0XHQgICAgfVxuXG5cdFx0XHRcdFx0ICAgIGlmIChkYXJrID09IHFyQ29kZS5pc0Rhcmsocm93ICsgciwgY29sICsgYykgKSB7XG5cdFx0XHRcdFx0XHQgICAgc2FtZUNvdW50Kys7XG5cdFx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIH1cblx0XHRcdCAgICB9XG5cblx0XHRcdCAgICBpZiAoc2FtZUNvdW50ID4gNSkge1xuXHRcdFx0XHQgICAgbG9zdFBvaW50ICs9ICgzICsgc2FtZUNvdW50IC0gNSk7XG5cdFx0XHQgICAgfVxuXHRcdCAgICB9XG5cdCAgICB9XG5cblx0ICAgIC8vIExFVkVMMlxuXG5cdCAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudCAtIDE7IHJvdysrKSB7XG5cdFx0ICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50IC0gMTsgY29sKyspIHtcblx0XHRcdCAgICB2YXIgY291bnQgPSAwO1xuXHRcdFx0ICAgIGlmIChxckNvZGUuaXNEYXJrKHJvdywgICAgIGNvbCAgICApICkgY291bnQrKztcblx0XHRcdCAgICBpZiAocXJDb2RlLmlzRGFyayhyb3cgKyAxLCBjb2wgICAgKSApIGNvdW50Kys7XG5cdFx0XHQgICAgaWYgKHFyQ29kZS5pc0Rhcmsocm93LCAgICAgY29sICsgMSkgKSBjb3VudCsrO1xuXHRcdFx0ICAgIGlmIChxckNvZGUuaXNEYXJrKHJvdyArIDEsIGNvbCArIDEpICkgY291bnQrKztcblx0XHRcdCAgICBpZiAoY291bnQgPT0gMCB8fCBjb3VudCA9PSA0KSB7XG5cdFx0XHRcdCAgICBsb3N0UG9pbnQgKz0gMztcblx0XHRcdCAgICB9XG5cdFx0ICAgIH1cblx0ICAgIH1cblxuXHQgICAgLy8gTEVWRUwzXG5cblx0ICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50OyByb3crKykge1xuXHRcdCAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudCAtIDY7IGNvbCsrKSB7XG5cdFx0XHQgICAgaWYgKHFyQ29kZS5pc0Rhcmsocm93LCBjb2wpXG5cdFx0XHRcdFx0ICAgICYmICFxckNvZGUuaXNEYXJrKHJvdywgY29sICsgMSlcblx0XHRcdFx0XHQgICAgJiYgIHFyQ29kZS5pc0Rhcmsocm93LCBjb2wgKyAyKVxuXHRcdFx0XHRcdCAgICAmJiAgcXJDb2RlLmlzRGFyayhyb3csIGNvbCArIDMpXG5cdFx0XHRcdFx0ICAgICYmICBxckNvZGUuaXNEYXJrKHJvdywgY29sICsgNClcblx0XHRcdFx0XHQgICAgJiYgIXFyQ29kZS5pc0Rhcmsocm93LCBjb2wgKyA1KVxuXHRcdFx0XHRcdCAgICAmJiAgcXJDb2RlLmlzRGFyayhyb3csIGNvbCArIDYpICkge1xuXHRcdFx0XHQgICAgbG9zdFBvaW50ICs9IDQwO1xuXHRcdFx0ICAgIH1cblx0XHQgICAgfVxuXHQgICAgfVxuXG5cdCAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sKyspIHtcblx0XHQgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQgLSA2OyByb3crKykge1xuXHRcdFx0ICAgIGlmIChxckNvZGUuaXNEYXJrKHJvdywgY29sKVxuXHRcdFx0XHRcdCAgICAmJiAhcXJDb2RlLmlzRGFyayhyb3cgKyAxLCBjb2wpXG5cdFx0XHRcdFx0ICAgICYmICBxckNvZGUuaXNEYXJrKHJvdyArIDIsIGNvbClcblx0XHRcdFx0XHQgICAgJiYgIHFyQ29kZS5pc0Rhcmsocm93ICsgMywgY29sKVxuXHRcdFx0XHRcdCAgICAmJiAgcXJDb2RlLmlzRGFyayhyb3cgKyA0LCBjb2wpXG5cdFx0XHRcdFx0ICAgICYmICFxckNvZGUuaXNEYXJrKHJvdyArIDUsIGNvbClcblx0XHRcdFx0XHQgICAgJiYgIHFyQ29kZS5pc0Rhcmsocm93ICsgNiwgY29sKSApIHtcblx0XHRcdFx0ICAgIGxvc3RQb2ludCArPSA0MDtcblx0XHRcdCAgICB9XG5cdFx0ICAgIH1cblx0ICAgIH1cblxuXHQgICAgLy8gTEVWRUw0XG5cdCAgICBcblx0ICAgIHZhciBkYXJrQ291bnQgPSAwO1xuXG5cdCAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sKyspIHtcblx0XHQgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdysrKSB7XG5cdFx0XHQgICAgaWYgKHFyQ29kZS5pc0Rhcmsocm93LCBjb2wpICkge1xuXHRcdFx0XHQgICAgZGFya0NvdW50Kys7XG5cdFx0XHQgICAgfVxuXHRcdCAgICB9XG5cdCAgICB9XG5cdCAgICBcblx0ICAgIHZhciByYXRpbyA9IE1hdGguYWJzKDEwMCAqIGRhcmtDb3VudCAvIG1vZHVsZUNvdW50IC8gbW9kdWxlQ291bnQgLSA1MCkgLyA1O1xuXHQgICAgbG9zdFBvaW50ICs9IHJhdGlvICogMTA7XG5cblx0ICAgIHJldHVybiBsb3N0UG9pbnQ7XHRcdFxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUVJVdGlsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==