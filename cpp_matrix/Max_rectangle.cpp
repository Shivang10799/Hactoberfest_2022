/*Given a binary matrix M of size n X m. Find the
 maximum area of a rectangle formed only of 1s in 
 the given matrix.*/
#include <bits/stdc++.h>
using namespace std;
#define MAX 1000



class Solution{
  public:
    int minareahistogram(int a[],int m)
    {
        int pres[m],nexts[m];
        stack<pair<int,int>> s,q;
        
        for(int i=0;i<m;i++)
        {   
            while(s.size()!=0 && s.top().first>=a[i])
            {
                s.pop();
            }
            if(s.size()==0)
            pres[i]=0;
            else
            pres[i]=s.top().second;
            s.push({a[i],i+1});
        }
        for(int i=m-1;i>=0;i--)
        {
            while(!q.empty() && q.top().first>=a[i])
            {
                q.pop();
            }
            if(q.empty())
            nexts[i]=m+1;
            else
            nexts[i]=q.top().second;
            q.push({a[i],i+1});
        }
        int ma=0;
        for(int i=0;i<m;i++)
        {   int p=nexts[i]-pres[i]-1;
            ma=max(ma,a[i]*p);
        }
        return ma;
    }
    int maxArea(int m[MAX][MAX], int n, int m1) {
        int a[m1]={0},ma=0;
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<m1;j++)
            {
                if(m[i][j]==0)
                a[j]=m[i][j];
                else
                a[j]+=m[i][j];
            }
            ma=max(ma,minareahistogram(a,m1));
        }
        return ma;
    }
    
};


int main() {
    int T;
    cin >> T;

    int M[MAX][MAX];

    while (T--) {
        int n, m;
        cin >> n >> m;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                cin >> M[i][j];
            }
        }
        Solution obj;
        cout << obj.maxArea(M, n, m) << endl;
    }
}