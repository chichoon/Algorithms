list1 = ['hello', 'byebye', 'good']
list1.reverse()
print(list1)
#list1 순서 뒤집힘 (good, byebye, hello)

del(list1[0])
print(list1)
#list1의 첫번째 항목인 good 증발

list1.clear()
print(list1)
#list 전부 증발