<script>

// Javascript program to multiply
// two square matrices.

const N = 4;

// This function multiplies
// mat1[][] and mat2[][], and
// stores the result in res[][]
function multiply(mat1, mat2, res)
{
	let i, j, k;
	for (i = 0; i < N; i++) {
		for (j = 0; j < N; j++) {
			res[i][j] = 0;
			for (k = 0; k < N; k++)
				res[i][j] += mat1[i][k] * mat2[k][j];
		}
	}
}

// Driver Code
	let i, j;
	
	// To store result
	let res = new Array(N);
	for (let k = 0; k < N; k++)
		res[k] = new Array(N);
		
	let mat1 = [ [ 1, 1, 1, 1 ],
					[ 2, 2, 2, 2 ],
					[ 3, 3, 3, 3 ],
					[ 4, 4, 4, 4 ] ];

	let mat2 = [ [ 1, 1, 1, 1 ],
					[ 2, 2, 2, 2 ],
					[ 3, 3, 3, 3 ],
					[ 4, 4, 4, 4 ] ];

	multiply(mat1, mat2, res);

	document.write("Result matrix is <br>");
	for (i = 0; i < N; i++) {
		for (j = 0; j < N; j++)
			document.write(res[i][j] + " ");
		document.write("<br>");
	}

</script>
