from flask import Flask, render_template, redirect, url_for, flash

from forms import LoginForm, SignupForm
import user

app = Flask(__name__)
app.config["SECRET_KEY"] = "SECRET_KEY"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/blogs")
def blogs():
    return render_template("blogs.html")


@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")


@app.route("/login", methods=["POST", "GET"])
def login():
    login_form = LoginForm()
    username = login_form.username.data
    password = login_form.password.data

    if login_form.validate_on_submit():
        if username == user.default_username\
                and password == user.default_password:
            flash(f"Access Granted!! Welcome {username}.", "success")
            return redirect(url_for("login"))

    return render_template("login.html", login_form=login_form)


@app.route("/signup")
def signup():
    signup_form = SignupForm()
    return render_template("signup.html", signup_form=signup_form)


# The error route
@app.errorhandler(404)
def error_404(e):
    return render_template("error/error404.html"), 404
