function areAlmostEqual(s1: string, s2: string): boolean {
    /* look through both strings and compare indice by indice
add the place for index 1 and two
if there are more than 2 errors, return false;
swap index 1 with two
check if index1 = index in other and check for 2

if match, return true
 */
 let index1 = -1, index2 = -1, errors = 0;

 for (let i = 0; i < s1.length; i++){
    if (s1[i] !== s2[i]){
        errors++;
        if (errors > 2){
            return false;
        }
        if(index1 < 0){
            index1 = i;
        } else{
            index2 = i
        }
    }
 }
 if(s1[index1] === s2[index2] && s1[index2] === s2[index1]){
    return true;
 } else{
    return false;
 }
};