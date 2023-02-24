import json
from flask import Flask,request,make_response,jsonify,session
from flask_cors import CORS
from datetime import timedelta
import secrets

app = Flask(__name__)
CORS(app)
app.secret_key = 'user'
app.permanent_session_lifetime = timedelta(minutes=60) 

USER_PATH = "user/user.json"
BLOG_PATH = "pages/access.json"

@app.route("/login",methods=["GET","POST"])
def login():
    user = request.get_json()
    user_data = json.load(open(USER_PATH, 'r',encoding="UTF-8"))
    for u in user_data:
        if u["password"] == user["password"]:
            session.permanent = True 
        session["user"] = user
            

@app.route("/user",methods=["GET","POST"])
def profile():
    user_data = json.load(open(USER_PATH, 'r',encoding="UTF-8"))["ganbon"]
    blog_data = json.load(open(BLOG_PATH, 'r',encoding="UTF-8"))
    user_name = user_data["name"]
    user_blog = [title for title,blog in blog_data.items() if blog["article_user"]==user_name]
    return make_response(jsonify({"user_info":user_data,"blog_info":user_blog}))

@app.route("/blogcreate",methods=["GET","POST"])
def create():
    blog_info = request.get_json()
    blog_list = json.load(open(BLOG_PATH, 'r'))
    file_path = f"pages/{len(blog_list)}.md"
    with open(file_path,"w",encoding="UTF-8") as f:
        f.write(blog_info["contents"])
    blog_info["article_path"] = file_path
    blog_info["id"] = secrets.token_urlsafe(nbytes=16)
    blog_list[blog_info["title"]] = blog_info
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

@app.route("/display",methods=["GET","POST"])
def display():
    user_data = json.load(open(USER_PATH, 'r',encoding="UTF-8"))["ganbon"]
    session.permanent = True 
    session["user"] = user_data
    blog_data = json.load(open(BLOG_PATH, 'r',encoding="UTF-8"))
    blog_list = []
    for id,blog in blog_data.items():
        if blog["rule"] and set(blog["group"]) & set(user_data["group"])== set(blog["group"]):
            blog_list.append({"id":id,"title":blog["title"]})
        elif blog["rule"]==False and set(blog["group"]) & set(user_data["group"])!=set():
            blog_list.append({"id":id,"title":blog["title"]})
    return make_response(jsonify({"blog_list":blog_list}))

@app.route("/contents",methods=["GET","POST"])
def contents():
    blog_id = request.get_json()["id"]
    print(blog_id)
    blog_list = json.load(open(BLOG_PATH, 'r',encoding="UTF-8"))
    target = blog_list[blog_id]
    target.pop("article_path")
    target.pop("rule")
    return make_response(jsonify({"blog":target}))
    
if __name__ == "__main__":
    app.run(debug=True)