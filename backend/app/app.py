import json
from flask import Flask,request,make_response,jsonify,session
from flask_cors import CORS
from cipher import hash
from datetime import timedelta
import config
from db.models import User,Thread,ThreadGroup,UserGroup,Response
from db.database import db,init_db
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('config.Config')
init_db(app)
CORS(app)

@app.route('/user_register', methods=['POST'])
def user_register():
  user = request.get_json()
  if request.method == 'POST':
    user_info = User(
      user_name = user['name'],
      email = user['email'],
      password = hash(user['password'])
    )
    db.session.add(user_info)
    db.session.commit()
  
@app.route("/login",methods=["GET","POST"])
def login():
    user = request.get_json()
    user_info = db.session.query(User).filter(User.name == user["name"],
                                User.password == hash(user["password"]))
    if user_info == None:
        return False
    else:
        return user_info

@app.route("/user",methods=["GET","POST"])
def profile():
    user_id = request.get_json()["id"]
    user_data = db.get_or_404(User,user_id)
    user_blog = db.session.query(Thread).filter(Thread.user_id == user_id)
    return make_response(jsonify({"user_info":user_data,"blog_info":user_blog}))

@app.route("/blogcreate",methods=["GET","POST"])
def create():
    blog_info = request.get_json()
    blog_info["sub_tag"] = ",".join(blog_info["sub_tag"])
    db.session.add(blog_info)

@app.route("/open_or_close",methods=["GET","POST"])
def open():
    blog_data = request.get_json()
    blog_info = db.session.query(Thread).filter(Thread.id == blog_data["id"])
    blog_info.open_op = blog_data["option"]
    db.session.commit()
    
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
