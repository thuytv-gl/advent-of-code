import path from 'node:path'
import { readFileSync } from 'node:fs'

const get_input = () => {
  let input_file = path.join(__dirname, "example.txt")
  if (process.argv[2]) {
     input_file = path.join(__dirname, process.argv[2])
  }

  return readFileSync(input_file).toString('utf-8').split(',').map(i => i.split('-').map(Number))
}

function is_mirrored_number(num: string) {
  if (num.length % 2 !== 0) {
    return false
  }
  return num.slice(0, num.length / 2) === num.slice(num.length / 2)
}

function solution_1(ids_ranges: number[][]) {
  let result = 0
  ids_ranges.forEach(([id_first, id_last]) => {
    for (let i = id_first!; i <= id_last!; i++) {
      if (is_mirrored_number(i.toString())) {
        result += i
      }
    }
  });
  console.log('solution 1:', result)
}

function is_repetive(num: string) {
  let seq = num[0]!
  let len = 1
  while (num[len] && num[len] !== seq[0]) {
    seq += num[len++]
  }
  if (len === num.length) {
    return false
  }

  let i = seq.length

  while(seq[i % seq.length] === num[i]) {
    i++
  }

  return i == num.length && i % len == 0
}

function solution_2(ids_ranges: number[][]) {
  let result = 0
  ids_ranges.forEach(([id_first, id_last]) => {
    for (let i = id_first!; i <= id_last!; i++) {
      if (is_repetive(i.toString())) {
        result += i
      }
    }
  });
  console.log('solution 2:', result)
}

const input = get_input()
solution_1(input)
solution_2(input)
