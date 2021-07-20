const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numeric = "0123456789";
const special = "@#$%&_%?";

function generatePassword(data) {
  let str = generateReq(data);
//   console.log(str);
  let password = "";
//   console.log(data.length.length);
  for (let i = 0; i < parseInt(data.length); i++)
  {
    //   console.log(i+".  char: "+Math.floor(Math.random() * (str.length - 2)));
    //   console.log(password);
      password += str[Math.floor(Math.random() * (str.length - 2))];
  }

 
  return password;
}

function generateReq(data) {
  let pass = "";
  pass += alpha;
  if (data.special == "on") pass += special;
  if (data.numeric == "on") pass += numeric;
//   console.log(pass);
  return pass;
}

module.exports = { generateReq, generatePassword };