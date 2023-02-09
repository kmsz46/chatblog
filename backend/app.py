import json
from flask import Flask,request,make_response,jsonify,session
from flask_cors import CORS
from datetime import timedelta
 
app = Flask(__name__)
CORS(app)
app.secret_key = 'user'
app.permanent_session_lifetime = timedelta(minutes=60) 

USER_PATH = "user/user.json"
BLOG_PATH = "pages/access.json"

@app.route("/login",methods=["GET","POST"])
def login():
    user = request.get_json()
    user_data = json.load(open(USER_PATH, 'r'))
    for u in user_data:
        if u["password"] == user["password"]:
            session.permanent = True 
        session["user"] = user
            

@app.route("/user")
def profile():
    user_data = json.load(open(USER_PATH, 'r'))
    blog_data = json.load(open(BLOG_PATH, 'r'))
    user_name = user_data["name"]
    user_blog = [blog for blog in blog_data if blog["article_user"]==user_name]
    return make_response(jsonify({"user_info":user_data,"blog_info":user_blog}))

@app.route("/blogcreate",methods=["GET","POST"])
def create():
    blog_info = request.get_json()
    blog_list = json.load(open(BLOG_PATH, 'r'))
    file_path = f"pages/{len(blog_list)}.md"
    with open(file_path,"w",encoding="UTF-8") as f:
        f.write(blog_info["contents"])
    blog_info["article"] = file_path
    blog_list.append(blog_info)
    with open(file_path, mode = "wt", encoding="utf-8") as f:
        json.dump(blog_list, f, ensure_ascii = False) 

@app.route("/blog_delate",methods=["GET","POST"])
def delate():
    blog_title = request.get_json()
    blog_list = json.load(open(BLOG_PATH, 'r'))
    for blog in blog_list:
        if blog_list["title"]==blog_title:
            blog_list.remove(blog)
            break

@app.route("/display")
def display():
    user_data = json.load(open(USER_PATH, 'r'))
    session.permanent = True 
    session["user"] = user_data
    blog_data = json.load(open(BLOG_PATH, 'r'))
    blog_title = []
    for blog in blog_data:
        if blog["rule"] and set(blog["group"]) & set(user_data["group"])== set(blog["group"]):
            blog_title.append(blog_data["title"])
        elif blog["rule"]==False and set(blog["group"]) & set(user_data["group"])!=set():
            blog_title.append(blog_data["title"])
    return make_response(jsonify({"blog_title":blog_title}))

@app.route("/contents",methods=["GET","POST"])
def contents():
    blog_title = request.get_json()
    blog_list = json.load(open(BLOG_PATH, 'r'))
    for blog in blog_list:
        if blog["title"] == blog_title:
            return make_response(jsonify({"blog":blog}))
    
if __name__ == "__main__":
    app.run(debug=True)