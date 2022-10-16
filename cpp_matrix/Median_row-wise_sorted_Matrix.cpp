//Median in a row-wise sorted Matrix
#include <bits/stdc++.h>
using namespace std;


class Solution{   
public:
    int check(vector<vector<int>> &matrix,int m)
    {   int c=0;
        for(int i=0;i<matrix.size();i++)
        {
            int p=upper_bound(matrix[i].begin(),matrix[i].end(),m)-matrix[i].begin();
            c+=p;
        }
        return c;
    }
    int median(vector<vector<int>> &matrix, int r, int c){
          int l=1,r1=2000;
          while(l<=r1)
          {
              int mid=(r1+l)/2;
              int p=check(matrix,mid);
              if(p<=(r*c)/2)
              l=mid+1;
              else
              r1=mid-1;
          }
          return l;
    }
};


int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int r, c;
        cin>>r>>c;
        vector<vector<int>> matrix(r, vector<int>(c));
        for(int i = 0; i < r; ++i)
            for(int j = 0;j < c; ++j)
                cin>>matrix[i][j];
        Solution obj;
        cout<<obj.median(matrix, r, c)<<endl;        
    }
    return 0;
}
