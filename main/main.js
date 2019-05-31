module.exports = function main(inputs, waitTime) {
    // write your code here...
    if(inputs <= 2)
	return 2 + waitTime * 0.25;
    else if(inputs > 2 && inputs < 8)
	return 6 + (inputs -2) * 0.8 + waitTime * 0.25;
    else
	return 6 + (inputs - 2) *0.8 + (inputs - 8) * 1.2 + waitTime * 0.25;

};
