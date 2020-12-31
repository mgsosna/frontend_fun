import pandas as pd
from typing import List
import statsmodels.formula.api as smf
from flask import Flask, render_template, jsonify


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("layouts/index.html")

@app.route("/train")
def train(data: List[dict]):
    df = pd.DataFrame(data)
    mod = smf.ols('y ~ x', data=df).fit()
    return jsonify(mod.params.to_dict())
