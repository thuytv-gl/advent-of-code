input_str = <<-EOL
3   4
4   3
2   5
1   3
3   9
3   3
EOL

def solution(data)
  lines = String(data).lines
  left = []
  right = []
  lines.each do |el|
    s = el.split('   ')
    left.push(s[0])
    right.push(s[1])
  end
end

solution(input_str)
