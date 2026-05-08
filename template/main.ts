import path from 'node:path'
import { readFileSync } from 'node:fs'

const get_input = () => {
  let input_file = path.join(__dirname, "example.txt")
  if (process.argv[2]) {
     input_file = path.join(__dirname, process.argv[2])
  }

  return readFileSync(input_file).toString('utf-8').split('\n')
}

function solution_1(rotations: string[]) {
  let position = 50
  let count = 0

  rotations.forEach(rotation => {
    if (!rotation) {
      return;
    }
    const d = rotation[0]
    const v = parseInt(rotation.slice(1))

    if (d === 'L') {
      position = (position - v) % 100;
      if (position < 0) {
        position += 100
      }
    } else {
      position = (position + v) % 100;
    }

    if (position === 0) {
      count++;
    }
  });

  console.log(`solution 1: ${count}`)
}

// answer: 7199
function solution_2(rotations: string[]) {
  let dial = 50
  let counter = 0

  rotations.forEach(rotation => {
    if (!rotation) {
      return;
    }

    const direction = (rotation[0] === 'L' ? -1 : 1)
    const steps = parseInt(rotation.slice(1))
    const loops = Math.floor(steps / 100)
    let remain_steps = steps % 100
    counter += loops

    while(remain_steps-- > 0) {
      dial += direction

      if (dial < 0) {
        dial += 100
      } else if (dial >= 100) {
        dial -= 100
      }

      if (dial === 0) {
        counter++
      }
    }
  });

  console.log(`solution 2: ${counter}`)
}

const input = get_input()
solution_1(input)
solution_2(input)
