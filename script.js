let start = document.getElementById("start")
let od = document.getElementById("od")
let oioe = document.getElementById("oioe")
let dide = document.getElementById("dide")
let nisi = document.getElementById("nisi")
let nese = document.getElementById("nese")
let tifi = document.getElementById("tifi")
let tefe = document.getElementById("tefe")
let sc = document.getElementById("sc")
let sb = document.getElementById("sb")
let sp = document.getElementById("sp")
let cb = document.getElementById("cb")
let cp = document.getElementById("cp")
let bp = document.getElementById("bp")
let finish = document.getElementById("finish")

let array = [start, od, oioe, dide, nisi, nese, tifi, tefe, sc, sb, sp, cb, cp, bp, finish]

let ni = document.getElementById("ni")
let si = document.getElementById("si")
let ne = document.getElementById("ne")
let se = document.getElementById("se")
let ti = document.getElementById("ti")
let te = document.getElementById("te")
let fi = document.getElementById("fi")
let fe = document.getElementById("fe")

let functions = [ni, si, ne, se, ti, te, fi, fe]

let progLetter = document.getElementById("progLetters")
let result = document.getElementById("result")
let prog = document.getElementById("prog")
let parallax = document.getElementById("parallax")
let thename = document.getElementById("thename")
let progImg = document.getElementById("progImg")
let progInstinct = document.getElementById("progInstinct")

function toggleElement(x) {
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function hideAll() {
  for (let i = 0; i < array.length; i++) {
    const x = array[i];
    x.style.opacity = 0;
    setTimeout(() => {
      x.style.display = "none";
    }, 600);
  }
}

function showElement(x) {
  hideAll();
  setTimeout(() => { 
    x.style.display = "flex";
  }, 600);
  setTimeout(() => {
    x.style.opacity = 1;
  }, 700);
}

function hideSpecific() {
  array.push(prog)
  //console.log(array)
  for (let i = 0; i < array.length; i++) {
    const x = array[i];
    x.style.opacity = 0;
    setTimeout(() => {
      x.style.display = "none";
    }, 600);
  }
  array.pop(prog)
  //console.log(array)
}

function showTwoElement(x,y) {
  hideSpecific();
  setTimeout(() => { 
    x.style.display = "flex";
    y.style.display = "flex";
  }, 600);
  setTimeout(() => {
    x.style.opacity = 1;
    y.style.opacity = 1;
  }, 700);
}

let Personality = {
  username: "none",
  mbti: "xxxx",
  o: "xx",
  d: "xx",
  instinct: "xxxx"
}

let test = Personality

let extra = Personality

function addLetter(target, input) {
  if(target.mbti === "xxxx") {target.mbti = input}

  if(input === "ixxj") {target.o = "oi"}
  if(input === "exxp") {target.o = "oe"}
  if(input === "ixxp") {target.d = "di"}
  if(input === "exxj") {target.d = "de"}
  progLetter.innerHTML = target.mbti
  updateImg(target)
}

function addFunction(target, input) {
  if(input === "ni") {target.o = "ni"}
  if(input === "ne") {target.o = "ne"}
  if(input === "si") {target.o = "si"}
  if(input === "se") {target.o = "se"}
  if(input === "ti") {target.d = "ti"}
  if(input === "te") {target.d = "te"}
  if(input === "fi") {target.d = "fi"}
  if(input === "fe") {target.d = "fe"}

  // if oi && di, then sleep first
  if((target.o === "ni"||target.o === "si") && (target.d === "fi"||target.d === "ti")) {target.instinct = "sxxx"}

  // if oe && di, then consume first
  if((target.o === "ne"||target.o === "se") && (target.d === "fi"||target.d === "ti")) {target.instinct = "cxxx"}

  // if oi && de, then blast first
  if((target.o === "ni"||target.o === "si") && (target.d === "fe"||target.d === "te")) {target.instinct = "bxxx"}

  // if oe && de, then play first
  if((target.o === "ne"||target.o === "se") && (target.d === "fe"||target.d === "te")) {target.instinct = "pxxx"}



  if(target.mbti === "ixxj" && input === "ni") {target.mbti = "inxj"}
  if(target.mbti === "ixxj" && input === "si") {target.mbti = "isxj"}
  if(target.mbti === "inxj" && (input === "fi" ||input === "te" )) {target.mbti = "intj"}
  if(target.mbti === "isxj" && (input === "fi" ||input === "te" )) {target.mbti = "istj"}
  if(target.mbti === "inxj" && (input === "fe" ||input === "ti" )) {target.mbti = "infj"}
  if(target.mbti === "isxj" && (input === "fe" ||input === "ti" )) {target.mbti = "isfj"}

  if(target.mbti === "exxp" && input === "ne") {target.mbti = "enxp"}
  if(target.mbti === "exxp" && input === "se") {target.mbti = "esxp"}
  if(target.mbti === "enxp" && (input === "fi" ||input === "te" )) {target.mbti = "enfp"}
  if(target.mbti === "esxp" && (input === "fi" ||input === "te" )) {target.mbti = "esfp"}
  if(target.mbti === "enxp" && (input === "fe" ||input === "ti" )) {target.mbti = "entp"}
  if(target.mbti === "esxp" && (input === "fe" ||input === "ti" )) {target.mbti = "estp"}

  if(target.mbti === "ixxp" && input === "ti") {target.mbti = "ixtp"}
  if(target.mbti === "ixxp" && input === "fi") {target.mbti = "ixfp"}
  if(target.mbti === "ixtp" && (input === "ni" ||input === "se" )) {target.mbti = "istp"}
  if(target.mbti === "ixtp" && (input === "ne" ||input === "si" )) {target.mbti = "intp"}
  if(target.mbti === "ixfp" && (input === "ni" ||input === "se" )) {target.mbti = "isfp"}
  if(target.mbti === "ixfp" && (input === "ne" ||input === "si" )) {target.mbti = "infp"}

  if(target.mbti === "exxj" && input === "te") {target.mbti = "extj"}
  if(target.mbti === "exxj" && input === "fe") {target.mbti = "exfj"}
  if(target.mbti === "extj" && (input === "ni" ||input === "se" )) {target.mbti = "entj"}
  if(target.mbti === "extj" && (input === "ne" ||input === "si" )) {target.mbti = "estj"}
  if(target.mbti === "exfj" && (input === "ni" ||input === "se" )) {target.mbti = "enfj"}
  if(target.mbti === "exfj" && (input === "ne" ||input === "si" )) {target.mbti = "esfj"}

  

  progLetter.innerHTML = target.mbti
  updateImg(target)
}


function whereNow(target, show) {
  //if mbti figured out...
  if(target.o != "xx" && target.d != "xx") {
    //if instinct is figured out...
    console.log(target.instinct)
    if(target.instinct != "scxx" && target.instinct != "csxx" &&  target.instinct != "bsxx" && target.instinct != "sbxx" &&
       target.instinct != "pcxx" && target.instinct != "pcxx" &&  target.instinct != "pbxx" && target.instinct != "bpxx" &&
       target.instinct != "sxxx" && target.instinct != "cxxx" &&  target.instinct != "bxxx" && target.instinct != "pxxx")
    {
      prettyBg(target)
      prog.style.display = "none";
      result.innerHTML = target.mbti + " " + target.instinct
      showElement(finish); 
      addResult(target);
    } 
    // otherwise
    else {
      console.log("[Choosing Destination for ", target.instinct, " ...]")
      progInstinct.innerHTML = target.instinct
      //calculate which instinct to go to
      if(target.instinct === "sxxx" || target.instinct === "pxxx") {showElement(cb)}
      if(target.instinct === "cxxx" || target.instinct === "bxxx") {showElement(sp)}

      if(target.instinct === "scxx" || target.instinct === "csxx") {showElement(bp)}
      if(target.instinct === "sbxx" || target.instinct === "bsxx") {showElement(cp)}
      if(target.instinct === "cpxx" || target.instinct === "pcxx") {showElement(sb)}
      if(target.instinct === "pbxx" || target.instinct === "bpxx") {showElement(sc)}
    }
  }
  else {showElement(show)}
}

function addInstinct(target, input) {
  console.log("[Adding ", input, " ...]")
  if (target.instinct === "sxxx" && input === "c") {target.instinct = "scxx"}
  if (target.instinct === "sxxx" && input === "b") {target.instinct = "sbxx"}

  if (target.instinct === "cxxx" && input === "s") {target.instinct = "csxx"}
  if (target.instinct === "cxxx" && input === "p") {target.instinct = "cpxx"}

  if (target.instinct === "bxxx" && input === "s") {target.instinct = "bsxx"}
  if (target.instinct === "bxxx" && input === "p") {target.instinct = "bpxx"}

  if (target.instinct === "pxxx" && input === "c") {target.instinct = "pcxx"}
  if (target.instinct === "pxxx" && input === "b") {target.instinct = "pbxx"}


  if (target.instinct === "scxx" && input === "b") {target.instinct = "scbp"}
  if (target.instinct === "sbxx" && input === "c") {target.instinct = "sbcp"}
  if (target.instinct === "scxx" && input === "p") {target.instinct = "scpb"}
  if (target.instinct === "sbxx" && input === "p") {target.instinct = "sbpc"}

  if (target.instinct === "csxx" && input === "p") {target.instinct = "cspb"}
  if (target.instinct === "cpxx" && input === "s") {target.instinct = "cpsb"}
  if (target.instinct === "csxx" && input === "b") {target.instinct = "csbp"}
  if (target.instinct === "cpxx" && input === "b") {target.instinct = "cpbs"}

  if (target.instinct === "bsxx" && input === "p") {target.instinct = "bspc"}
  if (target.instinct === "bpxx" && input === "s") {target.instinct = "bpsc"}
  if (target.instinct === "bsxx" && input === "c") {target.instinct = "bscp"}
  if (target.instinct === "bpxx" && input === "c") {target.instinct = "bpcs"}

  if (target.instinct === "pcxx" && input === "b") {target.instinct = "pcbs"}
  if (target.instinct === "pbxx" && input === "c") {target.instinct = "pbcs"}
  if (target.instinct === "pcxx" && input === "s") {target.instinct = "pcsb"}
  if (target.instinct === "pbxx" && input === "s") {target.instinct = "pbsc"}

  progInstinct.innerHTML = target.instinct
  console.log("Result: ", target.instinct)
}



function prettyBg(target) {
  if(target.mbti === "intj"|| target.mbti === "intp"||target.mbti === "entp"||target.mbti === "entj") {
    parallax.classList.add("nt")
  }
  if(target.mbti === "istj"|| target.mbti === "istp"||target.mbti === "estj"||target.mbti === "estp") {
    parallax.classList.add("st")
  }
  if(target.mbti === "enfj"|| target.mbti === "enfp"||target.mbti === "infp"||target.mbti === "infj") {
    parallax.classList.add("nf")
  }
  if(target.mbti === "isfj"|| target.mbti === "isfp"||target.mbti === "esfj"||target.mbti === "esfp") {
    parallax.classList.add("sf")
  }
}

function updateImg(target) {
  //console.log("img/"+target.mbti+".png")
  progImg.src = "img/"+target.mbti+".png"
}

function rndInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function addRandom(target) {
  letters = ["ixxj", "ixxp", "exxp", "exxj"]
  letterO = ["ixxj", "exxp"]
  letterD = ["ixxp","exxj"]
  functions = ["ni", "ne","si","se", "fe","fi","ti","te"]
  functionsO = ["ni", "ne","si","se"]
  functionsD = ["fe","fi","ti","te"]

  rndL = rndInt(0,3)

  extra.username = "extra"
  extra.mbti = "intj"
  extra.o = "ni"
  extra.d = "fi"
  extra.instinct = "SCBP"
}



function save(target) {
  // let targetSerialized = JSON.stringify(target)

  // localStorage.setItem(target.username, targetSerialized)

  // let targetDeserialized = JSON.parse(localStorage.getItem(target.username))

  // console.log(targetDeserialized)
  // document.getElementById("hi").innerHTML = targetDeserialized.username
}

data = []

const addResult = (target)=> {
  let onePoint = {
    id: Date.now(),
    username: thename.value,
    mbti: target.mbti,
    o: target.o,
    d: target.d
  }
  data.push(onePoint)
  //console.log(data)

  localStorage.getItem("List", JSON.stringify(data))
}


//console.log(JSON.parse(localStorage.getItem("List")))