const test    = require('tape')
const getName = require('./')

test('glsl-shader-name: SHADER_NAME', t => {
  t.equal('hello world', getName('#define SHADER_NAME hello world'))
  t.equal('hello world', getName('#define SHADER_NAME     hello world     '))
  t.end()
})

test('glsl-shader-name: SHADER_NAME_B64', t => {
  t.equal('hello world', getName('#define SHADER_NAME_B64 aGVsbG8gd29ybGQ='))
  t.equal('hello world', getName('#define SHADER_NAME_B64     aGVsbG8gd29ybGQ=     '))
  t.end()
})
