class Formatter {
  //add static methods here
  static capitalize(string){
    string.charAt(0).toUpperCase();
    return string
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-']+/g, ' ')
  }

  static titleize(string){
    string.charAt(0).toUpperCase();
    let splitString = string.split(" ");

    let newString = splitString.forEach(word => {
      if(word === "the" || word === "a" || word === "an" || word === "but" || word === "of" || word === "and" || word === "for" || word === "at" || word === "by" || word === "from"){

      } else {
        word.charAt(0).toUpperCase();
      }


    })
    newString.join("")
    return newString
  }
}
