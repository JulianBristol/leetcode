function hIndex(citations: number[]): number {
    citations.sort((a,b) => a-b);
    
    let ans = 0;

    for (let i = 0; i < citations.length; i++){
        let numCitations = citations.length - i;
        if (citations[i] <= numCitations){
            ans = Math.max(ans, citations[i])
        } else {
            ans = Math.max(ans, numCitations)
        }
    }

    return ans
};