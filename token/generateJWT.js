const jwt = require('jsonwebtoken');

const secret =
  '50ca2810c31dfa4e18ec915ff950c184a4b74f196f5353b496ea299b8fabee56e1b37415cb50f7c87373b1956ffc5794348d7630b4609f71bc9be3f691c190a7.c62e7d5e4603585a';

const issuer = 'demo.io';

const generateJWT = () => {
  return jwt.sign(
    {
      spreadUserId: '62cd49034af7a32bdb552f32',
      appKey: 'ZgBwSLasqy4TY56Y6NxOI40VMTgz43EYep6xxzmpoqc',
    },
    secret,
    {
      issuer: issuer,
      expiresIn: 60 * 60,
    }
  );
};

console.log(generateJWT());

const verifiedToken = jwt.verify(
  generateJWT(),
  secret,
  function (err, decoded) {
    console.log('decoded', JSON.stringify(decoded, null, 2));
  }
);
