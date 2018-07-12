export const stars = (n) => {
  var aa = [];
  for (var i =1;i<=n;i++) {
    var bb = '';
    for (var ii =1;ii<=n;ii++) {
      bb += '*';
    }
    aa.push(bb);
  }
  return aa;
}
