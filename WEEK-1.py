# 1. For a number 7856379, check if the number is palindrome.
num=int(input("enter a number:"))
rev=0
original=num
while num>0:
    remainder=num%10
    rev=rev*10+remainder
    num=num//10

if original==rev:
    print('palindrome')
else:
    print('not palindrome')

# 2.Write a python program to print a downward full pyramid with ‘&’ consisting of 6 rows. 
rows=int(input("Enter no.of rows:"))
for i in range (rows,0,-1):
    print(" "*(rows-i),end="")
    print("& "*i)

# 3. Using the concept of recursion in python, find the nth term in a Fibonacci series. 

def recursion(num):
    if num==1:
        return 0
    elif num==2:
        return 1
    else:
        return recursion(num-1)+recursion(num-2)
num=int(input("Enter nth term:"))
result=recursion(num)
print(result)

#4. Write a python code to implement a calculator that does addition of 5 digit numbers. 
def calculator(num1,num2):
    if(len(str(num1))== 5 and len(str(num2))==5):
        return num1+num2
    else:
        print("numbers must be 5 digits")
        
num1=int(input("Enter num1:"))
num2=int(input("Enter num2:"))
result=calculator(num1,num2)
print(result)

#5.Check if the year 2023 is a leap year with a python code.  
year=int(input('enter a year:'))
if (year%4==0 and year%100!=0) or (year%400==0):
    print("leap year")
else:
    print("not leap year")

