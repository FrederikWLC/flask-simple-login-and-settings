from os import getenv, path
from dotenv import load_dotenv

basedir = path.abspath(path.dirname(__file__))

load_dotenv(path.join(basedir, '.env'))


class Config(object):
    SECRET_KEY = getenv("SECRET_KEY") or "you-will-never-guess"
    SQLALCHEMY_DATABASE_URI = "sqlite:///" + path.join(basedir, "app.db")
    LOG_TO_STDOUT = getenv('LOG_TO_STDOUT')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    PERMANENT_SESSION_LIFETIME = True
    AVAILABLE_SKILLS = ["Marketing", "Writing", "Photography",
                        "Videography", "Photo editing", "Film editing",
                        "Music producer", "Accountant", "Salesman",
                        "(X) designer", "Lawyer", "Investor", "Software", "Acting"]
    AVAILABLE_GENDERS = ["Male", "Female", "Other"]
