import hashlib

def hash(password):
    return hashlib.sha512(password.encode()).hexdigest()

if __name__=="__main__":
    text = "test"
    hashed = hash(text)
    print(hashed)
    a = input()
    if hash(a) == hashed:
        print("ok")