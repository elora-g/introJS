
function maximum(a,b){
	if(a > b){
		return a;
	}
	else{
		return b;
	}
}

console.log(maximum(1,100));

var phrases =
[
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "Aenean commodo ligula eget dolor. Aenean massa.",
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "Nulla consequat massa quis enim.",
    "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    "Nullam dictum felis eu pede mollis pretium.",
    "Integer tincidunt. Cras dapibus.",
    "Vivamus elementum semper nisi.",
    "Aenean vulputate eleifend tellus.",
    "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim."
];


function biggestPhrase(phrases){
	var max = phrases[0].length;
	var indexMax;
	for(var i=1; i < phrases.length; i++){
		if (phrases[i].length > max){
			max = phrases[i].length;
			indexMax = i;
		};
	};
	return indexMax;
}

console.log(phrases[biggestPhrase(phrases)]);

var comparePhrases = function(a,b){ // COMPARATEUR
	if(a.length < b.length){ 
		return -1;
	}
	if(a.length > b.length){ 
		return 1;
	}
	return 0; 
};

phrases.sort(comparePhrases);
phrases.reverse(comparePhrases);
var longestPhrase = console.log(phrases[0]);