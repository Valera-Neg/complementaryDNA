var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

console.log(DNAStrand("ATTGC")) //=> TAACG
console.log(DNAStrand("GTAT")) //=> CATA
console.log(DNAStrand("AAAA")) //=> TTTT