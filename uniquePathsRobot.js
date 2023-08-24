function uniquePaths(m, n){
    const dp = [m][n];
    for(let i = 0; i < m ; i++){
        for(let j =0; j<n ; j++){
            if(i ===0 || j === 0 ){
                dp[i][j]=1;
            }else{
                dp[i][j] = dp[i-1][j] + dp[i][j-1] 
            }
        }
    }
    return dp[m - 1][n - 1];
}