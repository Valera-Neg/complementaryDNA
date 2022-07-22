function DNAStrand(dna){
  let restDNA = [];
  for (i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      restDNA.push("T")
    }
    else if (dna[i] === "T") {
      restDNA.push("A")
    }
    else if (dna[i] === "G") {
      restDNA.push("C")
    }
    else if (dna[i] === "C") {
      restDNA.push("G")
    }   
  }
  return restDNA.join("");
}



console.log(DNAStrand("ATTGC")) //=> TAACG
console.log(DNAStrand("GTAT")) //=> CATA
console.log(DNAStrand("AAAA")) //=> TTTT