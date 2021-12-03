function switchTheValues(cats) {
    cats.forEach((entry) => {
      let c = Object.values(entry);
      console.log(`${c[0]} has a cat named ${c[2]}, whose breed is ${c[1]}`);
    });
}