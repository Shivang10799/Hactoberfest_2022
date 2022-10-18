//Minimum number of jumps
#include<bits/stdc++.h>
using namespace std;


class Solution{
  public:
    int minJumps(int a[], int n){
      int s=0,m=0;
      int c=0;
      while(m<n-1)
      {   int ma=s;
          for(int i=s;i<=m;i++)
          {
              ma=max(ma,i+a[i]);
          }
          if(m==ma && ma!=n-1)
          return -1;
          s=m+1;
          m=ma;
          
          c++;
      }
      return c;
    }
};


int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n,i,j;
        cin>>n;
        int arr[n];
        for(int i=0; i<n; i++)
            cin>>arr[i];
        Solution obj;
        cout<<obj.minJumps(arr, n)<<endl;
    }
    return 0;
}