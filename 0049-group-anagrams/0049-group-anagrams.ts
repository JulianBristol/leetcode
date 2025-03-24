function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

  //loop through each string in strs and rearrange eat string alphabetically
  for (let i = 0; i < strs.length; i++){
    const stringAlpha = strs[i].split("").sort().join("");
  //if the new string is in the hashmap, add the original string to the hashmap
  if (map.has(stringAlpha)){
    map.set(stringAlpha, [...map.get(stringAlpha),strs[i]]);
  }

  //else, create a new key for the new alphabettical string and append the old string as the key
  else {
    map.set(stringAlpha, [strs[i]]);
  }
  }

  return Array.from(map.values())
};