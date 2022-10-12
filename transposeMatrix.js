const arr = [
   [1, 1, 1],
   [2, 2, 2],
   [3, 3, 3],
];
const transpose = arr => {
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
         const tmp = arr[i][j];
         arr[i][j] = arr[j][i];
         arr[j][i] = tmp;
      };
   }
}
transpose(arr);
console.log(arr);
