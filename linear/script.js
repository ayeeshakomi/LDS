let set1 = [3,1,7,9]
let set2 = [2,4,1,9,3]

let set3 = [12,13,6,10]
let set4 = [13,10,16,15]

var sum = 0;

//PROBLEM 1 -- SOLUTION 1
function distinct_Solution1 (s1,s2){
    for(let i=0; i<s1.length; i++){
        if(!s2.includes(s1[i])){
            sum+=s1[i]
        }
    }
    for(let j=0; j<s2.length; j++){
        if(!s1.includes(s2[j])){
            sum+=s2[j]
        }
    }
    return sum
}
console.log(`Prob.1/Solution.1  = ${distinct_Solution1(set1,set2)}`)


//PROBLEM 1 -- SOLUTION 2 (HASH TABLE)
function distinct_Solution2(ar1,ar2) {
    sum = 0  //reinitialize sum to 0
    let obj = {}
    for(let i=0; i<ar1.length; i++){
        obj[ar1[i]] = true
    }
    for(let j = 0; j< ar2.length; j++){
        if (obj[ar2[j]]) {
            sum+=ar2[j]
        }
    }
    return sum
}
console.log(`Prob.1/Solution.2  = ${distinct_Solution2(set1,set2)} - Hash Table`)


console.log('\n')

//PROBLEM 2 -- SOLUTION 1
function overlapping_Solution1 (s3,s4){
    sum = 0;    //reinitialize sum to 0
    for(let i=0; i<s3.length; i++){
        if(s4.includes(s3[i])) {
            sum += (s3[i] * 2)
        }
    }
    return sum
}
console.log(`Prob.2/Solution.1  = ${overlapping_Solution1(set3,set4)}`)


//PROBLEM 2 -- SOLUTION 1
function overlapping_Solution2 (s3a,s4a){
    sum = 0;    //reinitialize sum to 0
    let obj = {}
    let obj2 ={}

    for(let i=0; i<s3a.length; i++){
        obj[s3a[i]] = true
    }
    for(let j = 0; j< s4a.length; j++){
        if (obj[s4a[j]]) {
            sum+=(s4a[j] * 2 )
        }
    }

    return sum
}
console.log(`Prob.2/Solution.2  = ${overlapping_Solution2(set3,set4)} - Hash Table`)