const countDown = (n) => {
  //   for (let i = n; i > 0; i--) {
  //     console.log(i);
  //   }
  //   console.log("All Done!");

  if (n <= 0) {
    console.log("All Done!");
    return;
  }
  console.log(n);
  countDown(n - 1);
};

countDown(10);
