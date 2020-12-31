import pandas as pd
from typing import List
import statsmodels.formula.api as smf
from flask import Flask, render_template, jsonify, redirect

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", data="Test")

# @app.route("/train")
# def train(data: List[dict]):
#     df = pd.DataFrame(data)
#     mod = smf.ols('y ~ x', data=df).fit()
#     return jsonify(mod.params.to_dict())
#
# @app.route("/test")
# def test():
#     test_dict = {"a": 1, "b": 2}
#     return render_template("index.html", data="hello there!")
#

@app.route("/js_python", methods=['POST'])
def email_process():
    if request.method == 'POST':
        d = {"a": 1, "b": 2}
        return jsonify(d)


if __name__ == "__main__":
    app.run(debug=True)
