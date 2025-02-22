package main

import (
    "fmt"
		"os"
		"strings"
)

func Solution1(file string) {
	data, _ := os.ReadFile(file)
	content := strings.Split(string(data), "\n")
	var chars [][]rune
	for _, line := range content {
		runes := []rune(line)
		if len(runes) > 0 {
			chars = append(chars, []rune(line))
		}
	}
	H := len(chars)
	W := len(chars[0])

	inside := func(row, col int) bool {
		return row >= 0 && col >= 0 && row < H && col < W
	}

	XMAS := []rune("XMAS")
	XmasCount := 0
	for row := 0; row < H; row++ {
		for col := 0; col < W; col++ {

			if chars[row][col] == 'X' {
				for drow := -1; drow <= 1; drow++ {
					for dcol := -1; dcol <= 1; dcol++ {
						if drow == 0 && dcol == 0 {
							continue
						}

						XmasCount++
						for i := 0; i < len(XMAS); i++ {
							r2 := row + drow * i
							c2 := col + dcol * i
							if !(inside(r2, c2) && chars[r2][c2] == XMAS[i]) {
								XmasCount--
								break
							}
						}

					}
				}
			}

		}
	}

	fmt.Println(XmasCount)
}

func Solution2(file string) {
	data, _ := os.ReadFile(file)
	content := strings.Split(string(data), "\n")
	var chars [][]rune
	for _, line := range content {
		runes := []rune(line)
		if len(runes) > 0 {
			chars = append(chars, []rune(line))
		}
	}
	H := len(chars)
	W := len(chars[0])

	Points := [][]int {{-1, -1}, {-1, 1}, {1, 1}, {1, -1}}

	XmasCount := 0
	for row := 1; row < H - 1; row++ {
		for col := 1; col < W - 1; col++ {

			if chars[row][col] == 'A' {
				var xmas []rune
				for _, p := range Points {
					xmas = append(xmas, chars[row + p[0]][col + p[1]])
				}
				smas := string(xmas)
				if smas == "SMMS" || smas == "MSSM" || smas == "SSMM" || smas == "MMSS" {
					XmasCount++
				}
			}
		}
	}

	fmt.Println(XmasCount)
}

func main() {
	Solution1("04/example.txt")
	Solution1("04/input.txt")
	Solution2("04/example.txt")
	Solution2("04/input.txt")
}
