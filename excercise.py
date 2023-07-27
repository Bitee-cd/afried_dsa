a=10; b=20

def myFunction():
    global a
    a=11
    b=21
a = [1,2,4]
b=[3,5,6]
a.extend(b)
str=['b','a','d']
a.sort()
print(a)

list1=[1,2,3,4]
list2=[5,6,7,8]

# print([i*j for i in list1 for j in list2])
newlist1 =list(map(lambda x:x**2,list1))
print(newlist1)
