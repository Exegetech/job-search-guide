var Crypto = function(string) {
    this.string = string;
};
 
Crypto.prototype.normalizePlaintext = function(){
    this.string = this.string.replace(/[,!%?#$^&\s.]/gi,'').toLowerCase();
    return this.string;
};
 
Crypto.prototype.size = function(){
    return Math.ceil(Math.sqrt(this.string.length));
};
 
Crypto.prototype.plaintextSegments = function() {
    var normalized = this.normalizePlaintext().split('');
    var length = this.size();
 
    for (var i = 0; i < normalized.length; i++) {
        if (i % length === (length - 1) && i < normalized.length -1) {
            normalized[i] += " ay";
        }
    }
 
    return normalized.join('').split(' ay');
};
 
Crypto.prototype.ciphertext = function(){
 
    var squared = this.plaintextSegments();
    var length = squared[0].length;
    var result = '';
    var j = 0;
 
    function cipher(){
        while (j < length) {
            for (var i = 0; i < length; i++) { 
                if (squared[i] !== undefined) {
                    if (squared[i][j] !== undefined){
 
                        result += squared[i][j];
                    }
                }
            }
            j = j + 1;
            cipher();
        }
    }
    cipher();
 
    return result;
};
 
Crypto.prototype.normalizeCiphertext = function(){
    var ciphered = this.ciphertext().split('');
    var length = Math.ceil(Math.sqrt(ciphered.length));
 
    for (var i = 0; i < ciphered.length; i++) {
        if (i % length === (length - 1) && i < ciphered.length - 1) {
            ciphered[i] += " ";
        }
    }
 
    return ciphered.join('');
};