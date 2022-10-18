#include <bits/stdc++.h>
using namespace std;

// Function to rotate the matrix 90 degree clockwise
void rotate90Clockwise(vector<vector<int>>& a,int N)
{
	for (int i = 0; i < N / 2; i++) {
		for (int j = i; j < N - i - 1; j++) {
			int temp = a[i][j];
			a[i][j] = a[N - 1 - j][i];
			a[N - 1 - j][i] = a[N - 1 - i][N - 1 - j];
			a[N - 1 - i][N - 1 - j] = a[j][N - 1 - i];
			a[j][N - 1 - i] = temp;
		}
	}
}

// Function for print matrix
void printMatrix(vector<vector<int>>& a,int N)
{
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++)
			cout << a[i][j] << " ";
		cout << '\n';
	}
}

// Driver code
int main()
{
	int N;
    cin>>N;
    vector<vector<int>> a(N,vector<int>(N));
    for(int i=0;i<N;i++)
    {
        for(int j=0;j<N;j++)
        {
            cin>>a[i][j];
        }
    }
	rotate90Clockwise(a,N);
	printMatrix(a,N);
	return 0;
}
